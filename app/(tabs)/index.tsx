import { Text, View } from "react-native";
import Calendars from './../../components/Calendar';
import { Agenda } from "react-native-calendars";

export default function HomeScreen() {
  return (
    <View>
      <Calendars />
      <View>
        <Text>Today</Text>
        <Agenda />
      </View>
    </View>
  );
}