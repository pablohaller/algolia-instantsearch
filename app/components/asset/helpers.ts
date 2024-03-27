export const getApiAsset = (entity: string, value: string) =>
  ({
    vision: `${process.env.NEXT_PUBLIC_CHARACTERS_API!}elements/${value}/icon/`,
    nation: `${process.env.NEXT_PUBLIC_CHARACTERS_API!}nations/${value}/icon/`,
    weapon: `/images/${value}.png`,
  }[entity] || "");
