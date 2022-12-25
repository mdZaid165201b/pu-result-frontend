import React from "react";
import "./result.css";
import ResultTable from "./ResultTable";
import Error from "./Error";

function Result({ data }) {
  console.log(data);
  return (
    <center>
      {data === undefined ? (
        <Error />
      ) : (
        data.map((dataObj, index) => {
          return <ResultTable data={dataObj} />;
        })
      )}
    </center>
  );
}

export default Result;
