import { Text, View, FlatList, ActivityIndicator, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useSelector } from "react-redux";
import SearchBar from "../comp/SearchBar";
import { useLocalSearchParams } from "expo-router";
import PassModal from "../comp/PassModal";


export default Index = () => {
    const load = true;
    const passwords = useSelector(state => state.Add.passwords);
    const local = useLocalSearchParams();

    console.log(local.icon);

    return (
        load ? <SafeAreaView >
            <View className="absolute w-full h-[450px]">
            <PassModal />
            </View>
            <View className="absolute mx-5 left-0 top-5 h-auto">
            <View >
                <SearchBar />
                <View className="my-2 flex flex-row items-center justify-between">
                    <Text className="text-xs w-fit">Passwords</Text>
                    <Image className="h-3 w-3" source={local.icon}/>
                </View>
            </View>
            <View className="w-full p-0 mb-5 mt-2">
                <View >
                    {passwords.length !== 0 ? <FlatList
                        data={passwords}
                        renderItem={({ item }) => <Item item={item} />}

                    /> : <View className="flex flex-col items-center justify-center h-full"><Text className="text-center">No passwords have been saved in this category yet.</Text></View>}
                </View>
            </View>
            </View>
        </SafeAreaView> : <ActivityIndicator color={"#7f7f7f"} size={"large"} className="flex flex-col items-center justify-center h-full" />
    )
}