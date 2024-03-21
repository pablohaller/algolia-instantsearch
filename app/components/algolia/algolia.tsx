"use client";
import algoliasearch from "algoliasearch/lite";
import { Hits, InstantSearch } from "react-instantsearch";
import { Character } from "../../contracts/character";
import Hit from "../hit/hit";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID!,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY!
);

const Algolia = () => {
  return (
    <InstantSearch searchClient={searchClient} indexName="characters">
      <Hits
        hitComponent={({ hit }) => <Hit {...(hit as unknown as Character)} />}
        classNames={{
          list: "flex flex-col gap-4",
        }}
      />
    </InstantSearch>
  );
};

export default Algolia;
