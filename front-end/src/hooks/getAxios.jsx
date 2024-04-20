import { useState, useEffect } from 'react';
import axios from 'axios';
// it's axios to get the api content
const getAxios=(url)=>{
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        (async () => {
            try {
              setLoading(true);
              setError(false);
              const response = await axios.get(url);
              if(response.data.length>0){
                console.log(response.data);
                setData(response.data);
              }
              else{
                setData([]);
              }

            } catch (error) {
              setError(true);
            } finally {
              setLoading(false);
            }
          })()
    },[url])
   return {data,error,loading}
}
export default getAxios;
