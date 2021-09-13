import NumberFormat from "react-number-format";
import Section from "../../../UI/Section/Section";

const AdditionalInfo = (props) => {
  const details = props.details;
  const address = `${details.address.line}, ${details.address.city}, ${details.address["state_code"]} ${details.address["postal_code"]}`;
  
  return (
    <Section background="light-gray">
      <div>
        <h3>{`Additional Information About ${address}`}</h3>
        <p>
          {`${address} is a ${details["raw_prop_type"]} for sale listed on the market for ${details["client_display_text"]["listing_date_value"]}. ${address} is in the ${details.neighborhood} neighborhood, which has a median listing price of `}
          <NumberFormat
            value={details.trend.median["listing_price"]}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            renderText={(formattedValue) => <span>{formattedValue}</span>}
          />
          {`. The schools near ${details.address.line} include Eastshore Elementary School, Lakeside Middle School and Woodbridge High School.`}
        </p>
      </div>
    </Section>
  );
};

export default AdditionalInfo;
