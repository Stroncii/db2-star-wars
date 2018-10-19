import React from 'react';
import axios from 'axios';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Typography from "@material-ui/core/Typography/Typography";
import FilmsList from "./filmsList";
import CharactersList from "./charactersList";
import HomeworldComponent from './homeworld';

class SpeciesDetailComponent extends React.Component {

    state = {
        url: this.props.location.state,
        data: {},
        isLoading: false
    }

    componentDidMount () {
        this.setState({
            isLoading: true
        });
        axios.get(this.state.url).then(response => {
            this.setState({
                data: response.data,
                isLoading: false
            })
        });
    }

    render () {
        let spec = this.state.data;
        if (this.state.isLoading) {
            return (<FontAwesomeIcon className={'loading'} icon="sun" />)
        };
        return (
            <div className="details-container">
                <div className="details-inbox">
                    <Typography variant="h4" component="h3">
                        {spec.name} details page.
                    </Typography>
                    <hr/>
                    <Typography variant="body1" component="p">
                        Classification: {spec.gender}
                    </Typography>
                    <hr/>
                    <Typography variant="body1" component="p">
                        Designation: {spec.designation}
                    </Typography>
                    <hr/>
                    <Typography variant="body1" component="p">
                        Language: {spec.language}
                    </Typography>
                    <hr/>
                    <Typography variant="body2" component="p">
                        Average height: {spec.average_height} cm
                    </Typography>
                    <hr/>
                    <Typography variant="body1" component="p">
                        Average lifespan: {spec.average_lifespan} years
                    </Typography>
                    <hr/>
                    <Typography variant="body1" component="p">
                        Hair color: {spec.hair_colors}
                    </Typography>
                    <hr/>
                    <Typography variant="body1" component="p">
                        Skin color: {spec.skin_colors}
                    </Typography>
                    <hr/>
                    <Typography variant="body1" component="p">
                        Eye color: {spec.eye_colors}
                    </Typography>
                    <hr/>
                    <Typography variant="body1" component="p">
                        Homeworld: { spec.homeworld && <HomeworldComponent planet={spec.homeworld}/>}
                    </Typography>
                    <hr/>
                </div>
                <CharactersList type={'people'} characters={this.state.data.people}/>
                <FilmsList  films={this.state.data.films}/>
            </div>
        )
    }
}

export default SpeciesDetailComponent;
