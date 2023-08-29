import classes from "./event-summary.module.css";

function EventSummary({ title }: { title: string }) {

  return (
    <section className="classes.summary w-full h-[30vh] bg-[radial-gradient(to_bottom,to_left,#008b79,#1180a1)]">
      <h1 className="m-0 pt-12 text-3xl md:text-6xl text-center text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.5)]">
        {title}
      </h1>
    </section>
  );
}

export default EventSummary;
