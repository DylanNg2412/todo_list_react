export default function Input(props) {
    const {value, onChange} = props;
    return (
        <input
        type="text"
        className="form-control"
        placeholder="Add new item..."
        value={value}
        required
        onChange={onChange}
        />
    );
}