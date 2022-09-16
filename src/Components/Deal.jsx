import flame from '../Images/flame.svg';
import trophy from '../Images/trophy.svg';
import triangle from '../Images/triangle.svg';
import product from '../Images/product.png';
import info from '../Images/info.svg';
import stars from '../Images/stars.svg';
import arrow from '../Images/arrow.svg';

export const Deal = () => {
    return (
        <>
          <div className="deal-warpper">
            <div className="deal-label">
              <div className='deal-label-content'>
                <img className="deal-label-content-icon" src={flame} alt="flame" />
                <img className="deal-label-content-icon" src={trophy} alt="trophy" />
                <p className='deal-label-content-text'>Best Value</p>
              </div>
              <img className="deal-label-img" src={triangle} alt="triangle" />
            </div>
            <div className='deal-content'>
              <p className='deal-content-num'>01</p> 
              <div className='deal-content-details'>
                <div className="deal-content-details-img-wrapper">
                  <img className="deal-content-details-img" src={product} alt="product" />
                  <div className='deal-content-rating mobile'>
                    <p className='deal-content-rating-num'>
                      <img className="deal-content-rating-num-icon" src={info} alt="info" />
                      9.8
                    </p>
                    <img className="deal-content-rating-icon" src={stars} alt="stars" />
                </div> 
                </div>
                <div className='deal-content-details-text'>
                    <p className='deal-content-details-text-product'>
                      Sony X95J 85 Inch TV: BRAVIA XR Full Array LED 4K Ultra HD Smart 
                    </p>
                    <p className='deal-content-details-text-brand'>
                      SONY
                    </p>
                    <a href=' ' className='deal-content-actions-more-dropdown tablet'>Show more
                      <img className="deal-content-actions-more-dropdown-icon" src={arrow} alt="arrow" />
                    </a>
                    <p className='deal-content-details-text-discount'>
                      50% OFF
                    </p>
                </div>
              </div> 
              <div className='deal-content-rating desktop'>
                <p className='deal-content-rating-num'>
                  <img className="deal-content-rating-num-icon" src={info} alt="info" />
                    9.8
                </p>
                <img className="deal-content-rating-icon" src={stars} alt="stars" />
              </div> 
              <div className='deal-content-actions'>
                <button className='deal-content-actions-btn'>View Deal</button>
                <div className='deal-content-actions-more'>
                    <a href=' ' className='deal-content-actions-more-store'>On Amazon</a>
                    <a href=' ' className='deal-content-actions-more-dropdown'>Show more
                      <img className="deal-content-actions-more-dropdown-icon" src={arrow} alt="arrow" />
                    </a>
                </div>
              </div>
            </div>    
          </div>
        </>
    );
};