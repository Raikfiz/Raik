//import logo from './logo.svg';
//import './App.css';
import Header from './components/header/header.js';
// import MainList from './components/main/main.js';
import { dataForList } from './content/mainData';
import Button from './components/button/button';
// import headImg from './content/images/headimg.png';
import Info from './components/info/info.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Info/>
      <main>
        <section>
          <img src={headImg} />
          <dl>
            {dataForList.map((item) => <MainList{...item} />)}
          </dl>
          
        </section>
        <section>
          <h3>All buttons</h3>
          <Button/>
          </section>
      </main>
    </div>
  );
}

export default App;
