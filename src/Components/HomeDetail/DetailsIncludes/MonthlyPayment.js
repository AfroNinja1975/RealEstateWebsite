import classes from "./MonthlyPayment.module.css";
import MonthlyPaymentGraph from './MonthlyPaymentGraph';
//import Button from "../../../UI/Button/Button";

const MonthlyPayment = (props) => {
  return (
    <div className={classes.monthlyPaymentContainer}>
      <MonthlyPaymentGraph data={props.detail.mortgage.estimate} />
    </div>
  );
};

export default MonthlyPayment;