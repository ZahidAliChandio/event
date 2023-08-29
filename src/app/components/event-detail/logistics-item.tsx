import classes from "./logistics-item.module.css";

function LogisticsItem( { icon: Icon, children }: { icon: any, children: React.ReactNode } ) {

  return (
    <li className="classes.item flex text-2xl items-center flex-col md:items-start text-center md:text-left text-teal-200">
      <span className="classes.icon block">
        <Icon className="mr-4 text-teal-400" />
      </span>
      <span className={classes.content}>{children}</span>
    </li>
  );
}

export default LogisticsItem;
