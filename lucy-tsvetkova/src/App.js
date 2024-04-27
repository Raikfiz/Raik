//import logo from './logo.svg';
//import './App.css';
import Header from './components/header/header.js';
import MainList from './components/main/main.js';
import { dataForList } from './content/mainData';
import Button from './components/button/button';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section>
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
