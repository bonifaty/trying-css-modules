var React = require('react');
var HeartIcon = require('./heart-icon.jsx');
import styles from '../css/like-button.styl';

var LikeButton = React.createClass({
    getInitialState() {
        return {
            active: false
        }
    },
    onClick() {
        this.setState({
            active: !this.state.active
        });
    },
    render() {
        var className = this.state.active ? styles.active : styles.normal;

        return (<button className={className} onClick={this.onClick} type="button">
            <HeartIcon className={styles.icon} /> <span className={styles.text}>Like it!</span>
        </button>);
    }
});

module.exports = LikeButton;