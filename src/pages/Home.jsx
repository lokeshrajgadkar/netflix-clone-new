import React from 'react'
import MainCalls from '../components/MainCalls'
import Row from '../components/Row'
import requests from '../Resquest'

const Home = () => {
  return (
    <>
        <MainCalls />
        <Row title="Up Coming" fetchURL={requests.requestUpcoming} />
        <Row title="Popular" fetchURL={requests.requestPopular} />
        <Row title="Trending" fetchURL={requests.requestTrending} />
        <Row title="Top Rated" fetchURL={requests.requestTopRated} />
        <Row title="Horror" fetchURL={requests.requestHorror} />
    </>
  )
}

export default Home