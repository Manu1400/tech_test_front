import { Component } from 'react'

class RightDetailPane extends Component {
    render() {
        const details = this.props.item.details
        const listDetails = Object.keys(details).map(({detail}) =>
        <div>
            <label>{detail}</label>
            <br />
            <span className='field-value'>{details[detail]}</span>
        </div>
        );

        return (
            <div>
                {/* affichage du nom du champs */}
                <label>Name</label>
                <br />
                <span class='field-value'>{this.props.item.name}</span>
                {/* affichage des champs */}
                {listDetails}
            </div>
        )
    }
}

export default RightDetailPane