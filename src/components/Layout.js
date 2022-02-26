import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Container, Divider, Icon } from 'semantic-ui-react';

import styles from './layout.css';

const Layout = ({ children }) => {
  return (
    <Container>
      <Link to="/">
        <Header as="h1" className={styles.h1}>
          webpack-for-react
        </Header>
      </Link>
      {children}
      <Divider />
      <p className={styles.pullRight}>
        <Icon name="heart" color="red" /> Nick
      </p>
    </Container>
  );
};

export default Layout;
