import React, {Component} from 'react';
import Header from "./components/header/Header.jsx";

import Shop from "./components/shop/Shop.jsx";
import Seline from "./components/celine/Seline.jsx";
import Ysl from "./components/ysl/Ysl.jsx";
import Footer from "./components/footer/Footer.jsx";
import YourStyle from "./components/ your-style/Your-Style.jsx";

// import Chanel from "./pages/chanel/Chanel.jsx";


class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <YourStyle/>
                <Shop/>
                <Seline/>
                <Ysl/>
                <Footer/>

                {/*<Chanel/>*/}
            </div>
        );
    }
}

export default App;