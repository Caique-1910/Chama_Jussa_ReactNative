import { Stack } from "expo-router"

export default function RootLayout(){
    return (
        <Stack>
            <Stack.Screen
                name="login/index"
                options={{
                    title: 'login',
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="listagem/index"
                options={{
                    title: 'listagem',
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="detalhes/index"
                options={{
                    title: 'detalhes',
                    headerShown: false
                }}
            />
        </Stack>
    )
}