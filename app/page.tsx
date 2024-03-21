import Algolia from "./components/algolia/algolia";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Algolia />
    </main>
  );
}
