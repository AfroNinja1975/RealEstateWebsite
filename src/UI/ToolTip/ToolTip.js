import React from "react";
import classes from './ToolTip.module.css';
import Tooltip from "react-simple-tooltip";
import InfoIcon from '../../Assets/SVG/InfoIcon';

const ToolTip = (props) => {
  return (
    <Tooltip
    arrow={25}
      border="0"
      content={<div className={classes.tooltipText}>{props.message}</div>}
      placement="bottom"
      radius={10}
    >
      <div className={classes.tooltipIcon}>
        <InfoIcon dataFor={props.dataFor} />
      </div>
    </Tooltip>
  );
};

export default ToolTip;