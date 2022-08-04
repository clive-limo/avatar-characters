import { clsx } from 'clsx';
import Link from 'next/link';

export default function CharacterAffiliations({
  characters,
  affiliationId,
}: any) {
  return (
    <div className="overflow-hidden">
      <div className={clsx('fixed h-[25vh] w-full bg-blue-900')}>
        <h1 className="p-5 align-bottom text-5xl font-bold text-white">
          {affiliationId} Nation
        </h1>
      </div>
      <div className="h-[25vh]"></div>
      <div className="overflow-auto pt-2">
        <p className="m-1 px-20 py-2 text-3xl font-semibold text-green-400">
          Characters
        </p>
        <ul>
          {characters.map((character: any) => {
            return (
              // eslint-disable-next-line no-underscore-dangle
              <div
                key={character._id}
                className="my-2 mx-20 flex flex-row rounded-md p-5 shadow-md"
              >
                <img
                  src={character.photoUrl}
                  alt="Character Picture"
                  height={65}
                  width={55}
                  className="rounded-full"
                />
                <li className="w-full">
                  <h1 className="py-1 px-3 text-lg font-bold">
                    {character.name}
                  </h1>
                  <p className="px-3">{character.affiliation}</p>
                </li>
                <Link
                  // eslint-disable-next-line no-useless-concat
                  href={'/characters/byId/' + `${character._id}`}
                  key={character._id}
                >
                  <a className="right-3 m-auto h-[40px] w-[150px] content-center rounded-full bg-green-400 py-2 text-center text-sm font-bold text-white hover:bg-green-600">
                    View Details
                  </a>
                </Link>
              </div>
            );
          })}
        </ul>
      </div>
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
