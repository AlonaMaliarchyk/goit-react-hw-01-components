import PropTypes from 'prop-types';

function FriendsList({friends}) {
    return (
        <div>
            {friends.map(friend => (
                <li key={friend.id}>
            <span>{friend.isOnline}</span>
            <img src={friend.avatar} alt="User avatar" width="48" />
            <p>{friend.name}</p>
                </li>
            ))}
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