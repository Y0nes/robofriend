import React from 'react';

const Card = ({name, email}) => {
    return (
        <div className='tc grow  br3 pa3 ma2 dib bw2 shadow-5 grint'>
            <img alt='avatar' 
            src={`https://api.multiavatar.com/${name}younes.svg`} 
            width='200px' 
            height='200px' />
            <div>
                <h2 className='h2-prop'>{name}</h2>
                <p className='h2-prop'>{email}</p>
            </div>
        </div>
    );
}


export default Card;