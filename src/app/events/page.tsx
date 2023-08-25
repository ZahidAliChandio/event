'use client';   

import { useRouter } from "next/navigation";
import Head from "next/head";

import EventList from "../components/events/event-list";
import EventSearch from "../components/events/events-search";
// import { getAllEvents, getFilteredEvents } from "../../../dummy-data";
import { EventProps } from "@/types/types";
import { getAllEvents } from '../../helpers/api-util';

async function getEvents () {
    const featuredEvents = await getAllEvents();
    return featuredEvents;
}


async function Events(){
    function findEventsHandler(year: any, month: any) {
        const router = useRouter();
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath );
    }
    
    const events: EventProps[] = await getEvents();

    return (
        <div>
            <Head>
                <title>From Event</title>
                <meta property="og:title" content="From Event" key="title" />
            </Head>
            <EventSearch onSearch={findEventsHandler}/>
            <EventList events={events} />
        </div>
    );
}

export default Events;