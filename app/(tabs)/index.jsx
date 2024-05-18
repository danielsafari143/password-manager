import { FlatList, Text, View, TouchableOpacity, Image, StyleSheet, TextInput, SafeAreaView } from "react-native"
import { useState } from "react";
import { useCallback } from "react";
import { ScrollView } from "react-native";
import apps from '../../assets/images/Iconly/Light-Outline/Category.png';
import arrow from '../../assets/images/Iconly/Light-Outline/Vector.png';
import user from '../../assets/images/Iconly/Light-Outline/User.png';
import wallet from '../../assets/images/Iconly/Light-Outline/Wallet.png';
import others from '../../assets/images/Iconly/Light-Outline/others.png';
import { Link } from "expo-router";
import WrapperComponent  from '../comp/WrapperComponent';
import Item from '../comp/Item';
import { useSelector } from "react-redux";
import SearchBar from '../comp/SearchBar';

export default Home = () => {
    const passwords = useSelector(state => state.Add.passwords);
    const RenderItem = useCallback(({ item }) => {
        return (
        <Link asChild href={{
            pathname:"/password/[id]",
            params:{id: item.key , icon: item.icon}
        }}>
            <TouchableOpacity key={item.key} onPress={() => console.log(item.dest)}
                className="block w-[45%] p-2 bg-white h-auto 
                            rounded-lg shadow-lg shadow-indigo-500/50
                            hover:bg-gray-100 dark:bg-gray-800 
                            dark:hover:bg-gray-700 m-2 flex flex-col justify-between py-5 px-3">

                <View className="rounded-lg items-center shadow-lg bg-white shadow-indigo-500/50 p-2 mb-5 w-[40px]">
                    <Image className="h-5 w-5" source={item.icon} />
                </View>
                <View className="flex flex-column gap-1" >
                    <Text className="text-base font-bold">{item.title}</Text>
                    <View className="flex flex-row justify-between items-center">
                        <Text className="text-sm color-gray-500 font-semibold italic">{`${item.number} Passwords`}</Text>
                        <Image source={arrow} />
                    </View>
                </View>
            </TouchableOpacity>
        </Link>    
        )
    }, []);

    return (
        <SafeAreaView className="h-full flex flex-column items-center mb-5 mx-5">
            <ScrollView className="pt-5" showsVerticalScrollIndicator={false}>
                <WrapperComponent />
                <View>
                    <SearchBar/>
                    <View>
                        <FlatList
                            ListHeaderComponent={() => (
                                <Text className="font-bold my-2 text-xl  w-[310px]">Category</Text>
                            )
                            }
                            numColumns={2}
                            data={[{ title: 'Apps', number: 3, dest: 'app', key: 1, icon: apps }
                                , { title: 'Socials', number: 3, dest: 'app', key: 2 , icon: user }
                                , { title: 'Wallets', number: 3, dest: 'app', key: 3, icon: wallet }
                                , { title: 'Others', number: 3, dest: 'app', key: 4, icon: others }]}
                            renderItem={RenderItem}
                            contentContainerStyle={{
                                display: 'flex',
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        />
                    </View>
                </View>
                <View className="w-full mb-5">
                    <View >
                        <FlatList
                            ListHeaderComponent={() => (
                                <Text className="font-bold my-2 text-xl ml-2  w-[310px]">Recently Added</Text>
                            )
                            }
                            data={passwords}
                            renderItem={({ item }) => <Item item={item} />}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

