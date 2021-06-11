import { useMemo } from "react";
import { useTable, Column, useSortBy, useBlockLayout } from "react-table";
import styles from "./CriticTable.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSort,
  faSortAlphaUp,
  faSortAlphaDownAlt,
} from "@fortawesome/free-solid-svg-icons";
// FIXME マルチソートが使いにくい
// FIXME 列幅調整
type Data = {
  pieceID: string;
  playerID: string;
  criticID: string;
  critiqueFileName: string;
  content: string;
  Q1:string;
  Q2:string;
  Q3:string;
  Q4:string;
  Q5:string;
  Q6:string;
  Q7:string;
  Q8:string;
  Q9:string;
};

const columns: Column<Data>[] = [
  { Header: "pieceID", accessor: "pieceID" },
  { Header: "playerID", accessor: "playerID" },
  { Header: "criticID", accessor: "criticID" },
  {Header:"Q1",accessor:"Q1"},
  {Header:"Q2",accessor:"Q2"},
  {Header:"Q3",accessor:"Q3"},
  {Header:"Q4",accessor:"Q4"},
  {Header:"Q5",accessor:"Q5"},
  {Header:"Q6",accessor:"Q6"},
  {Header:"Q7",accessor:"Q7"},
  {Header:"Q8",accessor:"Q8"},
  {Header:"Q9",accessor:"Q9"},
];
type Props = {
  onRowClick: (param: Data) => void;
  allData: Data[];
  currentItem: Data;
};

const CriticTable = ({ allData, onRowClick, currentItem }: Props) => {
  const defaultColumn = useMemo(
    () => ({
      maxWidth: 300,
      minWidth: 100,
    }),
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<Data>(
      {
        columns,
        data: allData,
        defaultColumn,
        // isMultiSortEvent: (me: React.MouseEvent) => {
        //   return true;
        // },
      },
      useSortBy,
      useBlockLayout
    );

  const isActive = (row: Data) => {
    return (
      row.pieceID === currentItem.pieceID &&
      row.playerID === currentItem.playerID &&
      row.criticID === currentItem.criticID
    );
  };
  return (
    <div className={`card`} style={{ height: "100%" }}>
      <div className={`card-content ${styles.cardContent}`}>
        <table className="table is-hoverable" {...getTableProps()}>
          <thead className={styles.thead}>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <FontAwesomeIcon
                            icon={faSortAlphaDownAlt}
                            style={{ marginLeft: "0.5rem" }}
                            className="has-text-primary"
                          />
                        ) : (
                          <FontAwesomeIcon
                            icon={faSortAlphaUp}
                            style={{ marginLeft: "0.5rem" }}
                            className="has-text-primary"
                          />
                        )
                      ) : (
                        <FontAwesomeIcon
                          icon={faSort}
                          style={{ marginLeft: "0.5rem" }}
                        />
                      )}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className={styles.tbody}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  onClick={() => onRowClick(row.original)}
                  className={
                    isActive(row.original) ? "has-background-primary" : ""
                  }
                >
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
      </div>
    </div>
  );
};
export default CriticTable;
