import React from "react";
import { Pagination } from "react-bootstrap";
import { useSelector } from "react-redux";

const PaginationComp = ({ totalPage, handlePaginationClick, currentPage }) => {
  return (
    <div>
      <Pagination>
        <Pagination.First onClick={() => handlePaginationClick("first")} />
        <Pagination.Prev onClick={() => handlePaginationClick("prev")} />

        <Pagination.Item active>{currentPage}</Pagination.Item>

        <Pagination.Next onClick={() => handlePaginationClick("next")} />
        <Pagination.Last onClick={() => handlePaginationClick("last")} />
      </Pagination>
    </div>
  );
};

export default PaginationComp;
