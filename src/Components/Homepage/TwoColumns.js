import Button from "../../UI/Button/Button";
import Columns from "../../UI/Columns/Columns";
import Column from "../../UI/Columns/Column";
import Image from "../../UI/Image/Image";
import MortgageImage from "../../Assets/Images/homepage/hp-hero-mortgage-desktop.jpeg";
import SearchImage from "../../Assets/Images/homepage/hp-local-desktop.jpeg";
import Search from "../../Components/Search/Search";

import classes from './TwoColumns.module.css';

const twoColumnsContent = [
  {
    columns: "2",
    content: {
      image: <MortgageImage />,
      text: {
        buttonText: "Get pre-approved now",
        buttonUrl: "/Mortgage",
        heading: "Need a Home Loan? Get Pre-approved",
        paragraph:
          "Find a lender who can offer competitive mortgage rates and help you with pre-approval.",
      },
    },
  },
  {
    columns: "2",
    content: {
      image: <SearchImage />,
      text: {
        search: true,
        heading: "Get Local Info",
        paragraph:
          "Does it have pet-friendly rentals? What are the crime rates? How are the schools? Get important local information on the area you're most interested in.",
      },
    },
  },
];

const TwoColumns = () => {
  return (
    <>
      {twoColumnsContent.map(({ columns, content }, idx) => {
        return (
          <Columns direction="staggered" key={idx}>
            <Column columns={columns}>
              <div className={classes.twoColumnsImage}>
                <Image src={content.image.type} alt={content.text.heading} />
              </div>
            </Column>
            <Column columns={columns}>
              <div className={classes.textColumn}>
                <h2>{content.text.heading}</h2>
                <p>{content.text.paragraph}</p>
                {content.text.search ? (
                  <Search border={true} />
                ) : (
                  <Button
                    href={content.text.buttonUrl}
                    size="lg"
                    type="primary"
                  >
                    {content.text.buttonText}
                  </Button>
                )}
              </div>
            </Column>
          </Columns>
        );
      })}
    </>
  );
};

export default TwoColumns;