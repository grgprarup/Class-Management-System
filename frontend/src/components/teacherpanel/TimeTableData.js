import React, { useEffect, useState, useMemo } from "react";
import { SelectColumnFilter } from "../common/Table/filters";
import TableContainer from "../common/Table/TableContainer";

import { timeTable_value } from "../values/AdminPanel/TimetableValues";

const TimeTableData = () => {
  const data = timeTable_value;

  const columns = useMemo(
    () => [
      {
        Header: "SN",
        SearchAble: false,
        Cell: ({ row: { index } }) => {
          return index + 1;
        },
      },
      {
        Header: "Day",
        accessor: "day",
        SearchAble: true,
        Filter: SelectColumnFilter,
        filter: "includes",
      },
      {
        Header: "Time",
        accessor: "time",
        SearchAble: true,
      },
      {
        Header: "Class",
        accessor: "classes",
        SearchAble: true,
      },
      {
        Header: "Section",
        accessor: "section",
        SearchAble: true,
      },
      {
        Header: "Teacher",
        accessor: "teacher",
        SearchAble: true,
        Filter: SelectColumnFilter,
        filter: "includes",
      },
      {
        Header: "Subject",
        accessor: "subject",
        SearchAble: true,
      },
    ],
    []
  );

  return (
    <>
      <div style={{ margin: "20px 30px", marginBottom: 50 }}>
        <TableContainer columns={columns} data={data} />
      </div>
    </>
  );
};

export default TimeTableData;