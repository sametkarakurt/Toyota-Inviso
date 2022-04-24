import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E8EAED',
    flex: 1,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  searchButton: {
    backgroundColor: '#fff',
    width: Dimensions.get('screen').width - 20,
    height: 60,
    borderRadius: 30,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    flexDirection: 'row',
    top: 30,
  },

  item: {
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  row: {
    top: 50,
    paddingHorizontal: 20,
  },
});

export default styles;
