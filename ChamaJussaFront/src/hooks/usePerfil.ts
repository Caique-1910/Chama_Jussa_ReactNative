import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";

import { Usuario } from "../@types";
import { perfilService } from "../services/perfilService";

interface TokenPayload {
  id: string;
}

export function usePerfil() {
  const [perfil, setPerfil] = useState<Usuario>();

  useEffect(() => {
    async function carregarPerfil() {
      try {
        const token = await AsyncStorage.getItem(process.env.EXPO_PUBLIC_TOKEN_KEY);

        if (!token) {
          console.log("Token não encontrado.");
          return;
        }

        const decoded = jwtDecode<TokenPayload>(token);
        const usuarioId = decoded.id;

        const dados = await perfilService.puxarInfoUsuario(usuarioId);

        setPerfil(dados);
      } catch (error) {
        console.error("Erro ao carregar perfil:", error);
      } 
    }

    carregarPerfil();
  }, []);

  return {
    perfil
  };
}

export default usePerfil;