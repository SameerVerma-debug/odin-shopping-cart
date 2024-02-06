import { useFetch } from "../hooks/useFetch"
import { Card } from "./Card";

export const AllProducts = () => {
  const [data,loading,error] = useFetch({path:"/products",dependencies:[]});

  if(loading){
    return <h3>Loading...</h3>
  }

  if(error){
    return <h3>Something Went Wrong</h3>
  }

  return (
    <div className="cards">
      {data && data.map((product) => {
        return <Card key={product.id} card={product}/>
      })}
    </div>
  )
}