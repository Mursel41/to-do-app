import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSpinner } from '@fortawesome/free-solid-svg-icons';

import { getNewsAction } from '../store/actions';

import NewsItem from './NewsItem';

import { connect } from 'react-redux';

class NewsContainer extends Component {
    componentDidMount() {
        this.props.getNews();
    }

    render() {
        return (
            <div className="NewsContainer">
                <h3>BBC News</h3>
                <div className="spinner">
                    {this.props.isLoading && <FontAwesomeIcon icon={faSpinner} spin className="spinner__icon" />}
                </div>
                <div className="News">
                    {this.props.data.map((item, index) => <NewsItem key={index} data={item} />)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLoading: state.news.isLoading,
    data: state.news.articles
});

const mapDispatchToProps = dispatch => ({
    getNews: () => dispatch(getNewsAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);