import React from 'react';
import './style.css';
interface GallerieProps {
  photoUrl: string,
  photoDescription: string
}

const Gallerie: React.FC<GallerieProps> = ({ photoUrl, photoDescription }) => {
  return (
    <div id="gallerie">
      <h4>GALLERIES</h4>
      <div id="gallerie-photo-box">
        <div id="gallerie-photo">
          <img src={photoUrl} alt={photoDescription} />
        </div>
        <div id="gallerie-data">
          <span>{photoDescription}</span>
        </div>
      </div>
    </div>
  )
}

export default Gallerie;
