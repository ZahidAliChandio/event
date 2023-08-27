import classes from './comment-list.module.css';
import { CommentListProps } from '@/types/comments';

function CommentList({ items }: { items: CommentListProps[] }) {

  return (
    <ul className={classes.comments}>
      {items.map((item) => (
        <li key={item._id}>
          <p>{item.text}</p>
          <div>
            By <address>{item.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
