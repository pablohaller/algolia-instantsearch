"use client";
import { Hits, InstantSearch } from "react-instantsearch";
import algoliasearch from "algoliasearch/lite";
import { Character } from "@/app/contracts/character";
import Hit from "@/app/components/hit/hit";
import SearchBox from "@/app/components/search-box/search-box";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID!,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY!
);

const Algolia = () => {
  return (
    <InstantSearch searchClient={searchClient} indexName="characters">
      <SearchBox />
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
