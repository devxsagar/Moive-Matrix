import { useEffect, useState } from "react";
import { API_OPTIONS } from "@/utils/constant";


const useGetMediaDetails = (mediaType, id) => {
    const [data, setData] = useState({});

    const getData = async () => {
        const url = `https://api.themoviedb.org/3/${mediaType}/${id}?language=en-US`;

        const response = await fetch(url, API_OPTIONS);
        const json = await response.json();
        setData(json);
    }

    useEffect(() => {
        getData();
    }, []);

    return data;
};

export default useGetMediaDetails;