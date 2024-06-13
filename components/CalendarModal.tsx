import { useAppDispatch, useAppSelector } from "@/hooks/reduxHook";
import { changeVisible, selectVisibleValue } from "@/modules/reducers/modalVisibleSlice";
import { Modal, View } from "react-native";
import { Calendar } from "react-native-calendars";
import { setTripDays } from "@/modules/reducers/tripInfoSlice";

interface CalendarModalState {
  isStart: boolean | undefined;
}

export default function CalendarModal ({ isStart }: CalendarModalState) {
  const { modalVisible } = useAppSelector(selectVisibleValue);
  const dispatch = useAppDispatch();

  const handleDayClick = (day: string) => {
    dispatch(setTripDays({day, isStart}));
    dispatch(changeVisible());
  };

  return (
    <View>
      <Modal
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => dispatch(changeVisible())}
      >
        <Calendar 
          onDayPress={(day) => handleDayClick(day.dateString)}
        />
      </Modal>
    </View>
  );
}