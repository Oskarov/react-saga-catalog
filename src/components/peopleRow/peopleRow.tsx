import React from 'react';
import {IPeople} from "../../interfaces/people";

interface PeopleRowProps {
    people: IPeople
}

const PeopleRow: React.FC<PeopleRowProps> = ({people}) => {
    return <tr>
        <td/>
        <td>{people.name}</td>
        <td>{people.birth_year}</td>
        <td>{people.gender}</td>
        <td>{people.height}</td>
        <td>{people.mass}</td>
        <td/>
    </tr>;
}

export default PeopleRow;
