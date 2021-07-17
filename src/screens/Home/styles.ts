import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: getStatusBarHeight() + 26,
    marginBottom: 42,
  },
  matchesList: {
    marginTop: 24,
    marginLeft: 24,
  },
  customModalView: {
    height: 170,
    marginTop: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  }
})