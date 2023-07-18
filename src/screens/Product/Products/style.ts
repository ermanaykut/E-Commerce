import {Dimensions, StyleSheet} from 'react-native';
import { colors } from '../../../constants/variables/colors';



const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lemon+90,
  },
  headerContainer:{
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingHorizontal:20,
  },
  backIcon: {

  },
  title: {
    fontSize: 25,
    fontVariant: ['small-caps'],
    fontWeight: '800',
    color: colors.darkgrey
  },
  flatList:{
    marginLeft: 10,
  },
  button:{

    borderWidth:1,
    width:50,
    height:50,
    position:'absolute',
    top:5,
    right:5,

  },
 
});

export default styles;