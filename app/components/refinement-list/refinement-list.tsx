import React from "react";
import { useRefinementList, UseRefinementListProps } from "react-instantsearch";

const RefinementList = (props: UseRefinementListProps) => {
  const {
    items,
    refine,
    searchForItems,
    canToggleShowMore,
    isShowingMore,
    toggleShowMore,
  } = useRefinementList(props);

  return (
    <>
      <input
        type="search"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck={false}
        maxLength={512}
        onChange={(event) => searchForItems(event.currentTarget.value)}
      />
      <ul>
        {items.map((item) => (
          <li key={item.label}>
            <label>
              <input
                type="checkbox"
                checked={item.isRefined}
                onChange={() => refine(item.value)}
              />
              <span>{item.label}</span>
              <span> ({item.count})</span>
            </label>
          </li>
        ))}
      </ul>
      {canToggleShowMore && (
        <button onClick={toggleShowMore}>
          {isShowingMore ? "Show less" : "Show more"}
        </button>
      )}
    </>
  );
};

export default RefinementList;
