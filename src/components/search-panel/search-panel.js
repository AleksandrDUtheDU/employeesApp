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
        const term = e.target.value; //элемент события его value
        this.setState({ term }); // установка локального состояния // синхронизация с локальным стейтом
        this.props.onUpdateSerch(term) // это мы берем метотд изи props обозначенного ВЫШЕ

    }

    render() {
        return (
            <input type="text"
                className="form-control search-input" // из библиотеки бутсрапа
                placeholder="Найти сотрудника"
                value={this.state.term} // синхронизация с локальным стейтом
                onChange={this.onUpdateSerch} /> // мы вызываем ИМЕННО локальный метод
        )
    }
}

export default SearchPanel;