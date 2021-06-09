import React, { useEffect, useState } from "react";

import rawData from "../EmployeeDataset.json";
import TableView from "./TableView";

function Home() {

  const [dataState, setDatasetState] = useState([
    { location: "", avgSalary: null },
  ]);
  const [searchState, setSearchState] = useState("");

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

  const handleSearch = (e: any) => {
    setSearchState(e.target.value);
  };

  useEffect(() => {
    calculateAvgSalaryByLocation(rawData);
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center items-center ">
      <div className="w-full mb-10 mt-10 flex items-center justify-center">
            <div className="w-11/12 sm:w-1/4">
              <input
                type="text"
                className="h-14 w-full pl-10 rounded-lg z-0 border-2 border-gray-300 focus:shadow focus:outline-none"
                placeholder="Search..."
                onChange={handleSearch}
              />
            </div>
          </div>
      <TableView dataSet={dataState} searchStr={searchState} />
    </div>
  );

}

export default Home;
