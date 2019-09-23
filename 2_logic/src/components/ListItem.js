import { Component } from 'react'
import PropTypes from 'prop-types'

class ListItem extends Component {

    render() {
        return (
            <div>
                <p>{this.props.name}</p>
            </div>
        )
    }
}

ListItem.propTypes = {
    name: PropTypes.string
}

export default ListItem