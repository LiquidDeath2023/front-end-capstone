import React from 'react';

function StyleSelector({styles, currentStyle, setCurrentStyle}) {
      // creates matrix with style rows
      const styleMatrix = () => {
        let row = [];
        let matrix = [];
        styles.forEach((style, i) => {
          row.push(
          <li key={style.style_id} className="style-list-item">
            <div className="style" >
              <img
                id={i}
                alt={style.name}
                className="style-thumbnail"
                src={style.photos[0].thumbnail_url}
                onClick={setCurrentStyle}
              />
              <div className="style-overlay">
                <i className="fa-solid fa-lg fa-circle-check"></i>
              </div>
            </div>
          </li>
          );
          if (row.length === 4) {
            matrix.push(<ul key={matrix.length} className="style-row">{row}</ul>)
            matrix.push(<div key={`break${matrix.length}`} className="break"></div>)
            row = [];
          }
        });
        return matrix;
      },
  return (
    <div>
      <h2 className="style-title">{currentStyle.name}</h2>
      <div className="style-selector-container">
        {styleMatrix()}
      </div>
    </div>
  )
};


export default StyleSelector;
