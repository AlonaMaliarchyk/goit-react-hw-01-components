import profiles from '../data/user.json';
import dataStatictics from '../data/data.json';
import FriendsList from '../data/friends.json';
import TransactionList from '../data/transactions.json';
import Profile from './SocialNetworkProfile/Profile';
import UsersStatistics from './Statistics/StatisticsProfile';
import Friends from './FriendList/friends';
import TransactionHistory from './TransactionHistory/transaction';


export const App = () => {
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
