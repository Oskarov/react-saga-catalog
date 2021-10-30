import React from 'react';
import {useSelector} from "react-redux";
import {storeType} from "../../redux";
import PeopleRow from "../../components/peopleRow/peopleRow";

interface PeopleProps {

}

const People: React.FC<PeopleProps> = () => {
    const {people} = useSelector((state: storeType) => ({
        people: state.people.people
    }));

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
    </div>;
}

export default People;
