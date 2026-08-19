import { ActivityIndicator, FlatList, Pressable, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./listaOs.styles"
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "../../../components/footer/Footer";
import CardOs from "../../../components/cardOs";
import useOrdemServico from "../../../hooks/useOrdemServico";
import { OrdemServico } from "../../../@types";
import { useState } from "react";


export default function ListaOs() {

  const [filtroStatus, setFiltroStatus] = useState<string>('Todos');

  const { ordens, loading, error, recarregar } = useOrdemServico();

  const ordensFiltradas = ordens.filter((os) => {
    if (filtroStatus === 'Todos') return true;
    const statusAtual = os.statusNome || '';
    return statusAtual.toLowerCase().includes(filtroStatus.toLowerCase());
  });

  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>
        <View style={styles.superior}>
          <View>
            <Text style={styles.titulo}>Olá, Késsia</Text>
            <Text style={styles.titulo_lista}>Minhas OSs</Text>
          </View>
          {/* Use o TouchableOpacity para protótipos rápidos e botões simples onde o efeito padrão de transparência já atende bem.
    Use o Pressable para criar sistemas de design robustos, botões com feedback de cor customizado e componentes que precisam de respostas ao toque mais complexas. */}
        </View>
        <View style={styles.filtros}>
          {['Todos', 'Aberto', 'Em Andamento', 'Concluído', 'Cancelada'].map((status) => (
            <Pressable
              key={status}
              style={[
                styles.filterbtn,
                filtroStatus === status && { backgroundColor: '#0052CC' },
              ]}
              onPress={() => setFiltroStatus(status)}
            >
              <Text style={styles.filterbtntxt}>{status}</Text>
            </Pressable>
          ))}
        </View>
        {loading && ordens.length === 0 ? (
          // Estado de carregamento inicial
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ActivityIndicator size="large" color="#0878F9" />

            <Text
              style={{
                marginTop: 12,
                color: "#6B7280",
              }}
            >
              Carregando ordens de serviço...
            </Text>
          </View>
        ) : error && ordens.length === 0 ? (
          // Estado de erro
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              padding: 20,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "#DC2626",
                textAlign: "center",
                marginBottom: 16,
              }}
            >
              {error}
            </Text>

            <TouchableOpacity
              style={styles.btn_nova_os}
              onPress={recarregar}
            >
              <Text style={styles.btn_text}>
                Tentar novamente
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <FlatList
            data={ordensFiltradas}
            keyExtractor={(item: OrdemServico) => String(item.osId)}
            showsVerticalScrollIndicator={false}

            // Pull-to-refresh
            refreshing={loading}
            onRefresh={recarregar}

            ListEmptyComponent={
              <View
                style={{
                  alignItems: "center",
                  marginTop: 40,
                }}
              >
                <Text
                  style={{
                    color: "#9CA3AF",
                    fontSize: 16,
                  }}
                >
                  Nenhuma ordem de serviço encontrada.
                </Text>
              </View>
            }

            renderItem={({ item }) => (
              <CardOs
                numOs={item.osId}
                status={item.statusNome}
                titulo={item.nomeItem}
                descricao={item.descricao}
              />
            )}
          />
        )}
      </View>
      {/* <Footer /> */}
    </SafeAreaView>
  )
}
