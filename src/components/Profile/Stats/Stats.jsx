import css from './Stats.module.css';
import PropTypes from 'prop-types';

export const Stats = ({ stats }) => {
  return (
    <ul className={css.stats}>
      <li>
        <span className={css.label}>Followers</span>
        <br />
        <span className={css.quantity}>{stats.followers}</span>
      </li>
      <li>
        <span className={css.label}>Views</span>
        <br />
        <span className={css.quantity}>{stats.views}</span>
      </li>
      <li>
        <span className={css.label}>Likes</span>
        <br />
        <span className={css.quantity}>{stats.likes}</span>
      </li>
    </ul>
  );
};

// Stats.propTypes = {
//   stats: PropTypes.objectOf(PropTypes.string).isRequired,
// };
