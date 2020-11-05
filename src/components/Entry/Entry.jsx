import Broadcaster from "../Broadcaster/Broadcaster"
import Counter from "../Counter/Counter"
import WebSocketClient from "../WebSockers/WebSocketClient"
import React from 'react'

const Entry = (props) => {


    return (
        <>
          <Counter/><br/>
          <Counter/>
        </>
    );
}

export default Entry;