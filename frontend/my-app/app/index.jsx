import { Text, View ,StyleSheet } from "react-native";
import Monthstats from "./monthstats";
import Dailystats from "./dailystats";
import Buttonsec from "./buttonsec";

export default function Index() {
  return (
    <View  style ={styles.container} >
      <Text> Hello !</Text>
      <Monthstats/>
      <Dailystats/>
      <Buttonsec/>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    display : "flex",
  },
});
