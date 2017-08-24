import * as React from 'react'
import { connect } from 'dva'
import UsersComponent from '../components/Users'

function mapStateToProps(state, ownProps) {

    const { list, page, pageSize } = state.users

    return {
        data: list,
        page,
        pageSize        
    }
}

export default connect(mapStateToProps)(UsersComponent)