import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

class Headline extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        const { heading, desc } = this.props;
        return (
            <div className="headline-component">
                <h1>{heading}</h1>
                <p>{desc}</p>
                <button type="button" className="btn btn-primary ">get posts</button>
            </div>
        )
    }
}

Headline.propTypes = {
        heading: PropTypes.string.isRequired,
        desc: PropTypes.string
}

const mapStateToProps = (state) => ({
    ...state.headline
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Headline);