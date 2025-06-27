import React from "react";
import {AsyncTypeahead} from "react-bootstrap-typeahead";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'react-bootstrap-typeahead/css/Typeahead.bs5.css';
import {toArray} from "./util.js";

// Bypass client-side filtering by returning `true`. Results are already
// filtered by the search endpoint, so no need to do it again.
const filterBy = () => true;

export default class DatasetSearchComponent extends React.Component {
    state = {
        isLoading: false,
        options: toArray(this.props.value)
    };

    componentDidUpdate(prevProps) {
        if (prevProps.value !== this.props.value) {
            this.setState({ options: toArray(this.props.value) });
        }
    }

    render() {
        return (
            <AsyncTypeahead
                id='dataset'
                className={this.props.classNameWrapper}
                filterBy={filterBy}
                minLength={this.props.minLength || 3}
                isLoading={this.state.isLoading}
                labelKey='label'
                multiple
                onSearch={this.handleSearch}
                placeholder="Search for a dataset..."
                selected={toArray(this.props.value)}
                options={this.state.options}
                onChange={this.changed}
            />
        )
    }

    handleSearch = async (q) => {
        this.setState({
            isLoading: true,
        })

        try {
            const url = new URL('search', this.props.field.get('piveau').get('search'))
            url.searchParams.set('q', q)

            const response = await fetch(url)

            const {result} = await response.json()

            const options = result.results.map((item) => {
                const { id } = item
                return {
                    id,
                    label: item.title[this.props.locale] || id
                };
            })

            this.setState({ options })
        } finally {
            this.setState({
                isLoading: false,
            })
        }
    }

    changed = (items) => {
        this.props.onChange(items)
    }
}

