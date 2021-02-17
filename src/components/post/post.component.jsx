import React from 'react';

import Card from '../card/card.component';
import withHOCData from '../with-HOC-data/with-HOC-data'

const Post = ({ data }) => {

  return (
    <Card>
      {data ? (
        <div>
          <h3> {data.title} </h3>
          <p> {data.body} </p>
        </div>
      ) : (
        <p> No post found </p>
      )}
    </Card>
  );
};

export default withHOCData(Post);
