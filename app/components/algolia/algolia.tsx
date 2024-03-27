"use client";
import { Hits, InstantSearch } from "react-instantsearch";
import algoliasearch from "algoliasearch/lite";
import { Character } from "@/app/contracts/character";
import Hit from "@/app/components/hit/hit";
import SearchBox from "@/app/components/search-box/search-box";
import RefinementList from "@/app/components/refinement-list/refinement-list";
import CurrentRefinements from "@/app/components/current-refinements/current-refinements";
import Pagination from "@/app/components/pagination/pagination";
import SortBy from "@/app/components/sort-by/sort-by";
import HitsPerPage from "@/app/components/hits-per-page/hits-per-page";
import Image from "@/app/components/ui/image";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID!,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY!
);

const Algolia = () => {
  return (
    <InstantSearch searchClient={searchClient} indexName="characters">
      <div className="px-10 pt-10">
        <div className="pb-10 flex gap-10 items-center">
          <Image
            src="/images/logo.png"
            alt="Genshin Logo"
            width={250}
            height={102}
          />
          <h1 className="text-5xl drop-shadow-glow">Algolia Search</h1>
        </div>
        <div className="flex gap-10">
          <SearchBox />
          <SortBy
            items={[
              { label: "Name (asc)", value: "characters" },
              { label: "Name (desc)", value: "characters_name_desc" },
              { label: "Rarity (asc)", value: "characters_rarity_asc" },
              { label: "Rarity (desc)", value: "characters_rarity_desc" },
            ]}
          />
        </div>
        <div className="flex w-full mb-10">
          <div className="w-96 pt-10">
            <div className="flex flex-col gap-10">
              <RefinementList attribute="vision" />
              <RefinementList attribute="weapon" />
              <RefinementList attribute="nation" />
              <RefinementList attribute="affiliation" />
            </div>
            <CurrentRefinements />
          </div>
          <div className="w-full pl-10 flex flex-col justify-between">
            <div>
              <Hits
                hitComponent={({ hit }) => (
                  <Hit {...(hit as unknown as Character)} />
                )}
                classNames={{
                  list: "flex flex-col gap-5 py-10",
                }}
              />
            </div>
            <div className="flex justify-center items-center gap-10">
              <Pagination />
              <HitsPerPage
                items={[
                  { label: "8 hits per page", value: 8, default: true },
                  { label: "16 hits per page", value: 16 },
                  { label: "32 hits per page", value: 32 },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </InstantSearch>
  );
};

export default Algolia;
