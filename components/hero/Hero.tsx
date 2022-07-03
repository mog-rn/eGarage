import styles from './Hero.module.css';

export interface IHero {
  
}

const Hero: React.FC<IHero> = () => {
  return <div className={styles.container}>Hero Section</div>;
};

export default Hero;
