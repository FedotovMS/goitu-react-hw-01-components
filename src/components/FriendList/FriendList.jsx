import FriendListItem from './FriendListItem/FriendListItem';
import css from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends &&
        friends.map(({ id, name, avatar, isOnline }) => (
          <FriendListItem
            id={id}
            name={name}
            avatar={avatar}
            status={isOnline}
          />
        ))}
    </ul>
  );
}
