export default function NumberInputField({title, value}) {
    return (
        <div>
            <label for="field">{title}</label>
            <input id="field" value={value}/>
        </div>
    )
}