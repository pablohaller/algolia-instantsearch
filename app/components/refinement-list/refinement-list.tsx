import { useRefinementList, UseRefinementListProps } from "react-instantsearch";
import Input from "@/app/components/ui/input";
import Asset from "@/app/components/asset/asset";

const RefinementList = (props: UseRefinementListProps) => {
  const { items, refine, searchForItems } = useRefinementList(props);
  const { attribute } = props;

  return (
    <div className="backdrop-blur-sm bg-background-secondary/30 p-5 border border-primary rounded-md relative">
      <h2 className="capitalize font-bold text-primary absolute -top-6 left-0">
        {attribute}
      </h2>
      <Input
        type="search"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck={false}
        maxLength={512}
        placeholder={`Search for ${attribute}s`}
        onChange={(event) => searchForItems(event.currentTarget.value)}
      />
      <ul className="pt-5">
        {items.map((item) => (
          <li key={item.label}>
            <label className="cursor-pointer flex gap-2">
              <input
                className="accent-primary cursor-pointer focus:outline-none focus:ring-0 h-5 w-5 flex-shrink-0 bg-red-500 text-red-500"
                type="checkbox"
                checked={item.isRefined}
                onChange={() => refine(item.value)}
              />
              <Asset
                entity={attribute}
                value={item.value.toLocaleLowerCase()}
              />
              <span>{item.label}</span>
              <span> ({item.count})</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RefinementList;
