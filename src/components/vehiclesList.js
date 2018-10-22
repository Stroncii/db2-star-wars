import React from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Typography from "@material-ui/core/Typography/Typography";
import {Link} from "react-router-dom";


class VehiclesList extends React.Component {
    state = {
        vehicles: this.props.vehicles,
        isLoading: false
    }

    componentDidMount () {
        this.setState({
            isLoading: true
        });
        if(this.state.vehicles)
            axios.all(this.state.vehicles.map(l => axios.get(l)))
                .then(axios.spread((...res) => {
                    // all requests are now complete
                    this.setState({
                        isLoading: false,
                        vehicles: res.map( el => el.data )
                    })
                }));
    }

    render () {
        if (this.state.isLoading || !this.state.vehicles) {
            return (<div className="details-list">
                <Typography variant="h5" component="h3">
                    Vehicles
                </Typography>
                <hr/>
                Vehicles are loading
                <hr/>
            </div>)
        }

        if(!this.state.isLoading && !this.state.vehicles.length) {
            return (
                <div className="details-list">
                    <Typography variant="h5" component="h3">
                        Vehicles
                    </Typography>
                    <hr/>
                    There are no relevant vehicles
                    <hr/>
                </div>
            )
        }

        const vehiclesList = this.state.vehicles.map((item, index) => {
            return (
                <Button key={index}>
                    <Link to={ {pathname: '/vehicles/' + item.name, state: item.url  } }>
                        {item.name}</Link>
                </Button>
            )
        });

        return (
            <div className="details-list">
                <Typography variant="h5" component="h3">
                    Vehicles
                </Typography>
                <hr/>
                {vehiclesList}
                <hr/>
            </div>
        )
    }
}

export default VehiclesList;
