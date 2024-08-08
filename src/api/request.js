import axios from 'axios';
import toast from 'react-hot-toast';

export const createRequest = (data) => {
    return axios
        .post('http://localhost:3305/requests/request', data)
        .then((resp) => {
            toast('Заявка оформлена', {
                icon: '✅️',
                duration: 1500,
            });
            return resp;
        })
        .catch((error) => {
            console.error(error.response.data);
            toast('Заявка не оформлена', {
                icon: '🚫',
                duration: 1500,
            });
        });
};
