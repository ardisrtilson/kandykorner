import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider"

export const ProductList = () => {
    const {products, getProducts} = useContext(ProductContext)

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <article className="products">
        {
            products.map(product => {
                return <section key={product.id} className="product">
                    <div><h3>{product.name}</h3></div>
                    <div>{product.price}</div>
                    <div>{product.productTypeId}</div>
                </section>
            })
        }
        </article>
    )
}