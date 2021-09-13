import classes from './Image.module.css';

const Image = (props) => {
  return (<img src={props.src} alt={props.alt} className={
    props.imgClass === 'sliderImage' && classes.sliderImage
  } />);
};

export default Image;