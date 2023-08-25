import EventItem from "./event-item";

import classes from "./event-list.module.css";

function EventList(props: any) {
    const { events } = props;
    return (
        events && <ul className="classes.list max-w-[40rem] w-11/12 my-20 mx-auto">
            {events.map((event: any) => (
                <EventItem key={event.id} 
                    id={event.id} 
                    title={event.title} 
                    location={event.location} 
                    date={event.date} 
                    image={event.image} 
                />
            ))}
        </ul>
    );
}

export default EventList;