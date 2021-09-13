import React from "react";
import classes from "./PropertyHistoryTable.module.css";
import NumberFormat from "react-number-format";

const PropertyHistoryTable = (props) => {
  return (
    <div className={classes.propertyHistory}>
      <h2>{props.header}</h2>
      <table className={classes.propertyHistoryTable} width="100%">
        <thead>
          <tr className={classes.historyTableRow}>
            {props.headers.map((value, idx) => {
              const alignment =
                props.header === "Price History"
                  ? idx === 2 || idx === 3
                    ? "center"
                    : "left"
                  : idx !== 0
                  ? "center"
                  : "left";

              return (
                <th
                  align={alignment}
                  className={`${classes.historyTableCell} ${classes.historyTableHeader}`}
                  key={`header${idx}`}
                >
                  {value}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {props.header === "Price History"
            ? props.history.map(
                (
                  {
                    event_name,
                    date,
                    price,
                    price_range_min,
                    price_range_max,
                    price_changed,
                    sqft,
                    datasource_name,
                    source,
                  },
                  idx
                ) => {
                  const dateString = new Date(date);

                  return (
                    <tr className={classes.historyTableRow} key={`price${idx}`}>
                      <td className={classes.historyTableCell}>
                        {dateString.toLocaleDateString()}
                      </td>
                      <td className={classes.historyTableCell}>{event_name}</td>
                      <td className={classes.historyTableCell} align="center">
                        {price !== "" ? (
                          <NumberFormat
                            value={price}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"$"}
                            renderText={(formattedValue) => (
                              <span>{formattedValue}</span>
                            )}
                          />
                        ) : (
                          "-"
                        )}
                      </td>
                      <td className={classes.historyTableCell} align="center">
                        {price !== "" ? (
                          <NumberFormat
                            value={price / sqft}
                            displayType={"text"}
                            decimalScale={2}
                            thousandSeparator={true}
                            prefix={"$"}
                            renderText={(formattedValue) => (
                              <span>{formattedValue}</span>
                            )}
                          />
                        ) : (
                          "-"
                        )}
                      </td>
                      <td className={classes.historyTableCell}>
                        {datasource_name !== "" ? datasource_name : source}
                      </td>
                    </tr>
                  );
                }
              )
            : props.history.map(({ assessment, year, tax }, idx) => {
                return (
                  <>
                    {assessment !== undefined && (
                      <tr
                        className={classes.historyTableRow}
                        key={`tax${idx}`}
                      >
                        <td className={classes.historyTableCell}>{year}</td>
                        <td className={classes.historyTableCell}>
                          <NumberFormat
                            value={tax}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"$"}
                            renderText={(formattedValue) => (
                              <span>{formattedValue}</span>
                            )}
                          />
                        </td>
                        <td className={classes.historyTableCell} align="center">
                          <NumberFormat
                            value={assessment.land}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"$"}
                            renderText={(formattedValue) => (
                              <span>{formattedValue}</span>
                            )}
                          />
                        </td>
                        <td className={classes.historyTableCell} align="center">
                          +
                        </td>
                        <td className={classes.historyTableCell} align="center">
                          <NumberFormat
                            value={assessment.building}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"$"}
                            renderText={(formattedValue) => (
                              <span>{formattedValue}</span>
                            )}
                          />
                        </td>
                        <td className={classes.historyTableCell} align="center">
                          =
                        </td>
                        <td className={classes.historyTableCell} align="center">
                          <NumberFormat
                            value={assessment.total}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"$"}
                            renderText={(formattedValue) => (
                              <span>{formattedValue}</span>
                            )}
                          />
                        </td>
                      </tr>
                    )}
                  </>
                );
              })}
        </tbody>
      </table>
    </div>
  );
};

export default PropertyHistoryTable;
