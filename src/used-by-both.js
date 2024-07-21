import { count, increment } from './incrementer.js';
//import nodePolyfills from 'rollup-plugin-node-polyfills';

console.log(count); // 0
increment();
console.log(count); // 1
//count += 1; // Error - only incrementer.js can change this

export default {
	color: 'slategrey',
	message: 'this is used by both entry points, so will be put in its own chunk'
};