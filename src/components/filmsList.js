import React from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Typography from "@material-ui/core/Typography/Typography";
import {Link} from "react-router-dom";


class FilmsList extends React.Component {
    state = {
        films: this.props.films,
        isLoading: false
    }

    componentDidMount () {
        this.setState({
            isLoading: true
        });
        if(this.state.films)
            axios.all(this.state.films.map(l => axios.get(l)))
                .then(axios.spread((...res) => {
                    // all requests are now complete
                    this.setState({
                        isLoading: false,
                        films: res.map( el => el.data )
                    })
                }));
    }

    render () {
        if (this.state.isLoading || !this.state.films) {
            return (<div className="details-list">
                <Typography variant="h5" component="h3">
                    Films
                </Typography>
                <hr/>
                Films is loading
            </div>)
        }

        if(!this.state.isLoading && !this.state.films.length) {
            return (
                <div className="details-list">
                    <Typography variant="h5" component="h3">
                        Films
                    </Typography>
                    <hr/>
                    There is no film according the entity
                </div>
            )
        }

        const filmsList = this.state.films.map((item, index) => {
            return (
                <Button key={index}>
                    <Link to={ {pathname: '/films/' + item.title, state: item.url  } }>
                        {item.title}</Link>
                </Button>
            )
        });

        return (
            <div className="details-list">
                <Typography variant="h5" component="h3">
                    Films
                </Typography>
                <hr/>
                {filmsList}
                <hr/>
            </div>
        )
    }
}

export default FilmsList;
