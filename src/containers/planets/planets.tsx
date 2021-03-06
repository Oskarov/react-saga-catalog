import React from 'react';
import {useSelector} from "react-redux";
import {storeType} from "../../redux";
import PlanetCard from "../../components/planetCard/planetCard";

interface PlanetsProps {

}

const Planets: React.FC<PlanetsProps> = () => {
    const {planets} = useSelector((state: storeType) => ({
        planets: state.planets.planets
    }));

    return <div>
        <div className="page-header">
            <h1>Planets</h1>
        </div>

        {
            planets.map((planet, i)=><PlanetCard planet={planet} key={i}/>)
        }
    </div>;
}

export default Planets;
