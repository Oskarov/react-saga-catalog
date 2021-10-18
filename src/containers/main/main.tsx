import React from 'react';
import styles from './main.module.scss';
import {Link} from "react-router-dom";
import {PLANETS} from "../../routes";

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
        </div>
    </div>;
}

export default Main;