// import logo from './logo.svg';
import './App.css';
// import FunctionalGreeting from './components/FunctionalGreeting';
// import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
// import StatefulGreeting from './components/StatefulGreeting';
// import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
// import EventsClass from './components/EventsClass';
// import EventsFunctional from './components/EventsFunctional';
import EventBinding from './components/EventBinding';

function App() {
  return (
    <div className="App">
      {/* < FunctionalGreeting />
      < FunctionalGreetingWithProps greeting="nice to meet you!" name="Sarah" age="30" />
      < StatefulGreeting greeting="I'm a stateful class component" />
      < StatefulGreetingWithCallback greeting="I'm a stateful class component with callback" />
      < EventsClass />
      < EventsFunctional /> */}
      < EventBinding />
    </div>
  );
}

export default App;
