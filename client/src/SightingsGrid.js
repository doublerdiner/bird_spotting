import SightingCard from "./SightingCard";
const SightingsGrid = ({sightings, removeSighting, editSighting}) => {
    const sightingsList = sightings.map((sighting) =>{
        return <SightingCard sighting={sighting} key={sighting._id} editSighting={editSighting} removeSighting={removeSighting} />
    });
    
    return (
        <>
            {sightingsList}
        </>
    );

}

export default SightingsGrid;