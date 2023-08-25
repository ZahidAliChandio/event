import classes from "./event-content.module.css";

function EventContent(props) {
  return (
    <section className="content text-2xl w-[90%] max-w-[40em] text-gray-800 m-auto mt-32 text-center">
      {props.children}
    </section>
  );
}

export default EventContent;
