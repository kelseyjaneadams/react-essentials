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
import LifeCyclesCDM from './components/LifeCyclesCDM';
import LifeCyclesCDU from './components/LifeCyclesCDU';
import LifeCyclesCWU from './components/LifeCyclesCWU';
import ControlledForm from './components/ControlledForm';
import UncontrolledForm from './components/UncontrolledForm';
import { SearchBar1 } from './components/SearchBar1';
import { SearchBar2 } from './components/SearchBar2';
import { SearchBar3 } from './components/SearchBar3';
import ControlledFormHooks from './components/ControlledFormHooks';


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
     <LifeCyclesCDM />
     <LifeCyclesCDU />
     <LifeCyclesCWU />
     <ControlledForm />
     <UncontrolledForm />
     <SearchBar1 />
     <SearchBar2 />
     <SearchBar3 />
     <ControlledFormHooks />
    </div>
  );
}

export default App;