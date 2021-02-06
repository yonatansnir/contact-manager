const ContactInfo = ({ person, setShow }) => (
    <div className="contact-box">
        <div>
            <h1>{person.firstName} {person.lastName}</h1>
            <table>
                <tbody>
                    <tr>
                        <td>First Name</td>
                        <td>{person.firstName}</td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td>{person.lastName}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{person.email}</td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td>{person.phone}</td>
                    </tr>
                    <tr>
                        <td>State</td>
                        <td>{person.state}</td>
                    </tr>
                    <tr>
                        <td>City</td>
                        <td>{person.city}</td>
                    </tr>
                    <tr>
                        <td>Street</td>
                        <td>{person.street}</td>
                    </tr>
                    <tr>
                        <td>Postal Code</td>
                        <td>{person.postalcode}</td>
                    </tr>
                </tbody>
            </table>
            <button className="btn-close" onClick={() => setShow(false)}>Close</button>
        </div>
    </div>
)

export default ContactInfo;