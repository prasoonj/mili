import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';

import Logo from '../../assets/svg/milli-logo.svg';

import { helmet } from '../../utils/helmet';
import { Header } from '../header/Header';
import { HeaderLink } from '../header/HeaderLink';
import { Footer } from '../footer/Footer';
import { Devtools } from '../devtools/Devtools';

import s from './AppLayout.scss';

interface AppLayoutProps {
  children: ReactNode;
}

const isDev = process.env.NODE_ENV === 'development';

// tslint:disable no-default-export
export default ({ children }: AppLayoutProps) => (
  <div className={s.layout}>
    <Helmet {...helmet} />

    <Header>
      <HeaderLink name="About" to="/about" />
      <HeaderLink name="IAW2020" to="/iaw2020" />
    </Header>

    {children}

    {isDev && <Devtools />}
  </div>
);
