
import { AllCards } from "../AllCards_Component/AllCardComponent";

import { FilterButton_FilteredCardSection } from "../FilterButton_and_FilteredCard_Component/FIlterBtn_and_FilteredCard_Component.jsx";

// outfit generator parent compnent 

import { OutfitGeneratorParent } from "../OutfitGenerator_Component/OutfitGeneratorParent.jsx";
export function ParentComp(){

    return(
        <>
            <AllCards />
            <FilterButton_FilteredCardSection />
            <OutfitGeneratorParent />
        </>
    );
}