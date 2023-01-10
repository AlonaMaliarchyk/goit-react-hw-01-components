import profiles from '../user.json';
import dataStatictics from '../data.json';
import FriendsList from '../friends.json';
import TransactionList from '../transactions.json';
import Profile from './SocialNetworkProfile/Profile';
import UsersStatistics from './Statistics/StatisticsProfile';
import Friends from './FriendList/friends';
import TransactionHistory from './TransactionHistory/transaction';


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
      <UsersStatistics
        title="Upload stats"
        stats={dataStatictics}
      />
      <Friends
        friends={FriendsList}
      />
      <TransactionHistory
        items={TransactionList}
      />
    </div>
  );
};
