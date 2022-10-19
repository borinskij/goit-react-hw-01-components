import { ProfileCard } from 'components/Profile/Profile.jsx';
import { Statisics } from 'components/Statistics/Statistics';
import { Friend } from 'components/Friend/Friend.jsx';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory.jsx';

import transactions from 'assets/transactions.json';
import friends from 'assets/friends.json';
import data from 'assets/data.json';
import user from 'assets/user.json';

export const App = () => {
  return (
    <div>
      <ProfileCard user={user} />
      <Statisics data={data} />
      <Friend data={friends} />
      <TransactionHistory data={transactions} />
    </div>
  );
};
