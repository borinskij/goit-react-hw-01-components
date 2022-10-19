import { ProfileCard } from 'components/Profile/Profile.jsx';

import { Statisics } from 'components/Statistics/Statistics';

import { Friend } from 'components/Friend/Friend.jsx';

import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory.jsx';

export const App = () => {
  return (
    <div>
      <ProfileCard />
      <Statisics />
      <Friend />
      <TransactionHistory />
    </div>
  );
};
