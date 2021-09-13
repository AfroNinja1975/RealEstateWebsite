import classes from './TabBody.module.css';

const TabBody = (props) => {
  return (
    <div className={`${classes.tabBody} ${props.type === 'tabs' && classes.tabsBody}`}>
      {props.content}
    </div>
  );
};

export default TabBody;