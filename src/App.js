import React from 'react';

import User from './components/user/user.component';
import Post from './components/post/post.component';

import './App.css';

const App = props => {
  return (
    <div className='App'>
      <User dataSource={`https://jsonplaceholder.typicode.com/users?id=1`} />
      <Post dataSource={`https://jsonplaceholder.typicode.com/posts?id=1`} />
    </div>
  );
};

export default App;
