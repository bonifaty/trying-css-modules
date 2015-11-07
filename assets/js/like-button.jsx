var React = require('react');
import styles from '../css/like-button.styl';

var LikeButton = React.createClass({
    render() {
        return (<button className={styles.root} type="button">Like</button>);
    }
});

module.exports = LikeButton;