import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';


export default function Tarea({tarea, id, completada, completarTarea, eliminarTarea}) {
    return (
        <View style={[styles.contenedor, completada ? styles.tachada : null]}>
          <Text 
            onPress={()=>completarTarea(id)}
            style={[styles.textoTarea, completada ? styles.textoTachado : null]}>
            {tarea}
          </Text>
          <View style={styles.contenedorIcono}>
              <AntDesign 
                onPress={()=>eliminarTarea(id)} 
                name='closecircle' 
                style={{color:'#fff', fontWeight:'bold', fontSize:30}}>
              </AntDesign>
          </View>
          

        </View>
      )
    }
    
    const styles = StyleSheet.create({
        contenedor:{
            minHeight: 50,
            marginTop:5,
            backgroundColor:'#D745EB',
            paddingStart:15,
            paddingEnd:5,
            borderRadius:6,
            flexDirection:'row',
        },
        textoTarea:{
            paddingVertical:10,
            flex: 9,
            fontSize: 16,
            color: '#000',
            fontWeight:'bold',           
        },
        textoTachado:{
          textDecorationLine: 'line-through',
 
        },
        tachada: {
          backgroundColor:'#46ACEA',
        },
        contenedorIcono:{
          flex:2,
          alignItems:'center',
          justifyContent:'center',
        }
    }
    );