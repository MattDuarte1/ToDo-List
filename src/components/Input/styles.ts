import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 54,
    gap: 5,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    borderRadius: 6,
    padding: 16,
    backgroundColor: '#262626',
    fontSize: 16,
    color: '#F2F2F2'
  },
  button: {
    width: 52,
    height: 52,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E6F9F'
  }
});