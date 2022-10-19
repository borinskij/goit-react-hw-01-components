import { ProfileCard } from 'components/Profile/Profile.jsx';

import { Statisics } from 'components/Statistics/Statistics';

import { Friend } from 'components/Friend/Friend.jsx';

export const App = () => {
  return (
    <div>
      <ProfileCard />
      <Statisics />
      <Friend />
    </div>
  );
};
