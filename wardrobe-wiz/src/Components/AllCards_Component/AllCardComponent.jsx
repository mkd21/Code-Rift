
import { ColorRing } from 'react-loader-spinner';

import { useContext } from "react";

import { Context } from "../../Context/ContextCreation.js";

import { CardsParent } from './CardsParent.jsx';

// style files 
import "./Style-folder/All-Card-Comp-Style.css";

export function AllCards()
{
    const {wardrobeData} = useContext(Context);

    if(wardrobeData)
    {
        return (

            <section className="outermostParentContainer">
                {
                    wardrobeData.map( (iter) => <CardsParent key={iter.ParentId} allData = {iter} /> )
                }
            </section>
            
        );
    }

    // when data will be in loading state then the loader will appear on screen 
    return <ColorRing visible={true} height="80" width="80" ariaLabel="color-ring-loading" wrapperStyle={{}} wrapperClass="color-ring-wrapper" colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}/>
}