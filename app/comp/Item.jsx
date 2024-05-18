import { View, Image, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import fav from '../../assets/images/Iconly/Light-Outline/favorite.png';
import fillstar from '../../assets/images/Iconly/Light-Outline/fillstar.png';
import DeleteButton from '../comp/DeleteButton';
import { ListItem } from "@rneui/base";
import { useDispatch, useSelector } from "react-redux";
import { passModal } from "@/redux/add/addSlice";


export default Item = ({ item }) => {
    const [favori, setfavorite] = useState(item.favorite);
    const sts = useSelector(state => state.Add.passwordModal);
    const dispatch = useDispatch();

    return (
        <ListItem.Swipeable
            className="h-20  bg-white rounded-lg shadow shadow-indigo-500/50 w-fit px-3  my-2 hover:bg-gray-800"
            rightContent={(reset) => <DeleteButton reset = {reset}/>}
            onPress={() => dispatch(passModal(true))}
        >
            <ListItem.Content className="flex flex-row justify-between items-center">
                    <View className="flex flex-row gap-2 justify-between items-center">
                        <Image className="h-10 w-10" source={item.icon} />
                        <View className="text-gray-200">
                            <Text className="font-base">{item.title}</Text>
                            <Text className="font-sm color-gray-400">{item.body}</Text>
                        </View>
                    </View>

                    <TouchableOpacity onPress={() => { setfavorite(e => !e); console.log(item.favorite) }} className="rounded-lg items-center shadow-lg bg-white shadow-indigo-500/50 p-2 w-[35px]">
                        <Image className="h-5 w-5" source={favori ? fillstar : fav} />
                    </TouchableOpacity>
            </ListItem.Content>
        </ListItem.Swipeable>
    )
};