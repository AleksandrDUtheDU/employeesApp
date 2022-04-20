import { Component } from 'react';

import './search-panel.css';


class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSerch = (e) => { // это локальная
        const term = e.target.value; //элемент события
        this.setState({ term });
        this.props.onUpdateSerch(term) // эта функция приходит из другого компонента

    }

    render() {
        return (
            <input type="text"
                className="form-control search-input" // из библиотеки бутсрапа
                placeholder="Найти сотрудника"
                value={this.state.term}
                onChange={this.onUpdateSerch} /> // поднятие локального состояния родителю
        )
    }
}

export default SearchPanel;