import { Character } from "@/app/contracts/character";
import Image from "next/image";

interface Props extends Character {}
const Hit = ({ name, "icon-big": icon }: Props) => {
  return (
    <li className="flex">
      <Image src={icon} alt={`${name} icon`} width={100} height={100} />
      <div>{name}</div>
    </li>
  );
};

export default Hit;
