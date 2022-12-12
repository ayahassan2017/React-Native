import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Box from '../../../Box';

export default function Palette() {
    const routeInformation = useRoute();
    const { setOptions } = useNavigation();
    useEffect(() => {
        setOptions({
            title: routeInformation.params.name,
        });
    }, [routeInformation.params.name, setOptions]);

    return (
        <FlatList
            data={routeInformation.params.colors}
            renderItem={({ item: { colorName, hexCode } }) => (
                <Box title={colorName} bgColor={hexCode} />
            )}
            keyExtractor={item => item.hexCode}
            ListHeaderComponent={
                <Text style={styles.text}>Here are some boxes with color names</Text>
            }
            ListEmptyComponent={
                <View>
                    <Text>empty list</Text>
                </View>
            }
            style={styles.containerStyle}
        />
    );
}

const styles = StyleSheet.create({
    containerStyle: {
        padding: 15,
        backgroundColor: 'white',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 15,
    },
});