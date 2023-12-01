const Pagination = ({ page, lastPage, setPage }) => {
  const scrollToTop = () => {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleFirstPage = () => {
    setPage(1);
    scrollToTop();
  };

  const handleNextPage = () => {
    if (page === lastPage) return;
    setPage((prevState) => prevState + 1);

    scrollToTop();
  };

  const handlePrevPage = () => {
    if (page === 1) return;
    setPage((prevState) => prevState - 1);

    scrollToTop();
  };

  const handleLastPage = () => {
    setPage(lastPage);
    scrollToTop();
  };

  return (
    <div className="flex gap-4 justify-center items-center py-4">
      {page !== 1 && (
        <button
          onClick={handleFirstPage}
          className="transition-all hover:text-owned-primary-500 disabled:text-owned-grey-200 disabled:cursor-not-allowed"
          disabled={page === 1}
        >
          First
        </button>
      )}
      <button
        onClick={handlePrevPage}
        className="transition-all hover:text-owned-primary-500 disabled:text-owned-grey-200 disabled:cursor-not-allowed"
        disabled={page === 1}
      >
        Prev
      </button>
      <span>
        {page} of {lastPage}
      </span>
      <button
        onClick={handleNextPage}
        className="transition-all hover:text-owned-primary-500 disabled:text-owned-grey-200 disabled:cursor-not-allowed"
        disabled={page === lastPage}
      >
        Next
      </button>
      {page !== lastPage && (
        <button
          onClick={handleLastPage}
          className="transition-all hover:text-owned-primary-500 disabled:text-owned-grey-200 disabled:cursor-not-allowed"
          disabled={page === lastPage}
        >
          Last
        </button>
      )}
    </div>
  );
};

export default Pagination;
