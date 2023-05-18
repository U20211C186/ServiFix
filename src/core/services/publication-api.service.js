import http from '@/core/services/http-common';
export class PublicationApiService {
    nuevaPubli(data){
        return http.post('/publication.json', data);
    }
    getAll() {
        return http.get('/publication.json');
    }
}
