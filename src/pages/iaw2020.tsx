import React from 'react';
import { Helmet } from 'react-helmet';

import { Intro } from 'components/intro/Intro';
import { Container } from 'components/container/Container';

// tslint:disable no-default-export
export default () => (
  <>
    <Helmet title="IAW2020 Recordings" />

    <Intro>
        <p>
          Milli Sessions - IAW 2020 
        </p>
        <p>
          <a href="https://hackmd.io/@tbdinesh/H1jAk1V28" target="_blank">The Living document</a> of the online event, will help
            you get a gist of discussions, links to reading materials mentioned during the session.
            Links to Audio and Video from the discussions below. 
        </p>
        <br />
    <ul>
			<li><a target="_blank" href="https://iaw2020.milli.test.openrun.net/1-iaw2020-starting_up_an_archive-day_1/">Day 1 - Present & Future // Starting up and Archive </a></li>
			<li><a target="_blank" href="https://iaw2020.milli.test.openrun.net/2-iaw2020-forms_of_archival_object-day_2">Day 2 - Forms of the Archival Object // Revisiting oral histories</a></li>
			<li><a target="_blank" href="https://iaw2020.milli.test.openrun.net/3-iaw2020-archival_record-day_3/">Day 3 - Journey of an Archival Record // Pausing at preservation</a></li>
      <li><a target="_blank" href="https://iaw2020.milli.test.openrun.net/4-iaw2020-evidence_and_truth-day_4/">Day 4 - Evidence and truth // On copyright and privacy</a></li>
      <li><a target="_blank" href="https://iaw2020.milli.test.openrun.net/5-iaw2020-archiving_community_knowledge-day_5/">Day 5 - Archiving Community Knowledge // Documenting Community Histories</a></li>
      <li><a target="_blank" href="https://iaw2020.milli.test.openrun.net/6-iaw2020-open_standards-day_6/">Day 6 - Open Standards // Archives consortium and annotation tools</a></li>
      <li><a target="_blank" href="https://iaw2020.milli.test.openrun.net/7-iaw2020-learning_through_archives-day_7/">Day 7 - Learning through Archives</a></li>
		</ul>
	</Intro>
	
  </>
);
