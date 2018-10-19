import React from 'react';
import {library} from "@fortawesome/fontawesome-svg-core";
import {faArrowDown, faArrowUp, faMinus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import TextField from '@material-ui/core/TextField';

library.add(faArrowDown, faArrowUp, faMinus)

class ListForm extends React.Component {
    state = {
        sortType: this.props.sortType,
        query: ''
    }
    handleClick = () => {
        let newState = this.state.sortType === 'inc' ? 'desc' : 'inc';
        this.setState({
            sortType: newState
        });
        this.props.sort(newState);
    };
    search = (event) => {
        this.setState({
            query: event.target.value,
            sortType: 'normal'
        }, () => {
            this.props.search(this.state.query);
        });
    };
    render () {
        return (<div className="search-wrapper">
            <FontAwesomeIcon className={this.state.sortType !== 'normal' ? 'active-sort point-icon' : 'point-icon'} onClick={this.handleClick} icon={this.state.sortType === 'inc' ? "arrow-up" : 'arrow-down'} />
            <form noValidate autoComplete='off'>
                <TextField
                    name={'search-field'}
                    id="outlined-search"
                    label="Search field"
                    type="text"
                    variant="outlined"
                    onChange={this.search}
                />
            </form>
        </div>);
    }
}

export default ListForm;
