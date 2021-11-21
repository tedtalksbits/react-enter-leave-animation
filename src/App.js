import './App.css';
import Alert from './Components/Alert';
import AnimatedAlert from './Components/AnimatedAlert';
import AnimatedComponent from './Components/AnimatedComponent';

function App() {
  return (
    <div className="app">
      <section className="example-section">
        <h1>One way animation</h1>
        <p>Animation only works one way in this example because the alert element is immediately removed from the HTML flow.</p>

        <Alert />
        <p>proof element is removed from flow</p>
      </section>
      <section className="example-section">
        <h1>Animation both ways</h1>
        <p>Animation works both ways by beacuse element removal from dom is delayed</p>
        <AnimatedAlert />
        <p>proof element is removed from flow</p>
      </section>
      <section className="example-section">
        <h1>Drop down example</h1>

        <AnimatedComponent>
          <h1>Hello 1</h1>
          <h1>Hello 2</h1>
          <h1>Hello 3</h1>
        </AnimatedComponent>
        <p>proof element is removed from flow</p>
      </section>
    </div>
  );
}

export default App;
