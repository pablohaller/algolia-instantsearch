import Image from "@/app/components/ui/image";
import { getApiAsset } from "./helpers";

interface Props {
  entity: string;
  value: string;
}

const Asset = ({ entity, value }: Props) => {
  const src = getApiAsset(entity, value);
  if (!src) return null;
  return (
    <div className="h-5 w-5 relative">
      <Image fill src={src} alt={`${entity} ${value} image`} />
    </div>
  );
};

export default Asset;
