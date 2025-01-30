import { Text, View ,StyleSheet } from "react-native";
import Monthstats from "./monthstats";
import Dailystats from "./dailystats";
import Buttonsec from "./buttonsec";
import Anidemo from "./anidemo";

export default function Index() {
  return (
    <View  style ={styles.container} >
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
    backgroundColor: "blue",
    height: "100%",
    gap:10,
  },
});
