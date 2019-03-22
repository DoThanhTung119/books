import React from 'react';
import { Admin, Resource, EditGuesser } from 'react-admin';
import dataProvider from './dataProvider';
import UserList from '../src/user/users';
import authProvider from '../src/auth'

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource name="users" list={UserList} edit={EditGuesser}/>
  </Admin>
);

export default App;