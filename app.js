import * as config from './config/application.json';
import { User, Product } from './models';

console.log(config.name);
new User();
new Product();