import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const PaginationBar = ({ page, setPage }) => {
  const handleNextPage = () => {
    if (page < 10) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };



  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={handlePreviousPage}
            className={page === 1 ? "opacity-50 pointer-events-none" : ""} // Disable the button if page is 1
            href="#"
          />
        </PaginationItem>

         <PaginationItem>
          {/* Button will be visible only if page is greater than 8 */}
          {page > 8 && (
            <PaginationLink onClick={() => setPage(1)} href="#">
              {1}
            </PaginationLink>
          )}
        </PaginationItem>

        <PaginationItem>
          {/* Add ellipsis if page is greater than 8 */}
          {page > 8 && <PaginationEllipsis />}
        </PaginationItem>

        <PaginationItem>
          {/* Disable the button if page is 1 */}
          {page > 1 && (
            <PaginationLink onClick={() => setPage(page - 1)} href="#">
              {page - 1}
            </PaginationLink>
          )}
        </PaginationItem>

        <PaginationItem>
          <PaginationLink
            isActive
            className="bg-red! border-none text-white hover:bg-red! hover:text-white! rounded-md"
            href="#"
          >
            {page}
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          {/* Disable the button if page is 10 */}
          {page + 1 < 10 && (
            <PaginationLink onClick={() => setPage(page + 1)} href="#">
              {page + 1}
            </PaginationLink>
          )}
        </PaginationItem>

        <PaginationItem>
          {/* Add ellipsis if page is less than 8 */}
          {page < 8 && <PaginationEllipsis />}
        </PaginationItem>

        <PaginationItem>
          {/* Button will be disabled if page is 10 */}
          {page !== 10 && (
            <PaginationLink onClick={() => setPage(10)} href="#">
              {10}
            </PaginationLink>
          )}
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            className={page === 10 ? "opacity-50 pointer-events-none" : ""} // Disable the button if page is 10
            onClick={handleNextPage}
            href="#"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationBar;
