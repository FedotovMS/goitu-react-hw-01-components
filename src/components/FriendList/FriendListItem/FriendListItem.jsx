import css from './FriendListItem.module.css';
export default function FriendListItem({ id, name, avatar, status }) {
  return (
    <li className={css.item} key={id}>
      <span className={status ? css.isOnline : css.isOffline}>{status}</span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}
