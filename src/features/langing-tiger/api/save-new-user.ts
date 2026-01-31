import { supabase } from "@/lib";

interface SaveNewUser {
    fullName: string;
    phoneNumber: string;
}

export const saveNewUser = async (user: SaveNewUser) => {
    try {
        const { data, error } = await supabase
            .from('solicitudes')
            .insert([
                {
                    nombre_completo: user.fullName,
                    telefono: user.phoneNumber
                }
            ])

        if (error) {
            console.error('Error al guardar usuario.');
            return { success: false, error };
        }

        return { success: true, data };
    } catch (error) {
        console.error('Error inesperado:', error);
        return { success: false, error };
    }
};