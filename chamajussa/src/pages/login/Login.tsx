import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import { Colors, Fontes, TamanhoTitulo } from "../../constants/theme"


export const Login = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../../../assets/imgs/logo.png')}
            />
            <View style={styles.forms}>
                <View style={styles.supForms}>
                    <Text style={styles.titulo}>Chama Jussa</Text>
                    <Text style={styles.subtitulo}>Gerenciamento de Ordens de Servico</Text>
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Email:</Text>
                    <TextInput style={styles.input} placeholder="email@email.com"
                        placeholderTextColor="#7D7D7D" />
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Senha:</Text>
                    <TextInput style={styles.input} placeholder="Digite sua senha"
                        placeholderTextColor="#7D7D7D" secureTextEntry />
                </View>
                <Pressable style={styles.btn}><Text style={styles.txtBtn}>Acessar o sistema</Text></Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F3F4F6',
        flex: 1,
        fontFamily: 'Montserrat_400Regular',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    forms: {
        backgroundColor: '#FFFFFF',
        height: 400,
        width: 300,
        alignItems: 'center',
        padding: 20,
        justifyContent: 'center',
        gap: 20,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    btn: {
        backgroundColor: Colors.corBtnVerde,
        borderRadius: 5,
        padding: 5,
        alignItems: 'center',
        width: 230,
        height: 40,
        justifyContent: 'center'
    },
    txtBtn:{
        color: Colors.corTxtBtn,
        fontWeight: 'bold'
    }
    ,
    input: {
        backgroundColor: '#F3F4F6',
        width: 230,
        height: 40,
        borderRadius: 4,
        padding: 8,
        borderColor: '#00000014'
    },
    supForms: {
        alignItems: 'center',
        gap: 3
    },
    titulo: {
        fontSize: TamanhoTitulo.fontSize,
        fontFamily: Fontes.bold
    },
    subtitulo: {
        color: Colors.corTxtSecun,
    },
    label: {
        color: '#000000',
        fontFamily: Fontes.semiBold
    },
    campo: {
        gap: 3
    },
    img: {
        width: 250,
        height: 240
    }
}
)

