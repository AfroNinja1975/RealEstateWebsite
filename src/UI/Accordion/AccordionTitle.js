import React, { useState } from "react";
import ChevronDown from "../../Assets/SVG/ChevronDown";
import ChevronUp from "../../Assets/SVG/ChevronUp";
import AccordionBody from './AccordionBody';

import classes from './AccordionTitle.module.css';

const AccordionTitle = (props) => {
  const chevronFlag = props.open ? true : false;
  const chevronType = props.open ? <ChevronUp /> : <ChevronDown />;
  const accordionContents = props.open ? (
    <AccordionBody>{props.content}</AccordionBody>
  ) : (
    ''
  );
  const [chevron, setChevron] = useState(chevronType);
  const [chevronFl, setChevronFl] = useState(chevronFlag);
  const [accordionContent, setAccordionContent] = useState(accordionContents);

  const accordionTitleHandler = () => {
    if (chevronFl) {
      setChevron(<ChevronDown />);
      setChevronFl(false);
      setAccordionContent('');
    } else {
      setChevron(<ChevronUp />);
      setChevronFl(true);
      setAccordionContent(<AccordionBody>{props.content}</AccordionBody>);
    }
  };

  return (
    <>
      <div className={classes.accordionTitle} onClick={accordionTitleHandler}>
        <div>{props.icon}</div>
        <div className={classes.accordionHeading}>
          <h3>{props.title}</h3>
        </div>
        <div>{chevron}</div>
      </div>
      {accordionContent}
    </>
  );
};

export default AccordionTitle;