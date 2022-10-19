import css from './Profile.module.css';
import { FotoUser } from 'components/Profile/Description/Description.jsx';
import { Stats } from 'components/Profile/Stats/Stats.jsx';
import PropTypes from 'prop-types';

export const ProfileCard = ({ user }) => {
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

ProfileCard.propTypes = {
  user: PropTypes.objectOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      stats: PropTypes.object.isRequired,
    })
  ),
};
