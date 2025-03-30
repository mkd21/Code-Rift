
import { useContext, useState } from "react";

import {Context} from "../../Context/ContextCreation.js";

import { DropdownButton } from "./FilterButton.jsx";
import { FilteredCard } from "./FilteredCard.jsx";


// importing css files 

import "./filter-section-style/filtered-cards.css";
import "./filter-section-style/no-selection-text-style.css";
import "./filter-section-style/heading-style.css";

export function FilterButton_FilteredCardSection()
{
    const {wardrobeData} = useContext(Context);
    
    const [items , updateItems] = useState([]);

    const ShowFilteredCard = (selectedProduct) =>{
        if(selectedProduct == "") 
        {
            updateItems([]);
            return;
        }

        const targetObj = wardrobeData.find( (iter) => iter.type == selectedProduct );

        updateItems(targetObj.AvailableCollection);
    }

    return(

        <>
            <section className=" filter-feature-section-outer-most-parent-container">
                <h1 className="text-center filter-section-header ">Filter your Outfits..</h1>
                <DropdownButton filtedCardShow = {ShowFilteredCard} />
                <section className=" parent-container-filtered-card ">
                    {
                        (
                            items.length == 0 ? <h1 className="text-style text-center">Please Select a type to display</h1> : items.map( (iter) => <FilteredCard key={iter.childId} productImage = {iter.url} />) 
                        )
                    }
                </section>
            </section>
        </>

    );
}