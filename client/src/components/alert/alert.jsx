const Alert = ({ message, handler, cancel }) => (
    <div className="alert">
        <div>
            <h3>{message}</h3>
            <button className="btn-red" onClick={handler}>DELETE</button>
            <button className="btn-grey" onClick={cancel}>Cancel</button>
        </div>
    </div>
)

export default Alert;