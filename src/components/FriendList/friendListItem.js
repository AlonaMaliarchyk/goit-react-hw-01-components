import PropTypes from 'prop-types';
import FriendsListItemCss from './friendListItem.module.css';

function FriendsListItem({ id, avatar, name, isOnline }) {
    return (
            <li key={id} className={FriendsListItemCss.item}>
                <span className={isOnline ? FriendsListItemCss.online : FriendsListItemCss.offline}></span>
                <img className={FriendsListItemCss.avatar} src={avatar} alt="User avatar" width="48" />
                <p className={FriendsListItemCss.name}>{name}</p>
            </li>
    )
};

FriendsListItem.propTypes = {        
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
};
export default FriendsListItem;