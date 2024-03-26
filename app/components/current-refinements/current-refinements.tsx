import {
  useClearRefinements,
  UseClearRefinementsProps,
  useCurrentRefinements,
  UseCurrentRefinementsProps,
} from "react-instantsearch";
import { isModifierClick } from "@/app/utils/generic";

const ClearRefinements = (props: UseClearRefinementsProps) => {
  const { canRefine, refine } = useClearRefinements(props);

  return canRefine && <button onClick={refine}>Clear refinements</button>;
};

const CurrentRefinements = (props: UseCurrentRefinementsProps) => {
  const { items, refine } = useCurrentRefinements(props);

  return (
    <>
      <ClearRefinements />
      <ul>
        {items.map((item) => (
          <li key={[item.indexName, item.label].join("/")}>
            <span>{item.label}:</span>
            {item.refinements.map((refinement) => (
              <span key={refinement.label}>
                <span>{refinement.label}</span>
                <button
                  type="button"
                  onClick={(event) => {
                    if (isModifierClick(event)) {
                      return;
                    }

                    refine(refinement);
                  }}>
                  Remove
                </button>
              </span>
            ))}
          </li>
        ))}
      </ul>
    </>
  );
};

export default CurrentRefinements;
