import css from './Stats.module.css';
// import PropTypes from 'prop-types';

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
//   user: PropTypes.objectOf(
//     PropTypes.shape({
//       username: PropTypes.string.isRequired,
//       location: PropTypes.string.isRequired,
//       tag: PropTypes.string.isRequired,
//       avatar: PropTypes.string.isRequired,
//       stats: PropTypes.object.isRequired,
//     })
//   ),
// };
