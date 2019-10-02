import { Component } from 'react'

class MainContentBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
          currentItem: null,
        };
    }

    handleOnClick(id) {
        this.setState({
            currentItem: id
        })
    }

    render() {
        const list = this.props.items.map(({id, name}) =>
            <li key={id} onClick={() => handleOnClick(id)}>
                <ListItem name={name} />
            </li>
        );
        return (
            {list}
        )
    }
}

export default MainContentBlock