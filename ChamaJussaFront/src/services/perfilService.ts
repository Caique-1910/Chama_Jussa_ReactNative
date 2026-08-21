import { Usuario } from "../@types"
import { api } from "./api"


export const perfilService = {
    async puxarInfoUsuario(id: number | string): Promise<Usuario> {
        const response = await api.get<Usuario>(`Usuario/${id}`)
        return response.data;
    }
}