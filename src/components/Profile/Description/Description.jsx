import css from './Description.module.css';

export const FotoUser = ({ avatar, username, tag, location }) => {
  return (
    <>
      <img className={css.avatar} src={avatar} alt="User avatar" />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>{tag}</p>
      <p className={css.location}>{location}</p>
    </>
  );
};
