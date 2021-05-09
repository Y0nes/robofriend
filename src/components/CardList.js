import React from 'react';
import Card from './Card';

const CardList = ({avatar}) => {
    return (
        <div> {
             avatar.map((user, i) => {
                return (
                    <Card
                        key={i} 
                        name={avatar[i].name}
                        email={avatar[i].email}
                    />
                );
            })
        }
        </div>
           
    );
}

export default CardList;
