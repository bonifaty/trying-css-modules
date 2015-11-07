var React = require('react');
import styles from '../css/like-button.styl';

var LikeButton = React.createClass({
    getInitialState() {
        return {
            currentClassName: styles.basic
        }
    },
    onClick() {
        this.setState({
            currentClassName: styles.active
        });
    },
    render() {
        return (<button className={this.state.currentClassName} onClick={this.onClick} type="button">Like</button>);
    }
});

module.exports = LikeButton;