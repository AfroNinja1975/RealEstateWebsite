import classes from './TabButton.module.css';

const TabButton = (props) => {
  return (
    <a
      className={`${classes.tabButton} ${props.type === 'tabs' ? classes.tabsButton : ''} ${props.active ? classes.tabButtonActive : ''}`}
      href={props.link}
    >
      {props.title}
    </a>
  );
};

export default TabButton;