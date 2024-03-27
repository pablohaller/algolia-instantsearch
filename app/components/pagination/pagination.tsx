import { usePagination, UsePaginationProps } from "react-instantsearch";
import { isModifierClick, scrollToTop } from "@/app/utils/generic";

const Pagination = (props: UsePaginationProps) => {
  const { pages, currentRefinement, nbPages, isFirstPage, isLastPage, refine } =
    usePagination(props);
  const firstPageIndex = 0;
  const previousPageIndex = currentRefinement - 1;
  const nextPageIndex = currentRefinement + 1;
  const lastPageIndex = nbPages - 1;

  return (
    <ul className="flex gap-2">
      <PaginationItem
        isDisabled={isFirstPage}
        onClick={() => refine(firstPageIndex)}>
        «
      </PaginationItem>
      <PaginationItem
        isDisabled={isFirstPage}
        onClick={() => refine(previousPageIndex)}>
        ‹
      </PaginationItem>
      {pages.map((page) => {
        const label = page + 1;

        return (
          <PaginationItem
            key={page}
            isDisabled={false}
            aria-label={`Page ${label}`}
            onClick={() => refine(page)}
            isSelected={currentRefinement === page}>
            {label}
          </PaginationItem>
        );
      })}
      <PaginationItem
        isDisabled={isLastPage}
        onClick={() => refine(nextPageIndex)}>
        ›
      </PaginationItem>
      <PaginationItem
        isDisabled={isLastPage}
        onClick={() => refine(lastPageIndex)}>
        »
      </PaginationItem>
    </ul>
  );
};

type PaginationItemProps = Omit<React.ComponentProps<"a">, "onClick"> & {
  onClick: NonNullable<React.ComponentProps<"a">["onClick"]>;
  isDisabled: boolean;
};

function PaginationItem({
  isDisabled,
  href,
  onClick,
  isSelected,
  ...props
}: PaginationItemProps & { isSelected?: boolean }) {
  if (isDisabled) {
    return (
      <li className="select-none opacity-30 cursor-pointer flex items-center justify-center w-8 h-8 rounded">
        <span {...props} />
      </li>
    );
  }

  return (
    <li
      className={`select-none cursor-pointer flex items-center justify-center w-8 h-8 rounded ${
        isSelected ? "bg-gray-400" : ""
      }`}>
      <a
        onClick={(event) => {
          if (isModifierClick(event)) {
            return;
          }

          event.preventDefault();

          onClick(event);
          scrollToTop();
        }}
        {...props}
      />
    </li>
  );
}

export default Pagination;
