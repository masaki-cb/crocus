import logo from "./logo.svg";
import "./App.css";
import { useTable, Column } from "react-table";

function App() {
  const columns: Column<Data>[] = [
    {
      Header: "名前",
      accessor: "name",
    },
    {
      Header: "年齢",
      accessor: "age",
    },
  ];
  interface Data {
    name: string;
    age: number;
  }

  const data: Data[] = [
    {
      name: 'John',
      age: 23
    },
    {
      name: 'Jane',
      age: 26
    }
  ];

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable<Data>({ columns, data });


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
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
