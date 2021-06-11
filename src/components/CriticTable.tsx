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
  Q1: string;
  Q2: string;
  Q3: string;
  Q4: string;
  Q5: string;
  Q6: string;
  Q7: string;
  Q8: string;
  Q9: string;
};

const columns: Column<Data>[] = [
  { Header: "pieceID", accessor: "pieceID" },
  { Header: "playerID", accessor: "playerID" },
  { Header: "criticID", accessor: "criticID" },
  {
    Header: (
      <>
        読みやすいと思いますか？
        <br />
        <span style={{ fontSize: "8px" }}>(10:読みやすい-0:読みにくい)</span>
      </>
    ),
    accessor: "Q1",
  },
  {
    Header: (
      <>
        わかりやすいと思いますか？
        <br />
        <span style={{ fontSize: "8px" }}>
          (10:わかりやすい-0:わかりにくい)
        </span>
      </>
    ),
    accessor: "Q2",
  },
  {
    Header: (
      <>
        今後の演奏に役に立つと思いますか？
        <br />
        <span style={{ fontSize: "8px" }}>(10:役に立つ-0:役に立たない)</span>
      </>
    ),
    accessor: "Q3",
  },
  {
    Header: (
      <>
        今後の演奏に関連しない記載があると思いますか？
        <br />
        <span style={{ fontSize: "8px" }}>
          (10:関連しない記載はない-0:関連しない記載がある
        </span>
        )
      </>
    ),
    accessor: "Q4",
  },
  {
    Header: (
      <>
        曖昧な記載だと思いますか？
        <br />
        <span style={{ fontSize: "8px" }}>(10:曖昧でない-0:曖昧である)</span>
      </>
    ),
    accessor: "Q5",
  },
  {
    Header: (
      <>
        今後の演奏に関連する記載が全て書かれていると思いますか？
        <br />
        <span style={{ fontSize: "8px" }}>
          (10:書かれている-0:書かれていない)
        </span>
      </>
    ),
    accessor: "Q6",
  },
  {
    Header: (
      <>
        矛盾がないと思いますか？
        <br />
        <span style={{ fontSize: "8px" }}>(10:矛盾はない-0:矛盾がある)</span>
      </>
    ),
    accessor: "Q7",
  },
  {
    Header: (
      <>
        記載されている内容は演奏を聴くことで検証できると思いますか？
        <br />
        <span style={{ fontSize: "8px" }}>(10:検証できる-0:検証できない)</span>
      </>
    ),
    accessor: "Q8",
  },
  {
    Header: (
      <>
        記載されている内容から該当箇所を楽譜で参照できると思いますか？
        <br />
        <span style={{ fontSize: "8px" }}>(10:参照できる-0:参照できない)</span>
      </>
    ),
    accessor: "Q9",
  },
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
                    <div className="columns is-mobile">
                      <div className="column is-four-fifths p-0">
                        {column.render("Header")}
                      </div>
                      <div className="column p-0">
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
  );
};
export default CriticTable;
