import { Bar } from "react-chartjs-2";

function Chart({ dataSet, searchStr }: any) {
  let salaries: number[] = []; //Salary list that constitute the y-axis
    let labels: string[] = []; //Labels for the x-axis

  const filteredData = dataSet.filter((e: any) =>
    e.location.toLowerCase().includes(searchStr.toLowerCase())
  );

  filteredData.forEach((e: any) => {
    salaries.push(e.avgCurrSalary);
    labels.push(e.location);
  });

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Average Current Salary in USD",
        data: salaries,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-11/12 sm:w-1/2">
        <Bar type="bar" data={data} />
      </div>
    </div>
  );
}

export default Chart;
