import React from 'react'
import LottieView from 'lottie-react-native'


export default function LoadingCart() {
  return (
    <LottieView
    style={{width: 400, height:400}}
    source={require('../../assets/Lottie/LoadingCart')}
    autoPlay
    loop
    />

   
  )
}