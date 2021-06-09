import { useMemo } from "react";

import { useTable, Column, useSortBy } from "react-table";
import jsonData from "./data.json";
import "./App.css";

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
  { Header: "critiqueFileName", accessor: "critiqueFileName" },
  { Header: "content", accessor: "content" },
];


function App() {
  const data = useMemo(() => jsonData, []);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<Data>({ columns, data }, useSortBy);

  return (
    <table {...getTableProps()}>
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
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default App;
