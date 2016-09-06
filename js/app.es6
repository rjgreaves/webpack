//require('./login');

require('../css/bootstrap.css');
require('../ss/app.scss');

import { login } from "./login"
login('admin', 'radical');
document.write("Welcome to Big Hair Concerts!!");

console.log('App Loaded');