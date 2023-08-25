'use client';

import { useRouter } from "next/navigation";

import EventList from "../../../components/events/event-list";
import EventSearch from "../../../components/events/events-search";
// import { getAllEvents, getFilteredEvents } from "../../../dummy-data";
import { EventProps } from "@/types/types";
import { getAllEvents } from '../../helpers/api-util';

async function getEvents () {
    const featuredEvents = await getAllEvents();
    return featuredEvents;
}


async function Events(){
    const router = useRouter();
    function findEventsHandler(year: any, month: any) {
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath );
    }
    
    const events: EventProps[] = await getEvents();

    return (
        <div>
            <EventSearch onSearch={findEventsHandler}/>
             <EventList events={events} />
        </div>
    );
}

export default Events;