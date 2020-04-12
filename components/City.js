import React from 'react';
import styles from '../assets/styles';

import { Text, TouchableOpacity } from 'react-native';
// import Icon from './Icon';
import Icon from 'react-native-vector-icons/FontAwesome';

const City = () => {
  return (
    <TouchableOpacity style={styles.city}>
      <Text style={styles.cityText}>
        <Icon name="location-arrow" /> New York
      </Text>
    </TouchableOpacity>
  );
};

export default City;
