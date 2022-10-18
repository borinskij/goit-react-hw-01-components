import css from './Profile.module.css';
import { FotoUser } from 'components/Description/Description.jsx';
import user from 'assets/user.json';
import { Stats } from 'components/Stats/Stats.jsx';

export const ProfileCard = () => {
  return (
    <div className={css.profile}>
      <FotoUser
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
      />
      <Stats stats={user.stats} />
    </div>
  );
};
