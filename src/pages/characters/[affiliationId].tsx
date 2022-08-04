import Link from 'next/link';

export default function CharacterAffiliations({
  characters,
  affiliationId,
}: any) {
  return (
    <div>
      <h1>Characters affiliated {affiliationId}</h1>
      <ul>
        {characters.map((character: any) => {
          return (
            // eslint-disable-next-line no-underscore-dangle
            <div key={character._id}>
              <li className="font-bold">{character.name}</li>
              <Link
                // eslint-disable-next-line no-useless-concat
                href={'/characters/byId/' + `${character._id}`}
                key={character._id}
              >
                <p className="hover:bg-green-300">View Details</p>
              </Link>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export async function getServerSideProps({ params }: any) {
  const { affiliationId } = params;
  const characters = await fetch(
    `https://last-airbender-api.herokuapp.com/api/v1/characters?affiliation=${affiliationId}`
  ).then((res) => res.json());
  return {
    props: {
      characters,
      affiliationId,
    },
  };
}
