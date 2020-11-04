import Broadcaster from "../Broadcaster/Broadcaster"
import WebSocketClient from "../WebSockers/WebSocketClient"


const Entry = (props) => {


    return (
        <>
            <WebSocketClient Protocol="https" Address="localhost" Port="4501">
                <Broadcaster/>
            </WebSocketClient>
        </>
    );
}

export default Entry;