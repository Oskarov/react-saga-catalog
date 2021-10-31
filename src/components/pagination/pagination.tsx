import React from 'react';
import styles from './pagination.module.scss'
import CN from "classnames";

interface PaginationProps {
    currentPage: number,
    total: number,
    onChange: (page: number) => void
}

const LIMIT = 10;

const Pagination: React.FC<PaginationProps> = ({currentPage, total, onChange}) => {

    const totalPagesCount = Math.ceil(total / LIMIT);

    return <div className={styles.pagination}>
        {Array.from({length: totalPagesCount}, (_, index) => index + 1)
            .map(pageIndex => <div onClick={() => onChange(pageIndex)} className={CN(styles.pageButton, {
                [styles.current]: currentPage === pageIndex
            })}>
                {pageIndex}
            </div>)}
    </div>;
}

export default Pagination;
