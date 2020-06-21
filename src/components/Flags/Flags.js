/* eslint-disable jsx-quotes */
import React from 'react';
import { useTranslation } from 'react-i18next';

//images
import EngFlag from '../../assets/static/img/flags/USA_flag.png';
import EspFlag from '../../assets/static/img/flags/Esp_flag.png';

export default function Flags() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button
        className={`mr-1  ${t('lang') === 'en' ? 'opacity-25' : ''}`}
        type="button"
        onClick={() => changeLanguage('en')}
      >
        <img
          src="https://res.cloudinary.com/juliorafrecloud/image/upload/v1592716449/FishInc_interface/f355f2c029d8e036b5251089dfaab75a.png"
          alt="English"
        />
      </button>
      <button
        className={`mr-1  ${t('lang') === 'es' ? 'opacity-25' : ''}`}
        type="button"
        onClick={() => changeLanguage('es')}
      >
        <img
          src="https://res.cloudinary.com/juliorafrecloud/image/upload/v1592716450/FishInc_interface/50841d2fc120fbd9aeeff5dfd954c09a.png"
          alt="Spanish"
        />
      </button>
    </div>
  );
}
