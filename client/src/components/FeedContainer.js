import React, {useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import GlobalPieces from "./GlobalPieces";
import CuratedPieces from "./CuratedPieces";
import MyPiecesDetail from "./MyPiecesDetail";

function FeedContainer() {

    const [globalPieces, setGlobalPieces] = useState([]);

    useEffect(() => {
        fetch('/pieces')
        .then(res => res.json())
        .then(data => setGlobalPieces(data))
    }, [])

    return (

    <Switch>
        <Route exact path="/my-pieces">
            <MyPiecesDetail globalPieces={globalPieces} />
        </Route>
        <Route exact path="/global">
            <GlobalPieces globalPieces={globalPieces} />
        </Route>
        <Route exact path="/curated">
            <CuratedPieces globalPieces={globalPieces} />
        </Route>
    </Switch>
        
    );
}

export default FeedContainer;