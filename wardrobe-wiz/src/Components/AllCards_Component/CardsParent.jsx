
// impoting heading styles 
import "./Style-folder/Card-Parent-Type-Heading.css";


// importing each card type container parent 

import "./Style-folder/MultipleCardRenderer-ParentContainer.css";

import "./Style-folder/Each-Card-Style.css";

// importing the form style 

import "./Style-folder/Form-Style.css";


import { EachCard } from "./EachCard.jsx";
import { useState } from "react";


import { useContext } from "react";
import { Context } from "../../Context/ContextCreation.js";

export function CardsParent({allData})
{
    const{AvailableCollection , type} = allData;

    const {UpdateItems} = useContext(Context);

    // handling the form visiblity 
    const [formVisible , updateVisiblity] = useState(false);
    
    const [productImage , setImage] = useState(null);

    const handleFormSubmit = (e) =>{
        e.preventDefault();
        UpdateItems(productImage , type);
        updateVisiblity(false);
    }
    
    return(
        <>
            <section className="MultipleCardRender-ParentContainer md:mb-6" style={{ overflow: "hidden" , textAlign : "center" }} >
                <h1 className="mt-1.5 mb-7 typeHeader">Wardrobe Type : {type}</h1>
                <section className="md:flex md:justify-around flex-wrap parent-image-container">
                    {
                        AvailableCollection.map((iter) => <EachCard key={iter.childId} availableWardrobeImage={iter.url} type={type} />)
                    }
                </section>

                <section className="add-items-button" >
                    <button onClick={ () =>{
                        updateVisiblity(!formVisible);
                    }}
                    className="bg-blue-500 hover:cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Add {type}</button>
                    
                    {
                        (formVisible) && 
                        <section className="form-parent-container">
                            <form onSubmit={handleFormSubmit} >
                                <div className="form-group">
                                    <label htmlFor="image">Upload Image</label>
                                    <input
                                    type="file"
                                    id="image"
                                    accept="image/*"
                                    onChange={(e) => setImage(e.target.files[0])}
                                    required
                                    className="input-field"
                                    />
                                </div>

                                <button type="submit" className="submit-button">Submit</button>
                            </form>
                            
                        </section>
                    }

                </section>

            </section>
        </>
    );
}