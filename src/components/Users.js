import * as React from 'react'
import { ListView } from 'antd-mobile'
import styles from './Users.css'

class Users extends React.Component {

    getRowData = (dataBlod, sectionID, rowID) => {        
        return `${sectionID} - ${rowID}`        
    }

    state = {
        dataSource: new ListView.DataSource({
            getRowData: this.getRowData,
            rowHasChanged: (row1, row2) => row1 !== row2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
        }),
        sectionIDs: [0],
        rowIDs: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]]
    }

    // UI
    row = (rowData, sectionID, rowID) => {
        return (
            <div className={styles.row}>
                <div className={styles.avatar}>Avatar</div>
                <div className={styles.content}>
                    <p className={styles.title}>Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title</p>
                    <div className={styles.description}>Description</div>
                </div>
                <div className={styles.operations}>Operations</div>
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
        return (
            <ListView
                dataSource={this.state.dataSource.cloneWithRowsAndSections(null, this.state.sectionIDs, this.state.rowIDs)}
                renderRow={this.row}
                renderSeparator={this.separator}
                useBodyScroll
            />
        )
    }
}

export default Users