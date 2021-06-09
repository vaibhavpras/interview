import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import TableView from "./TableView";
import ChartView from "./ChartView";
import rawData from "../EmployeeDataset.json";



function Home() {

  //State of the resultant object obtained after processing rawData
  const [dataState, setDatasetState] = useState([{ location: "", avgSalary: null },]); 
  //Controller for search bar
  const [searchState, setSearchState] = useState("");

  const calculateAvgSalaryByLocation = (data: any) => {
    let countData: any = {}; //the number of times each location occurs in the data set eg: {"USA": 120, "UK": 233.....}
    let salarySumData: any = {}; //the sum of all salaries grouped by location eg: {"USA": 4500904599, "UK": 2323232328....}
    data.forEach((obj: any) => {
      if (salarySumData[obj.location]) {
        salarySumData[obj.location] += parseInt(
          obj.currSalary.replace("$", "").replace(",", "") //remove $ and , from string and parse as int
        );
        countData[obj.location] ? countData[obj.location]++ : (countData[obj.location] = 1);
      } else {
        salarySumData[obj.location] = parseInt(
          obj.currSalary.replace("$", "").replace(",", "") 
        );
        countData[obj.location] ? countData[obj.location]++ : (countData[obj.location] = 1);
      }
    });
    //Array of objects that contains location name andaverage salaries grouped by location eg: [{"location": "USA", "avgCurrSalary": 34550}....]
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
      <Tabs className="w-full">
        <TabList>
          <Tab>TableView</Tab>
          <Tab>ChartView</Tab>
        </TabList>
        <TabPanel>
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
        </TabPanel>
        <TabPanel>
          <div className="w-full  mb-10 mt-10 flex items-center justify-center">
            <div className="w-11/12 sm:w-1/4">
              <input
                type="text"
                className="h-14 w-full pl-10 rounded-lg z-0 border-2 border-gray-300 focus:shadow focus:outline-none"
                placeholder="Search..."
                onChange={handleSearch}
              />
            </div>
          </div>
          <ChartView dataSet={dataState} searchStr={searchState} />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Home;