import { useEffect, useState } from "react";
import axios from "axios";
import { apiURL } from "../../public/constants/apiUrl";

export const useFetch = ({path,dependencies}) => {
  const [data,setData] = useState(null);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(null);
  
  useEffect(() => {
    let ignore = false;
    if(!ignore){
      const fetchData = async() => {
        try{
          const res = await axios.get(`${apiURL+path}`);
          if(res.status != 200){
            throw new Error("Something went wrong");
          }
          const data = res.data;
          setData(data);
        }
        catch(error){
          setError(error);
        }
        finally{
          setLoading(false);
        }
      }
      fetchData();
    }

    return () => {
      ignore = true;
    }
  },dependencies);

  return [data,loading,error];
}