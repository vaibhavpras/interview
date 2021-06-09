import React from "react";

function Table({ dataSet }: any) {
  

  const rows = dataSet.map((e: any) => {
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
          {rows}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
