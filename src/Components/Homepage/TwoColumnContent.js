import Columns from "../../UI/Columns/Columns";
import Column from "../../UI/Columns/Column";

const twoColumnsContent = [
  {
    columns: "2",
    content: ["Image", "Text"],
  },
  {
    columns: "2",
    content: ["Text", "Image"],
  },
  {
    columns: "2",
    content: ["Image", "Text"],
  },
  {
    columns: "2",
    content: ["Text", "Image"],
  },
];

const TwoColumns = () => {
  return (
    <>
      {twoColumnsContent.map(({ columns, content }, idx) => {
        return (
          <Columns key={idx}>
            {content.map((item, idx) => {
              return (
                <Column columns={columns} key={idx}>
                  {item}
                </Column>
              );
            })}
          </Columns>
        );
      })}
    </>
  );
};

export default TwoColumns;