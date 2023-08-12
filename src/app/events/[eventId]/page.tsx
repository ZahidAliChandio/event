'use client'

import { Fragment } from "react";
import { useParams } from "next/navigation";

import { getEventById } from "../../../../dummy-data";
import EventSummary from "../../../../components/event-detail/event-summary";
import EventLogistics from "../../../../components/event-detail/event-logistics";
import EventContent from "../../../../components/event-detail/event-content";

function EventDetail () {
    const params = useParams();
    const eventId = params.eventId as string;
    const event = getEventById(eventId);
    
    if (!event) {
        return <p className="text-xl m-4">No event found!</p>;
    }

    return (
        <Fragment>
            <EventSummary title={event.title} />
            <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </Fragment> 
    );
}

export default EventDetail;