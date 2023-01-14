import PropTypes from 'prop-types';
import ProfileCss from './ProfileStyle.module.css';

const Profile = ({
    username,
    tag,
    location,
    avatar = "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
    stats,
    followers,
    views,
    likes,
        }) => (
<div className={ProfileCss.profile}>
    <div className={ProfileCss.description}>
        <img className={ProfileCss.img} src={avatar} alt={username} width="180"/>
        <p className={ProfileCss.name}>{username}</p>
        <p className={ProfileCss.tag}>{tag}</p>
        <p className={ProfileCss.location}>{location}</p>
    </div>
    <ul className={ProfileCss.stats}>
    <li className={ProfileCss.items}>
<span className={ProfileCss.label}>Followers</span>
        <span className={ProfileCss.quantity}> {stats.followers}</span>
    </li>
    <li className={ProfileCss.items}>
        <span className={ProfileCss.label}>Views</span>
    <span className={ProfileCss.quantity}> {stats.views}</span>
    </li>
    <li className={ProfileCss.items}>
        <span className={ProfileCss.label}>Likes</span>
        <span className={ProfileCss.quantity}> {stats.likes}</span>
    </li>
    </ul>
    </div>
);

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
}
export default Profile;