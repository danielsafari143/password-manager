import { View, Text , TextInput , TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Modal from "react-native-modal";
import addSlice from "@/redux/add/addSlice";
import { passModal } from "@/redux/add/addSlice";

export default PassModal = () => {
    const sts = useSelector(state => state.Add.passwordModal);
    const dispatch = useDispatch();
   
    return (
       
            <Modal backdropOpacity={0.1} coverScreen={false} className="relative mb-2 bg-white rounded-lg shadow dark:bg-gray-700 p-5" isVisible={sts}>
                <TouchableOpacity onPress={() => dispatch(passModal(false))}>
                    <Text>Close</Text>
                </TouchableOpacity>
            </Modal>
        
    );
}