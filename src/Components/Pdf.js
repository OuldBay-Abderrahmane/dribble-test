import React, { useState } from "react";
import { Page } from "react-pdf";
import { Document } from "react-pdf/dist/esm/entry.webpack";
import file from "../Blanc Noir Minimalist Chic Bordure Dîner Carte.pdf";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
function Pdf() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  function changePage(value) {
    if (value === "increment") {
      if (pageNumber === numPages) {
        setPageNumber(0);
      }
      setPageNumber((pageNumber) => pageNumber + 1);
    } else if (value === "decrement") {
      if (pageNumber === 1) {
        setPageNumber(numPages + 1);
      }
      setPageNumber((pageNumber) => pageNumber - 1);
    }
  }
  return (
    <div className="pdf">
      <ArrowBackIcon
        className="left"
        style={{ fontSize: "30px" }}
        onClick={() => changePage("decrement")}
      ></ArrowBackIcon>
      <div className="content">
        <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
      <ArrowForwardIcon
        className="right"
        style={{ fontSize: "30px" }}
        onClick={() => changePage("increment")}
      ></ArrowForwardIcon>
    </div>
  );
}
export default Pdf;
