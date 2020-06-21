import React, { useState } from 'react';
import { connect } from 'react-redux';
import { selectionOfSeason } from '../../utils/utils';
import Fish from './Fish';

const FishWrapper = ({ inWater, hemisphere, Fishes, month }) => {
  const [data, setData] = useState(selectionOfSeason(Fishes, hemisphere));

  return (
    <>
      {data.map((fish) => {
        return (
          <Fish
            key={fish.id}
            inWater={inWater}
            id={fish.id}
            name={fish.name}
            price={fish.price}
            location={fish.location}
            shadow={fish.shadow}
            schedule={fish.schedule}
            seasons={'hola'}
          />
        );
      })}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    month: state.month,
    hemisphere: state.hemisphere,
    Fishes: state.Fishes_bbdd_1,
  };
};

export default connect(mapStateToProps, null)(FishWrapper);
