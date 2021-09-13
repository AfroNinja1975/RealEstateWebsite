import React from "react";
import { PieChart, Pie } from "recharts";
import NumberFormat from "react-number-format";
import classes from "./MonthlyPaymentGraph.module.css";
import ToolTip from "../../../UI/ToolTip/ToolTip";

const MonthlyPaymentGraph = (props) => {
  const paymentValues = props.data;
  
  const data = [
    {
      fill: "rgb(63, 196, 120)",
      fillValue: "green",
      name: "Principal & Interest",
      value: paymentValues["principal_and_interest"],
    },
    {
      fill: "rgb(179, 214, 117)",
      fillValue: "light-green",
      name: "Property Tax",
      value: paymentValues["monthly_property_taxes"],
    },
    {
      fill: "rgb(146, 160, 229)",
      fillValue: "purple",
      name: "Home Insurance",
      value: paymentValues["monthly_home_insurance"],
    },
    {
      fill: "rgb(123, 205, 243)",
      fillValue: "blue",
      name: "HOA",
      value: paymentValues["hoa_fees"],
    },
    {
      fill: "rgb(217, 217, 217)",
      fillValue: "gray",
      name: "Mortgage Insurance",
      value: paymentValues["monthly_mortgage_insurance"],
    },
  ];

  const monthlyPayment = paymentValues["monthly_payment"];

  return (
    <div className={classes.chart}>
      <div className={classes.chartWrapper}>
        <PieChart width={250} height={250}>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={125}
            innerRadius={90}
            fill={data.fill}
          />
        </PieChart>
        <div className={classes.chartOverlay}>
          <h2>
            <NumberFormat
              value={monthlyPayment}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
              renderText={(formattedValue) => <span>{formattedValue}</span>}
            />
          </h2>
          <p>Monthly</p>
        </div>
      </div>
      <div className={classes.chartLegend}>
        {data.map(({fillValue, name, value}, idx) => {
          return (
            <div className={classes.legendRow} key={idx}>
              <div className={classes.legendKey}>
                <div
                  className={`${classes.legendMarker} ${
                    fillValue === "green" && classes.legendMarkerGreen
                  } ${
                    fillValue === "light-green" &&
                    classes.legendMarkerLightGreen
                  } ${fillValue === "purple" && classes.legendMarkerPurple} ${
                    fillValue === "blue" && classes.legendMarkerBlue
                  } ${fillValue === "gray" && classes.legendMarkerGray}`}
                ></div>
                <div className={classes.legendText}>
                  <p>{name}</p>
                  {name === "Property Tax" && (
                    <ToolTip
                      dataFor="legend-tooltip-Property Tax"
                      message="Approximate monthly property tax amount is an estimate only and is based on one or more of the following: the property tax estimate provided by the local multiple listing service, past property taxes assessed, and average state or county tax rate. The amount displayed may not take into account any increases or decreases that may occur as the result of a change of ownership. Actual property tax amount will differ. Contact your REALTOR® directly for more information."
                    />
                  )}
                </div>
              </div>
              <div>
                <NumberFormat
                  value={value}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                  renderText={(formattedValue) => <span>{formattedValue}</span>}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MonthlyPaymentGraph;
