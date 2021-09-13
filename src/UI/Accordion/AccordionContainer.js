import classes from './AccordionContainer.module.css';
import AccordionTitle from "./AccordionTitle";

const AccordionContainer = (props) => {
  return (
    <div className={classes.accordionContainer}>
      {props.data.map(({ content, title, icon, open }, idx) => {
        return (
          <div className={classes.accordionWrapper} key={idx}>
            <AccordionTitle
              content={content}
              icon={icon}
              open={open}
              title={title}
            />
          </div>
        );
      })}
    </div>
  );
};

export default AccordionContainer;