import React from 'react';
import {Text} from 'react-native';
import {AppState} from '../../store/types';
import {connect} from 'react-redux';
import {TradeStackProps} from '../../navigation/trade/types';

const TradeBase = (props: TradeStackProps) => {
  console.log('user: ', props.user);
  return <Text>Trade</Text>;
};

const mapStateToProps = (state: AppState) => ({
  user: state.user,
});

const mapDispatchToProps = () => ({});

export const Trade = connect(mapStateToProps, mapDispatchToProps)(TradeBase);
