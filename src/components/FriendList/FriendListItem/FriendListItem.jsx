import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

export default function FriendListItem({ id, name, avatar, status }) {
  return (
    <li className={css.item} key={id}>
      <span className={status ? css.isOnline : css.isOffline}>{status}</span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendListItem.protoType = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
