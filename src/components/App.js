/* eslint-disable jsx-quotes */
import React from 'react';
//Components
import Layout from './Layout/Layout';
import Section from './Layout/Section';
import Fish2 from './Fish/Fish2';
//BBDD
import esFishes from '../bbdd/fishes_esES.json';

const App = () => {
  console.log(esFishes);
  return (
    <Layout>
      <Section>
        {esFishes.Fishes.map((fish) => {
          return (
            <Fish2
              key={fish.id}
              type={false}
              inWater={false}
              id={fish.id}
              name={fish.name}
              price={fish.price}
              location={fish.location}
              shadow={fish.shadow}
              schedule={fish.schedule}
              seasons={fish.seasons.South[0]}
            />
          );
        })}
      </Section>
    </Layout>
  );
};

export default App;
