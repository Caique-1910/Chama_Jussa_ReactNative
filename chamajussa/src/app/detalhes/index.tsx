import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import { Colors, Fontes, TamanhoTitulo } from "../../constants/theme"
import Navfooter from "../../components/navFooter/Navfooter"

export default function Detalhes(){
    return (
        <View style={styles.container}>
            <Text style={styles.tituloDetal}>Detalhes da OS-1001</Text>
            <View style={styles.detalhes}>
                <View style={styles.tituloEDt}>
                    <View>
                        <Text style={styles.titulo}>Vazamento hidraulico</Text>
                        <Text style={styles.data}>Criada em 17/06/2026, 11:29:58</Text>
                    </View>
                </View>

                <View style={styles.infoImport}>
                    <View style={styles.informacao}>
                        <Image source={require('../../../assets/imgs/chave.png')} />

                        <View style={styles.direitaInfo}>
                            <Text style={styles.infoDaOs}>Maquina / Equipamento</Text>
                            <Text style={styles.Os}>Tubulacao/Sifao da Pia</Text>
                        </View>
                    </View>
                    <View style={styles.informacao}>
                        <Image source={require('../../../assets/imgs/localizador.png')} />

                        <View style={styles.direitaInfo}>
                            <Text style={styles.infoDaOs}>Local / Setor</Text>
                            <Text style={styles.Os}>Banheiro Masculino - Bloco B - 2º Andar</Text>
                        </View>
                    </View>
                    <View style={styles.informacao}>
                        <Image source={require('../../../assets/imgs/pessoa.png')} />

                        <View style={styles.direitaInfo}>
                            <Text style={styles.infoDaOs}>Solicitante</Text>
                            <Text style={styles.Os}>Kessia Milena</Text>
                        </View>
                    </View>
                </View>

                <View style={{ height: 1, backgroundColor: '#ccc', width: '90%', top: 8 }} />

                <View style={styles.descricao}>
                    <Text style={styles.titulo}>Descricao do Problema</Text>
                    <Text style={styles.textDescri}>Há um vazamento constante de água por baixo da pia do banheiro masculino do segundo andar do Bloco B. Está alagando o chão e causando risco de queda.</Text>
                </View>

                <View style={styles.campFoto}>
                    <Text style={styles.titulo}>Foto do Problema</Text>
                    <Image style={styles.imgProblem} source={require('../../../assets/imgs/problema.png')}/>
                </View>
            </View>
            <Pressable style={styles.btnEditar}><Text style={styles.textBtnEditar}>Editar Solicitacao</Text></Pressable>
            <Navfooter />
        </View>
    )
}



const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: Colors.corDeFundo,
            alignItems: 'center',
            textAlign: 'center',
            gap: '4%'
        },
        tituloDetal: {
            fontSize: TamanhoTitulo.fontSize,
            fontFamily: Fontes.bold,
            color: '#000000',
            justifyContent: 'center',
            marginTop: '3%',
            top: '2%'
        },
        btnEditar:{
            borderColor: Colors.corAzul,
            borderRadius: 7,
            backgroundColor: Colors.corDeFundo,
            borderWidth: 2,
            width: '85%',
            height: '5%',
            alignItems: 'center',
            justifyContent: 'center'
        },
        textBtnEditar:{
            color: Colors.corAzul,
            fontSize: 18
        },
        detalhes: {
            backgroundColor: Colors.corTxtBtn,
            alignItems: 'center',
            height: '69%',
            width: '85%',
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
            alignItems: 'flex-start',
            marginTop: '10%',
            height: '25%',
            gap: '4%',
            width: '90%'
        },
        tituloEDt: {
            width: '90%',
            height: '10%',
            gap: '10%',
            padding: '0.5%',
            justifyContent: 'flex-start'
        },
        infoImport:{
            gap: '6%',
            height: '30%',
            width: '90%'
        }
        ,
        informacao:{
            flexDirection: 'row',
            gap: '5%',
            alignItems: 'center',
            width: '90%'
        },
        campFoto:{
            alignItems: 'flex-start',
            height: '25%',
            width: '90%',
            gap: '4%'
        },
        titulo:{
            fontSize: 25,
            color: '#000',
            fontFamily: Fontes.bold
        },
        data:{
            fontSize:15,
            color: Colors.corTxtSecun,
            fontFamily: Fontes.semiBold
        },
        infoDaOs:{
            fontSize: 15,
            color: Colors.corTxtSecun,
            fontFamily: Fontes.regular
        },
        Os:{
            fontSize: 16,
            color: '#000',
            fontFamily: Fontes.semiBold
        },
        direitaInfo:{
            justifyContent: 'flex-start',
            gap: 1
        },
        textDescri:{
            textAlign: 'justify',
            fontFamily: Fontes.regular,
            fontSize: 15
        },
        imgProblem:{
            width: '90%'
        }
    }
)
