import React from 'react';
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => {
        return (
        <div className='widgets__article'>
            <div className='widgets__articleLeft'>
                <FiberManualRecordIcon />
            </div>

            <div className='widgets__articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
        );
    }

  return (
    <div className='widgets'>
    <div className='widgets__header'>
        <h2>LinkedIn News</h2>
        <InfoIcon />
    </div>
    {newsArticle('Nicholas Stadler is a Great Developer', 'Top News - 9999 Readers')}
    {newsArticle('Coronavirus: SA Updates', 'Top News - 855 Readers')}
    {newsArticle('TikTok Hits New Highs', 'Business News - 1002 Readers')}
    {newsArticle('Bitcoin Breaks $22k', 'Crypto - 724 Readers')}
    {newsArticle('How to Land a Programming Job', 'Programming News - 624 Readers')}
  </div>
  );
}


export default Widgets