import './search-panel.css';

const SearchPanel = () => {
    return (
        <input type="text"
            className="form-control search-input" // из библиотеки бутсрапа
            placeholder="Найти сотрудника" />
    )
}

export default SearchPanel;