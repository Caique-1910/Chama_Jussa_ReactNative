import { Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

const Navfooter = () => {
  return (
    <View style={styles.nav}>

                <Pressable style={styles.btn_nav}>
                    <Image style={styles.img_btn}  source={require('../../../assets/imgs/minhas.png')} />
                    <Text>Minhas OS</Text>
                </Pressable>

                <Pressable style={styles.btn_nav}>
                    <Image style={styles.img_btn} source={require('../../../assets/imgs/criar.png')} />
                    <Text>Criar OS</Text>
                </Pressable>

                <Pressable style={styles.btn_nav}>
                    <Image style={styles.img_btn} source={require('../../../assets/imgs/notificacoes.png')} />
                    <Text>Notificacoes</Text>
                </Pressable>

                <Pressable style={styles.btn_nav}>
                    <Image style={styles.img_btn} source={require('../../../assets/imgs/perfil.png')} />
                    <Text>Perfil</Text>
                </Pressable>


            </View>
)
}

export default Navfooter

const styles = StyleSheet.create({
    nav: {
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        alignItems: 'center',
        width: '100%',
        position: 'absolute',
        bottom: 0, 
        left:0,
        right: 0,
        height: '10%',
        margin: 0,
        padding: '4%',
        backgroundColor: '#FFFFFF'
    },
    btn_nav:{
        alignItems: 'center',
        gap: 3,
        height: '100%',
        width: '25%',
    },
     img_btn:{
       height: '60%',
       width: '30%'
    }
    ,
})