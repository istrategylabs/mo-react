import Home from './views/Home';
import About from './views/About';

export default [
  {
    title: 'Home',
    path: '/',
    component: Home,
    exact: true
  }, {
    title: 'About',
    path: '/about',
    component: About
  }
];
