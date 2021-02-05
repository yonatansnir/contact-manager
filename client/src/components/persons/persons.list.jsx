import { useContext, useEffect, useState } from "react"
import { PersonContext } from "../../context/person.provider";
import SearchIcon from "../icons/search.icon";
import Loader from "../loader/loader";
import PersonItem from "./person.item";

const PersonsList = () => {
    const [persons, dispatch] = useContext(PersonContext);
    let [search, setSearch] = useState('');
    const personsFilter = persons?.filter(p => p.firstName.toLocaleLowerCase().includes(search) || p.lastName.toLocaleLowerCase().includes(search));

    useEffect(() => {
        fetch('http://localhost:5050/api/persons/')
        .then(resp => resp.json())
        .then(data => dispatch({ type: "GET_ALL_PERSONS", payload: data }));
    }, [])

    return (
        <div className="persons-list">
            <div className="person-search">
                <input type="text" placeholder="Type For Search" onChange={e => setSearch(e.target.value.toLocaleLowerCase())} />
                <SearchIcon />
            </div>
            {!persons ? <Loader /> :
                personsFilter.map(person => <PersonItem key={person.personId} person={person} />)
            }  
        </div>
    )
}

export default PersonsList;