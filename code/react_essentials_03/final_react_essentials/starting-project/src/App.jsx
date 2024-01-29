import {CORE_CONCEPTS} from './data.js' // import with {} because it is a name export not default export we need to use {}
import Header from './components/Header/header.jsx';
import CoreConcepts from './components/CoreConcepts/coreConcepts.jsx';
import TabButton from './components/TabButton/TabButton.jsx';
import { useState } from 'react';
import { EXAMPLES } from './data.js';

function App() {
  var tabContent = 'Please Click on a button';
  const [selectedTopic, setSelectedTopic] = useState(null);
  function handleSelect(selectedButton){
    //selectedButton ==> Components, JSXm props, state
    setSelectedTopic(selectedButton);
  }

  if(selectedTopic){
    tabContent=(
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
              {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
      </div>
      )    
  }

  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id='core-concepts'>
        <h2>Core Concepts</h2>
        <ul>
          {/* <CoreConcepts title=CORE_CONCEPTS[0].title description= CORE_CONCEPTS[0].description image=CORE_CONCEPTS[0] /> */}
          {/* ==> spread operator */}
          <CoreConcepts {...CORE_CONCEPTS[0]} /> 
          <CoreConcepts {...CORE_CONCEPTS[1]} />
          <CoreConcepts {...CORE_CONCEPTS[2]} />
          <CoreConcepts {...CORE_CONCEPTS[3]} />
        </ul>
      </section>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton onSelect={()=>{handleSelect('components')}}>Components</TabButton>
          <TabButton onSelect={()=>{handleSelect('jsx')}}>JSX</TabButton>
          <TabButton onSelect={()=>{handleSelect('props')}}>Props</TabButton>
          <TabButton onSelect={()=>{handleSelect('state')}}>State</TabButton>
        </menu>

          {tabContent}
      </section>
      </main>
    </div>
  );
}

export default App;
