import { useMemo, useState } from "react";
import { useTable, Column, useSortBy, useBlockLayout } from "react-table";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSort,
  faSortUp,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./CritiqueTable.module.scss";
import { CritiqueQuestionID, CritiqueRecord } from "../../types/Critique";
import { critiqueQuestionIDs, critiqueQuestion } from "../../consts/Critique";
import { getCritiqueQuestionDescription } from "../../utils/Critique";
// FIXME 列幅調整

const columns: Column<CritiqueRecord>[] = [
  { Header: "曲ID", accessor: "pieceID", width: 150 },
  { Header: "演奏者ID", accessor: "playerID" },
  { Header: "講評者ID", accessor: "criticID" },
  ...critiqueQuestionIDs.map((item) => {
    const itemContent = {
      Header: (
        <>
          {item}:{critiqueQuestion[item].bodyShort}
        </>
      ),
      accessor: (row: CritiqueRecord): string => row[item].toFixed(1),
      id: item,
      sortType: "number",
    };
    return itemContent;
  }),
];
// const items =

type Props = {
  onRowClick: (param: CritiqueRecord) => void;
  allData: CritiqueRecord[];
  currentItem: CritiqueRecord;
};

const CritiqueTable = ({ allData, onRowClick, currentItem }: Props) => {
  const defaultColumn = useMemo(
    () => ({
      maxWidth: 300,
      width: 130,
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

  const [openPopupID, setOpenPopupID] =
    useState<CritiqueQuestionID | null>(null);
  return (
    <div className={`card`} style={{ height: "100%" }}>
      <div className={`card-content ${styles.cardContent}`}>
        <h2 className="title is-4">批評リスト</h2>
        <p className="is-size-7">
          {/* Multi-sort applies when shift key is pressed */}
          シフトキーを押した際マルチソートになります。
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
                      <div
                        className={`columns is-mobile ${styles.columns} ${styles.isRelative}`}
                        onMouseEnter={() => {
                          if (
                            critiqueQuestionIDs.includes(
                              column.id as CritiqueQuestionID
                            )
                          )
                            setOpenPopupID(column.id as CritiqueQuestionID);
                        }}
                        onMouseLeave={() => setOpenPopupID(null)}
                      >
                        {column.id === openPopupID ? (
                          <div className={`${styles.toolChip} card p-2`}>
                            <p>
                              {critiqueQuestion[openPopupID].body}
                              <br />
                              <span className="is-size-7">
                                {getCritiqueQuestionDescription(
                                  critiqueQuestion[openPopupID]
                                )}
                              </span>
                            </p>
                          </div>
                        ) : (
                          ""
                        )}
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
                    className={`${
                      isActive(row.original)
                        ? "has-background-primary-light"
                        : ""
                    } is-clickable`}
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
