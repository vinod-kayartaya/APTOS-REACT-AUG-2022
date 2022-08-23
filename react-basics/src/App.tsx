import { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CounterCcApp from './components/CounterCcApp';
import MathsFcApp from './components/MathsFcApp';
import NamesApp from './components/NamesApp';

// import { App } from './App';
export class App extends Component {
    // A react component is a class that extends React.Component
    // must override/implement the render() method

    // The render() method must return a JSX (JavaScript+XML)
    render() {
        const headerText = 'Welcome to React training with TypeScript';

        return (
            <div>
                <Header text={headerText} />
                {/* This is how a component is instantiated! */}
                <div className='container' style={{ minHeight: '650px' }}>
                    <CounterCcApp />
                    <hr />
                    <MathsFcApp />
                    <hr />
                    <NamesApp
                        names={[
                            'Vinod',
                            'John',
                            'Jane',
                            'Vinod',
                            'Kiran',
                            'Kishore',
                            'Naveen',
                            'Vinay',
                        ]}
                    />
                </div>
                <Footer companyName='APTOS India' />
            </div>
        );
    }
}

// import App from './App';
export default App;
