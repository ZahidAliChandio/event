import { getFeaturedEvents } from '../helpers/api-util';
import EventList from './components/events/event-list';
import { EventProps } from '@/types/types';
import NewsletterRegistration from './components/input/newsletter-registration';


async function getEvents () {
    const featuredEvents = await getFeaturedEvents();
    return featuredEvents;
}

async function Home () {
  const events: EventProps[] = await getEvents();

  return (
      <main>
          <NewsletterRegistration/>
          <EventList events={events} />
      </main>
  )
}

export default Home;