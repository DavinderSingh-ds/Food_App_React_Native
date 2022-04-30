import React from 'react';
import {View , Text, StyleSheet,FlatList} from 'react-native';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({title, results}) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            {/* <Text>Results : {results.length}</Text> */}
            <FlatList
                horizontal
                data={results}    
                keyExtractor={(result) => result.id}
                renderItem={({item}) => {
                    return  <ResultsDetail result={item} />;
                        // <Text>{item.name}</Text>
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default ResultsList;