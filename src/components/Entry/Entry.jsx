import Broadcaster from "../Broadcaster/Broadcaster"
import Counter from "../Counter/Counter"
import WebSocketClient from "../WebSockers/WebSocketClient"


const Entry = (props) => {


    return (
        <>
            <WebSocketClient Protocol="https" Address="localhost" Port="4501">
                <Counter/>
            </WebSocketClient>
        </>
    );
}

export default Entry;