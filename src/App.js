import React from 'react';

import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';

import urlBgForLayout from './assets/bg3.jpg';

function App() {
  return (
    <React.Fragment>
      <Header title="This is title" descr="This is Description!" />
      <Layout id="1" title="Title 1" descr="Description 1" urlBg={urlBgForLayout} />
      <Layout id="2" title="Title 2" descr="Description 2" colorBg="#fefefe" />
      <Layout id="3" title="Title 3" descr="Description 3" urlBg={urlBgForLayout}/>
      <Footer />
    </React.Fragment>
  );
}

export default App;
