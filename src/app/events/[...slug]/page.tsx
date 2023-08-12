'use client'

import { Fragment } from "react";
import { useParams } from "next/navigation";

import { getFilteredEvents } from "../../../../dummy-data";
import EventList from "../../../../components/events/event-list";
import ResultsTitle from "../../../../components/events/results-title";
import Button from "../../../../components/ui/button";
import ErrorAlert from "../../../../components/ui/error-alert";

function FilteredEventsPage() {
  const params = useParams();
  
  const { slug } = params;

  if(!slug) {
    return <p className="center">Loading...</p>
  }

  const filteredYear = +slug[0];
  const filteredMonth = +slug[1];

  if(isNaN(filteredYear) || isNaN(filteredMonth) || filteredYear > 2030 || filteredYear < 2021 || filteredMonth < 1 || filteredMonth > 12) {
    return (
      <Fragment>
         <ErrorAlert>
          <p className="center !mt-4 text-xl">Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    )
  }

  const filteredEvents = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth
  });

  if(!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p className="center !mt-4 text-xl">No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    )
  }

  return (
    <Fragment>
      <ResultsTitle date={new Date(filteredYear, filteredMonth - 1)} />
      <EventList events={filteredEvents} /> 
    </Fragment>
  );
} 

export default FilteredEventsPage;