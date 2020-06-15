/* eslint-disable comma-dangle */
/* eslint-disable jsx-quotes */
import React from 'react';

//images
import bagBells from '../../assets/static/img/1000Bell.png';

//CSS
import '../../assets/styles/output.css';

//CONSTS

const Fish = ({ id, name, price, location, schedule }) => {
  const style = {
    width: 360,
    height: 100,
  };

  const formatLongNames = (name) => {
    if (name.length > 14) {
      return 'text-sm';
    }
    return 'text-lg';
  };

  const formatSchedule = (schedule) => {
    if (schedule.indexOf('/') >= 0) {
      console.log(schedule.split('/')[0].trim());
      return schedule.split('/')[0].trim();
    }
    return schedule;
  };

  console.log('Valor de schedule": ', formatSchedule(schedule));

  return (
    <div
      id="fish_tile"
      style={style}
      className=" inWater overflow-hidden fish__wrapper rounded-lg shadow-lg bg-white pl-2 pr-4 py-2 mb-4  grid grid-flow-row grid-cols-3 grid-rows-3 row-gap-1 col-gap-2 mt-1 "
    >
      <div className="box p-3  relative row-span-3 col-span-1 flex flex-row justify-center overflow-hidden">
        <img
          className="self-center"
          src={`https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish${id}.png`}
          alt="Fish_Image"
        />
      </div>
      <div className="box col-span-2 row-span-1 flex flex-row flex-no-wrap justify-between pt-1 ">
        <h4
          className={`title__fish self-start truncate text-left font-bold ${formatLongNames(
            name
          )}`}
        >
          {name}
        </h4>
        <div className="flex flex-row flex-no-wrap justify-start self-start overflow-hidden ">
          <img className="w-6 h-6 self-center" src={bagBells} alt="bell" />
          <p className="fish_price text-sm font-medium self-center">{price}</p>
        </div>
      </div>
      <div className="box col-span-2 row-span-2 self-end pb-1 flex flex-row flex-no-wrap justify-start ">
        <div className="fish__location flex flex-col flex-no-wrap pr-4">
          <small className="text-xs text-gray-600">Location</small>
          <p className="text-sm truncate font-semibold">{location}</p>
        </div>
        <div className="fish__schedule flex flex-col flex-no-wrap">
          <small className="text-xs text-gray-600 truncate">
            Schedule
            <span className="text-red-400"> (2)</span>
          </small>
          <p className="text-sm truncate font-semibold">
            {formatSchedule(schedule)}
          </p>
        </div>
        <div className=" flagtags w-full flex flex-row flex-no-wrap justify-end pt-5 ">
          <div className="redflag inline-block -mr-2 rounded-full w-4 h-4 bg-fish-accent-red self-center shadow border-2 border-solid border-white" />

          <div className="greenflag inline-block -mr-2 rounded-full w-4 h-4 bg-fish-accent-blue self-center shadow border-2 border-solid border-white" />
        </div>
      </div>
    </div>
  );
};

export default Fish;
