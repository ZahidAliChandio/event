'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';

const getComments = async (eventId: string) => {
  const response = await axios.get(`/api/comments/`, { params: { eventId } });
  return response.data;
}

function Comments({ eventId }: { eventId: string }) {

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  
    // if (showComments) {
    //   getComments(eventId).then((comments) => {
    //     setComments(comments);
    //   });
    // }

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  async function addCommentHandler(commentData: { email: string; name: string; text: string }) {

    try {     
      const response = await axios.post(`/api/comments`, { ...commentData, eventId});
      console.log("response.Data", response.data);
      console.log("response.Data.Data", response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className={classes.comments}>
      <button type='button' onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList items={comments} />}
    </section>
  );
}

export default Comments;
