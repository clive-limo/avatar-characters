import Link from 'next/link';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Avatar Characters"
          description="Explore characters in the cartoon series Avatar"
        />
      }
    >
      <div>
        <Link key="Earth" href="/characters/Earth">
          <p>Earth</p>
        </Link>
        <Link key="fire" href="/characters/Fire">
          <p>Fire</p>
        </Link>
        <Link key="Water" href="/characters/Water">
          <p>Water</p>
        </Link>
        <Link key="Air" href="/characters/Air">
          <p>Air</p>
        </Link>
      </div>
    </Main>
  );
};

export default Index;

export async function getStaticProps() {
  const characters = await fetch(
    `https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=10&page=1`
  ).then((res) => res.json());

  const avatars = await fetch(
    'https://last-airbender-api.herokuapp.com/api/v1/characters/avatar'
  ).then((res) => res.json());

  return {
    props: {
      characters,
      avatars,
    },
  };
}
