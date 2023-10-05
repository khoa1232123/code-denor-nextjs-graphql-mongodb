import { MetaInfo } from "@/gql/graphql";
import React, { Dispatch, useEffect, useState } from "react";

type Props = {
  page: number;
  setPage: Dispatch<React.SetStateAction<number>>;
  metaInfo?: MetaInfo | null;
};

const PaginationAdmin = ({ page, metaInfo, setPage }: Props) => {
  const [pageTotal, setPageTotal] = useState<number>(1);

  useEffect(() => {
    setPageTotal((prev) => metaInfo?.pageTotal || prev);
  }, [metaInfo]);

  return (
    <div className="pagination-area mt-20">
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-start  mb-0">
          {Array.from({ length: pageTotal }, (_, index) => index + 1).map(
            (it) => (
              <li
                className={`page-item ${page === it ? "active" : ""}`}
                key={it}
                onClick={() => setPage(it)}
              >
                <a className="page-link" href="#">
                  {it}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>
    </div>
  );
};

export default PaginationAdmin;
