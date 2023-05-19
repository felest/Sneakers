function Drawer(props){
    return(
        <div style={props.isVisible ? {display: 'block'} : {display: 'none'}} className="overlay">
        <div className="drawer">
          <h2>
            Корзина <img onClick={() => props.setIsVisible(!props.isVisible)} 
            className="cu-p cursor" src="./img/btn-remove.png" alt="Remove" />
          </h2>
  
          <div className="items">{
            props.drawerItems.map((obj, index) => 
              <div key={index} className="cartItem">
              <div
                style={{ backgroundImage: `url(${obj.pUrl})` }}
                className="cartItemImg"></div>
  
              <div className="cartText">
                <p>{obj.pTitle}</p>
                <b>{obj.pPrice} руб.</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.png" alt="Remove" />
            </div>

            )
          }
            
          </div>
  
          <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб. </b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб. </b>
              </li>
            </ul>
            <button className="greenButton">
              Оформить заказ <img src="/img/arrow.png" alt="Arrow" />
            </button>
          </div>
        </div>
      </div>
    )
}

export default Drawer;