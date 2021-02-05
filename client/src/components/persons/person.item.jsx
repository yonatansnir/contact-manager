import PersonIcon from "../icons/person.icon";
import EditIcon from '../icons/edit.icon';

const PersonItem = ({ person }) => (
    <div className="person-item">
        <PersonIcon />
        <h3>{person.firstName} {person.lastName}</h3>
        <h3>{person.email}</h3>
        <h3>{person.city}</h3>
        <EditIcon />
    </div>
)

export default PersonItem;