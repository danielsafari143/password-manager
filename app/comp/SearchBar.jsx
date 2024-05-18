import { View, TouchableOpacity, TextInput, Image } from "react-native";
import search from '../../assets/images/Iconly/Light-Outline/Search.png';

export default SearchBar = () => {
    return (
        <View>
            <View className="bg-white w-full mb-2 py-3 px-2 rounded-lg flex flex-row justify-between items-center">
                <TextInput
                    placeholder="Search here..."
                    className="text-base italic w-fit"
                />
                <TouchableOpacity className="rounded-lg items-center shadow-lg bg-white shadow-indigo-500/50 p-2 w-[35px]">
                    <Image className="h-5 w-5" source={search} />
                </TouchableOpacity>
            </View>
        </View>
    );
} 