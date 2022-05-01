// useEffect is a Hook
// useState(()=> {})  ,  useState(()=> {},[ ])  ,  useState(()=> {},[value])
import React,{useState,useEffect} from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

// props has navigation properties or objects
const SearchScreen = ({navigation}) => {

    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    console.log(results);
    // in results variable all the objects of api are stored now we will use them after filtering below

    const filterResultsByPrice = (price) => {
        //price === '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price;
        })
    }
// flex property auto expand and collapse
    return(
        // <View style={{ flex : 1 }}>
        <>
            <SearchBar 
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
                />
           {errorMessage 
                ? <Text>{errorMessage}</Text> 
                : null } 
            <Text>We have found {results.length} results.</Text>

            <ScrollView>
                <ResultsList 
                    results={filterResultsByPrice('$')}
                    title="Cost Effective" 
                    navigation= {navigation}
                />
                <ResultsList 
                    results={filterResultsByPrice('$$')}
                    title="Bit Pricier"
                    navigation= {navigation}
                 />
                <ResultsList 
                    results={filterResultsByPrice('$$$')}
                    title="Big Spender"  
                    navigation= {navigation}
                />
            </ScrollView>      
        {/* </View> */}
        </>
    );
};

export default SearchScreen;