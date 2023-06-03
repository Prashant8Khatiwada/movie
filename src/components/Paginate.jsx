import React from "react";
import { Pagination } from "@mui/material";
import "./Pagination.css";

function Paginate({ totalPages, currentPage, handlePageChange }) {
  return (
    <div className="paginate-container">
      <Pagination
        className="pagination"
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
      />
    </div>
  );
}

export default Paginate;
