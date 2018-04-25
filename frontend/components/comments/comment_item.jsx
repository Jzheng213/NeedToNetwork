import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

const CommentItem = ({comment, users}) => {
  const dateToFormat = comment.updated_at;
  return(
    <div className='comment-container'>
      <Link to={`/user/${comment.author_id}`}>
        <img className='comment-profile-pic' src={users[comment.author_id].profile_pic_url} />
      </Link>
      <div className='comment-body'>
        <Link className='comment-author' to={`/user/${comment.author_id}`}>
          {comment.author_name}
        </Link>
        <div className='comment-content'>{comment.body}</div>
      </div>
      <span className='comment-like'>Like &middot;</span>
      <span className='comment-reply'>Reply &middot;</span>
      <Moment interval={120000} fromNow ago>{dateToFormat}</Moment>
    </div>
  );
};

export default CommentItem;