import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import UserList from '../src/user/users'

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const App = () =>{
    <Admin dataProvider={dataProvider}>
      <Resource name="users" list={ListGuesser} />
    </Admin>
}

export default App;