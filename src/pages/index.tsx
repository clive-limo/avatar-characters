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
      <div className="h-[25vh] bg-blue-400">
        <img
          src="/assets/images/avatar-banner.webp"
          alt="Avatar Banner"
          className="h-full w-full"
        />
      </div>
      <p className="text-4xl font-bold">Select a Nation</p>
      <div className="mx-auto flex w-[700px] flex-row">
        <Link key="Earth" href="/characters/Earth">
          <a className="m-2 flex-1 border-none bg-white py-16 text-center font-bold text-black shadow-md hover:shadow-lg">
            <img
              height={100}
              width={100}
              src="/assets/images/stone.png"
              alt="earth icon"
              className="mx-auto"
            />
          </a>
        </Link>
        <Link key="fire" href="/characters/Fire" className="flex-1 px-5">
          <a className="m-2 flex-1 border-none bg-white py-16 text-center font-bold text-black shadow-md hover:shadow-lg">
            <img
              height={100}
              width={100}
              src="/assets/images/fire.png"
              alt="Fire Icon"
              className="mx-auto"
            />
          </a>
        </Link>
      </div>
      <div className="mx-auto flex w-[700px] flex-row">
        <Link key="Water" href="/characters/Water" className="flex-1">
          <a className="m-2 flex-1 border-none bg-white py-16 text-center font-bold text-black shadow-md hover:shadow-lg">
            <img
              height={100}
              width={100}
              src="/assets/images/wave.png"
              alt="Fire Icon"
              className="mx-auto"
            />
          </a>
        </Link>
        <Link key="Air" href="/characters/Air" className="m-5 flex-1">
          <a className="m-2 flex-1 border-none bg-white py-16 text-center font-bold text-black shadow-md hover:shadow-lg">
            <img
              height={100}
              width={100}
              src="/assets/images/wind.png"
              alt="Fire Icon"
              className="mx-auto"
            />
          </a>
        </Link>
      </div>
    </Main>
  );
};

export default Index;
