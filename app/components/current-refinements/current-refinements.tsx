import {
  useClearRefinements,
  UseClearRefinementsProps,
  useCurrentRefinements,
  UseCurrentRefinementsProps,
} from "react-instantsearch";
import { isModifierClick } from "@/app/utils/generic";
import Button from "@/app/components/ui/button";

const ClearRefinements = (props: UseClearRefinementsProps) => {
  const { canRefine, refine } = useClearRefinements(props);

  return canRefine && <Button onClick={refine}>Clear refinements</Button>;
};

const CurrentRefinements = (props: UseCurrentRefinementsProps) => {
  const { items, refine } = useCurrentRefinements(props);

  return (
    items?.length > 0 && (
      <div className="backdrop-blur-sm bg-background-secondary/30 p-5 border border-primary rounded-md relative mt-10">
        <h2 className="font-bold text-primary absolute -top-6 left-0">
          Current Refinements
        </h2>
        <ul className="">
          {items.map((item) => (
            <li key={[item.indexName, item.label].join("/")}>
              <span className="capitalize text-primary block border-b border-primary my-4">
                {item.label}
              </span>
              {item.refinements.map((refinement) => (
                <span
                  key={refinement.label}
                  className="mt-1 cursor-pointer border border-primary rounded-full flex items-center justify-center gap-4 w-fit px-4 py-2 bg-primary text-background-primary hover:bg-primary-light active:bg-primary-dark"
                  onClick={(event) => {
                    if (isModifierClick(event)) {
                      return;
                    }

                    refine(refinement);
                  }}>
                  <span>{refinement.label}</span>
                  <button type="button">x</button>
                </span>
              ))}
            </li>
          ))}
        </ul>
        <div className="mt-4 text-primary">Options</div>
        <div className="border-t border-primary pt-4">
          <ClearRefinements />
        </div>
      </div>
    )
  );
};

export default CurrentRefinements;
