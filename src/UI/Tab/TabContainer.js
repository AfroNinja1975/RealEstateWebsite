//import{ useState } from 'react';

import classes from './TabContainer.module.css';

import TabButton from './TabButton';
import TabBody from './TabBody';

const tabButtons = [
  {
    link: '/Buy',
    title: 'Buy',
  },
  {
    link: '/Rent',
    title: 'Rent',
  },
  {
    link: '/Mortgage',
    title: 'Pre-Approval',
  },
  {
    link: '/JustSold',
    title: 'Just Sold',
  },
  {
    link: '/MyHome',
    title: 'Home Value',
  },
];

const TabContainer = (props) => {
  return (
    <div className={classes.tabContainer}>
      <div className={classes.tabButtons}>
        {tabButtons.map(({ link, title }, idx) => {
          return (
            <TabButton
              active={title === props.active && true}
              key={idx}
              link={link}
              title={title}
              type={props.type}
            />
          );
        })}
      </div>
      <TabBody type={props.type} content={props.children} />
    </div>
  );
};

export default TabContainer;