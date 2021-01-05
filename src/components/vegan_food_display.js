import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

const ProdVeganRender = ({prodvegandata}) => {
    if(prodvegandata){
        return prodvegandata.map((item,key)=> {
                return(
                    <View key={key}>
                    <Image 
                    source={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}} 
                    style={styles.placeImage}/>
                    <Text style={styles.textval}>{item.name}</Text>
                    <Text >{'\n'}</Text>
                    </View>
                )    
            })
    }
    
}

const ListVeganDisplay =(props) =>{

        return(
                <ScrollView style={styles.listContainer}>
                    <View style={styles.listItem}>
                        {ProdVeganRender(props)}
                    </View>  
                </ScrollView>   
        )
}


const styles = StyleSheet.create({
    listContainer:{
        width:"80%"
      },
    listItem:{
        width:"100%",
        padding:10,
        marginTop:2,
        color:'#191970',
        backgroundColor: '#eee',
        alignSelf:'stretch',
    },
    placeImage:{
        marginRight:8,
        height:200
    },
    textval:{
        textAlign:'center',
        fontSize:30
    }
})



export default ListVeganDisplay;