import { Fragment } from 'react';

import { getFeaturedEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import MainHeader from '../../components/navbar/main-header';

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <Fragment>
      <MainHeader/>
      <main className="">
        <div>
          <EventList events={featuredEvents} />
        </div>
      </main>
    </Fragment>
  )
}
