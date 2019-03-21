import React from 'react';
import PropTypes from 'prop-types';

export default class Display extends React.PureComponent {
    static propTypes = {
      image: PropTypes.string,
      fetch: PropTypes.func.isRequired,
    };

    componentDidMount() {
      this.props.fetch();
    }

    render() {
      return (
            <>
                <h1> hello from display comp</h1>
                <button onClick={this.props.fetch}>GET NEW DAWG</button>
                <img src={this.props.image}/>
                
            </>
      );
    }
}
