import React from 'react';
import { Helmet } from 'react-helmet';

import { Intro } from 'components/intro/Intro';

// tslint:disable no-default-export
export default () => (
  <>
    <Helmet title="About" />

    <Intro>
        Milli is a consortium of individuals and communities interested in the nurturing of archives. Archives enable diverse stories. This aim guides the work of the consortium, the purpose, form and content of an archive, and what environments it could nourish in the future. Milli helps individuals and institutions to build and sustain archives. It facilitates discussions among the community around issues of diversity, archival standards, conservation, physical and digital access, pedagogy, privacy and the development of inclusive description standards. The digital platform for Milli will allow the public to find, describe and share archival material and stories. Milli borrows from the Icelandic 'á milli' for ‘between’ or ‘in the midst of’ since it speaks to the way we think of the archives being the in-between space between stories, objects and future stories. The milli.link domain, which shall be the home for Milli, gives us another way of thinking about a thousand tiny connections. Milli was incubated by Prasoon, <a href="https://janastu.org">Janastu</a> and the <a href="http://archives.ncbs.res.in">Archives at NCBS (Bangalore, India)</a>, a public centre for the history of contemporary biology in India.

<p>Contact us at:</p>

<a href="mailto:hello@milli.link">hello@milli.link</a>
    </Intro>
<p></p>
  </>
);
