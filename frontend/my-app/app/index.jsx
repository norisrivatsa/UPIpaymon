import { Text, View ,StyleSheet } from "react-native";
import Monthstats from "./monthstats";
import Dailystats from "./dailystats";
import Buttonsec from "./buttonsec";
import Anidemo from "./anidemo";

export default function Index() {
  return (
    <View  style ={styles.container} >
      <Text> Hello !</Text>
      <Monthstats/>
      <Dailystats/>
      <Buttonsec/>
      <Anidemo/>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    display : "flex",
  },
});
