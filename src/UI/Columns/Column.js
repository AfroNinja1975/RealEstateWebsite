import classes from "./Column.module.css";

const Column = (props) => {
  const columnCount = props.columns === '2' ? classes.column2 :  props.columns === '3' ? classes.column3 : classes.column;  

  return (
    <div className={`${classes.column} ${columnCount}`}>{props.children}</div>
  );
};

export default Column;