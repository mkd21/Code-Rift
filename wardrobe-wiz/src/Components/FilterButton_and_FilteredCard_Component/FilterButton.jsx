
import { useState , useEffect } from "react";


// importing style file for filter button 

import "./filter-section-style/filterbutton-style.css";

export function DropdownButton({filtedCardShow})
{
    const [selectedProduct, setSelectedProduct] = useState("");
    
    const products = ['Tshirt', 'Jeans', 'Shoes'];

    useEffect( () => {

        filtedCardShow(selectedProduct);

    } , [selectedProduct] )

    return(

        <section>
            <div className="w-full mx-auto p-4">
                <select className="dropdown-btn px-3 py-2 border rounded-md text-gray-700" 
                    onChange={(e) => setSelectedProduct(e.target.value)}
                    value={selectedProduct}>

                    <option value="">Select a Product</option>

                    {products.map((product) => (
                    <option key={product} value={product} className="options-styles" >
                        {product}
                    </option>
                    ))}
                </select>
            </div>
        </section>
        
    );
}