import classes from './HomeAccordions.module.css';
import Accordions from "../../UI/Accordion/AccordionContainer";
import MonthlyPayment from "./DetailsIncludes/MonthlyPayment";
import MonthlyPaymentIcon from "../../Assets/SVG/MonthlyPaymentIcon";
import OpenHouses from "./DetailsIncludes/OpenHouses";
import OpenHousesIcon from "../../Assets/SVG/OpenHousesIcon";
import PropertyDetails from "./DetailsIncludes/PropertyDetails";
import PropertyDetailsIcon from "../../Assets/SVG/PropertyDetailsIcon";
import PropertyHistory from "./DetailsIncludes/PropertyHistory";
import PropertyHistoryIcon from "../../Assets/SVG/PropertyHistoryIcon";

const HomeAccordions = (props) => {
  const accordionList = [
    {
      title: "Open Houses",
      icon: <OpenHousesIcon />,
      content: <OpenHouses list={props.details["open_houses"]} />,
      open: true,
    },
    {
      title: "Property Details",
      icon: <PropertyDetailsIcon />,
      content: <PropertyDetails detail={props.details} />,
      open: false,
    },
    {
      title: "Property History",
      icon: <PropertyHistoryIcon />,
      content: <PropertyHistory detail={props.details} />,
      open: false,
    },
    {
      title: "Monthly Payment",
      icon: <MonthlyPaymentIcon />,
      content: <MonthlyPayment detail={props.details} />,
      open: true,
    },
  ];
  
  return (
    <div className={classes.homeAccordions}>
      <Accordions data={accordionList} />
    </div>
  );
};

export default HomeAccordions;