import { useState } from "react";

import { useTable, Column, useSortBy, Row } from "react-table";
import data from "./data.json";
import "./App.module.scss";

interface Data {
  pieceID: string;
  playerID: string;
  criticID: string;
  critiqueFileName: string;
  content: string;
}

const columns: Column<Data>[] = [
  { Header: "pieceID", accessor: "pieceID" },
  { Header: "playerID", accessor: "playerID" },
  { Header: "criticID", accessor: "criticID" },
];

const App = () => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<Data>({ columns, data }, useSortBy);

  const [currentCriticID, setCurrentCriticID] = useState(data[0].criticID)

  const viewDetail = (row: Row<Data>) => {
    console.log(row.cells);
  };

  return (
    <div className="columns">
      <table className="column" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {console.log(column.getSortByToggleProps())}
                  {column.render("Header")}
                  <span>
                    {" "}
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}{" "}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} onClick={() => setCurrentCriticID(row.original.criticID)}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="column">
        {currentCriticID}
      </div>
    </div>
  );
};
export default App;
