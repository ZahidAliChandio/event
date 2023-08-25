import { getFeaturedEvents } from '../helpers/api-util';
import EventList from './components/events/event-list';
import { EventProps } from '@/types/types';


async function getEvents () {
    const featuredEvents = await getFeaturedEvents();
    return featuredEvents;
}

async function Home () {
  const events: EventProps[] = await getEvents();

  return (
      <main>
          <EventList events={events} />
      </main>
  )
}

export default Home;