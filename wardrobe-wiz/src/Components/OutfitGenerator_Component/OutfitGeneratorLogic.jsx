
import { useState } from "react";
import "./style-folder/outfitGenerator-parent-container.css";

import "./style-folder/cards-container-after-button-click.css";

// importing outfit generator function 

import { GenerateOutfit } from "./outfitGeneration.js";

// importing selected product rendered component 

import { ProductRenderer } from "./SelectedItemsRenderer.jsx";

export function OutfitGeneratorLogic({completeData})
{
    const [generatedOutfit , updateGeneratedOutfit] = useState([]);

    const handleOutfitRecommendationSystem = () =>{
        const receivedData = GenerateOutfit(completeData);
        updateGeneratedOutfit(receivedData);
    }

    return(
        <>
            <section className="parent-container-outfit-generator ">

                <h1>Outfit Recommendation</h1>
                <section className=" generate-button-container ">

                    <button className="bg-blue-300 hover:cursor-pointer hover:bg-blue-500 hover:text-white  p-3 rounded-2xl"
                        onClick={handleOutfitRecommendationSystem}
                    >
                        Generate my Outfit
                    </button>

                </section>

                <section className="parent-container-recommendation-system ">
                    {
                        (generatedOutfit.length == 0 ? <h2>Your Generated Outfits will be shown here...</h2> : 
                            <section className="w-full md:flex">
                                {
                                    generatedOutfit.map( (iter) => <ProductRenderer key={iter.childId} productImage = {iter.url} /> )
                                }
                            </section>
                        )
                    }
                </section>
                
            </section>
        </>
    );
}