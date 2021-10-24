import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {storeType} from "../../redux";
import VehicleCard from "../../components/vehicleCard/vehicleCard";
import {refreshVehicles} from "../../redux/actions/vehiclesActions";

interface PlanetsProps {

}

const Vehicles: React.FC<PlanetsProps> = () => {
    const dispatch = useDispatch();

    const {vehicles} = useSelector((state: storeType) => ({
        vehicles: state.vehicles.vehicles
    }));

    const refreshButtonHandler = () => {
        dispatch(refreshVehicles());
    }

    return <div>
        <div className="page-header">
            <h1>Vehicles</h1>
            <span className="refresh-button" onClick={refreshButtonHandler}/>
        </div>

        {
            vehicles.map((vehicle, i)=><VehicleCard vehicle={vehicle} key={i}/>)
        }
    </div>;
}

export default Vehicles;
