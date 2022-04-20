import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { name: 'John C.', salary: 800, increase: false, rise: true, id: 1 },
        { name: 'Alex M.', salary: 3000, increase: true, rise: false, id: 2 },
        { name: 'Carl W.', salary: 5000, increase: false, rise: true, id: 3 }
      ],// нельзя менять // делаем клона
      term: '', // строка поиска по которой производим фильтр
      filter: 'all'
    }
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      //const index = data.findIndex(elem => elem.id === id)// findIndex (колбык) если возвращает тру - мы возвращаем индекс на котором он сработал
      //console.log(index); нашли индекс объекта
      //data.splice(index, 1); // удаляем по индексу один элемент// мутируем
      // const before = data.slice(0, index); // берем кусок массива до индекса- это уже новые массивы(объекты)
      // const after = data.slice(index + 1);// берем кусок массива после  индекса- это уже новые массивы(объекты)

      // const newArr = [...before, ...after]; // объединяем - это уже новые массивы(объекты)



      return {
        data: data.filter(item => item.id !== id) // лаконичный код через фильтр
      }
    })
  }

  // addItem =() => {
  //   this.setState(({ data }) => {
  //     const newItem = []



  //     return {
  //       data: data.concat(newItem)
  //     }
  //   })
  // }

  addItem = (name, salary) => { // получает в себя аргументы
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: this.maxId++
    }
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    });
  }

  onToggleProp = (id, prop) => { // то что делает пользователь с приставкой on
    //console.log(`Increase this ${id}`);
    //this.setState(({ data }) => {
    // const index = data.findIndex(elem => elem.id === id);

    // const old = data[index]; // получаем старый объект

    // const newItem = { ...old, increase: !old.increase }; // новый объект // новое свойство прописанное перезаписывает старое свойство

    // const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]; // вставляем исправленный элемент

    // return {
    //   data: newArr
    // }
    this.setState(({ data }) => ({
      data: data.map(item => { // пробегаем по всем элементам
        if (item.id === id) { // если находим подходящий
          return { ...item, [prop]: !item[prop] } // возвращаем его с изменеием
        }
        return item; // map возвращает нам новый массив с изменениями
      })

    }))

  }

  // копипаста кода

  // onToggleRise = (id) => {
  //   //console.log(`Rise this ${id}`);
  //   this.setState(({ data }) => ({
  //     data: data.map(item => {
  //       if (item.id === id) {
  //         return { ...item, rise: !item.rise }
  //       }
  //       return item;
  //     })

  //   }))

  // }

  // onIncreased = (item) => {
  //   // if (onChaked.increas) {// если кнопка нажата производим фильтрацию
  //   return item.filter(item => item.increase)
  //   //}
  // }

  // onThousand = (item) => {
  //   // if (onChaked.increas) {// если кнопка нажата производим фильтрацию
  //   return item.filter(item => item.salary > 1000)
  //   //}
  // }




  serchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter(item => {
      return item.name.indexOf(term) > -1 // возвращаем массив
    })
  }
  //Метод indexOf() возвращает индекс первого вхождения указанного значения в строковый объект String, на котором он был вызван, начиная с индекса fromIndex. Возвращает -1, если значение не найдено.

  onUpdateSerch = (term) => { // опять прокидываем
    this.setState({ term: term }); // ({term: term}) можно сократить ({term})
  }

  filterPost = (items, filter) => {
    switch (filter) {
      case 'rise':
        return items.filter(item => item.rise);
      case 'moreThen1000':
        return items.filter(item => item.salary > 1000);
      default:
        return items
    }
  }

  onFiltersSelect = (filter) => {
    this.setState({ filter }); // фильтер равен тому фильтру который пришёл

  }


  render() {
    const { data, term, filter } = this.state;
    const employees = this.state.data.length; //общее количество сотрудников
    const increased = this.state.data.filter(item => item.increase).length;
    const visibleData = this.filterPost(this.serchEmp(data, term), filter); // вильтруем отфильтрованный массив после поиска// получаем массив после поиска
    //const increasedVisibleData = this.onIncreased(visibleData); // отсортированные значения по повышению
    //const thousandVisibleData = this.onThousand(visibleData); // отсортированные значения по зп > 1000
    //const allFilterVisibleData = [...increasedVisibleData, ...thousandVisibleData]; // итоговое значение со всеми фильтрами


    console.log(employees, increased);

    return (
      <div className="app">
        <AppInfo
          employees={employees}
          increased={increased}
        />

        <div className="search-panel">
          <SearchPanel onUpdateSerch={this.onUpdateSerch} />
          <AppFilter filter={filter} onFiltersSelect={this.onFiltersSelect} /> {/* сверху вниз передаю свойство */}
        </div>

        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        // onToggleRise={this.onToggleRise}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );// прокинули onDelete вниз
  }
}

export default App;
