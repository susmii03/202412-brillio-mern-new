import Game from "./components/Game";
import Header from "./components/Header";
import './App.css'

const App =()=>{
    return <div className="app">
        <Header title="Tic Tac Toe" />
        <Game/>
    </div>
}

export default App;