import React from 'react'
import LottieView from 'lottie-react-native'


export default function LoadingShop() {
  return (
    <LottieView
    source={require('../../assets/Lottie/LoadingShop.json')}
    autoPlay
    loop
    style={{width:250, height:250}}
    />

   
  )
}