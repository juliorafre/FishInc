/* eslint-disable jsx-quotes */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
// utils
import { fishesSeasonal } from '../utils/utils';
//Components
import Layout from './Layout/Layout';
import HeaderContainer from './Layout/HeaderContainer';
import SectionFishes from './Layout/SectionFishes';
import SectionTitle from './Layout/SectionTitle';
import FishWrapper from './Fish/FishWrapper';
import Title from './Title/Title';
import MonthPicker from './MothPicker/MonthPicker';
import Header from './Header/Header';
import Flags from '../components/Flags/Flags';
//BBDD
import esFishes from '../bbdd/fishes_esES.json';
import enFishes from '../bbdd/fishes_enEN.json';
// CSS
import '../assets/styles/output.css';

const initialState = {
  lang: 'es',
  hemisphere: 'South',
  Fishes: esFishes.Fishes,
};

const App = (props) => {
  //const { Fishes } = props.state;
  const [state, setState] = useState(initialState);
  const { t, i18n } = useTranslation();

  function changeHemis() {
    if (state.hemisphere === 'South') {
      setState({
        ...state,
        hemisphere: 'North',
      });
    } else {
      setState({
        ...state,
        hemisphere: 'South',
      });
    }
  }

  function changeLang() {
    if (state.lang === 'es') {
      setState({
        ...state,
        lang: 'en',
        Fishes: enFishes.Fishes,
      });
    } else {
      setState({
        ...state,
        lang: 'es',
        Fishes: esFishes.Fishes,
      });
    }
  }

  return (
    <Layout>
      {/***** Header *****/}
      <HeaderContainer>
        <Header
          hemisphere={state.hemisphere}
          handleState={changeHemis}
          handleLag={changeLang}
        />
      </HeaderContainer>
      {/***** In water *****/}
      <SectionTitle>
        <Title title={t('inWater')} />
      </SectionTitle>
      <SectionFishes>
        <FishWrapper inWater={true} />
      </SectionFishes>
      {/***** All Fishes *****/}
      <SectionTitle>
        <Title title={t('AllFishes')} />
        <MonthPicker />
      </SectionTitle>
      <SectionFishes>
        <FishWrapper inWater={false} />
      </SectionFishes>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    Fishes: state.Fishes,
  };
};

/* const mapDispatchToProps = {
  logoutRequest,
}; */

export default connect(mapStateToProps, null)(App);
