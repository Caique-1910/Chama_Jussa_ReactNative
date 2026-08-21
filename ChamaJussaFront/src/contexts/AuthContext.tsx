import { createContext, ReactNode, useContext, useEffect, useState, } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";

interface TokenPayload {
    id: string;
}

interface AuthContextData {
    token: string | null;
    usuarioId: string | null;
    isLoading: boolean;

    login: (token: string) => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextData>( {} as AuthContextData
);

interface AuthProviderProps {
    children: ReactNode;
}

export function AuthProvider({ children, }: AuthProviderProps) {
    const [token, setToken] = useState<string | null>(null);
    const [usuarioId, setUsuarioId] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    async function carregarSessao() {
        try {
            const tokenSalvo = await AsyncStorage.getItem("token");

            if (tokenSalvo) {
                const decoded = jwtDecode<TokenPayload>(tokenSalvo);

                setToken(tokenSalvo);
                setUsuarioId(decoded.id);
            }
        } catch (error) {
            console.error("Erro ao carregar sessão:", error);

            await AsyncStorage.removeItem("token");
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        carregarSessao();
    }, []);

    async function login(novoToken: string) {
        try {
            const decoded = jwtDecode<TokenPayload>(novoToken);

            await AsyncStorage.setItem("token", novoToken);

            setToken(novoToken);
            setUsuarioId(decoded.id);
        } catch (error) {
            console.error("Erro ao fazer login:", error);
        }
    }

    async function logout() {
        await AsyncStorage.removeItem("token");

        setToken(null);
        setUsuarioId(null);
    }

    return (
        <AuthContext.Provider
      value= {{
        token,
            usuarioId,
            isLoading,
            login,
            logout,
      }
}
    >
    { children }
    </AuthContext.Provider>
  );
}

export function useAuth() {
    return useContext(AuthContext);
}