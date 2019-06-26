import React from 'react';

// компонент react Card

function Card(props) {

    const classes = ['card']

    if (props.card.marked) {
        classes.push('marked')
    }
    return (
        <div className={classes.join(' ')} onClick={props.onMark}>
            <div className="card-img">
                <img
                    src={props.card.img}
                    alt={props.card.name}
                    height="200"
                />
            </div>
            <h3>{props.card.name}</h3>
            <p>{props.card.category}</p>
        </div>
    )
}

// класс наслед от React.Component
class Leafy extends React.Component {

    // выводить список динамически через массив. переменная state. модель данных
    state = {
        cards: [
            {marked: false, name: 'фикус Бенжамина ', category: 'лиственные', img: ''},
            {marked: false, name: 'шефлера', category: 'лиственные', img: ''},
            {marked: false, name: 'драцена', category: 'лиственные', img: ''},
            {marked: false, name: 'фикус', category: 'лиственные', img: ''},
            {marked: false, name: 'маранта', category: 'лиственные', img: ''},
        ],
        visible: false,
        appTitle: 'Лиственные:'
    }

    handleMarked(name) {
        // копия массива
        const cards = this.state.cards.concat()
        // поиск карточки
        const card = cards.find(c => c.name === name)
        card.marked = !card.marked

        this.setState({cards})
    }

    buttonHandler() {
        this.setState({visible: !this.state.visible})

    }

    // метод render складыв все необход в шаблоны
    // дополнительный метод для вывода цикла
    renderCards() {
        if (!this.state.visible) {
            return null
        }

        return this.state.cards.map(card => {
            return (
                <Card
                    card={card}
                    key={card.name + Math.random()}
                    onMark={this.handleMarked.bind(this, card.name)}
                />
            )
        })
    }

    render() {
        const style = {
            marginBottom: 20
        }
        // обязательно что-то возвращать return
        return (
            <div className="leafy">
                <h3>{this.state.appTitle}</h3>
                <button
                    onClick={() => this.buttonHandler()}
                    style={style}
                >Открыть каталог
                </button>

                <div className="list">
                    {/**/}
                    {this.renderCards()}
                </div>
            </div>
        )
    }
}

// ReactDOM.render(<Leafy/>, document.getElementById('root1'))
export default Leafy;