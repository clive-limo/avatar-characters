import Image from 'next/image';

export default function CharacterDetails({ details, characterId }: any) {
  const src = details.photoUrl;
  const { enemies } = details;
  return (
    <div>
      <Image
        loader={() => src}
        src={details.photoUrl}
        alt="avatar picture"
        height={300}
        width={300}
      />
      <h1>{details.name}</h1>
      <p>{details.affiliation}</p>
      <h1>Enemies</h1>
      <ul>
        {enemies.map((enemy: string) => {
          return <li key={enemy}>{enemy}</li>;
        })}
      </ul>
    </div>
  );
}

export async function getServerSideProps({ params }: any) {
  const { characterId } = params;

  const details = await fetch(
    `https://last-airbender-api.herokuapp.com/api/v1/characters/${characterId}`
  ).then((res) => res.json());
  console.log(details);
  return {
    props: {
      details,
      characterId,
    },
  };
}
