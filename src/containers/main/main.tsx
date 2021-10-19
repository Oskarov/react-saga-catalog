import React from 'react';
import styles from './main.module.scss';
import {Link} from "react-router-dom";
import {PLANETS, STARSHIPS, VEHICLES} from "../../routes";

interface MainProps {

}

const Main: React.FC<MainProps> = () => {
    return <div>
        <h1>Star wars</h1>
        <h2>epic saga inside :)</h2>
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.planetImg}/>
                <div className={styles.text}>
                    The fictional universe of the Star Wars franchise features multiple planets and moons. While only
                    the
                    feature films and selected other works are considered canon to the franchise since the 2012
                    acquisition
                    of Lucasfilm by The Walt Disney Company, some canon planets were first named or explored in works
                    from
                    the non-canon Star Wars expanded universe, now rebranded Star Wars Legends.
                    <Link to={`/${PLANETS}`}><span className="link">Planets</span></Link>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.text}>
                    Behind the Scenes: Models made by the ILM model shop often employed what are known as “greeblies,”
                    adding texture to the surfaces of ships and battle stations. One of the greeblies added to the
                    surface of the huge Super Star Destroyer model was a toy soldier.
                    <Link to={`/${VEHICLES}`}><span className="link">Vehicles</span></Link>
                </div>
                <div className={styles.vehicleImg}/>
            </div>
            <div className={styles.container}>
                <div className={styles.starshipImg}/>
                <div className={styles.text}>
                    A starship, also known as a starcruiser, spaceship, spacecraft, or simply just craft or ship, was a
                    vessel designed for interstellar travel, specifically between star systems. Starships were
                    distinguished by the inclusion of a hyperdrive, a piece of equipment that made hyperspace travel
                    possible.
                    <Link to={`/${STARSHIPS}`}><span className="link">Starships</span></Link>
                </div>
            </div>
        </div>
    </div>;
}

export default Main;