//КАРТОЧКА

import React from 'react';

function Card({pTitle, pPrice, pUrl, pDrawerItems, pSetDrawerItems}){

    const [itemsCount, setItemsCount] = React.useState(0);

    function onAddToCart(){
        //setIsAdded(!isAdded);
        // if(pDrawerItems.indexOf({pTitle, pPrice, pUrl}) != -1){
        //     pDrawerItems.filter((elem) => elem !== {pTitle, pPrice, pUrl})
        // }
        pSetDrawerItems([...pDrawerItems, {pUrl, pPrice, pTitle}]);
        setItemsCount(itemsCount + 1);
    }

    function deleteItems(){
        setItemsCount(0);
        pSetDrawerItems(pDrawerItems.filter((obj) => pTitle !== obj.pTitle));
    }

    return (
        <div className="card">
        <div>
            <img src='/img/unliked.png' width={32} height={32} alt="Unliked" />
        </div>
        <img width={133} height={112} src={pUrl} alt="Sneakers" />
        <h5>{pTitle}</h5>
        <div className="cardChildDiv">
            <div className="container">
                <span>ЦЕНА:</span>
                <b>{pPrice}</b>
            </div>
            {/* <button className="button"> */}
              <img className = "button" onClick = {() => onAddToCart()} width={32} height={32} 
              src={itemsCount!==0 ? "/img/btn-checked.svg" : "/img/plus.png"} alt="Plus" />

              {itemsCount && <img className="button" onClick = {() => deleteItems(pTitle)} width={31} height={31} 
              src={"/img/cross.png"} alt="Del" />}
            {/* </button> */}
        </div>
        <p>Количество: {itemsCount}</p>
      </div>
    )
}

export default Card;