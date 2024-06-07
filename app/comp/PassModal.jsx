import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Modal from "react-native-modal";
import addSlice from "@/redux/add/addSlice";
import { passModal } from "@/redux/add/addSlice";
import copie from '../../assets/images/Iconly/Light-Outline/copie.png';
import show from '../../assets/images/Iconly/Light-Outline/show.png';
import modifier from '../../assets/images/Iconly/Light-Outline/modifier.png';
import prof from '../../assets/images/Iconly/Light-Outline/profile.png';
import { useState } from "react";

export default PassModal = () => {
    const sts = useSelector(state => state.Add.passwordModal);
    const password = useSelector(state => state.Add.passwords)
    const passwordId = useSelector(state => state.Add.passwordId);
    const dispatch = useDispatch();
    const data = (password.filter(element => element.key == passwordId))[0];
    const [showpassword, setShowPassword] = useState(true);
    const [changeCred, setCred] = useState(false);
    const [textvalue , setTextValue] = useState(data.title);

    return (

        <Modal backdropOpacity={0.1} coverScreen={false} className="relative mb-2 bg-white rounded-lg shadow dark:bg-gray-700 p-5" isVisible={sts}>
            
            <View className="flex flex-colmn justify-center items-between gap-y-5">
            <Image source={prof} className="h-10 w-10 my-5 self-center shadow-lg shadow-indigo-500/50" />
                <View className="flex flex-col">
                    <View className="flex flex-row justify-between items-center">
                        <View className="flex flex-row gap-2 items-center">
                            <Image className="h-10 w-10" source={data.icon} />
                            <View>
                                <TextInput
                                    value={textvalue}
                                    editable={changeCred}
                                    className="text-black text-base font-base"
                                    onChangeText={(e) => setTextValue(e)}
                                    focusable={true}
                                />
                                <TextInput
                                    value={data.body}
                                    editable={changeCred}
                                    className="italic text-gray-500 font-sm"
                                />
                            </View>
                        </View>
                        <TouchableOpacity
                            onPress={() => setCred(!changeCred)}
                        ><Image className="h-4 w-4 p-2" source={modifier} />
                        </TouchableOpacity>
                    </View>
                    <View className="my-5 flex flex-row items-center justify-between">
                        <Text className="text-xs w-fit color-gray-400">Passwords</Text>
                    </View>
                    <View>
                        <View className="flex flex-row justify-between items-center">
                            <TextInput
                                secureTextEntry={showpassword}
                                value={data.password}
                                editable={false}
                                className="text-black italic text-gray-500"
                            />
                            <View className="flex flex-row items-center justify-center gap-3">
                                <TouchableOpacity><Image className="h-4 w-4 p-2" source={copie} /></TouchableOpacity>
                                <TouchableOpacity
                            onPress={() => setCred(!changeCred)}
                        ><Image className="h-4 w-4 p-2" source={modifier} />
                        </TouchableOpacity>
                        <TouchableOpacity
                                    onPress={() => setShowPassword(!showpassword)}
                                ><Image className="h-4 w-4 p-2" source={show} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <TouchableOpacity className="py-3 px-5 rounded-lg shadow shadow-lg shadow-white bg-[#FA263F]" onPress={() => dispatch(passModal({ ste: false, id: "item7" }))}>
                    <Text className="color-white font-bold text-center">Close</Text>
                </TouchableOpacity>
            </View>
        </Modal>

    );
}