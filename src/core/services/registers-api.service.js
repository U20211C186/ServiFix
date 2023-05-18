import http from '@/core/services/http-common';
export class RegistersApiService {
    create(data) {
        return http.post('/registers.json', data);
    }
    getAll() {
        return http.get('/registers.json').then((response) => {
            const data = response.data;
            // Convertir el objeto de respuesta a un array de registros
            return Object.keys(data).map((key) => ({
                id: key,
                ...data[key],
            }));
        });
    }
}

