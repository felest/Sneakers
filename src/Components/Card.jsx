//КАРТОЧКА

import React from 'react';

function Card({title, price, imageUrl, drawerItems, setDrawerItems}){

    const [itemsCount, setItemsCount] = React.useState(0);

    function onAddToCart(){
        //setIsAdded(!isAdded);
        // if(drawerItems.indexOf({title, price, imageUrl}) != -1){
        //     drawerItems.filter((elem) => elem !== {title, price, imageUrl})
        // }
        setDrawerItems([...drawerItems, {imageUrl, price, title}]);
        setItemsCount(itemsCount + 1);
    }

    function deleteItems(){
        setItemsCount(0);
        setDrawerItems(drawerItems.filter((obj) => title !== obj.title));
    }

    return (
        <div className="card">
        <div>
            <img src='/img/heart.png' width={32} height={32} alt="Unliked" />
        </div>
        <img width={133} height={112} src={imageUrl} alt="Sneakers" />
        <h5>{title}</h5>
        <div className="cardChildDiv">
            <div className="container">
                <span>ЦЕНА:</span>
                <b>{price}</b>
            </div>
            {/* <button className="button"> */}
              <img className = "button" onClick = {() => onAddToCart()} width={32} height={32} 
              src={itemsCount!==0 ? "/img/btn-checked.svg" : "/img/plus.png"} alt="Plus" />

              {itemsCount && <img className="button" onClick = {() => deleteItems(title)} width={31} height={31} 
              src={"/img/cross.png"} alt="Del" />}
            {/* </button> */}
        </div>
        <p>Количество: {itemsCount}</p>
      </div>
    )
}

export default Card;