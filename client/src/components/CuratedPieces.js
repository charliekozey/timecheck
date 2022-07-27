import React, {useState, useEffect} from "react";
import PieceCard from "./PieceCard";

function CuratedPieces({ globalPieces }) {

    const curatedPieces = globalPieces.filter((piece) => piece.user_id === 1);

    const displayCuratedPieces = curatedPieces.map((piece) => {
        return <PieceCard 
            photo={piece.photo_url} 
            name={piece.name} 
            link={piece.listing_url} 
            price={`$${Math.round(piece.price)}`} />;
    })

    return (
        <div class="feed-container">
            {displayCuratedPieces}
        </div>
    );
}

export default CuratedPieces;