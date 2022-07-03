import styles from './Header.module.css';

export interface IHeader {
  children: React.ReactNode
}

const Header: React.FC<IHeader> = ({ children }) => {
  return <div className={styles.container}>Header</div>;
};

export default Header;
