"use client";
import {
  Hits,
  HitsPerPage,
  InstantSearch,
  Pagination,
  SortBy,
} from "react-instantsearch";
import algoliasearch from "algoliasearch/lite";
import { Character } from "@/app/contracts/character";
import Hit from "@/app/components/hit/hit";
import SearchBox from "@/app/components/search-box/search-box";
import RefinementList from "@/app/components/refinement-list/refinement-list";
import CurrentRefinements from "@/app/components/current-refinements/current-refinements";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID!,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY!
);

const Algolia = () => {
  return (
    <InstantSearch searchClient={searchClient} indexName="characters">
      <SearchBox />
      <CurrentRefinements />
      <SortBy
        items={[
          { label: "Featured", value: "characters" },
          { label: "Rarity (asc)", value: "characters_rarity_asc" },
          { label: "Rarity (desc)", value: "characters_rarity_desc" },
        ]}
      />
      <RefinementList attribute="vision" />
      <RefinementList attribute="nation" />
      <RefinementList attribute="affiliation" />
      <RefinementList attribute="weapon" />
      <Hits
        hitComponent={({ hit }) => <Hit {...(hit as unknown as Character)} />}
        classNames={{
          list: "flex flex-col gap-4",
        }}
      />
      <Pagination
        classNames={{
          list: "flex gap-2",
          item: "flex items-center justify-center w-8 h-8 rounded",
          selectedItem: "bg-gray-400",
          disabledItem: "opacity-50",
        }}
      />
      <HitsPerPage
        items={[
          { label: "8 hits per page", value: 8, default: true },
          { label: "16 hits per page", value: 16 },
          { label: "32 hits per page", value: 32 },
        ]}
      />
    </InstantSearch>
  );
};

export default Algolia;
