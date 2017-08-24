import * as React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import styles from './Transition.css'


class TransitionDemo extends React.Component {

    state = {
        items: ['Hello', 'World', 'Like', 'Me']
    }

    handleAdd = () => {
        const index = this.state.items.length        

        const newItems = this.state.items.concat([
            prompt(`New Item ${index}`)
        ]);

        this.setState({items: newItems});
    }

    handleRemove = (index) => {
        let newItems = this.state.items.slice()
        newItems.splice(index, 1)
        this.setState({ items: newItems })
    }

    render() {

        const items = this.state.items.map( (item, index) => {
            return (
                <div key={item} style={{ margin: '20px', backgroundColor: 'gray' }} onClick={this.handleRemove.bind(this, index)}>
                    { item }
                </div>
            )
        } )

        return (
            <div>
                <button onClick={this.handleAdd} className='my-test'>Add Item</button>
                <ReactCSSTransitionGroup
                    transitionName='example'      // 动画名称
                    // transitionAppear={true}
                    transitionAppearTimeout={500} // 组件第一次显示的动画时间
                    transitionEnterTimeout={500}  // 进入时动画时间  
                    transitionLeaveTimeout={300}  // 离开时动画时间                    
                >                
                    {items}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

export default TransitionDemo