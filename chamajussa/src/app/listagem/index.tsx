import { Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import Navfooter from "../../components/navFooter/Navfooter"
import Card from "../../components/card/Card"

export default function Listagem(){
    return (
        <View style={styles.container}>
            <View style={styles.topo}>
                <View style={styles.textoTopo}>
                <Text style={styles.textoBemvindo}> Ola, Kessia</Text>
                <Text style={styles.minhaOSs}>Minhas OSs</Text>
                </View>
                <Pressable style={styles.btn_criar}><Text style={styles.textBtnCriar}>Nova OS</Text>Nova OS</Pressable>
            </View>

            <View style={styles.main}>
                <View style={styles.filtros}>
                    <TouchableOpacity style={styles.btnFiltro}><Text style={styles.textoBtnFiltro}>Todos</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btnFiltro}><Text style={styles.textoBtnFiltro}>Abertas</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btnFiltro}><Text style={styles.textoBtnFiltro}>Em Andamento</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btnFiltro}><Text style={styles.textoBtnFiltro}>Concluidas</Text></TouchableOpacity>
                </View>

                <View style={styles.registroCards}>
                 <Card/>   
                 <Card/>   
                </View>

            </View>

            <Navfooter/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eae9e9',
        fontFamily: 'Montserrat',
        flex: 1,
        alignItems: 'center',
    },
    main: {
        height: '100%'
    },
    topo: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        padding: '4%',
        marginTop: '10%'
    },
    textoTopo:{
        gap: 3,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    }
    ,
    btn_criar:{
        backgroundColor: '#006FFF',
        height: 50,
        width: 120,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
    }
    ,
    textBtnCriar:{
        color: '#FFFFFF',
        fontSize: 20
    }
    ,
    filtros: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: '4%',
        height: '10%',
        width: '100%',
        gap: 5,
        flexWrap: 'wrap'
    },
    registroCards: {
        flexDirection: 'column',
        padding: '4%',
        marginTop: 2,
        height: '100%',
        gap: 10,
        alignItems: 'center'
    },
    textoBemvindo:{
        fontSize: 17,
        color: '#000'
    },
    minhaOSs:{
        fontWeight: 700,
        fontSize: 20
    },
    btnFiltro:{
        backgroundColor: '#FFFFFF',
        borderColor: '#000',
        borderWidth: 1,
        width: '30%',
        height: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
        borderRadius: 12,
        color: '#000',
        opacity: 1.5,
        fontSize: 10,
    },
    textoBtnFiltro:{
        color: '#00000040',
        opacity: 1.5
    }
})