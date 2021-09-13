import PropertyHistoryTable from "./PropertyHistoryTable";
//import PropertyTaxHistory from "./PropertyTaxHistory";
import PropertyDetailsContact from "./PropertyDetailsContact";

const PropertyHistory = (props) => {
  return (
    <div>
      <PropertyHistoryTable
        history={props.detail["property_history"]}
        header="Price History"
        headers={["Date", "Event", "Price", "Price/Sq Ft", "Source"]}
      />
      <PropertyHistoryTable
        history={props.detail["tax_history"]}
        header="Property Tax"
        headers={["Year", "Taxes", "Land", "", "Additions", "", "Total Assessments"]}
      />
      <PropertyDetailsContact contactText="Want to get comps?" />
    </div>
  );
};

export default PropertyHistory;
