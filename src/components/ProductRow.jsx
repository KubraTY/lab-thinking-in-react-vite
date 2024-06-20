function ProductRow({product}) {
    const style = {color: product.inStock ? 'blue':'red', display: 'flex', justifyContent:'center'}
    return(
        <div style={style}>
        <div>{product.name}</div>
        <div>{product.price}</div>
        </div>

    )
}
export default ProductRow