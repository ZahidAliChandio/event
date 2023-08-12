'use client';

import { useRouter } from "next/navigation";

import EventList from "../../../components/events/event-list";
import EventSearch from "../../../components/events/events-search";
import { getAllEvents, getFilteredEvents } from "../../../dummy-data";

function Events() {
    const router = useRouter();
    const events = getAllEvents();
    function findEventsHandler(year: any, month: any) {
        // const filteredEvents = getFilteredEvents({
        //     year: year,
        //     month: month
        // });
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath );
    }

    return (
        <div>
            <EventSearch onSearch={findEventsHandler}/>
            <EventList events={events} />
        </div>
    );
}

export default Events;