import React,{ useEffect , useState } from 'react'
import SpinnerAnim from '../Components/shared/SpinnerAnim'
import { useDispatch ,useSelector } from 'react-redux'
import { fetchCocktails } from '../Redux/features/cocktailSlice';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [modifiedCocktails , setmodifiedCocktails] = useState([])
  const { loading , cocktails , error} =useSelector((state)=>({
    ...state.app,
  }));
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchCocktails());
  },[]);
  useEffect(()=>{
    if (cocktails) {
      const newCocktails = cocktails.map( item =>{
        const {idDrink , strDrink, strAlcoholic ,strGlass ,strDrinkThumb} = item ;
        return{
          id:idDrink,
          name:strDrink,
          info:strAlcoholic,
          img:strDrinkThumb,
          glass:strGlass,
        }
      })
      setmodifiedCocktails(newCocktails)
    }else{setmodifiedCocktails([])}
  },[cocktails]);
  if (loading) {
    return <SpinnerAnim/>
  }if(error){
    return <p>{error.message}</p>;
  }
  return (
 
<div className="container">
  <div className="row">
    {modifiedCocktails.map(item =>  (
      <div className="col-md-3 mt-4 m-2" key={item.id}>
  <div className="card" style={{width: '18rem'}}>
  <img src={item.img} className="card-img-top" alt={item.name} />
  <div className="card-body">
    <h5 className="card-title">{item.name}</h5>
    <h5 className="card-title">{item.glass}</h5>
    <p className="card-text">{item.info}</p>
  <Link to={`/products/${item.id}`} className="btn btn-primary">Details</Link>

  </div>
</div>

      </div>
    ))}
  </div>
</div>
  )
}

export default HomePage
