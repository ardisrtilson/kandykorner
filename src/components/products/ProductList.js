import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider"

export const ProductList = () => {
    const {products, getProducts} = useContext(ProductContext)
    const {productTypes, getProductTypes} = useContext(ProductContext)
    useEffect(() => {
        getProductTypes()
        getProducts()
    }, [])

    return (
        <article className="products">
        {
            products.map(product => {
                const foundType = productTypes.find(type => type.id === product.productTypeId) || {}
                return <section key={product.id} className="product">
                    <div><h3>{product.name}</h3></div>
                    <div>{product.price}</div>
                    <div>{foundType.type }</div>
                </section>
            })
        }
        </article>
    )
}