import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography';
import List from './List';

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}


class HomeComponent extends React.Component {

    state = {
        value: 0
    };

    handleChange = (event, value) => {
        this.setState({value}, () => {
            localStorage.setItem('tabValue', this.state.value);
        });
    };

    render() {
        return (<div className="container">
            <div>
                <AppBar position="static">
                    <Tabs value={this.state.value} onChange={this.handleChange}>
                        <Tab label="Movies" />
                        <Tab label="People" />
                        <Tab label="Planets" />
                        <Tab label="Species" />
                        <Tab label="Starships" />
                        <Tab label="Vehicles" />
                    </Tabs>
                </AppBar>
                {this.state.value === 0 && <TabContainer><List type={'films'}/></TabContainer>}
                {this.state.value === 1 && <TabContainer><List type={'people'}/></TabContainer>}
                {this.state.value === 2 && <TabContainer><List type={'planets'}/></TabContainer>}
                {this.state.value === 3 && <TabContainer><List type={'species'}/></TabContainer>}
                {this.state.value === 4 && <TabContainer><List type={'starships'}/></TabContainer>}
                {this.state.value === 5 && <TabContainer><List type={'vehicles'}/></TabContainer>}
            </div>
        </div>);
    }
    componentDidMount () {
        let oldTabValue = localStorage.getItem('tabValue');
        this.setState({
            value: ( oldTabValue === undefined || oldTabValue === null ) ? 0 : parseInt(oldTabValue)
        })
    }
}

export default HomeComponent;

