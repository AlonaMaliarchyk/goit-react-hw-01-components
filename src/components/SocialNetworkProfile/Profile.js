import PropTypes from 'prop-types';

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
    <div>
    <div>
        <img src={avatar} alt={username} width="180"/>
        <p>{username}</p>
        <p>{tag}</p>
            <p>{location}</p>
    </div>
    <ul>
    <li>
        <span>Followers</span>
        <span> {stats.followers}</span>
    </li>
    <li>
        <span>Views</span>
                <span> {stats.views}</span>
    </li>
    <li>
        <span>Likes</span>
                <span> {stats.likes}</span>
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