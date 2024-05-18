import { View, Text , TextInput , TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Modal from "react-native-modal";
import addSlice from "@/redux/add/addSlice";
import { addModal } from "@/redux/add/addSlice";

export default WrapperComponent = () => {
    const sts = useSelector(state => state.Add.modalOpened);
    const dispatch = useDispatch();
   
    return (
        <View>
            <Modal className="relative mb-2 bg-white rounded-lg shadow dark:bg-gray-700 p-5 h-auto" isVisible={sts}>
                <View style={{ flex: 1 }}>
                    <View className="flex items-left justify-between pb-5 md:p-5 border-b border-gray-100 rounded-t dark:border-gray-600">
                        <Text className="text-xl font-semibold text-gray-900 dark:text-white">
                            Add a new password
                        </Text>
                    </View>
                    <View className="p-3 mt-5 mb-2 rounded-lg shadow shadow-xl shadow-indigo-500/50 bg-white">
                        <TextInput
                            placeholder="User"
                        />
                    </View  >
                    <View className="p-3 mb-2 rounded-lg shadow shadow-xl shadow-indigo-500/50 bg-white">
                        <TextInput
                            placeholder="App"
                        />
                    </View>
                    <View className="p-3 mb-2 rounded-lg shadow shadow-xl shadow-indigo-500/50 bg-white">
                        <TextInput
                            placeholder="Password"
                        />
                    </View>
                    <View className="p-3  mb-2 rounded-lg shadow shadow-xl shadow-indigo-500/50 bg-white">
                        <TextInput
                            placeholder="Logo"
                        />
                    </View>
                </View>
                <View className="flex flex-row items-center justify-between">
                    <TouchableOpacity className=" py-3 px-5 rounded-lg shadow shadow-lg shadow-white bg-[#007EF3]" onPress={() => dispatch(addModal(false))}>
                        <Text className="color-white font-bold">Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className=" py-3 px-5 rounded-lg shadow shadow-lg shadow-white bg-[#FA263F]" onPress={() => {dispatch(addModal(false))}}>
                        <Text className="color-white font-bold">Cancel</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
}