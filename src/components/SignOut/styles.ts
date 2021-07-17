import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: 'center'
  },
  textContainer: {
    marginBottom: 23,
    fontSize: 24,
    fontFamily: theme.fonts.title500,
    color: theme.colors.heading
  },
  textBold: {
    fontFamily: theme.fonts.title700,
  },
  textRed: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.primary,
  },
  outlinedButton: {
    width: '48%',
    marginRight: 8,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: theme.colors.secondary30,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})