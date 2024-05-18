import { Stack, Text } from "expo-router";
import { Provider } from "react-redux";
import store from "../redux/store";

export default AppLayout = () => {

    return (
        <Provider store={store}>
            <Stack >
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
        </Provider>
    )
}