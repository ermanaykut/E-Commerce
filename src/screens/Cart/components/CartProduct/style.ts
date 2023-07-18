import {StyleSheet} from 'react-native';
import { colors } from '../../../../constants/variables/colors';


const styles = StyleSheet.create({
  container: {
    width: '95%',
    alignSelf: 'center',
    backgroundColor: colors.darkgrey+60,
    marginVertical: 5,
    padding: 10,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  midContainer: {
    width: '55%',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 4,
    marginRight: 10,
    
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  box: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 20,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: colors.orange,
  },
  brand: {
    marginBottom: 5,
    fontSize: 15,
    fontWeight: '500',
  },
  priceContainer:{
    backgroundColor: colors.orange,
    width: '35%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 2,
    borderRadius: 5,
  }
});

export default styles;