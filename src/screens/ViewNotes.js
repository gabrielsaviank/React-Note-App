import React from  'react'
import {StyleSheet, View} from 'react-native'
import {Text, FAB} from 'react-native-paper'
import Header from '../component/Header'

function ViewNotes({navigation}) {
    return(
        <>
        <Header titleText= 'Adicionar Novas Notas'/>
        <View style= {styles.container} >
            <View style = {styles.titleContainer}>
                <Text style= {styles.title}>Voce nao tem notas</Text>
            </View>
            <FAB style = {styles.fab}
                small
                icon = 'plus'
                label = 'Nova Nota'
                onPress = {() =>  navigation.navigate('AddNotes')}
            />
        </View>
        </>
    )
} 

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    title: {
        fontSize: 20
    },
    fab: {
        backgroundColor: '#242424',
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 10
    },
}) 

export default ViewNotes