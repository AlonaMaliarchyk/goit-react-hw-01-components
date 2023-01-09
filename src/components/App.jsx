import Profile from './SocialNetworkProfile/Profile';
import profiles from '../user.json';
export const App = () => {
  console.log(profiles);
  return (
    <div>
      <Profile
        avatar={profiles.avatar}
        username={profiles.username}
        tag={profiles.tag}
        location={profiles.location}
        stats={profiles.stats}
      />
    </div>
  );
};
