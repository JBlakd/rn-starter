import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ImageDetail from '../components/ImageDetail.js'

const ImageScreen = function() {
  return (
    <View>
      <ImageDetail />
      <ImageDetail />
      <ImageDetail />
      <ImageDetail />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen
