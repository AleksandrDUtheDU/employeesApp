import "./app-filter.css";

const AppFilter = (props) => {
    const buttonData = [
        { name: 'all', label: 'Все сотрудники' },
        { name: 'rise', label: 'На повышение' },
        { name: 'moreThen1000', label: 'З/П больше 1000$' }
    ];

    const buttons = buttonData.map(({ name, label }) => {
        const active = props.filter === name; // в переменную active попадает true false
        const clazz = active ? 'btn-light' : 'btn-outline-light'; // класс активности 

        return (
            <button type="button"
                className={`btn ${clazz}`}
                key={name}
                onClick={() => props.onFiltersSelect(name)}>
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
            {/* <button type="button"
                className="btn btn-light">
                Все сотрудники
            </button>
            <button type="button"
                //                onChaked={}
                className="btn btn-outline-light">
                На повышение
            </button>
            <button type="button"
                //                onChaked={}
                className="btn btn-outline-light">
                З/П больше 1000$
            </button> */}
        </div>
    )
}

export default AppFilter;