import { useEffect, useState } from "react";
import { addressLog, dateToString } from '../../utils/common';

const Log = () => {
    let [state, setState] = useState([]);

    useEffect(() => {
        fetch(addressLog)
        .then(resp => resp.json())
        .then(data => setState(data));
    }, [])

    return(
        <div className="log">
            {state.map(s => (
                <div key={s.id}>
                    {dateToString(s.modifiedTime)} - 
                    user number {s.contactId + ' '}
                    has been change.

                </div>
            ))}
        </div>
    )
}

export default Log;