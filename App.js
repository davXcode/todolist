import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Modal } from 'react-native';
import React, { useState } from 'react';
import colors from './Color';
import { AntDesign } from "@expo/vector-icons";
import tempData from './tempData';
import TodoList from './components/TodoList';
import AddListModal from './components/addListModal';

export default function App() {
  // state = {
  //   addTodoVisible: false
  // };

  // function toggleAddTodoModal() { 
  //   this.setState({addTodoVisible: !this.state.addTodoVisible})
  // }
  const [addTodoVisible, setAddTodoVisible] = useState(false)
  function toggleAddTodoVisible (){
    setAddTodoVisible(true)
  }

  function toggleAddTodoModal (){
    setAddTodoVisible(false)
  }

  return (
    <View style={styles.container}>
      <Modal 
        animationType='slide' 
        visible={addTodoVisible}
        onRequestClose={() => toggleAddTodoVisible()}
      >
        <AddListModal closeModal={ toggleAddTodoModal } />
      </Modal>
      <View style={{ flexDirection: 'row'}}>
        <View style={styles.divider} />
        <Text style={styles.title}>
          Todo < Text style={{fontWeight: "300", color: colors.blue}}>Lists</Text>
        </Text>
        <View style={styles.divider} />
      </View>

      <View style={{ marginVertical: 48 }}>
        <TouchableOpacity style={styles.addList} onPress={() => toggleAddTodoVisible()}>
          <AntDesign name='plus' size={15} color={colors.blue} />
        </TouchableOpacity>

        <Text style={styles.add}>Add List</Text>
      </View>

      <View style={{height: 275, paddingLeft: 32}}>
        <FlatList 
        data={tempData} 
        keyExtractor={item => item.name}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <TodoList list={item} />}
        />
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    backgroundColor: colors.lightBlue,
    height: 1,
    flex: 1,
    alignSelf: "center"
  },
  title: {
    fontSize: 38,
    fontWeight: '800',
    color: colors.black,
    paddingHorizontal: 64
  },
  addList: {
    borderWidth: 2,
    borderColor: colors.lightBlue,
    borderRadius: 4,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  add: {
    color: colors.blue,
    fontWeight: '600',
    fontSize: 15,
    marginTop: 8
  }
});
