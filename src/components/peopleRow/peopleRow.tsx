import React from 'react';
import {Link} from "react-router-dom";
import {IPeople} from "../../interfaces/people";

interface PeopleRowProps {
    people: IPeople
}

const PeopleRow: React.FC<PeopleRowProps> = ({people}) => {
    const id = people.url.replaceAll(/\D/g, '');

    return <tr>
        <td/>
        <td>{people.name}</td>
        <td>{people.birth_year}</td>
        <td>{people.gender}</td>
        <td>{people.height}</td>
        <td>{people.mass}</td>
        <td>
            <Link to={`/people/${id}`}>
                Details
            </Link>
        </td>
        <td/>
    </tr>;
}

export default PeopleRow;
