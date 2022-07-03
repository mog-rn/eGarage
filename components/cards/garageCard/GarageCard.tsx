import styles from './GarageCard.module.css';

export interface IGarageCard {}

const GarageCard: React.FC<IGarageCard> = () => {
  return <div className={styles.container}>Garage card</div>;
};

export default GarageCard;
