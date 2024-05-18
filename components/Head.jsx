import { TouchableOpacity, Image, View } from 'react-native';
import search from '../assets/images/Iconly/Light-Outline/Search.png';

export default Head = () => {
    return (
        <View className="bg-white w-[320px] mb-2 py-3 px-2 rounded-lg flex flex-row justify-between items-center">
            
            <TouchableOpacity className="rounded-lg items-center shadow-lg bg-white shadow-indigo-500/50 p-2 w-[35px]">
                <Image source={search} />
            </TouchableOpacity>

        </View>
    );
}