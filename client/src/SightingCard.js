import { deleteSighting } from "./SightingService"
import { putSighting } from "./SightingService";
import {useState} from 'react';

const SightingCard = ({sighting, removeSighting, editSighting}) => {
    const [formData, setFormData] = useState({})

    const onChange = (e) =>{
        formData[e.target.id] = e.target.value;
        setFormData(formData);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        putSighting(formData, sighting._id).then(()=>{
            editSighting(formData, sighting);
       })
       setFormData({})
    }
    const handleDelete = () => {
        deleteSighting(sighting._id).then(()=>{
            removeSighting(sighting._id);
        })
    }
    return (
        <>
            <h1>{sighting.species}</h1>
            <p>Location: {sighting.location}</p>
            <p>Date: {sighting.date}</p>
            <button onClick={handleDelete}> 🗑 </button>
            <h3>Update</h3>
            <form onSubmit={onSubmit} id="sightings-form" >
            <div className="formWrap">
                <label htmlFor="species">Species:</label>
                <input onChange={onChange} type="text" id="species"  />
            </div>
            <div className="formWrap">
                <label htmlFor="location">Location:</label>
                <input onChange={onChange} type="text" id="location"  />
            </div>
            <div className="formWrap">
                <label htmlFor="date">Date:</label>
                <input onChange={onChange} type="date" id="date"  />
            </div>

            <input type="submit" value="Update" id="save"/>
	    </form>
            <hr></hr>
        </>
    )
}

export default SightingCard;