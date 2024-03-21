interface Props {
  params: { slug: string };
}

const getData = async (slug: string) => {
  const request = await fetch(
    `${process.env.CHARACTERS_API}characters/${slug}`
  );
  return request.json();
};

const Page = async ({ params }: Props) => {
  const { slug } = params;
  const character = await getData(slug);

  return <main>{JSON.stringify(character)}</main>;
};

export default Page;
