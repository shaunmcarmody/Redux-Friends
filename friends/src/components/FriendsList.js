import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getFriends } from '../actions';

class FriendsList extends React.Component {
    componentDidMount() {
        this.props.getFriends()
    }

    render() {
        return (
            <ul>
                {
                    this.props.friends.map(friend => (
                         <li key={friend.id}>
                            <Link to={`/friends-list/${friend.id}`}>{friend.name}</Link>
                        </li>
                    ))
                }
            </ul>
        )
    }
}

const mapStateToProps = state => ({
    friends: state.friendsList.friends
})

export default connect(mapStateToProps, { getFriends })(FriendsList);