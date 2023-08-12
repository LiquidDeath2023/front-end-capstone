import React from 'react';

function ProductBreakdown({ getReviewsMeta }) {
  const { characteristics } = getReviewsMeta;
  const refObj = {
    Size: { low: 'A size too small', high: 'A size too wide' },
    Width: { low: 'Too narrow', high: 'Too wide' },
    Comfort: { low: 'Uncomfortable', high: 'Perfect' },
    Quality: { low: 'Poor', high: 'Perfect' },
    Length: { low: 'Runs short', high: 'Runs long' },
    Fit: { low: 'Runs tight', high: 'Runs long' },
  };
  /*
  characteristics = {
    Size: {
      value: '4'
    },
    Width: {
      value: '3.5'
    }
  }
  */

  const renderCharBreakdown = Object.keys(characteristics).map((char) => {
    const charValue = Number(characteristics[char].value);
    const charPercent = (charValue / 5) * 100;
    const pointerPosition = charPercent.toString().concat('', '%');
    const lowValue = refObj[char].low;
    const highValue = refObj[char].high;
    return (
      <div className="productBreakdownIndividual">
        <p className="productBreakdownTitle">{char}</p>
        <div name="triangle" style={
          {
          "margin-left": pointerPosition,
          "width": 0,
          "height": 0,
          "borderLeft": "5px solid transparent",
          "borderRight": "5px solid transparent",
          "borderTop": "10px solid #555"
          }
        }>
        </div>
        <div className="productBreakdownScale"></div>
        <div className="productBreakdownLabels">
          <p className="productBreakdownLabelsLow">{lowValue}</p>
          {/* <p className="productBreakdownLabelsMed">Good Fit</p> */}
          <p className="productBreakdownLabelsHigh">{highValue}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="productBreakdown">
      Product Breakdown
      {renderCharBreakdown}
    </div>
  );
}

export default ProductBreakdown;
