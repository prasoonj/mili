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

<Highlight>InternationalArchivesWeek2020</Highlight>

<p><b>Milli Archives Discussions</b></p>

<p><Highlight>Form & content</Highlight>, <Highlight>preservation</Highlight> and <Highlight>access</Highlight>, <Highlight>privacy</Highlight>, <Highlight>pedagogy</Highlight>, <Highlight>standards</Highlight> & more!</p>
<a href="https://www.ica.org/en/international-archives-week-8-14-june-2020">More about the International Archives Week Jun 8-14 2020</a>

<p>Archivists/curators/historians/scientists/artists/writers coming together for a set of informal online events.</p>

All sessions are free and open to the public. For more information, <a href="https://www.eventbrite.com/e/international-archives-week-2020-june-8-14-milli-sessions-tickets-107681129156">visit the event page</a>!
<p></p>
<p>The living document for this event is available <a href="https://hackmd.io/cI_IWlxKTdivCsaQiS9QEg">here</a>!</p>
    </Intro>

    <BlockText
      heading="á milli"
      description={
        <>
          Milli is a consortium of individuals and communities interested in the nurturing of archives. Archives enable diverse stories. This aim guides the work of the consortium, the purpose, form and content of an archive, and what environments it could nourish in the future. Milli helps individuals and institutions to build and sustain archives. It facilitates discussions among the community around issues of diversity, archival standards, conservation, physical and digital access, pedagogy, privacy and the development of inclusive description standards. The digital platform for Milli will allow the public to find, describe and share archival material and stories. Milli borrows from the Icelandic 'á milli' for ‘between’ or ‘in the midst of’ since it speaks to the way we think of the archives being the in-between space between stories, objects and future stories. The milli.link domain, which shall be the home for Milli, gives us another way of thinking about a thousand tiny connections. Milli was incubated by Prasoon, <a href="https://janastu.org">Janastu</a> and the <a href="http://archives.ncbs.res.in">Archives at NCBS (Bangalore, India)</a>, a public centre for the history of contemporary biology in India.

Email contact:

<a href="mailto:hello@milli.link">hello@milli.link</a>

        </>
      }
    />
  </>
);
