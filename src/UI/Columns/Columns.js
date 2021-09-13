import classes from "./Columns.module.css";

const Columns = (props) => {
  return (
    <div className={`${classes.columns} ${props.direction === 'staggered' ? classes.staggeredColumns : null}`}>
      {props.children}
    </div>
  );
};

export default Columns;