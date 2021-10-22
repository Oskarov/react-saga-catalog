import React from 'react';
import styles from './starshipCard.module.scss';
import {IStarship} from "../../interfaces/starships";

interface StarshipCardProps {
    starship: IStarship
}

const StarshipCard: React.FC<StarshipCardProps> = ({starship}) => {
    return <div className={styles.wrap}>
        <div className={styles.starship}>
            <div className={styles.starshipPic}/>
            <div className={styles.starshipText}>
                <div>
                    <span>Cargo capacity:</span>
                    <span>{starship.cargo_capacity}</span>
                </div>
                <div>
                    <span>Consumables:</span>
                    <span>{starship.consumables}</span>
                </div>
                <div>
                    <span>Cost:</span>
                    <span>{starship.cost_in_credits}</span>
                </div>
                <div>
                    <span>Crew:</span>
                    <span>{starship.crew}</span>
                </div>
            </div>
        </div>
        <div className={styles.info}>
            <div className={styles.name}>{starship.name}</div>

            <div className={styles.table}>
                <div className={styles.row}>
                    <span>Length:</span>
                    <span>{starship.length}</span>
                </div>
                <div className={styles.row}>
                    <span>Manufacturer:</span>
                    <span>{starship.manufacturer}</span>
                </div>
                <div className={styles.row}>
                    <span>Speed:</span>
                    <span>{starship.max_atmosphering_speed} mh</span>
                </div>
                <div className={styles.row}>
                    <span>Model:</span>
                    <span>{starship.model}</span>
                </div>
                <div className={styles.row}>
                    <span>Passengers:</span>
                    <span>{starship.passengers}</span>
                </div>
            </div>

        </div>
    </div>;
}

export default StarshipCard;
