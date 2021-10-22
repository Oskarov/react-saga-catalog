import React from 'react';
import {useSelector} from "react-redux";
import {storeType} from "../../redux";
import PlanetCard from "../../components/planetCard/planetCard";
import VehicleCard from "../../components/vehicleCard/vehicleCard";

interface PlanetsProps {

}

const Vehicles: React.FC<PlanetsProps> = () => {
    const {vehicles} = useSelector((state: storeType) => ({
        vehicles: state.vehicles.vehicles
    }));

    return <div>
        <div className="page-header">
            <h1>Vehicles</h1>
        </div>

        {
            vehicles.map((vehicle, i)=><VehicleCard vehicle={vehicle} key={i}/>)
        }
    </div>;
}

export default Vehicles;
