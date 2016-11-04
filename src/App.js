import React, { Component } from 'react';
import {
  Layout,
  Header,
  Navigation,
  Drawer,
  Content
} from 'react-mdl/lib/Layout';
import HeaderLeft from './components/HeaderLeft';
import Hero from './components/Hero';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout fixedHeader>
            <Header
            title={<HeaderLeft />}
            >
                <Navigation>

                </Navigation>
            </Header>
            <Drawer title="CardSweep">
                <Navigation>

                </Navigation>
            </Drawer>
            <Content>
              <Hero />
            </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
