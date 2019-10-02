import { Component } from 'react'

import MainContentBlock from './MainContentBlock'
import RightDetailPane from './RightDetailPane'

import { listItems } from '../models/api.js'

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItemId: null,
      items: []
    };
    getListItemsPromise()
  }

  getListItemsPromise() {
    const items = await listItems()
    this.setState({
      items: items
    });
  }

  handleOnClick(id) {
    this.setState({
      currentItemId: id
    })
  }

  render() {
    const currentItem = this.state.items[this.state.currentItemId]
    return (
      <div>
        <MainContentBlock items={items.data} onClick={() => handleOnClick(id)} />
        <RightDetailPane item={currentItem} />
      </div>
    )
  }
}

export default MainPage