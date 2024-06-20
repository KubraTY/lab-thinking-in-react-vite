import { useState } from "react";
import jsonData from "./../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  const [searchTerm, setSearchTerm] = useState("")

  const [showInStock, setShowInStock] = useState(false)


    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value)
    }

    const handleStockChange  =(event) => {
        setShowInStock(event.target.checked)
    }

    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
        const matcgesStock = showInStock ? product.inStock :true

        return matchesSearch && matcgesStock
    })

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar onSearchChange={handleSearchChange} onInStockChange={handleStockChange}/>
      <ProductTable products={filteredProducts}/>
    </div>
  );
}

export default ProductsPage