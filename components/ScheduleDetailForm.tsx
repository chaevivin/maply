import { useAppDispatch, useAppSelector } from "@/hooks/reduxHook";
import { selectTripValue } from "@/modules/reducers/tripInfoSlice";
import { Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { deleteDetail } from "@/modules/reducers/detailNumSlice";

export default function ScheduleDetailForm () {
  const dispatch = useAppDispatch();
  const { title, location } = useAppSelector(selectTripValue);

  const handleMinusClick = () => {
    dispatch(deleteDetail());
  };

  return (
    <View>
      <Text>{title}</Text>
      <TouchableOpacity
        onPress={() => handleMinusClick()}
      >
        <AntDesign name="minuscircleo" size={24} color="black" />
      </TouchableOpacity>
      <View>
        {/* 위치 */}
        <View>
          <FontAwesome6 name="location-dot" size={24} color="black" />
          <Text>{location}</Text>
        </View>
        {/* 시간 */}
        <View>
          <MaterialCommunityIcons name="clock" size={24} color="black" />
        </View>
        {/* 사진 추가 버튼 */}
        <TouchableOpacity>
          <MaterialCommunityIcons name="image" size={24} color="black" />
          <Text>사진 추가하기</Text>
        </TouchableOpacity>
        {/* 이동 수단 */}
        <View>
          <FontAwesome6 name="car" size={24} color="black" />
        </View>
        {/* 메모 */}
        <View>
          <FontAwesome6 name="pen-clip" size={24} color="black" />
          <TextInput
            multiline
            placeholder="메모를 입력하세요."
          />
        </View>
      </View>
    </View>
  );
}