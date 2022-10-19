import data from 'assets/friends.json';
import css from './Friend.module.css';

export const FriendList = () => {
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

//    "avatar": "https://cdn-icons-png.flaticon.com/512/1998/1998592.png",
//     "name": "Mango",
//     "isOnline": true,
//     "id": 1812
