import React from 'react';
import styles from './planetCard.module.scss';
import {IPlanet} from "../../interfaces/planets";

interface PlanetCardProps {
    planet: IPlanet
}

const PlanetCard: React.FC<PlanetCardProps> = ({planet}) => {
    return <div className={styles.wrap}>
        <div className={styles.planet}>
            <div className={styles.planetPic}/>
            <div className={styles.planetText}>
                <div>
                    <span>Climate:</span>
                    <span>{planet.climate}</span>
                </div>
                <div>
                    <span>Diameter:</span>
                    <span>{planet.diameter}</span>
                </div>
                <div>
                    <span>OP:</span>
                    <span>{planet.orbital_period}</span>
                </div>
            </div>
        </div>
        <div className={styles.info}>
            <div className={styles.name}>{planet.name}</div>

            <div className={styles.table}>
                <div className={styles.row}>
                    <span>Population:</span>
                    <span>{planet.population}</span>
                </div>
                <div className={styles.row}>
                    <span>SW:</span>
                    <span>{planet.surface_water}</span>
                </div>
                <div className={styles.row}>
                    <span>Terrain:</span>
                    <span>{planet.terrain}</span>
                </div>
            </div>

        </div>
    </div>;
}

export default PlanetCard;
