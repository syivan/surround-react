import React from "react";

const Paginate = ({
  postsPerPage,
  totalPosts,
  currentPage,
  paginate = null,
  previousPage,
  nextPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <section className="pagination-container">
      <ul className="pagination">
        <li onClick={previousPage} className="page-number">
          Prev
        </li>
        {paginate !== null &&
          pageNumbers.map((number) => (
            <li
              key={number}
              onClick={() => paginate(number)}
              className={
                "page-number " + (number === currentPage ? "active" : "")
              }
            >
              {number}
            </li>
          ))}
        <li onClick={nextPage} className="page-number">
          Next
        </li>
      </ul>
    </section>
  );
};

export default Paginate;
