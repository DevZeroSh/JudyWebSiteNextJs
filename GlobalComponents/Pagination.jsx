import { useTranslations } from "next-intl";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  const { t } = useTranslation();
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getPageButton = (page, isCurrent = false) => (
    <li className="count-page" key={page}>
      <button onClick={() => goToPage(page)}>
        <Link href="" className={isCurrent ? "current" : ""}>
          <span>{String(page).padStart(2, "0")}</span>
        </Link>
      </button>
    </li>
  );

  return (
    <div className="pagination-wrapper centred">
      <ul className="pagination clearfix">
        {/* Prev */}
        <li className="prev-btn">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage <= 1}
          >
            <Link href="">
              <i className="flaticon-right-chevron" />
              {t("PrevPage")}
            </Link>
          </button>
        </li>

        {/* Previous Page Number */}
        {currentPage > 1 && getPageButton(currentPage - 1)}

        {/* Current Page */}
        {getPageButton(currentPage, true)}

        {/* Next Page Number */}
        {currentPage < totalPages && getPageButton(currentPage + 1)}

        {/* Next */}
        <li className="next-btn">
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage >= totalPages}
          >
            <Link href="">
              {t("NextPage")} <i className="flaticon-right-chevron" />
            </Link>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
