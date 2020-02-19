import React from "react";
import {Modal, Button} from "antd";

const AppModal = ({data, visible}) => {
    console.log("modal called");
    return (
      <React.Fragment>
            <Modal title={data.name} visible={visible}>
                <input value={data.name} />
                <input value={data.age} />
            </Modal>
      </React.Fragment>
    );
}

export default AppModal;