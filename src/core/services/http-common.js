import axios from 'axios';

export default axios.create({
    baseURL: 'https://servifix-169f2-default-rtdb.firebaseio.com',
    headers: { 'Content-type': 'application/json' }
});

