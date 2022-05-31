import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({ data, onDelete, onToggleProp, onSalaryChange }) => { // приходит массив

    const elements = data.map(item => { // пробегаем по нему и строим компоненты
        //результатом map является массив из новых данных
        // return (
        //     <EmployeesListItem name={item.name} probability={item.probability} increase={item.increase} />
        // )
        const { id, ...itemProps } = item; // деструктурируем и вымаем одни пропс
        // id уникальные ключи - которые позволяют не перестраивать виртуал дом
        // уникальны только для соседей
        // ... - спрэд оператор - раскладываем массив
        return (// спрэд оператор разворачивает массив
            <EmployeesListItem
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)} // прокидываем функцию сверху
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))} // получаем дата атрибуты строки из верстки
            //event.currentTarget используется, когда один и тот же обработчик события присваивается нескольким элементам.
            //               onSalaryChange={() => onSalaryChange(id)}
            // onToggleRise={() => onToggleRise(id)}
            />
        )// прокидываем функцию обозначенную в app и используем ее
    })

    console.log(elements);

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;