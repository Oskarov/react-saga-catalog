import React from 'react';
import {useSelector} from "react-redux";
import {storeType} from "../../redux";
import StarshipCard from "../../components/starshipCard/starshipCard";

interface starshipsProps {

}

const Starships: React.FC<starshipsProps> = () => {
    const {starships} = useSelector((state: storeType) => ({
        starships: state.starships.starships
    }));

    return <div>
        <div className="page-header">
            <h1>Starships</h1>
        </div>

        {
            starships.map((starship, i)=><StarshipCard starship={starship} key={i}/>)
        }
    </div>;
}

export default Starships;
