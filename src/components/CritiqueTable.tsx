import { useMemo } from "react";
import { useTable, Column, useSortBy, useBlockLayout } from "react-table";
import styles from "./CritiqueTable.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSort,
  faSortUp,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import { CritiqueRecord } from "../types";
// FIXME 列幅調整

const columns: Column<CritiqueRecord>[] = [
  { Header: "pieceID", accessor: "pieceID" },
  { Header: "playerID", accessor: "playerID" },
  { Header: "criticID", accessor: "criticID" },
  {
    Header: (
      <>
        Q1:読みやすいと思いますか？
        <br />
        <span style={{ fontSize: "8px" }}>(10:読みやすい-0:読みにくい)</span>
      </>
    ),
    accessor: (row) => row.Q1.toFixed(1),
    id: "Q1",
    sortType: "number",
  },
  {
    Header: (
      <>
        Q2:わかりやすいと思いますか？
        <br />
        <span style={{ fontSize: "8px" }}>
          (10:わかりやすい-0:わかりにくい)
        </span>
      </>
    ),
    id: "Q2",
    accessor: (row) => row.Q2.toFixed(1),
    sortType: "number",
  },
  {
    Header: (
      <>
        Q3:今後の演奏に役に立つと思いますか？
        <br />
        <span style={{ fontSize: "8px" }}>(10:役に立つ-0:役に立たない)</span>
      </>
    ),
    accessor: (row) => row.Q3.toFixed(1),
    id: "Q3",
    sortType: "number",
  },
  {
    Header: (
      <>
        Q4:今後の演奏に関連しない記載があると思いますか？
        <br />
        <span style={{ fontSize: "8px" }}>
          (10:関連しない記載はない-0:関連しない記載がある)
        </span>
      </>
    ),
    accessor: (row) => row.Q4.toFixed(1),
    id: "Q4",
    sortType: "number",
  },
  {
    Header: (
      <>
        Q5:曖昧な記載だと思いますか？
        <br />
        <span style={{ fontSize: "8px" }}>(10:曖昧でない-0:曖昧である)</span>
      </>
    ),
    accessor: (row) => row.Q5.toFixed(1),
    id: "Q5",
    sortType: "number",
  },
  {
    Header: (
      <>
        Q6:今後の演奏に関連する記載が全て書かれていると思いますか？
        <br />
        <span style={{ fontSize: "8px" }}>
          (10:書かれている-0:書かれていない)
        </span>
      </>
    ),
    accessor: (row) => row.Q6.toFixed(1),
    id: "Q6",
    sortType: "number",
  },
  {
    Header: (
      <>
        Q7:矛盾がないと思いますか？
        <br />
        <span style={{ fontSize: "8px" }}>(10:矛盾はない-0:矛盾がある)</span>
      </>
    ),
    accessor: (row) => row.Q7.toFixed(1),
    id: "Q7",
    sortType: "number",
  },
  {
    Header: (
      <>
        Q8:記載されている内容は演奏を聴くことで検証できると思いますか？
        <br />
        <span style={{ fontSize: "8px" }}>(10:検証できる-0:検証できない)</span>
      </>
    ),
    accessor: (row) => row.Q8.toFixed(1),
    id: "Q8",
    sortType: "number",
  },
  {
    Header: (
      <>
        Q9:記載されている内容から該当箇所を楽譜で参照できると思いますか？
        <br />
        <span style={{ fontSize: "8px" }}>(10:参照できる-0:参照できない)</span>
      </>
    ),
    accessor: (row) => row.Q9.toFixed(1),
    id: "Q9",
    sortType: "number",
  },
];
type Props = {
  onRowClick: (param: CritiqueRecord) => void;
  allData: CritiqueRecord[];
  currentItem: CritiqueRecord;
};

const CritiqueTable = ({ allData, onRowClick, currentItem }: Props) => {
  const defaultColumn = useMemo(
    () => ({
      maxWidth: 300,
      minWidth: 100,
    }),
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<CritiqueRecord>(
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

  const isActive = (row: CritiqueRecord) => {
    return (
      row.pieceID === currentItem.pieceID &&
      row.playerID === currentItem.playerID &&
      row.criticID === currentItem.criticID
    );
  };
  return (
    <div className={`card`} style={{ height: "100%" }}>
      <div className={`card-content ${styles.cardContent}`}>
        <h2 className="title is-4">Critique List</h2>
        <p className="is-size-7">
          Multi-sort applies when shift key is pressed
        </p>
        <div className={styles.tableWrapper}>
          <table className={`table is-hoverable`} {...getTableProps()}>
            <thead className={styles.thead}>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      <div className={`columns is-mobile ${styles.columns}`}>
                        <div className="column is-11 px-0">
                          {column.render("Header")}
                        </div>
                        <div className="column is-1 px-1">
                          {column.isSorted ? (
                            column.isSortedDesc ? (
                              <FontAwesomeIcon
                                icon={faSortDown}
                                className="has-text-primary"
                              />
                            ) : (
                              <FontAwesomeIcon
                                icon={faSortUp}
                                className="has-text-primary"
                              />
                            )
                          ) : (
                            <FontAwesomeIcon icon={faSort} />
                          )}
                        </div>
                      </div>
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
    </div>
  );
};
export default CritiqueTable;
