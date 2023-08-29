import classes from "./event-content.module.css";

function EventContent({ children }: { children: React.ReactNode } ) {
  return (
    <section className="content text-2xl w-[90%] max-w-[40em] text-gray-800 m-auto mt-32 text-center">
      {children}
    </section>
  );
}

export default EventContent;
