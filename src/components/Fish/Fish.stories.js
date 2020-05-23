import React from 'react';
import Fish from './Fish';

export default {
  title: 'Fishes',
  component: Fish,
};

export const defaultFish = () => {
  return <Fish title="1" />;
};

export const defaultFish2 = () => {
  return <Fish title="2" />;
};
