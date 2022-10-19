import css from './Friend.module.css';
import { FriendList } from './FriendList.jsx';

export const Friend = () => {
  return (
    <ul className={css.friendList}>
      <FriendList />
    </ul>
  );
};
