import { Fragment } from 'react';

import { getFeaturedEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
      <main>
          <EventList events={featuredEvents} />
      </main>
  )
}
