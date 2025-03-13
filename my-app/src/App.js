import './App.css';
import NestingComponents from './components/NestingComponents';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import EventsClass from './components/EventsClass';
import EventsFunctional from './components/EventsFunctional';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps'
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
import MethodsAsPropsParent from './components/MethodsAsPropsParent';
import RenderingLists from './components/RenderingLists';


function App() {
  return (
    <div className="App">
     <FunctionalGreetingWithProps greeting="nice to meet you!" name="Mike" age="32"/>
     <StatefulGreeting greeting="I'm a stateful class component" name="Mike"/>
     <StatefulGreetingWithCallback greeting="I'm a stateful class component with callback" name="Mike"/>
     <StatefulGreetingWithPrevState greeting="I'm a stateful class component with prev state" name="Mike"/>
     <EventsFunctional/>
     <EventsClass/>
     <ConditionalRenderingFunctional connected={true}/>
     <ConditionalRenderingClass/>
     <NestingComponents/>
     <MethodsAsPropsParent/>
     <RenderingLists />
    </div>
  );
}

export default App;