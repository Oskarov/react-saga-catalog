import React, {useEffect, useState} from 'react';
import styles from './search.module.scss';

interface SearchProps {
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>,
    testId?: string
}

const Search: React.FC<SearchProps> = ({search, setSearch, testId}) => {
    const [currentSearch, setCurrentSearch] = useState('');

    const debounce = (func: () => void, timeout: number) => {
        let timer;
        return (...args:any) => {
            if (!timer) {
                func.apply(this, args);
            }
            clearTimeout(timer);
            timer = setTimeout(() => {
                timer = undefined;
            }, timeout);
        };
    }

    useEffect(() => {
        if (!!search.trim().length) {
            setCurrentSearch(search);
        }
    }, []);

    const handleSearch = (value: string) => {
        setCurrentSearch(value);
        const debouncedSearch = debounce(() => setSearch(value), 5000);
        debouncedSearch();
    }

    return <input className={styles.search} id="standard-basic" placeholder="Поиск"
                  value={currentSearch} onChange={(e) => handleSearch(e.target.value)}
    />
}

export default Search;
