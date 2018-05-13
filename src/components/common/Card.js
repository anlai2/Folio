/*
Used to style the 'Cards' in the application to better design the data
*/
import React from 'react';
import { View } from 'react-native';

const Card = props => (
  <View>
    {props.children}
  </View>
);


export { Card };
