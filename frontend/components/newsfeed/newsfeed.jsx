import React from 'react';

const NewsFeed = (props) => {
  return(
    <div>
      <h1>News Feed</h1>
      <button onClick={props.logout}>Log Out</button>
    </div>
  );
};

export default NewsFeed;
