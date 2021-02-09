import { useState } from 'react';
import Input from '../form-element/Input';

const addressInputs = [
    { id: 5, title: 'Street', type: 'text', name: 'street' },
    { id: 6, title: 'City', type: 'text', name: 'city' },
    { id: 7, title: 'State', type: 'text', name: 'state' },
    { id: 8, title: 'Postal Code', type: 'text', name: 'postalcode' }
];

const Address = ({ form, setForm }) => {
    let [address, setAddress] = useState('');
    let [loading, setLoading] = useState(false);

    const handleAddressSearch = () => {
        setLoading(true);
        fetch(`http://localhost:5050/api/validation/address?address=${address}`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            if (data.status !== "OK") return;
            let addressData = {};
            let st_num;
            data.results[0].address_components.forEach(comp => {
                if (comp.types[0] === "street_number")
                    st_num = comp.long_name;
                if (comp.types[0] === "route")
                    addressData.street = comp.long_name + " " +st_num;
                if (comp.types[0] === "locality")
                    addressData.city = comp.long_name;
                if (comp.types[0] === "country")
                    addressData.state = comp.long_name;
                if (comp.types[0] === "postal_code")
                    addressData.postalcode = comp.long_name;
            })
            if (!addressData.postalcode) addressData.postalcode = 0; 
            setForm({...form, ...addressData});
            setLoading(false);
        });
    }

    return (
        <div className="address">
            <label>
                <h4>Enter a Full Address:</h4>
                <input type="text" placeholder="Street, City, State" onChange={e => setAddress(e.target.value)} />
            </label>
            <button type="button" className="btn-blue" onClick={handleAddressSearch}>Find Address</button>
            {loading ? 'Searching...' : ''}
            {addressInputs.map(input => <Input key={input.id} {...input} value={form[input.name]} handleChange={() => {}} />)}
        </div>
    )
}

export default Address;