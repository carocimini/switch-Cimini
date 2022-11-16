import {
  StyleSheet,
  View,
} from "react-native"

import Header from "./components/Header";
import ListScreen from "./screens/listScreen";
import StartAppScreen from "./screens/StartAppScreen";
import colors from "./constants/colors";
import { useFonts } from "expo-font";
import { useState } from "react";

export default function App() {
const [loaded] = useFonts({
  PermanentMarker: require('./assets/fonts/PermanentMarker-Regular.ttf')
})
  
  const [listName, setListName] = useState()

  const handleStartList = (selectedName) => {
    setListName(selectedName)
  }
  let content = <StartAppScreen onStartApp={handleStartList}/>

  if (listName) {
    content = <ListScreen/>
  }

  if(!loaded) {
    return null
  }
  
  return (
    <View style={styles.container}>
      <Header title={"TodayDo"} newStyles={{fontFamily: 'PermanentMarker'}}/>
      {content}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  }
})
