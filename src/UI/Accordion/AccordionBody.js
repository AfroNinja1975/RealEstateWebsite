import classes from './AccordionBody.module.css';

const AccordionBody = (props) => {
  return (
    <div className={classes.accordionBody}>
      {props.children}
    </div>
  );
};

export default AccordionBody;