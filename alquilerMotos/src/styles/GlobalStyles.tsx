import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  text: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: Colors.dark,
  },
});
