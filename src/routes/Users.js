import * as React from 'react'
import { connect } from 'dva'
import UsersComponent from '../components/Users'


class UsersPage extends React.Component {

    handleEndReached = () => {
        // console.log('😅😅😅')
        // alert('end')
        this.props.dispatch({
            type: 'users/fetch',
            payload: {
                page: this.props.page
            }
        });        
    }

    render() {        
        
        return (
            <UsersComponent 
                dataBlod={this.props.dataBlod} 
                rowIDs={this.props.rowIDs}
                page={this.page}
                pageSize={this.pageSize}
                total={this.total}
                onEndReached={this.handleEndReached}
            />            
        )
    }
}

function mapStateToProps(globalState, ownProps) {

    const { list, page, pageSize, total } = globalState.users

    let dataBlod = {}
    let rowIDs = []

    for (const index in list) {
        const obj = list[index]
        const id = `${obj.id} - ${index}`
        dataBlod[id] = obj
        rowIDs.push(id)
    }

    return {
        dataBlod: dataBlod,
        rowIDs: [rowIDs],
        page,
        pageSize,
        total
    }
}

// connect是全局的，在哪里都可以调用
// 让组件和全局的state绑定
export default connect(mapStateToProps)(UsersPage)