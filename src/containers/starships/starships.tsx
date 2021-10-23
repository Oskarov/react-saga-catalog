import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {storeType} from "../../redux";
import StarshipCard from "../../components/starshipCard/starshipCard";
import {refreshStarships} from "../../redux/actions/starshipsActions";

interface starshipsProps {

}

const Starships: React.FC<starshipsProps> = () => {
    const dispatch = useDispatch();

    const {starships} = useSelector((state: storeType) => ({
        starships: state.starships.starships
    }));

    const refreshButtonHandler = () => {
        dispatch(refreshStarships());
    }


    return <div>
        <div className="page-header">
            <h1>Starships</h1>
            <span className="refresh-button" onClick={refreshButtonHandler}/>
        </div>

        {
            starships.map((starship, i)=><StarshipCard starship={starship} key={i}/>)
        }
    </div>;
}

export default Starships;
