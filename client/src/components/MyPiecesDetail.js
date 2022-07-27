import React, {useState, useEffect} from "react";
import PieceCard from "./PieceCard";

function MyPiecesDetail({ globalPieces }) {

    const chosenPieces = globalPieces.filter((piece) => piece.user_id === 1 && piece.is_chosen === true);

    const displayChosenPieces = chosenPieces.map((piece) => {
        return <PieceCard 
            photo={piece.photo_url} 
            name={piece.name} 
            link={piece.listing_url} 
            price={`$${Math.round(piece.price)}`} />;
    })

    return (
        <div class="feed-container">
            {displayChosenPieces}
        </div>
    );
}

export default MyPiecesDetail;