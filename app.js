import * as config from './config/application.json';
import { User, Product } from './models';

console.log(config.name);
console.log(new User());
console.log(new Product());