import NewRoom from './EnterGame/NewRoom';
import JoinRoom from './EnterGame/JoinRoom';
import Contribute from './Contribute/Contribute';
import EnterGameOptions from './EnterGame/EnterGameOptions';
import { RoomProvider } from "../Contexts/RoomContext";
import Room from './Room/Room';
import {
    Switch,
    Route,
    useRouteMatch
  } from "react-router-dom";

export default function GameRoute(){
    const match = useRouteMatch();

   return  <Switch>
                <Route path={`${match.path}/new-room`}>
                    <NewRoom/>
                </Route>
                <Route path={`${match.path}/join-room`}>
                    <JoinRoom/>
                </Route>
                <Route path={`${match.path}/contribute`}>
                    <Contribute/>
                </Route>
                <Route path={`${match.path}/room/:code/:state?`}>
                    <RoomProvider>
                        <Room/>
                    </RoomProvider>
                </Route>
                <Route path={match.path}>
                    <EnterGameOptions/>
                </Route>
            </Switch>
}