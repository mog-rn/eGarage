import styles from './Header.module.css';

export interface IHeader {
  
}

const Header: React.FC<IHeader> = ({ }) => {
  return <div className={styles.container}>Header
  </div>;
};

export default Header;
