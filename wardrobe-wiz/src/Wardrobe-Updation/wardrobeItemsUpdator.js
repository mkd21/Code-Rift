

export function UpdateItems(receivedProductImage , typeOfItem)
{
    const reader = new FileReader();
    reader.onloadend = () =>{

        const base64Image = reader.result;
       
        const dataInLocalStorage = ( localStorage.getItem("data_wardrobe") ? JSON.parse(localStorage.getItem("data_wardrobe")) : [] );
        
        const targetCollectionObj = dataInLocalStorage.find( (iter) => iter.type == typeOfItem );

        const lastElement = targetCollectionObj.AvailableCollection[targetCollectionObj.AvailableCollection.length -1];

        const newObject = {childId : lastElement.childId + 10 , url : base64Image};

        targetCollectionObj.AvailableCollection.push(newObject);

        localStorage.setItem("data_wardrobe" , JSON.stringify(dataInLocalStorage));
    }

    reader.readAsDataURL(receivedProductImage);
}