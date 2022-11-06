import Layout from './componets/Layout';
import React from 'react';
import './App.css';
import Home from './componets/Home';
// import Users from './Componets/users';
// import Support from './Componets/support';
import { Routes, Route } from 'react-router-dom';
import Test from './componets/TestError';
import Error from './componets/notfound';
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {error: ""};
  }

  componentDidCatch(error) {
    this.setState({error: `${error.name}: ${error.message}`});
  }

  render() {
    const {error} = this.state;
    if (error) {
      return (
        <div className='err'>
          <h2>Something went  Wrong !</h2>
          <button>Reset Error</button>
        </div>
      );
    } else {
      return <>{this.props.children}</>;
    }
  }
}
function App() {
  return (
    <ErrorBoundary>
    <Routes>
      <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='/testError' element={<Test />} />
      {/* <Route path='/support' element={<Support />} /> */}
    </Route>
    <Route path='*' element={<Error />} />
   </Routes>
    </ErrorBoundary>
  )
  }

export default App;
