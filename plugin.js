import glob from "fast-glob"
import negotiate from "@fastify/accept-negotiator"
import {createReadStream} from 'node:fs'
import greyMatter from 'gray-matter-from-file'

const cwd = import.meta.dirname

export default async function (fastify, _) {
    fastify.register(import('@fastify/static'), {
        root: import.meta.dirname,
    })

    fastify.register(import('@fastify/cors'))

    const languagePaths = await glob('showcases/*', {
        cwd: import.meta.dirname,
        absolute: true,
        onlyDirectories: true
    })

    const languages = languagePaths.map(path => path.split('/').pop())

    fastify.get('/showcases', async (request, reply) => {
        const showcases = await glob('showcases/de/*.md', {cwd, absolute: true})

        const payload = showcases.map(async path => {
            const name = path.split('/').pop().replace('.md', '')
            const showcase = {
                id: name,
                url: `http://localhost:8082/showcase/${name}`,
                title: {},
            }

            const translations = await glob(`showcases/*/${name}.md`, { cwd })
            for (const translationPath of translations) {
                const matter = await greyMatter.default(translationPath)
                const language = translationPath.split('/')[1]
                if(language === 'de') {
                    showcase.image = matter.image
                    showcase.datasets = matter.datasets || []
                }

                showcase.title[language] = matter.title
            }

            return showcase;
        });
        return reply.send(await Promise.all(payload))
    })

    fastify.get('/showcase/:name', async (request, reply) => {
        const name = request.params.name
        const language = negotiate(request.headers['accept-language'], languages)
        if(!language) {
            reply.code(406)
            return reply.send({error: 'Not Acceptable', message: 'No suitable language found.'})
        }

        const path = new URL(`showcases/${language}/${name}.md`, import.meta.url)

        reply.header('Content-Type', 'text/markdown; charset=utf-8')
        reply.header('Content-Language', language)
        return reply.send(createReadStream(path))
    })
}
