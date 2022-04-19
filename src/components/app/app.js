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
        { name: 'John C.', salary: 800, increase: false, id: 1 },
        { name: 'Alex M.', salary: 3000, increase: true, id: 2 },
        { name: 'Carl W.', salary: 5000, increase: false, id: 3 }
      ]// нельзя менять // делаем клона
    }
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

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      id: this.maxId++
    }
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    });
  }


  render() {
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList
          data={this.state.data}
          onDelete={this.deleteItem} />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );// прокинули onDelete вниз
  }
}

export default App;
