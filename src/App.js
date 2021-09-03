import React from 'react'
import { Route } from 'react-router-dom';
import styled from 'styled-components'
import Nav from './components/nav'
import Home from './pages/Home'
import MyApps from './pages/MyApps'
import MyResume from './pages/MyResume'
import MyCode from './pages/MyCode'

function App() {

  return (
    <AppWrapper>
      <Nav />
      <MainContent>
        <Route path='/' exact component={Home} />
        <Route path='/myapps' exact component={MyApps} />
        <Route path='/myresume' exact component={MyResume} />
        <Route path='/mycode' exact component={MyCode} />
      </MainContent>
    </AppWrapper>
  );
}

const MainContent = styled.div`
    margin-top: 7rem;
`;

const AppWrapper = styled.div`
    width: 90vw;
    height: 90vh;
    margin: auto;
    position: relative;
`;

export default App;
