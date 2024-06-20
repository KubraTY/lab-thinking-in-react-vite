import ProductRow from "./ProductRow";

function ProductTable({products}) {
    return(
        <>
        <div>product table</div>
        <ul>
            {
                products.map(product => {
                    return(
                        <li key={product.id}>
                            <ProductRow product={product}/>
                        </li>
                        
                    )
                })
            }
        </ul>
        </>
    )

}

export default ProductTable;