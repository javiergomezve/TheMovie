import { ActivityIndicator, View } from "react-native";

export default function FullScreenLoader() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large" color="indigo" />
        </View>
    )
}