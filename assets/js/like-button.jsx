var React = require('react');
import styles from '../css/like-button.styl';

// like // dislike // disabled

var LikeButton = React.createClass({
    getInitialState() {
        return {
            disabled: false,
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

        return (<button className={className} onClick={this.onClick} type="button">Like</button>);
    }
});

module.exports = LikeButton;