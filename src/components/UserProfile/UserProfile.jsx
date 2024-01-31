import styles from './UserProfile.module.css';
import PropTypes from 'prop-types';

const UserProfile = ({ username, avatar, tag, location, stats }) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img src={avatar} alt="User avatar" className={styles.avatar} />
      <p className={styles.name}>{username}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>

    <ul className={styles.stats}>
      <li className={styles.item}>
        <span className={styles.label}>Followers</span>
        <span className="quantity">{stats.followers}</span>
      </li>
      <li className={styles.item}>
        <span className={styles.label}>Views</span>
        <span className="quantity">{stats.views}</span>
      </li>
      <li className={styles.item}>
        <span className={styles.label}>Likes</span>
        <span className="quantity">{stats.likes}</span>
      </li>
    </ul>
  </div>
);

export default UserProfile;

UserProfile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
