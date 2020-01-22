import React, {useState} from 'react';
import { Link } from 'react-router-dom';


const HeaderContainer = () => {

  const [inputSearch, setInputSearch] = useState('');
  const [searchStatus, setSearchStatus] = useState('search-button disable');

  function updateInput(e){
    let status = (e.target.value.length > 0) ? 'search-button' : 'search-button disable';
    setSearchStatus(status);
    setInputSearch(e.target.value);
  }

  function updateView(e){
    if(e.charCode === 13 && inputSearch.length > 0){
        window.location.href = `/items/search/${inputSearch}`;
    }

  }


  return (
      <header className="App-header">
        <div className="container">
            <div className="search-container">
              <div className="search-container_logo">
              <Link to={`/`}>
                <img src={`${process.env.PUBLIC_URL}/images/Logo_ML.png`} alt="Logo"/>
              </Link>
              </div>
              <div className="search-container_form">
                  <input
                      className="search-input"
                      type="text"
                      value={inputSearch}
                      onChange={updateInput}
                      onKeyPress={updateView}
                      placeholder="Nunca Dejes de Buscar"/>

                  <Link className={searchStatus} to={`/items/search/${inputSearch}`}>
                    <img src={`${process.env.PUBLIC_URL}/images/ic_Search.png`} alt="Search"/>
                  </Link>
              </div>
            </div>
        </div>
      </header>
  );
}

export default HeaderContainer;