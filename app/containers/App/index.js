/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Layout from '../../components/layout';
import Footer from '../../components/Footer';
import Home from '../../components/Home';
import Resume from '../../components/Resume';
import Skills from '../../components/skills';
import Blog from '../../components/Blog';
import Promotion from '../../components/Promotion';

export default function App() {
  return (
    <div>
      <Navbar />
      <Layout key="layout">
        <div className="layout">
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/home" component={Home} />
            <Route path="/about" component={Resume} />
            <Route path="/skills" component={Skills} />
            <Route path="/blog" component={Blog} />
            <Route path="/promo" component={Promotion} />
          </Switch>
          <Footer />
        </div>
      </Layout>
    </div>
  );
}
