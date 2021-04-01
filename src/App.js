import React, {Component} from 'react';
import {ChangeLanguage} from "./redux/actions/LanguageAction";
import {connect} from "react-redux";

class App extends Component {
    render() {
        let lang = this.props.state.state.lang;
        return (
            <div>
                <h1>{lang.name}</h1>
                <button onClick={() => this.props.changeLang("ru")}>change ru</button>
                <button onClick={() => this.props.changeLang("uz")}>change uz</button>
</br>
                <a href="https://github.com/IkhtiyorDev/multi-lan-app-with-react-redux">Github</a>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        state: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeLang: lang => {
            dispatch(ChangeLanguage(lang))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
