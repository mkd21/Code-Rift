

import { useEffect, useState } from "react";
import { Context } from "../../Context/ContextCreation.js";


export const ContextProvider = ({children}) =>{

    const [wardrobeData , updateData] = useState(null);

    // will fetch the data from localstrorage or default api depending on the data availabiltity
    const getData = async() =>{
    
        const availableData = localStorage.getItem("data_wardrobe");
        
        if(availableData)
        {
            updateData(JSON.parse(availableData));
        }
        else 
        {
            const res = await fetch("../../API/wardrobe-data.json");
            const usefuldata = await res.json();
            updateData(usefuldata);
            localStorage.setItem("data_wardrobe" , JSON.stringify(usefuldata));
        }
    }

    // will control the sode effects
    useEffect( () => {
        getData();
    } , []);

    function UpdateItems(receivedProductImage , typeOfItem)
    {
        const reader = new FileReader();

        reader.onloadend = () =>{

        const base64Image = reader.result;
        
        const dataInLocalStorage = ( localStorage.getItem("data_wardrobe") ? JSON.parse(localStorage.getItem("data_wardrobe")) : [] );
            
        const targetCollectionObj = dataInLocalStorage.find( (iter) => iter.type == typeOfItem );

        const lastElement = targetCollectionObj.AvailableCollection[targetCollectionObj.AvailableCollection.length -1];

        const newObject = {childId : lastElement.childId + 10 , url : base64Image};

        targetCollectionObj.AvailableCollection.push(newObject);

        updateData(dataInLocalStorage);

        // updating the data back to local storage 
        localStorage.setItem("data_wardrobe" , JSON.stringify(dataInLocalStorage));
    }

    reader.readAsDataURL(receivedProductImage);
    }
    
    return(

        <Context.Provider value={{wardrobeData , UpdateItems}}>
            {children}
        </Context.Provider>
    );
}