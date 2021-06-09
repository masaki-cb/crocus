import logo from "./logo.svg";
import data from "./data.json";
import "./App.css";
import { useTable, Column } from "react-table";

function App() {
  const columns: Column<Data>[] = [
    { Header: "pieceID", accessor: "pieceID" },
    { Header: "playerID", accessor: "playerID" },
    { Header: "criticID", accessor: "criticID" },
    { Header: "critiqueFileName", accessor: "critiqueFileName" },
    { Header: "content", accessor: "content" },
  ];
  interface Data {
    pieceID: string;
    playerID: string;
    criticID: string;
    critiqueFileName: string;
    content: string;
  }

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<Data>({ columns, data });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
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
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
