import API_URL from '../config';

// Then replace your axios call with:
const { data } = await axios.post(
    `${API_URL}/send`,
    { firstName, lastName, email, phone, date, time, address },
    {
        headers: {
            "Content-Type": "application/json"
        }
    }
);




