import { supabase } from '../config/supabaseClient';


export const server_calls = {
    get: async () => {
        const { data, error } = await supabase
            .from('new__car')
            .select('*');

        if (error) {
            console.error('Error fetching data:', error);
            throw new Error('Failed to fetch data from the server');
        }

        return data;
    },

    create: async (data: any) => {
        console.log('Creating new car:', data); 
        const { data: createdData, error } = await supabase
            .from('new__car')
            .insert(data);

        if (error) {
            console.error('Error creating data:', error.details);
            throw new Error('Failed to create new data on the server');
        }

        return createdData;
    },

    update: async (id: string, data: any) => {
        const { data: updatedData, error } = await supabase
            .from('new__car')
            .update(data)
            .eq('id', id);

        if (error) {
            console.error('Error updating data:', error);
            throw new Error('Failed to update data on the server');
        }

        return updatedData;
    },

    delete: async (id: string) => {
        const { data: deletedData, error } = await supabase
            .from('new__car')
            .delete()
            .eq('id', id);

        if (error) {
            console.error('Error deleting data:', error);
            throw new Error('Failed to delete data from the server');
        }

        return deletedData;
    },
};
