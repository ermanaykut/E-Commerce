import {StyleSheet} from 'react-native';
import {colors} from '../../constants/variables/colors';

export const styles = StyleSheet.create({
  linearGradient: {
    paddingVertical: 25,
    paddingHorizontal: 25,
    borderRadius: 30,
    opacity:0.9,

  
  },
  title: {
    fontSize: 25,
    fontWeight:'bold',
    textAlign: 'center',
    color: colors.white ,
    shadowColor: colors.black,
    shadowOpacity:1,

  },
});
