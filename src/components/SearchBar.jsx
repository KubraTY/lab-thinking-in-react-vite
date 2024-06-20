function SearchBar({onSearchChange, onInStockChange}) {
    return(
        <>
            <input type="text" placeholder="Search" onChange={onSearchChange} />
        <label>
        <input
          type="checkbox"
          onChange={onInStockChange}
        />
        Only show products in stock
      </label>
        </>
    )

}

export default SearchBar;