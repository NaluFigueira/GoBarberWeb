import Reactotron from 'reactotron-react-js';

if (process.env.NODE_ENV) {
  const tron = Reactotron.configure().connect();

  tron.clear();

  console.tron = tron;
}
