import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import image from '../../assets/images/home.png'
import like from '../../assets/images/like.png'
import security from '../../assets/images/security.png'
import prof from '../../assets/images/Iconly/Light-Outline/profile.png';
import not from '../../assets/images/Iconly/Light-Outline/bell.png';
import add from '../../assets/images/Iconly/Light-Outline/plus.png';
import dots from '../../assets/images/Iconly/Light-Outline/dots.png';
import {addModal} from '../../redux/add/addSlice'
import { useDispatch } from "react-redux";

const Icons = () => {
    const dispatch = useDispatch();

    return (
        <View className="flex flex-row pr-5 items-center">
            <TouchableOpacity className="p-1" onPress={() => {dispatch(addModal(true))}}>
                <Image className="rounded-lg w-7 h-7" source={add} />
            </TouchableOpacity>
            <TouchableOpacity className="p-2" onPress={() => {console.log("Notifications")}}>
                <Image className="rounded-lg w-5 h-5" source={not} />
            </TouchableOpacity>
            <TouchableOpacity className="p-2" onPress={() => {console.log("Params")}}>
                <Image className="rounded-lg  w-5 h-5" source={dots} />
            </TouchableOpacity>
        </View>
    );
}

export default TabLayout = () => {
    return (
        <Tabs >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    headerTitle: () => <Text></Text>,
                    headerLeft: () => <Image source={prof} className="h-7 w-7 ml-5 shadow-lg shadow-indigo-500/50" />,
                    headerRight: () => <Icons />,
                    headerStyle: { backgroundColor: "white" },
                    tabBarIcon: () => {
                        return <Image source={image} />
                    }
                }} />

            <Tabs.Screen
                name="like"
                options={{
                    headerShown: false,
                    tabBarIcon: () => {
                        return <Image source={like} />
                    }
                }} />

            <Tabs.Screen
                name="security"
                options={{
                    headerShown: false,
                    tabBarIcon: () => {
                        return <Image source={security} />
                    }
                }} />
        </Tabs>
    )
}