import Image from 'next/image';

export default function CharacterDetails({ details, characterId }: any) {
  const src = details.photoUrl;
  const { enemies } = details;
  const { allies } = details;
  return (
    <div className="mx-auto my-[25vh] flex h-[450px] w-[800px] flex-row rounded-3xl p-4 shadow-xl">
      <div className="flex-1 p-5">
        <Image
          loader={() => src}
          src={details.photoUrl}
          alt="avatar picture"
          height={400}
          width={400}
          className="rounded-2xl"
        />
      </div>
      <span className="py-15 mx-2 h-full w-[1px] bg-green-400" />
      <div>
        <h1 className="py-1 px-5 text-3xl font-bold text-green-400 ">
          Character Information
        </h1>
        <h1 className="px-6 text-4xl font-bold text-black">{details.name}</h1>
        <div className="flex h-[100px] flex-col">
          <p className="m-0 flex-1 pl-5 pt-5 text-xl font-bold text-gray-600">
            Affiliation
          </p>
          <p className="w-[320px] flex-1 pl-5 text-xl text-black">
            {details.affiliation}
          </p>
        </div>
        <h1 className="mt-2 pl-5 text-xl font-bold text-gray-600">Enemies</h1>
        <ul className="">
          {enemies.map((enemy: string) => {
            return (
              <li key={enemy} className="pl-5 text-xl text-black">
                {enemy}
              </li>
            );
          })}
        </ul>
        <h1 className="mt-2 pl-5 text-xl font-bold text-gray-600">Allies</h1>
        <ul className="">
          {allies.map((ally: string) => {
            return (
              <li key={ally} className="pl-5 text-xl text-black">
                {ally}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }: any) {
  const { characterId } = params;

  const details = await fetch(
    `https://last-airbender-api.herokuapp.com/api/v1/characters/${characterId}`
  ).then((res) => res.json());
  return {
    props: {
      details,
      characterId,
    },
  };
}
