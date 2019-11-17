import React from 'react';
import App from 'next/app';
import Footer from '../components/footer';
import TopLayout from '../layout';
import Sidebar from '../layout/sidebar';
import Grid from '../components/Grid';
import Main from '../layout/main-content';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <TopLayout />
        <Grid>
          <Sidebar />
          <Main>
            <Component {...pageProps} />
          </Main>
        </Grid>
        <Footer />
      </>
    );
  }
}
