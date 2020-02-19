import React from "react";
import {Table} from "antd";
import AppModal from './modal.jsx';

const clickTableRow = (record, rowIndex) => {
    
    return {
      onClick: event=>{<AppModal data={record} visible="true" />}
    }
  }

const AppTable = ({data, columns}) => {
    return (
      <React.Fragment>
            <Table dataSource={data} columns={columns} onRow={clickTableRow}/>
      </React.Fragment>
    );
}

export default AppTable;