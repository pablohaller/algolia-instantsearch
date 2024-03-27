import { useSortBy, UseSortByProps } from "react-instantsearch";
import Select from "@/app/components/ui/select";

const SortBy = (props: UseSortByProps) => {
  const { currentRefinement, options, refine } = useSortBy(props);

  return (
    <Select
      onChange={(event) => refine(event.target.value)}
      value={currentRefinement}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  );
};

export default SortBy;
