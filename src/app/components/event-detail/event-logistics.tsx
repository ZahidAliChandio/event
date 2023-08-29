import Image from "next/image";

import AddressIcon from "../icons/address-icon";
import DateIcon from "../icons/date-icon";
import LogisticsItem from "./logistics-item";
import classes from "./event-logistics.module.css";

function EventLogistics({ date, address, image, imageAlt } : { date: string, address: string, image: string, imageAlt: string }) {

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const addressText = address.replace(", ", "\n");

  return (
    <section className="classes.logistics flex justify-between gap-4 md:gap-3 flex-col md:flex-row items-center md:items-stretch p-8 max-w-[50rem] my-[-3rem] md:my-[-5rem] mx-auto rounded-md bg-gray-900 w-4/5 text-gray-300 box-shadow-[0_2px_6px_rgba(0,0,0,0.2)]">
      <div className="classes.image w-40 h-40 md:w-[20rem] md:h-[20rem] overflow-hidden rounded-[50%] border-4 border-white">
        <Image
          src={`/${image}`}
          width={30}
          height={30}
          alt={imageAlt}
          className="w-40 h-40 md:w-[20rem] md:h-[20rem] object-cover"
        />
      </div>
      <div className="classes.list flex flex-col flex-[3] gap-8 justify-center items-center md:items-start">
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address className="whitespace-pre">{addressText}</address>
        </LogisticsItem>
      </div>
    </section>
  );
}

export default EventLogistics;
