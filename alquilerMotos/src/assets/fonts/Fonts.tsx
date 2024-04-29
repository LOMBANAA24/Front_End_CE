
import { Platform } from 'react-native';

export default {
  regular: Platform.select({
    ios: 'Helvetica',
    android: 'Roboto',
  }),
  bold: Platform.select({
    ios: 'Helvetica-Bold',
    android: 'Roboto-Bold',
  }),
  // Variantes de fuentes
};
