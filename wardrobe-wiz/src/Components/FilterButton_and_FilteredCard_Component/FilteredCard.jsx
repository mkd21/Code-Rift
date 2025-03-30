
import "./filter-section-style/inner-parent-style.css";

export function FilteredCard({productImage}) {
  return (
    <>
      <div className="inner-parent-container-filter-section">

        <div className="actual-image-container">
          <img src={productImage} alt=""/>
        </div>

      </div>
    </>
  )
}
