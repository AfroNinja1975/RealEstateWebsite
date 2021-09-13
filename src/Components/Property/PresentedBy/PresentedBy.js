import classes from './PresentedBy.module.css';

const PresentedBy = (props) => {
  return (
    <div className={classes.presentedBy}>
      <p>Presented By:</p>
      <p>
        <strong>{props.agent}</strong> with <strong>{props.broker}</strong>
      </p>
    </div>
  );
};

export default PresentedBy;