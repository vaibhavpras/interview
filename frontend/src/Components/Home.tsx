import React, { useEffect, useState } from "react";

import rawData from "../EmployeeDataset.json";
import TableView from "./TableView";

function Home() {

  const [dataState, setDatasetState] = useState([
    { location: "", avgSalary: null },
  ]);

  const calculateAvgSalaryByLocation = (data: any) => {
    let countData: any = {};
    let salarySumData: any = {};
    data.forEach((obj: any) => {
      if (salarySumData[obj.location]) {
        salarySumData[obj.location] += parseInt(
          obj.currSalary.replace("$", "").replace(",", "")
        );
        countData[obj.location]
          ? countData[obj.location]++
          : (countData[obj.location] = 1);
      } else {
        salarySumData[obj.location] = parseInt(
          obj.currSalary.replace("$", "").replace(",", "")
        );
        countData[obj.location]
          ? countData[obj.location]++
          : (countData[obj.location] = 1);
      }
    });

    let avgSalaryData: any = [];

    Object.keys(salarySumData).forEach((key) =>
      avgSalaryData.push({
        location: key,
        avgCurrSalary: (salarySumData[key] / countData[key]).toFixed(2),
      })
    );

    setDatasetState(avgSalaryData);
  };

  useEffect(() => {
    calculateAvgSalaryByLocation(rawData);
  }, []);

  return (
    <div className="mt-10 w-full flex flex-col items-center justify-center items-center ">
      <TableView dataSet={dataState} />
    </div>
  );

}

export default Home;
