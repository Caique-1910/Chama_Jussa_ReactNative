import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import { Colors, Fontes, TamanhoTitulo } from "../../constants/theme"
import Navfooter from "../../components/navFooter/Navfooter"

const Detalhes = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.tituloDetal}>Detalhes da OS-1001</Text>

            <View style={styles.detalhes}>
                <View style={styles.tituloEDt}>
                    <View>
                        <Text>Vazamento hidraulico</Text>
                        <Text>Criada em 17/06/2026, 11:29:58</Text>
                    </View>
                </View>

                <View style={styles.infoImport}>
                    <View style={styles.informacao}>
                        <Image source={require('../../../assets/imgs/chave.png')} />

                        <View>
                            <Text>Maquina/Equipamento</Text>
                            <Text>Tubulacao/Sifao da Pia</Text>
                        </View>
                    </View>
                    <View style={styles.informacao}>
                        <Image source={require('../../../assets/imgs/localizador.png')} />

                        <View>
                            <Text>Local / Setor</Text>
                            <Text>Banheiro Masculino - Bloco B - 2º Andar</Text>
                        </View>
                    </View>
                    <View style={styles.informacao}>
                        <Image source={require('../../../assets/imgs/pessoa.png')} />

                        <View>
                            <Text>Solicitante</Text>
                            <Text>Kessia Milena</Text>
                        </View>
                    </View>
                </View>

                <View style={{ height: 1, backgroundColor: '#ccc', width: '100%' }} />

                <View style={styles.descricao}>
                    <Text>Descricao do Problema</Text>
                    <Text>Há um vazamento constante de água por baixo da pia do banheiro masculino do segundo andar do Bloco B. Está alagando o chão e causando risco de queda.</Text>
                </View>

                <View>
                    <Text>Foto do Problema</Text>
                    <Image />
                </View>
            </View>

            <Pressable><Text>Editar Solicitacao</Text></Pressable>
            <Navfooter />
        </View>
    )
}

export default Detalhes

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: Colors.corDeFundo,
            alignItems: 'center',
            textAlign: 'center',
            gap: '3%'
        },
        detalhes: {
            backgroundColor: Colors.corTxtBtn,
            alignItems: 'center',
            height: '70%',
            width: '80%',
            borderRadius: 10,
            padding: '4%',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            flexDirection: 'column'
        },
        descricao: {
            alignItems: 'center'
        },
        tituloDetal: {
            fontSize: TamanhoTitulo.fontSize,
            fontFamily: Fontes.bold,
            color: '#000000',
            justifyContent: 'center',
            marginTop: '6%'
        },
        tituloEDt: {
            width: '100%',
            height: '10%',
            gap: '10%'
        },
        infoImport:{
            gap: '5%',
            height: '30%',
            width: '100%'
        }
        ,
        informacao:{
            flexDirection: 'row',
            gap: '4%',
            alignItems: 'center',
            width: '100%'
        }
    }
)
