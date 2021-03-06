import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'

class App extends React.Component {

    // The component is initialized with the constructor function

    state = { lat: null, long: null }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude.toFixed(2),
                                        long: position.coords.longitude.toFixed(2),
                                        errorMessage: ''
                                     }),
            err => this.setState({errorMessage: err.message})
        );
    }

    componentDidUpdate() {
        console.log('My component was updated');
    }

    // Always define the render function.
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }
        if (!this.state.errorMessage && this.state.lat) {
            return (
                <SeasonDisplay lat={this.state.lat} long={this.state.long}/>
            );
        }
        return <div>Loading!</div>;
    };
}

ReactDOM.render(<App/>, document.querySelector('#root'))
