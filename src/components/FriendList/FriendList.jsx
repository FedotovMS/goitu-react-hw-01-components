import FriendListItem from './FriendListItem/FriendListItem';
import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends &&
        friends.map(({ id, name, avatar, isOnline }) => (
          <FriendListItem
            key={id}
            name={name}
            avatar={avatar}
            status={isOnline}
          />
        ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
