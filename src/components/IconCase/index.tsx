import React from 'react';
import { colors } from '../../constants/variables/colors';
import {Icon} from 'custom-components/src'


export default function IconCase({item}:any) {

  switch (item) {
    case 'smartphones':
      return <Icon name="smartphone : feather" size={30} color={colors.darkgrey} />;

    case 'laptops':
      return <Icon name= "laptop : materialcomm" size={30} color={colors.darkgrey} />;

    case 'fragrances':
      return <Icon name= "spray : materialcomm" size={30} color={colors.darkgrey} />;

    case 'skincare':
      return <Icon name= "face-retouching-natural : material" size={30} color={colors.darkgrey} />;

    case 'groceries':
      return <Icon name= "fruit-cherries : materialcomm" size={30} color={colors.darkgrey} />;

    case 'home-decoration':
      return <Icon name= "home-city : materialcomm" size={30} color={colors.darkgrey} />;

    case 'furniture':
      return <Icon name= "sofa : materialcomm" size={30} color={colors.darkgrey} />;

    case 'tops':
      return <Icon name= "shirt : ion" size={30} color={colors.darkgrey} />;

    case 'womens-dresses':
      return <Icon name= "woman : ion" size={30} color={colors.darkgrey} />;

    case 'womens-shoes':
      return <Icon name= "shoe-heel : materialcomm" size={30} color={colors.darkgrey} />;

    case 'mens-shirts':
      return <Icon name="account-tie-outline : materialcomm" size={30} color={colors.darkgrey} />;

    case 'mens-shoes':
      return <Icon name="shoe-formal : materialcomm" size={30} color={colors.darkgrey} />;

    case 'mens-watches':
      return <Icon name="watch : feather" size={30} color={colors.darkgrey} />;

    case 'womens-watches':
      return <Icon name="watch : materialcomm" size={30} color={colors.darkgrey} />;

    case 'womens-bags':
      return <Icon name="shopping-bag : material" size={30} color={colors.darkgrey} />;

    case 'womens-jewellery':
      return <Icon name="necklace : materialcomm" size={30} color={colors.darkgrey} />;

    case 'sunglasses':
      return <Icon name="sunglasses : materialcomm" size={30} color={colors.darkgrey} />;

    case 'automotive':
      return <Icon name="car : materialcomm" size={30} color={colors.darkgrey} />;

    case 'motorcycle':
      return <Icon name="motorbike : materialcomm" size={30} color={colors.darkgrey} />;

    case 'lighting':
      return <Icon name="ios-bulb : ion" size={30} color={colors.darkgrey} />;

    default:
      return <Icon name="laptop : materialcomm" size={30} color={colors.darkgrey} />;
  }
}
