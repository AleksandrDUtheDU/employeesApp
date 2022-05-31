import "./app-filter.css";

const AppFilter = (props) => {
    const buttonData = [
        { name: 'all', label: 'Все сотрудники', colored: false },
        { name: 'rise', label: 'На повышение', colored: false },
        { name: 'moreThen1000', label: 'З/П больше 1000$', colored: true }
    ];

    const buttons = buttonData.map(({ name, label, colored }) => {
        //const active = props.filter === name; // в переменную active попадает true false
        const clazz = props.filter === name ? 'btn-light' : 'btn-outline-light'; // класс активности 
        //const style = colored ? { color: 'red' } : null;
        return (
            <button type="button"
                className={`btn ${clazz}`}
                key={name}
                onClick={() => props.onFiltersSelect(name)}
            // передаем АРГУМЕНТ поэтому используем стрелочную функцию {() => props.onFiltersSelect(name)}
            //style={style} // динамические стили
            >
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