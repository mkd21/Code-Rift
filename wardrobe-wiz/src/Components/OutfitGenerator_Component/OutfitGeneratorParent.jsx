
import { OutfitGeneratorLogic } from "./OutfitGeneratorLogic.jsx";

import { useContext } from "react";
import { Context } from "../../Context/ContextCreation.js";

export function OutfitGeneratorParent()
{
    const {wardrobeData} = useContext(Context);
    return <OutfitGeneratorLogic completeData = {wardrobeData} />
}