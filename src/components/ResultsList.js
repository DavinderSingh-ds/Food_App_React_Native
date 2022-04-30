import React from 'react';
import {View , Text, StyleSheet} from 'react-native';

const ResultsList = ({title}) => {
    return (
        <View>
            <Text>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    }
});

export default ResultsList;