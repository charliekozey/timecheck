import React, {useState} from "react";


function PieceCard({ photo, name, link, price }) {
    const [showInfo, setShowInfo] = useState(false);

    function handleMouseEnter() {
        setShowInfo(true);
    }

    function handleMouseLeave() {
        setShowInfo(false);
    }

    return (
        <div className="piece-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

            <div className="piece-info" style={{visibility: showInfo ? "visible" : "hidden"}}>
                <h3>
                    <a href={link}>{name}</a>
                </h3>

                <h4>{price}</h4>
                
                <a href={link}>Add to your pieces ♡</a>
            </div>

            <img 
                src={photo} 
                alt={name} 
                className="piece-photo" />

        </div>
    );
}

export default PieceCard;