import PropTypes from 'prop-types';
import FriendsCss from './friendsStyle.module.css';
import FriendsListItem from './friendListItem';

function FriendsList({ friends }) {
    return (
        <div className={FriendsCss.friendListContainer}>
            <ul className={FriendsCss.friendList}>
            {friends.map(friend => FriendsListItem(friend))}
            </ul>
    </div>
    )
};

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    ),
};
export default FriendsList;