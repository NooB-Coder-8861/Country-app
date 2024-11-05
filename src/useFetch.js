import {useState, useEffect} from 'react';

const useFetch = (API) => {
    const [data, setData] = useState( []);

    useEffect(() =>{
        fetch(API)
        .then((res) =>{
            return res.json();
        }).then(value => {
            setData(value);
        })
    },[API])

    return (data);
}

export default useFetch;