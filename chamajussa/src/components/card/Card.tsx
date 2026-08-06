import { View, Text, StyleSheet } from 'react-native'

const Card = () => {
    return (
        <View style={styles.card}>
            <View style={styles.topoCard}>
                <Text style={styles.tituloCard}>OS - 001</Text>
                <Text style={styles.textoStatus}>Aberta</Text>
            </View>
            <View  style={styles.descricao}>
                <Text style={styles.tituloDescricao}>Vazamento hidráulico no Bloco B</Text>
                <Text style={styles.textoDescricao}>Há um vazamento constante de água por baixo da pia do banheiro masculino do segundo andar do Bloco B...</Text>
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    card:{
        flexDirection: 'column',
        gap: '10%',
        width: '90%', 
        height: '20%',
        padding: '5%',
        backgroundColor: '#FFFFFF',
        borderRadius: 10
    },
    topoCard:{
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    tituloCard:{
        color: '#006FFF',
        fontSize: 20,
        fontWeight: 700
    },
    textoStatus:{
        color: '#006FFF',
        backgroundColor: '#DBEAFE',
        width: '22%',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        padding: 1,
        fontSize: 16,
        fontWeight: 500
    },
    descricao:{
        gap: 5
    },
    tituloDescricao:{
        color: '#000',
        fontWeight: 600,
        fontSize: 15
    },
    textoDescricao:{
        fontSize: 15,
        color: 'grey'
    }
})