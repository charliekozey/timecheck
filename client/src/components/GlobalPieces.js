import React, {useState, useEffect} from "react";
import PieceCard from "./PieceCard";

function GlobalPieces({ globalPieces }) {

    const displayGlobalPieces = globalPieces.map((piece) => {
            return <PieceCard 
                photo={piece.photo_url} 
                name={piece.name} 
                link={piece.listing_url} 
                price={`$${Math.round(piece.price)}`} />;
    })

    return (
        <div class="feed-container">
            {displayGlobalPieces}
        </div>
    );
}

export default GlobalPieces;