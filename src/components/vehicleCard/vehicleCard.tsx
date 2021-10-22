import React from 'react';
import styles from './vehicleCard.module.scss';
import {IVehicle} from "../../interfaces/vehicles";

interface VehicleCardProps {
    vehicle: IVehicle
}

const VehicleCard: React.FC<VehicleCardProps> = ({vehicle}) => {
    return <div className={styles.wrap}>
        <div className={styles.vehicle}>
            <div className={styles.vehiclePic}/>
            <div className={styles.vehicleText}>
                <div>
                    <span>Cargo capacity:</span>
                    <span>{vehicle.cargo_capacity}</span>
                </div>
                <div>
                    <span>Consumables:</span>
                    <span>{vehicle.consumables}</span>
                </div>
                <div>
                    <span>Cost:</span>
                    <span>{vehicle.cost_in_credits}</span>
                </div>
                <div>
                    <span>Crew:</span>
                    <span>{vehicle.crew}</span>
                </div>
            </div>
        </div>
        <div className={styles.info}>
            <div className={styles.name}>{vehicle.name}</div>

            <div className={styles.table}>
                <div className={styles.row}>
                    <span>Length:</span>
                    <span>{vehicle.length}</span>
                </div>
                <div className={styles.row}>
                    <span>Manufacturer:</span>
                    <span>{vehicle.manufacturer}</span>
                </div>
                <div className={styles.row}>
                    <span>Speed:</span>
                    <span>{vehicle.max_atmosphering_speed} mh</span>
                </div>
                <div className={styles.row}>
                    <span>Model:</span>
                    <span>{vehicle.model}</span>
                </div>
                <div className={styles.row}>
                    <span>Passengers:</span>
                    <span>{vehicle.passengers}</span>
                </div>
                <div className={styles.row}>
                    <span>Class:</span>
                    <span>{vehicle.vehicle_class}</span>
                </div>
            </div>

        </div>
    </div>;
}

export default VehicleCard;
