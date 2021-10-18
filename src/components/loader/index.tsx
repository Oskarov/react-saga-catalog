import styles from './loader.module.scss';
import CN from 'classnames';
import {useSelector} from "react-redux";
import {storeType} from "../../redux";

const Loader = () => {

    const {loading} = useSelector((state: storeType) => ({
        loading: state.app.loading
    }));

    return (
        <div className={CN(styles.wrapper, {[styles.active]: loading})}>
            <div className={styles.center}>
                <div className={styles.wave}/>
                <div className={styles.wave}/>
                <div className={styles.wave}/>
                <div className={styles.wave}/>
                <div className={styles.wave}/>
                <div className={styles.wave}/>
                <div className={styles.wave}/>
                <div className={styles.wave}/>
                <div className={styles.wave}/>
                <div className={styles.wave}/>
            </div>
        </div>
    );
}

export default Loader;