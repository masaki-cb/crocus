import { useMemo, useState, useEffect } from "react";

import { useTable, Column, useSortBy, useBlockLayout } from "react-table";
import { useTranslation } from "react-i18next";
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
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type Props = {
  onRowClick: (param: CritiqueRecord) => void;
  allData: CritiqueRecord[];
  currentItem: CritiqueRecord;
  lang: "ja" | "en";
};

const CritiqueTable = ({ allData, onRowClick, currentItem, lang }: Props) => {
  const [t, i18n] = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  const defaultColumn = useMemo(
    () => ({
      maxWidth: 300,
      width: 135,
      minWidth: 100,
    }),
    []
  );

  const columns = useMemo<Column<CritiqueRecord>[]>(
    () => [
      { Header: t("曲ID").toString(), accessor: "pieceID", width: 150 },
      { Header: t("演奏者ID").toString(), accessor: "playerID" },
      { Header: t("講評者ID").toString(), accessor: "criticID" },
      ...critiqueQuestionIDs.map((item) => {
        const itemContent = {
          Header: (
            <span style={{ whiteSpace: "nowrap" }}>
              {i18n.language==='ja'?`${item}: `:''}{`${critiqueQuestion(i18n)[item].bodyShort}`}
            </span>
          ),
          accessor: (row: CritiqueRecord): string => row[item].toFixed(1),
          id: item,
          sortType: "number",
        };
        return itemContent;
      }),
    ],
    [t, i18n]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<CritiqueRecord>(
      {
        columns,
        data: allData,
        defaultColumn,
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
        <h2 className="title is-4">
          {t("講評文書リスト")}
          <span className="is-size-7 ml-2 has-text-weight-normal">
            {t("行を選択することで詳細を見ることができます。")}
            {t("シフトキーを押した際マルチソートになります。")}
          </span>
        </h2>
        <div className={styles.tableWrapper}>
          <table className={`table is-hoverable`} {...getTableProps()}>
            <thead className={`${styles.thead} ${lang==='en'?'is-size-7':''}`}>
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
                              {critiqueQuestion(i18n)[openPopupID].body}
                              <br />
                              <span className="is-size-7">
                                {getCritiqueQuestionDescription(
                                  critiqueQuestion(i18n)[openPopupID]
                                )}
                              </span>
                            </p>
                          </div>
                        ) : null}
                        <div className="column is-11 px-0">
                          {column.render("Header")}
                        </div>
                        <div className="column is-1 px-1">
                          {column.isSorted ? (
                            column.isSortedDesc ? (
                              <FontAwesomeIcon
                                icon={faSortDown as IconProp}
                                className="has-text-primary"
                              />
                            ) : (
                              <FontAwesomeIcon
                                icon={faSortUp as IconProp}
                                className="has-text-primary"
                              />
                            )
                          ) : (
                            <FontAwesomeIcon icon={faSort as IconProp} />
                          )}
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody
              {...getTableBodyProps()}
              className={`${styles.tbody} has-text-centered`}
            >
              {rows.map((row, i) => {
                prepareRow(row);
                return (
                  <tr
                    {...row.getRowProps()}
                    onClick={() => onRowClick(row.original)}
                    className={`${
                      isActive(row.original)
                        ? "has-background-primary has-text-light"
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
