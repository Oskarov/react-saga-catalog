import React from 'react';
import {useSelector} from "react-redux";
import {storeType} from "../../../redux";

interface PeopleDetailsProps {

}

const PeopleDetails: React.FC<PeopleDetailsProps> = () => {

    const {people} = useSelector((state: storeType) => ({
        people: state.people.people,
    }));

    console.log(people);
    
    let tPeople = !!people.length ? people[0] : null;

    console.log(tPeople);

    return <div>
        <div className="page-header">
            <h1>{!!tPeople ? tPeople.name : 'Loading...'}</h1>
        </div>
        {tPeople && <div>
            <div><span>Birth Year:</span> {tPeople.birth_year}</div>
            <div><span>Gender:</span> {tPeople.gender}</div>
            <div><span>Height:</span> {tPeople.height}</div>
            <div><span>Mass:</span> {tPeople.mass}</div>
            <div><span>Hair color:</span> {tPeople.hair_color}</div>
            <div><span>Skin color:</span> {tPeople.skin_color}</div>
            <div><span>Eye color:</span>  {tPeople.eye_color}</div>
        </div>
        }

    </div>;
}

export default PeopleDetails;
