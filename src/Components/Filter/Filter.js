import "./Filter.css";
export default function Filter({ filter, inputChange }) {
    return (
        <label className="Filter">
        Поиск контакта по имени
        <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        value={filter}
        onChange={inputChange}
        />
        </label>
    );
};
    

