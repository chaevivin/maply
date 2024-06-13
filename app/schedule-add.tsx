import { Pressable, Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHook";
import { useState } from "react";
import { selectTripValue, setTripDays, setTripLocation, setTripTitle } from "@/modules/reducers/tripInfoSlice";
import ScheduleDetailForm from "@/components/ScheduleDetailForm";
import { ScrollView } from "react-native-gesture-handler";
import { addDetail, selectDetailNumValue } from "@/modules/reducers/detailNumSlice";
import { changeVisible } from "@/modules/reducers/modalVisibleSlice";
import CalendarModal from "@/components/CalendarModal";

export default function ScheduleAddScreen() {
  const dispatch = useAppDispatch();
  const detailNum = useAppSelector(selectDetailNumValue);
  const { days } = useAppSelector(selectTripValue);

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [isStart, setIsStart] = useState<boolean>();

  const handleTitleSubmit = () => {
    dispatch(setTripTitle(title));
    setTitle("");
  };

  const handleLocationSubmit = () => {
    dispatch(setTripLocation(location));
    setLocation("");
  };

  const handleStartClick = () => {
    dispatch(changeVisible());
    setIsStart(true);
  };

  const handleEndClick = () => {
    dispatch(changeVisible());
    setIsStart(false);
  };

  const handlePlusClick = () => {
    dispatch(addDetail());
  };

  return (
    <ScrollView>
      <View>
        <Pressable>
          <Ionicons name="chevron-back" size={24} color="black" />
        </Pressable>
        <Text>스케쥴 추가하기</Text>
        <Pressable>
          <FontAwesome6 name="check" size={24} color="black" />
        </Pressable>
      </View>
      {/* 제목 */}
      <View>
        <Text>제목</Text>
        <TextInput
          onChangeText={(text) => setTitle(text)}
          value={title}
          onSubmitEditing={() => handleTitleSubmit()}
          placeholder="제목을 입력하세요."
        />
      </View>
      {/* 날짜 버튼 */}
      <View>
      </View>
      {/* 날짜 */}
      <View>
        <Text>날짜</Text>
        <View>
          <Text>시작일</Text>
          <View>
            <Text>{days.start}</Text>
            <Pressable
              onPress={() => handleStartClick()}
            >
              <MaterialIcons name="calendar-month" size={24} color="black" />
            </Pressable>
          </View>
        </View>
        <View>
          <Text>종료일</Text>
          <View>
            <Text>{days.end}</Text>
            <Pressable
              onPress={() => handleEndClick()}
            >
              <MaterialIcons name="calendar-month" size={24} color="black" />
            </Pressable>
          </View>
        </View>
        <CalendarModal isStart={isStart} />
      </View>
      {/* 위치 */}
      <View>
        <Text>위치</Text>
        <TextInput
          onChangeText={(text) => setLocation(text)}
          value={location}
          onSubmitEditing={() => handleLocationSubmit()}
          placeholder="위치를 검색하세요."
        />
        <Pressable
          onPress={() => handlePlusClick()}
        >
          <AntDesign name="pluscircleo" size={24} color="black" />
        </Pressable>
        {Array(detailNum).fill(0).map((_, i) => (
          <ScheduleDetailForm key={i} />
        ))}
      </View>
    </ScrollView>
  );
}
