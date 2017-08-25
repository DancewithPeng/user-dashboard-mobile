import * as React from 'react'
import { ListView, NavBar, Icon, Button } from 'antd-mobile'
import styles from './Users.css'
import request from '../utils/request'

class Users extends React.Component {

    getRowData = (dataBlod, sectionID, rowID) => {                
        return dataBlod[rowID]
    }

    state = {
        dataSource: new ListView.DataSource({
            getRowData: this.getRowData,
            rowHasChanged: (row1, row2) => row1 !== row2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
        }),
        sectionIDs: [0],
        rowIDs: [[]],
        dataBlod: {}
    }    

    // event handlers
    handleAdd = () => {
        alert('+++++++++')
    }

    // UI
    row = (rowData, sectionID, rowID) => {
        return (
            <div className={styles.row}>
                <div className={styles.avatar}>
                    <img className={styles.imgFill} src={require('../assets/yay.jpg')} />
                </div>
                <div className={styles.content}>
                    <div className={styles.title}>

                        { `${rowID}.${rowData.name}` }

                    </div>
                    <div className={styles.description}>

                        { `${rowData.address.city} ${rowData.address.street} ${rowData.address.suite}` }

                    </div>
                </div>
                <div className={styles.operations}>
                    <Button type='ghost' style={{ borderWidth: '0', fontFamily: 'PingFangSC-Regular, sans-serif' }} inline size='small'>Edit</Button>
                    <Button type='warning' style={{ borderWidth: '0', fontFamily: 'PingFangSC-Regular, sans-serif' }} inline size='small'>Delete</Button>
                </div>
            </div>
        )
    }

    separator = (sectionID, rowID) => {
        return (
            <div key={`${sectionID}-${rowID}`} className={styles.separator}>
            </div>
        )                
    }

    render() {
        // display: 'flex', flexDirection: 'column',
        return (
            <div style={{ display: 'flex', flexDirection: 'column', height: document.documentElement.clientHeight }}>                
                <NavBar   
                    mode="dark"                    
                    rightContent={[                        
                        <p key='+' style={{ fontSize: '0.6rem', marginRight: '0.2rem' }} onClick={this.handleAdd}>+</p>,
                    ]}
                    iconName={null}
                >
                用户列表
                </NavBar>

                <ListView
                    dataSource={this.state.dataSource.cloneWithRowsAndSections(this.props.dataBlod, [0], this.props.rowIDs)}
                    renderRow={this.row}
                    renderSeparator={this.separator}
                    // useBodyScroll
                    style={{
                        height: 'auto',
                        overflow: 'auto',
                        flexGrow: '1'
                    }}
                    pageSize={20}
                    onEndReached={this.props.onEndReached}
                    onEndReachedThreshold={10}
                    // scrollRenderAheadDistance={500}
                    // scrollEventThrottle={200}
                    // onScroll={this.props.onEndReached}
                />
            </div>
        )
    }
}

export default Users

