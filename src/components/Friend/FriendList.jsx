import css from './Friend.module.css';
import PropTypes from 'prop-types';

export const FriendList = ({ data }) => {
  return (
    <>
      {data.map(data => (
        <li
          className={css.item}
          key={data.id}
          style={{ borderColor: data.isOnline ? 'green' : 'red' }}
        >
          <span
            className={css.status}
            style={{ backgroundColor: data.isOnline ? 'green' : 'red' }}
          ></span>
          <img
            className={css.avatar}
            src={data.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{data.name}</p>
        </li>
      ))}
    </>
  );
};

FriendList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
