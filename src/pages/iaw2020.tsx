import React from 'react';
import { Helmet } from 'react-helmet';

import { Intro } from 'components/intro/Intro';
import { Container } from 'components/container/Container';

// tslint:disable no-default-export
export default () => (
  <>
    <Helmet title="IAW2020 Recordings" />

    <Intro>
        Links to Audio and Video recordings with the comments text.
        <ul>
			<li><a target="_blank" href="https://iaw2020.milli.test.openrun.net/iwa2020-starting_up_an_archive-day_1/">Day 1 - Present & Future // Starting up and Archive </a></li>
			<li><a target="_blank" href="#">Day 2 - Forms of the Archival Object // Revisiting oral histories</a></li>
			<li><a target="_blank" href="https://iaw2020.milli.test.openrun.net/iwa2020-day3-archival_record/">Day 3 - Journey of an Archival Record // Pausing at preservation</a></li>
		</ul>
	</Intro>
	
  </>
);
