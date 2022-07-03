import styles from './Hero.module.css';

export interface IHero {
  sampleTextProp: string;
}

const Hero: React.FC<IHero> = ({ sampleTextProp }) => {
  return <div className={styles.container}>{sampleTextProp}</div>;
};

export default Hero;
