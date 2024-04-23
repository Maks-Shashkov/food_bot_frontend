import React from "react";
import Home from "./pages/Home";
import Card from "./pages/Card";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import './fonts/nextArt/NEXT ART_SemiBold.otf'

import {Route, Routes} from "react-router-dom";


import './scss/app.scss'

export const SearchContext = React.createContext();

function App() {
    const [searchValue, setSearchValue] = React.useState('');
    return (
        <div className="wrapper">
            <Header/>
            <SearchContext.Provider value={{searchValue, setSearchValue}}>
                <div className="content">
                    <Routes>
                        <Route path='/' element={<Home/>}></Route>
                        <Route path='*' element={<NotFound/>}></Route>
                        <Route path='/cart' element={<Card/>}></Route>
                    </Routes>
                </div>
            </SearchContext.Provider>
        </div>
    );
}

export default App;
