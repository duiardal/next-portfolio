import React from 'react';
import App, { Container } from 'next/app';
import Footer from '../components/footer';
import TopLayout from '../layout';
import Sidebar from '../layout/sidebar';
import Grid from '../components/Grid';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <>
          <TopLayout />
          <Grid>
            <Sidebar />
            <Component {...pageProps} />
          </Grid>
          <Footer />
        </>
      </Container>
    );
  }
}
