import {StyleSheet} from 'react-native';
import { colors } from '../../constants/variables/colors';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lemon + 90,
  },
  headerContainer: {
    flexDirection: 'row',
    paddingHorizontal:20,
    justifyContent:'space-between'
  },
 
  title: {
    fontSize: 25,
    fontVariant: ['small-caps'],
    fontWeight: '800',
    textAlign: 'center',
    color: colors.darkgrey,
  },
});

export default styles;