import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"

export const LocationList = () => {
    const {locations, getLocations} = useContext(LocationContext)

    useEffect(() => {
        getLocations()
    }, [])

    return (
        <article className="locations">
        {
            locations.map(location => {
                return <section key={location.id} className="location">
                    <div><h3>{location.address}</h3></div>
                    <div>{location.footage}</div>
                    <div>{location.accessible}</div>
                </section>
            })
        }
        </article>
    )
}