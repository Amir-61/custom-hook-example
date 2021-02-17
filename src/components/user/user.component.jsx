import React from 'react';

import Card from '../card/card.component';

import withHOCData from '../with-HOC-data/with-HOC-data'

const User = ({ data }) => {

  return (
    <Card>
      {data ? (
        <div>
          <h3>{data.username}</h3>
          <p>{data.name}</p>
        </div>
      ) : (
        <p>User not found</p>
      )}
    </Card>
  );
};

export default withHOCData(User);
