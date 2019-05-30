 // pages here
import index from '../views/home'
import Pagea from '../views/pagea'
import Pageb from '../views/pageb'

const Routes = {
  '/index': index,
  '/pagea': Pagea,
  '/pageb': Pageb
};

const DefaultRoute = '/index';

export { Routes, DefaultRoute }