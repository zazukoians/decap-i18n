import glob from "fast-glob"
import negotiate from "@fastify/accept-negotiator"
import {createReadStream} from 'node:fs'

export default async function (fastify, _) {
    fastify.register(import('@fastify/static'), {
        root: import.meta.dirname,
    })

    fastify.register(import('@fastify/cors'))

    fastify.get('/showcases', async (request, reply) => {
        const showcases = await glob('showcases/de/*.md', {cwd: import.meta.dirname, absolute: true})

        return reply.send(showcases.map(showcase => {
            const name = showcase.split('/').pop().replace('.md', '')

            return {
                url: `http://localhost:8082/showcase/${name}`,
            };
        }))
    })

    const languagePaths = await glob('showcases/*', {
        cwd: import.meta.dirname,
        absolute: true,
        onlyDirectories: true
    })

    const languages = languagePaths.map(path => path.split('/').pop())
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
