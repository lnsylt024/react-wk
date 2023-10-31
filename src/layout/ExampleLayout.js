import {useState} from "react";

function ProductCategoryRow({category}) {
    //4 and 5
    return (
        <tr>
            <td colSpan="2">
                {category}
            </td>
        </tr>
    );
}

function ProductRow({product}) {
    const name = product.stocked ? product.name : (
        <span style={{color: "red"}}>
            {product.name}
        </span>
    );
    //5 and 4
    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    );
}

function ProductTable({products, filterText, inStockOnly}) {
    //3
    const rows = [];
    let lastCategory = null;
    products.forEach((obj) => {
        if (filterText && obj.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
            // not equal
            return;
        }

        if (inStockOnly && !obj.stocked) {
            return;
        }

        if (obj.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    category={obj.category}
                    key={obj.category}/>
            );
        }
        rows.push(
            <ProductRow product={obj} key={obj.name}/>
        );
        lastCategory = obj.category;
    })
    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

function SearchBar({filterText, inStockOnly, onFilterChange, onInStockChange}) {
    //2
    return (
        <form>
            <input type="text"
                   placeholder="Search..."
                   value={filterText}
                   onChange={(e) => onFilterChange(e.target.value)}
            />
            <label>
                <input type="checkbox"
                       checked={inStockOnly}
                       onChange={(e) => onInStockChange(e.target.checked)}
                />
                {' '} Only show products in stock.
            </label>
        </form>
    );
}

function FilterableProductTable({products}) {
    //set default value.
    const [filterText, setFilterText] = useState('')
    const [inStockOnly, setInStockOnly] = useState(false);

    //1
    return (
        <div>
            <SearchBar
                filterText={filterText}
                inStockOnly={inStockOnly}
                onFilterChange={setFilterText}
                onInStockChange={setInStockOnly}
            />
            <ProductTable
                products={products}
                filterText={filterText}
                inStockOnly={inStockOnly}
            />
        </div>
    );
}

function Index() {
    return (
        <>
            <FilterableProductTable products={PRODUCTS}/>
        </>
    );
}

//import data
const PRODUCTS = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

export default Index;