import styles from './AuthButton.module.css';

export interface IAuthButton {
  sampleTextProp: string;
}

const AuthButton: React.FC<IAuthButton> = ({ sampleTextProp }) => {
  return <div className={styles.container}>{sampleTextProp}</div>;
};

export default AuthButton;
