import {View, Text, StyleSheet } from 'react-native';


export default function TripsScreen() {
    return (
        <View style={styles.container}>
            <Text>Trips Page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
