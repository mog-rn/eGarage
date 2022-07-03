import styles from './TestimonialsCard.module.css';

export interface ITestimonialsCard {
  sampleTextProp: string;
}

const TestimonialsCard: React.FC<ITestimonialsCard> = ({sampleTextProp}) => {
  return <div>{sampleTextProp}</div>
}
 
export default TestimonialsCard