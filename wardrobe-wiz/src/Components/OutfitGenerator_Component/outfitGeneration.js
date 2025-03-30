
export function GenerateOutfit(receivedData)
{
    const data = receivedData.map( (iter) => iter["AvailableCollection"]);
    
    let generatorArray = [];

    data.forEach( (iter) => {
        const randomIndex = Math.floor(Math.random() * iter.length);
        generatorArray.push(iter[randomIndex]);
    });

    return generatorArray;
}