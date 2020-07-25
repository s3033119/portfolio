import React from 'react';

import './Stars.css';

export default class Stars extends React.Component {
    render(){
        return(
            <>
              {this.props.rate > 0 && (
                  <div className="star-rating">
                    <div className="star-rating-back">★★★★★</div>
                    <div className="star-rating-front" style={{width: this.props.rate * 20 + '%' }}>★★★★★</div>
                  </div>
              )
              }
            </>
        );
    }
}
