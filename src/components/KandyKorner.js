import React from "react"
import { LocationList } from "./locations/LocationList"
import { LocationProvider } from "./locations/LocationProvider"
import { ProductList } from "./products/ProductList"
import { ProductProvider } from "./products/ProductProvider"

export const KandyKorner = () => (
    <>
        <h2>Kandy Korner</h2>
        
        <article className="locations">
        <LocationProvider>
                <LocationList />
            </LocationProvider>
        </article>

        <article className="products">
        <ProductProvider>
                <ProductList />
            </ProductProvider>
        </article>
    </>
)