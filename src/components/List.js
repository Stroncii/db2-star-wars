import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';
import base_url from '../base';
import {library} from "@fortawesome/fontawesome-svg-core";
import {faJedi, faSun} from "@fortawesome/free-solid-svg-icons";
import ListForm from './ListForm';
import { Link } from 'react-router-dom';



library.add( faJedi, faSun);


class customList extends React.Component {
    response;
    CancelToken = axios.CancelToken;
    source = this.CancelToken.source();
    state = {
        type: this.props.type,
        data: [],
        isLoading: false,
        next: '',
        loadMore: false,
        sortType: 'normal'
    };

    callServer (url) {
        if (this.source) {
            this.source.cancel("Only one request allowed at a time.");
        }

        this.source = axios.CancelToken.source();
        axios.get(url, {
            cancelToken: this.source.token
        }).then( response => {
            this.setState({
                isLoading: false,
                data: [...this.state.data, ...response.data.results],
                next: response.data.next,
                isSearching: false,
                sortType: 'normal',
            });
            if (this.state.next) {
                this.setState({
                    loadMore: true
                });
                this.callServer(this.state.next);
            } else {
                this.setState({
                    loadMore: false
                })
            }
        }).catch((error) => {
            console.log(error)
        });
    }


    componentDidMount() {
        this.setState({
            isLoading: true
        });
       this.callServer(`${base_url}${this.props.type}/`);
    }

    componentWillUnmount() {
        if (typeof this.source != "undefined")
            this.source.cancel('Operation canceled');
    }

    sortData = (type) => {
        this.setState({
            data: this.state.data.sort((a,b) => {
                let prop = a.name ? 'name' : 'title';
                if (a[prop].toLowerCase() < b[prop].toLowerCase())
                    return type === 'desc' ? -1 : 1;
                if (a[prop].toLowerCase() > b[prop].toLowerCase())
                    return type === 'desc' ? 1 : -1;
                return 0;
            }),
            sortType: type
        })
    };

    search = (value) => {
        this.setState({
            data: [],
            isSearching: true
        });
        this.callServer(`${base_url}${this.props.type}/?search=${value}`, 'search');
    };

    render () {
        console.log(this.props.type);
        if (this.state.isLoading) {
            return (<FontAwesomeIcon className={'loading'} icon="sun" />)
        };

        const listItems = this.state.data.map((item, index) => {
            let name = item.name ? item.name : item.title
            return (
                <div className={'item'} key={index}>
                    <FontAwesomeIcon className={'point-icon'} icon="jedi" />
                    <p>
                        <Link to={{ pathname: '/' + this.props.type + '/' + name, state: item.url  }}>
                            {name}</Link>
                    </p>
                </div>
            )
        });

        return (
            <div className={'inbox'} >
                <ListForm sortType={this.state.sortType} search={this.search} sort={this.sortData} updateData={this.updateData}/>
                {!this.state.data.length && !this.state.isLoading && !this.state.isSearching ? (<div className={'item'}>
                    <FontAwesomeIcon className={'point-icon'} icon="jedi" />
                    <p>
                        Unfortunately there aren't any {this.props.type} according to your search
                    </p>
                </div>) : <span hidden></span>}
                {this.state.loadMore ? (<div className={'item load-more'}>
                    <FontAwesomeIcon className={'point-icon'} icon="jedi" />
                    <p>
                        Load more {this.props.type}
                    </p>
                </div>) : <span hidden></span>}
                {this.state.isSearching ? (<div className={'item load-more'}>
                    <FontAwesomeIcon className={'point-icon'} icon="jedi" />
                    <p>
                        Searching {this.props.type}
                    </p>
                </div>) : <span hidden></span>}
                {listItems}
            </div>
        );
    }
}

export default customList;
