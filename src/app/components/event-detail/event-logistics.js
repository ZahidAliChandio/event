import Image from "next/image";

import AddressIcon from "../icons/address-icon";
import DateIcon from "../icons/date-icon";
import LogisticsItem from "./logistics-item";
import classes from "./event-logistics.module.css";

function EventLogistics(props) {
  const { date, address, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const addressText = address.replace(", ", "\n");

  return (
    <section className="classes.logistics flex justify-between gap-4 md:gap-3 flex-col md:flex-row items-center md:items-stretch rrounded-md bg-gray-900 p-8 md:p-8 w-4/5 max-w-[50rem] mx-[-3rem] md:mx-[-5rem] my-auto text-gray-300 box-shadow-[0_2px_6px_rgba(0,0,0,0.2)]">
      <div className="classes.image w-40 h-40 md:w-[20rem] md:h-[20rem] overflow-hidden rounded-[50%] border-4 border-white">
        <Image
          src={`/${image}`}
          alt={imageAlt}
          className="w-40 h-40 md:w-[20rem] md:h-[20rem] object-cover"
        />
      </div>
      <ul className="classes.list flex flex-col flex-[3] gap-8 justify-center items-center md:items-start">
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address className="whitespace-pre">{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
