import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 64,
    height: 48,
    borderRadius: 8,
    marginRight: 4,
    borderWidth: 1,
    borderColor: theme.colors.secondary50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textContainer: {
    width: 64,
    height: 48,
    color: theme.colors.heading,
    fontFamily: theme.fonts.text500,
    fontSize: 15,
    textAlign: 'center',
  }
})