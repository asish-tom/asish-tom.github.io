/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import '../styles/mains.scss';

function Layout(props) {
  if (props) {
    return <main>{props.children}</main>;
  }
}

export default Layout;
