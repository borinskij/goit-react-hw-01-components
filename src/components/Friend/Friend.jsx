import css from './Friend.module.css';
import { FriendList } from './FriendList.jsx';

export const Friend = ({ data }) => {
  return (
    <ul className={css.friendList}>
      <FriendList data={data} />
    </ul>
  );
};
