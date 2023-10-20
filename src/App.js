import { Routes,Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import PageNotFound from "./Pages/PageNotFound";
import ProductDetails from "./Pages/ProductDetails";
import SearchBox from "./Components/SearchBox";
import Layout from "./Components/Layout";
function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={
      <>
      <Layout>
      <SearchBox/>
       <HomePage/>
      </Layout>
     
      </>
   
    }/>
     <Route path="/products/:id" element={<ProductDetails/>}/>
    <Route path='*' element={<PageNotFound/>}/> 
   </Routes>
   </>
  );
}

export default App;
