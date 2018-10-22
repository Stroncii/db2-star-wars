import React from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Typography from "@material-ui/core/Typography/Typography";
import {Link} from "react-router-dom";


class StarshipsList extends React.Component {
    state = {
        starships: this.props.starships,
        isLoading: false
    }

    componentDidMount () {
        this.setState({
            isLoading: true
        });
        if(this.state.starships)
            axios.all(this.state.starships.map(l => axios.get(l)))
                .then(axios.spread((...res) => {
                    // all requests are now complete
                    this.setState({
                        isLoading: false,
                        starships: res.map( el => el.data )
                    })
                }));
    }

    render () {
        if (this.state.isLoading || !this.state.starships) {
            return (<div className="details-list">
                <Typography variant="h5" component="h3">
                    Starships
                </Typography>
                <hr/>
                Starships are loading!
            </div>)
        }

        if(!this.state.isLoading && !this.state.starships.length) {
            return (
                <div className="details-list">
                    <Typography variant="h5" component="h3">
                        Starships
                    </Typography>
                    <hr/>
                    There are no relevant starships
                </div>
            )
        }

        const starshipsList = this.state.starships.map((item, index) => {
            return (
                <Button key={index}>
                    <Link to={ {pathname: '/starships/' + item.name, state: item.url  } }>
                        {item.name}</Link>
                </Button>
            )
        });

        return (
            <div className="details-list">
                <Typography variant="h5" component="h3">
                    Starships
                </Typography>
                <hr/>
                {starshipsList}
                <hr/>
            </div>
        )
    }
}

export default StarshipsList;
