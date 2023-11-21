import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
} from 'react-native';

const DATA = [
  {
    title: 'Todo List',
    data: ['Choi', 'Hoc', 'Nghe Nhac'],
  },

];

const App = () => (
  <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
    backgroundColor: '#ff9600fa',
  },
  item: {
    backgroundColor: '#fff400fa',
    padding: 10,
    marginVertical: 10,
  },
  header: {
    fontSize: 15,
    backgroundColor: '#ff9600fa',
  },
  title: {
    fontSize: 25,
    padding: 10,
    backgroundColor: '#ff9600fa',
  },
});

export default App;