import {
  StyleSheet,
  View,
} from "react-native"

import Header from "./components/Header";
import ListScreen from "./screens/listScreen";
import StartAppScreen from "./screens/StartAppScreen";
import colors from "./constants/colors";
import { useState } from "react";

export default function App() {
  const [listName, setListName] = useState()

  const handleStartList = (selectedName) => {
    setListName(selectedName)
  }
  let content = <StartAppScreen onStartApp={handleStartList}/>

  if (listName) {
    content = <ListScreen/>
  }
  
  return (
    <View style={styles.container}>
      <Header title={"TodayDo"}/>
      {content}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  }
})
