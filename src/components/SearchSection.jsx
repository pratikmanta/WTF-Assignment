import React from 'react'
import Switch from "react-switch";

type Props = {
    handleChange: () => void,
    checked: boolean
}
const SearchSection = ({ handleChange, checked }: Props) => {
    return (
        <section className="mt-4">
            <div className="row">
                <div className="col d-flex justify-content-center border-right">
                    <h4 className="pr-4 text-secondary">Only Veg</h4>
                    <Switch checked={checked} onChange={() => handleChange()}/>
                </div>
                <div className="col">
                    <input className="col form-control mx-auto w-50" type="search" placeholder="Search" aria-label="Search"/>    
                </div>
            </div>
        </section>
    )
}

export default SearchSection;