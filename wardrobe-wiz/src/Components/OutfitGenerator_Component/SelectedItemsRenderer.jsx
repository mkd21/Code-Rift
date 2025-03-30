
import "./style-folder/cards-container-after-button-click.css";

export function ProductRenderer({productImage})
{
    return(
        <div className="each-card-container ">
            <img src={productImage} alt="" />
        </div>
    );
}   