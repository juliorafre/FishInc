import React, { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';

import Clock from './Clock';
import Flags from '../Flags/Flags';
import Separador from './Separador';
import Button from '../Button/Button';
//images
import Logo from '../../assets/static/img/header/logo/Logo_Fish_Inc.png';

const Header = ({ hemisphere, handleState, handleLag }) => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="flex flex-row flex-no-wrap justify-start items-center">
        <div className="logo">
          <img
            className="w-auto self-start"
            src="https://res.cloudinary.com/juliorafrecloud/image/upload/v1592716450/FishInc_interface/68a2d55e13f40da1c81d8a06270a8fb8.png"
            alt="FishInc."
          />
        </div>

        <div className="px-5 opacity-50">
          <Separador />
        </div>
        <div className="northSouth flex flex-row flex-no-wrap justify-center items-center hidden sm:inline-flex">
          <h3 className="font-poppins text-lg font-semibold mb-0 pb-0">
            {t('Hemisphere')}
          </h3>
          <div className="flex flex-row flex-no-wrap justify-center items-center ml-4">
            <Button
              label={t('South')}
              selected={hemisphere === 'South'}
              handleState={handleState}
            />
            <Button
              label={t('North')}
              selected={hemisphere === 'North'}
              handleState={handleState}
            />
          </div>
        </div>
      </div>

      <Flags />
      <Clock />
    </>
  );
};

export default Header;
