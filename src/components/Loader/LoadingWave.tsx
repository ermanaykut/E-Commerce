import React from 'react'
import LottieView from 'lottie-react-native'


export default function LoadingWave() {
  return (
    <LottieView
    source={require('../../assets/Lottie/CircleWave.json')}
    autoPlay
    loop
    />

   
  )
}