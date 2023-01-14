import PropTypes from 'prop-types';
import FriendsCss from './friendsStyle.module.css';

function FriendsList({friends}) {
    return (
        <div className={FriendsCss.friendListContainer}>
            <ul className={FriendsCss.friendList}>
            {friends.map(friend => (
                <li key={friend.id} className={FriendsCss.item}>
                    {friend.isOnline === true ? <span className={FriendsCss.online}></span> : 
                    <span className={FriendsCss.offline}></span>}
                    {/* <span className={ FriendsCss.status.online}/> */}
            <img className={FriendsCss.avatar} src={friend.avatar} alt="User avatar" width="48" />
            <p className={FriendsCss.name}>{friend.name}</p>
                </li>
            ))}
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