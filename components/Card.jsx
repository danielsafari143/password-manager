import { TouchableOpacity } from "react-native-web"

import { useCallback } from "react";

export default Card = ({ item }) => {
    return (
        <TouchableOpacity key={item.key} onPress={() => console.log(item.dest)} >
            <Image source={item.icon} />
            <View>
                <Text>{item.title}</Text>
                <View>
                    <Text>{`${item.number}Passwords`}</Text>
                    <Image />
                </View>
            </View>
        </TouchableOpacity>)
};