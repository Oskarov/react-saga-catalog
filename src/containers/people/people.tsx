import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {storeType} from "../../redux";
import PeopleRow from "../../components/peopleRow/peopleRow";
import Pagination from "../../components/pagination/pagination";
import {changePageAction, getPeopleListAction} from "../../redux/actions/peopleActions";

interface PeopleProps {

}

const People: React.FC<PeopleProps> = () => {
    const dispatch = useDispatch();

    const {people, page, count} = useSelector((state: storeType) => ({
        people: state.people.people,
        page: state.people.page,
        count: state.people.count
    }));

    const changePage = (newPage: number) => {
        if (newPage !== page) {
            dispatch(changePageAction(newPage));
            dispatch(getPeopleListAction());
        }
    }

    return <div>
        <div className="page-header">
            <h1>People</h1>
        </div>
        <table>
            <thead>
            <tr>
                <th/>
                <th>Name</th>
                <th>BY</th>
                <th>Gender</th>
                <th>Height</th>
                <th>Mass</th>
                <th/>
            </tr>
            </thead>
            <tbody>
            {people.map(char => <PeopleRow people={char} key={char.name}/>)}
            </tbody>
        </table>
        <Pagination currentPage={page} total={count} onChange={changePage}/>
    </div>;
}

export default People;
