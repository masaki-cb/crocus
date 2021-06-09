import { useTable, Column, useSortBy } from "react-table";
import styles from "./CriticTable.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSort,
  faSortAlphaUp,
  faSortAlphaDownAlt,
} from "@fortawesome/free-solid-svg-icons";

type Data = {
  pieceID: string;
  playerID: string;
  criticID: string;
  critiqueFileName: string;
  content: string;
};

const columns: Column<Data>[] = [
  { Header: "pieceID", accessor: "pieceID" },
  { Header: "playerID", accessor: "playerID" },
  { Header: "criticID", accessor: "criticID" },
];
type Props = {
  onRowClick: (param: Data) => void;
  allData: Data[];
};
const CriticTable = ({ allData, onRowClick }: Props) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<Data>({ columns, data: allData }, useSortBy);
  return (
    <table className="table is-hoverable" {...getTableProps()}>
      <thead className={styles.hoge}>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {console.log(column.getSortByToggleProps())}
                {column.render("Header")}
                <span>
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <FontAwesomeIcon icon={faSortAlphaDownAlt} />
                    ) : (
                      <FontAwesomeIcon icon={faSortAlphaUp} />
                    )
                  ) : (
                    <FontAwesomeIcon icon={faSort} />
                  )}
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
            <tr {...row.getRowProps()} onClick={() => onRowClick(row.original)}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default CriticTable;
