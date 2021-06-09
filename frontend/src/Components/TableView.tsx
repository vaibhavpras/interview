import React from "react";

function Table({ dataSet, searchStr }: any) {
  
  const filteredData = dataSet.filter((e: any) =>
    e.location.toLowerCase().includes(searchStr.toLowerCase())
  );

  const filteredRows = filteredData.map((e: any) => {
    return (
      <tr>
        <td className="border-t-2 border-gray-200 px-4 py-3 bg-gray-100 text-black">
          {e.location}
        </td>
        <td className="border-t-2 border-gray-200 px-4 py-3 bg-gray-100 text-black">
          ${e.avgCurrSalary}
        </td>
      </tr>
    );
  });

  const total = filteredData.reduce((sum: number, item: any) => {
    return sum + parseInt(item.avgCurrSalary);
  }, 0);

  return (
    <div className="bg-grey-600 h-full w-full flex flex-wrap justify-center content-center text-white">
      <table className="table-auto w-2/4 text-center whitespace-no-wrap">
        <thead>
          <tr>
            <th className="px-4 py-3 title-font tracking-wider font-bold text-black text-sm bg-red-400 rounded-tl rounded-bl">
              Location
            </th>
            <th className="px-4 py-3 title-font tracking-wider font-bold text-black text-sm bg-red-400 rounded-tr rounded-br">
              Salary
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredRows}
          <tr>
            <td className="border-t-2 border-gray-200 px-4 py-3 bg-gray-100 text-black font-black">Total</td>
            <td className="border-t-2 border-gray-200 px-4 py-3 bg-gray-100 text-black font-black">${total.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;