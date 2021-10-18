import React from 'react';
import {Link} from "react-router-dom";
import styles from './homeLink.module.scss';

interface HomeLinkProps {

}

const HomeLink: React.FC<HomeLinkProps> = () => {
    return <Link to="/"><span className={styles.link}/></Link>;
}

export default HomeLink;
