import EventList from "../../../components/events/event-list";
import { getAllEvents } from "../../../dummy-data";

function Events() {
    const events = getAllEvents();
    return (
        <div>
            <EventList events={events} />
        </div>
    );
}

export default Events;