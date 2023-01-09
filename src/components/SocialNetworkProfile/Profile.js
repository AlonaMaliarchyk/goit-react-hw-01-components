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
    <div class="profile">
    <div class="description">
        <img src={avatar} alt={username} width="180" class="avatar"/>
        <p>{username}</p>
        <p>{tag}</p>
            <p>{location}</p>
    </div>
    <ul class="stats">
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
export default Profile;