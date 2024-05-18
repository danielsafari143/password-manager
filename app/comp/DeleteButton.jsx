import { TouchableOpacity, Text, Image } from "react-native"
import deletes from '../../assets/images/Iconly/Light-Outline/delete.png';

export default DeleteButton = ({reset}) => {
    return (
        <TouchableOpacity
            className="px-3  my-2 h-20 rounded-lg flex flex-row justify-center items-center bg-[#FA263F]"
            onPress={() => reset()}>
            <Image className="h-5 w-5" source={deletes} />
            <Text className="text-white font-bold pl-1">DELETE</Text>
        </TouchableOpacity>
    );
}