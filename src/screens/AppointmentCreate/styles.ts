import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 18,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading
  },
  form: {
    paddingHorizontal: 24,
    marginTop: 32,
  },
  selectServerContainer: {
    width: '100%',
    height: 68,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: theme.colors.secondary50,
    borderWidth: 1,
    borderRadius: 8,
    paddingRight: 25,
    // overflow: 'hidden'
  },
  selectServerContent: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 64,
    height: 68,
    backgroundColor: theme.colors.secondary40,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderColor: theme.colors.secondary50,
    borderRadius: 8,
  },
  field: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  divider: {
    marginRight: 4,
    fontSize: 15,
    fontFamily: theme.fonts.text500,
    color: theme.colors.highlight
  },
  charactersCount: {
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    color: theme.colors.highlight
  },
  footer: {
    marginVertical: 20,
    marginBottom: 56,
  }
})