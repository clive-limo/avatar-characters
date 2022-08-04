import Link from 'next/link';
import type { ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full text-gray-700">
    {props.meta}
    <section className="content text-xl w-full h-[100vh]">{props.children}</section>
  </div>
);

export { Main };
