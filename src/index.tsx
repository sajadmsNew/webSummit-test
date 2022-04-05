import * as React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
// import ApolloClient , {InMemoryCache} from "apollo-boost";
// import { ApolloProvider } from "react-apollo-hooks";
import MissionListContainer from './components/MissionList';
import MissionProfile from './components/LaunchProfile';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    
    <Router>
    <Routes>
          <Route path="/"  element={<MissionListContainer />}/>
               
          <Route path="/Mission/:MissionId" element={<MissionProfile/>} />
            
    </Routes>
    </Router>
  
  </ApolloProvider>,
  document.getElementById('root'),
);
