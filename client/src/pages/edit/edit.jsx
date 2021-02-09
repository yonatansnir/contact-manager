import { useHistory, useParams } from 'react-router-dom';
import EditContact from '../../components/contacts/contact.edit';
import ContactList from '../../components/contacts/contacts.list';

const EditPage = () => {
    let { id } = useParams();
    let history = useHistory();

    return(
        <div className="edit-contact">
            <button className="btn-grey" onClick={() => history.push('/')}>Back</button>
            <EditContact contactId={id} />
        </div>
    )
}

export default EditPage;