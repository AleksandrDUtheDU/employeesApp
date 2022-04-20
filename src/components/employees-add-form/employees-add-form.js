import './employees-add-form.css';

import { Component } from 'react';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value // [e.target.name] ес 6 синтаксис 
        }) // получаем значение в class EmployeesAddForm
    }

    onSubmit = (e) => { // type="submit" поучем элемент события
        e.preventDefault();
        //if (this.state.name && this.state.salary !== '') { // валидация // можно улучшить
        if (this.state.name.length < 3 || !this.state.salary) return; // продвинутая валидация 
        this.props.onAdd(this.state.name, this.state.salary); // заносим донные из props 
        this.setState({
            name: '',
            salary: ''
        })

    }

    render() {

        const { name, salary } = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        onChange={this.onValueChange}
                        name="name"
                        value={name} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        onChange={this.onValueChange}
                        name="salary"
                        value={salary} />

                    <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;