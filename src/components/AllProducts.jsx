import { useFetch } from "../hooks/useFetch"
import { Card } from "./Card";

export const AllProducts = () => {
  const [data,loading,error] = useFetch({path:"/products",dependencies:[]});

  if(error){
    return <h3>Something Went Wrong</h3>
  }

  return (
    <div className="cards-wrapper">
      <h1>All Products</h1>
    <div className="cards">
      {data && data.map((product) => {
        return <Card key={product.id} card={product}/>
      })}
    </div>
    </div>
  )
}