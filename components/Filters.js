import React from 'react';
import styles from '../assets/styles';

import { Text, TouchableOpacity } from 'react-native';
// import Icon from './Icon';
import Icon from 'react-native-vector-icons/FontAwesome';

const Filters = () => {
  return (
    <TouchableOpacity style={styles.filters}>
      <Text style={styles.filtersText}>
        <Icon size={16} name="filter" /> Filters
      </Text>
    </TouchableOpacity>
  );
};

export default Filters;
