import React, {useState, useEffect} from "react";
import FeedContainer from "./FeedContainer";
import SideMenu from "./SideMenu";

function Home() {
    return (
        <div className="home">
            <FeedContainer />
            <SideMenu />
            {/* <MyPiecesBox /> */}
        </div>
    );
}

export default Home;