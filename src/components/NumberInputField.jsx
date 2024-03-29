export default function NumberInputField({title, value, onChange}) {
    const changeHandler = (event) => {
        onChange(event.target.value);
    }

    return (
        <div>
            <label htmlFor="field">{title}</label>
            <input id="field" type="number" value={value} onChange={changeHandler}/>
        </div>
    )
}