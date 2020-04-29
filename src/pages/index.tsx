import React from 'react';
import { Helmet } from 'react-helmet';

import { Intro } from 'components/intro/Intro';
import { Highlight } from 'components/intro/Highlight';
import { BlockText } from 'components/block-text/BlockText';

// tslint:disable no-default-export
export default () => (
  <>
    <Helmet title="Home" />

    <Intro>
      Archives enable diverse <Highlight>stories</Highlight>. This statement serves as a guiding principle for us through the workflow of historical records – sourcing for material, archival judgment and accessioning policies, understanding context and arrangement, preservation/conservation, and physical and digital access.

In late 2016, when we started the endeavour to build a new archive, we wanted to deliberate on the purpose of an archive and what environments it could nourish in the future.

We at the Archives at NCBS are developing an interconnected science archive project linking storytelling to historic material and scientific research.

Archival material is difficult to work with in India due to lack of access and common standards. We want people to see – and make – <Highlight>connections</Highlight> between disparate archival records flung across repositories.

We are building a space that makes it easier for multiple interpretations and stories to emerge from the raw data. The premise is a little bit of a truism, but it serves as a beacon for this whole exercise: 
What we tend to remember are stories, which arise from the way we see and describe primary data—<Highlight>oral histories</Highlight>,<Highlight> manuscripts</Highlight>, <Highlight>photographs</Highlight>, <Highlight>research notes</Highlight>. These annotations should be thought of as the card catalogs of primary historical information on the web.
    </Intro>

    <BlockText
      heading="Why milli?"
      description={
        <>
          We hope to start forming parallel networks of catalogues and stories
           linked to each other across institutions, places, events, people and time. 
           This will be an effort to build an interconnected digital archival of 
           science with pilot material from various science archives in India and then, 
           later, from other parts of the world. This will be made available through a 
           digital platform to {' '} historians, journalists, scientific researchers and the general public.
        </>
      }
    />
  </>
);
