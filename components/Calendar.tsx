import { View } from "react-native";
import { Agenda, Calendar } from "react-native-calendars";

export default function Calendars() {

  return (
    <View>
      <Calendar />
      <Agenda
        items={{
          '2024-06-10': [{
            name: 'item 1 - any js object',
            height: 1,
            day: "asdfwedfsdf"
          }],
          '2024-06-11': [{
            name: 'item 1 - any js object',
            height: 0,
            day: ""
          }],
          '2024-06-12': [{
            name: 'item 1 - any js object',
            height: 0,
            day: ""
          }],
          '2024-06-13': [{
            name: 'item 1 - any js object',
            height: 0,
            day: ""
          }],
        }}
        selected={'2024-06-10'}
      />
    </View>
  ); 
}

