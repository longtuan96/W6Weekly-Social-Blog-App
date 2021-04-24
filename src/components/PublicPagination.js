import React from "react";
import Pagination from "react-pagination-library";

const PublicPagination = ({ page, setPage }) => {
  const changeCurrentPage = (numPage) => {
    setPage(numPage);
  };
  return (
    <>
      <div>
        <Pagination
          currentPage={page}
          totalPages={18}
          changeCurrentPage={changeCurrentPage}
          theme="square-i"
        />
      </div>
    </>
  );
};

export default PublicPagination;
