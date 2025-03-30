
import "./Style-folder/Each-Card-Style.css";

export function EachCard({availableWardrobeImage , type})
{
    return(

    <div className="shadow-2xl dark:bg-gray-800 dark:border-gray-700 m-auto mb-6 mt-2 ms-2 me-2 img-container-sub-parent">
        
        <div className="img-container" style={{overflow: "hidden" }}>
          <img className="" src={availableWardrobeImage} alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }}/>
        </div>

    </div>

    );
}