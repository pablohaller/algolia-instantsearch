import path from "path";
import { promises as fs } from "fs";

// name;title;vision;weapon;gender;nation;affiliation;description;constellation;rarity;card;constellation-1;constellation-2;constellation-3;constellation-4;constellation-5;constellation-6;gacha-card;gacha-splash;icon;icon-big;icon-side;outfit-sea-breeze-dandelion;portrait;talent-burst;talent-na;talent-passive-0;talent-passive-1;talent-passive-2;talent-skill

const main = async () => {
  const availableImages = [
    "card",
    "constellation",
    "constellation-1",
    "constellation-2",
    "constellation-3",
    "constellation-4",
    "constellation-5",
    "constellation-6",
    "gacha-card",
    "gacha-splash",
    "icon",
    "icon-big",
    "icon-side",
    "portrait",
    "talent-burst",
    "talent-na",
    "talent-passive-0",
    "talent-passive-1",
    "talent-passive-2",
    "talent-skill",
  ];

  const getCharacters = await fetch("https://genshin.jmp.blue/characters/all");
  const characters = await getCharacters.json();
  const charactersCsv = characters.map(
    ({
      name,
      title,
      vision,
      weapon,
      gender,
      nation,
      affiliation,
      description,
      constellation,
      rarity,
    }: any) => ({
      name,
      title,
      vision,
      weapon,
      gender,
      nation,
      affiliation,
      description,
      constellation,
      rarity,
      ...availableImages.reduce(
        (a, v) => ({
          ...a,
          [v]: `https://genshin.jmp.blue/characters/${(name as string).toLocaleLowerCase().replace(" ", "-")}/${v}`,
        }),
        {}
      ),
    })
  );
  const data = charactersCsv
    .map((c: any) => Object.values(c).join(";"))
    .join("\n");

  const keys = Object.keys(charactersCsv[0]).join(";");
  const csv = `${keys}\n${data}`;

  console.log(csv);
  // fs.writeFile("./data.csv", csv, { flag: "w+" });
};

main();
