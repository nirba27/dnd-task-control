import logo from './logo.svg';
import './App.css';
import Example from './modules/Board'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
          <Example />
      </DndProvider>
    </div>
  );
}

export default App;
