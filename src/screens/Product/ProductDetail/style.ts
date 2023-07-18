import {StyleSheet} from 'react-native';
import { colors } from '../../../constants/variables/colors';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lemon + 70,
  },
  brandContainer: {
    flexDirection: 'row',
    marginVertical: 5,
    alignSelf: 'center',
  },
  brand: {
    fontSize: 40,
    fontWeight: '500',
    fontVariant: 'small-caps',
    color: colors.white,
    shadowOpacity: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.darkgrey,
    marginVertical:5
  },
  description:{
    fontSize:13,
    color:colors.darkgrey,
  },
  priceButtonRow:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingVertical:25,
  },
  priceContainer:{
    flexDirection:'row',
    alignItems:'center',
    marginLeft:10
  },
  priceText:{
    fontSize:20,
    marginLeft:5,
  },
});

export default styles;