import { useHitsPerPage, UseHitsPerPageProps } from "react-instantsearch";
import Select from "@/app/components/ui/select";
import { scrollToTop } from "@/app/utils/generic";

const HitsPerPage = (props: UseHitsPerPageProps) => {
  const { items, refine } = useHitsPerPage(props);
  const { value: currentValue } =
    items.find(({ isRefined }) => isRefined)! || {};

  return (
    <Select
      className="px-4 py-2"
      // className="p-2 py-4"
      onChange={(event) => {
        scrollToTop();
        refine(Number(event.target.value));
      }}
      value={String(currentValue)}>
      {items.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </Select>
  );
};

export default HitsPerPage;
