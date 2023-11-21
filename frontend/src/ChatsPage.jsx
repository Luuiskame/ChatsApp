import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props)=>{
    return(
       <div className="background">
        <PrettyChatWindow
            projectId="
            538d96dd-1b10-4ccf-9fad-04053d1ec131"
            username={props.user.username}
            secret={props.user.secret}
        />
       </div>
    )
}

export default ChatsPage