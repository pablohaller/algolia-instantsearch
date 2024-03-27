import { Character } from "@/app/contracts/character";
import Image from "@/app/components/ui/image";
import Asset from "@/app/components/asset/asset";
import { getApiAsset } from "@/app/components/asset/helpers";

export const BORDER = {
  anemo: "border-anemo border-4 rounded-full h-100 w-100",
  cryo: "border-cryo border-4 rounded-full h-100 w-100",
  dendro: "border-dendro border-4 rounded-full h-100 w-100",
  electro: "border-electro border-4 rounded-full h-100 w-100",
  geo: "border-geo border-4 rounded-full h-100 w-100",
  hydro: "border-hydro border-4 rounded-full h-100 w-100",
  pyro: "border-pyro border-4 rounded-full h-100 w-100",
};

interface Props extends Character {}
const Hit = ({
  name,
  "icon-big": icon,
  title,
  vision,
  nation,
  description,
  weapon,
}: Props) => {
  const visionKey = vision.toLocaleLowerCase();
  const visionSrc = getApiAsset("vision", visionKey);
  const nationSrc = getApiAsset("nation", nation.toLocaleLowerCase());
  const weaponSrc = getApiAsset("weapon", weapon.toLocaleLowerCase());
  const border = BORDER[visionKey as keyof typeof BORDER];

  return (
    <li className="flex gap-5 w-full items-center backdrop-blur-sm bg-background-secondary/30 p-5 border border-primary rounded-md relativeh">
      <div className="flex-shrink-0 relative h-28 w-28">
        <Image className={border} src={icon} alt={`${name} icon`} fill />
        <div className="absolute bottom-0 right-0 h-10 w-10">
          <Image src={visionSrc} alt={`${name} vision`} fill />
        </div>
      </div>
      <div className="w-full">
        <h3 className="text-md text-primary">{title}</h3>
        <h4 className="text-xl">{name}</h4>
        <p className="pt-4 text-sm">{description}</p>
      </div>
      <div className="h-full self-start">
        <div className="h-10 w-10 relative">
          <Image src={nationSrc} alt={`${name} nation`} fill />
        </div>
        <div className="h-10 w-10 relative">
          <Image src={weaponSrc} alt={`${name} weapon`} fill />
        </div>
      </div>
    </li>
  );
};

export default Hit;
