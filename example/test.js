import { getURLParameter } from 'topweng-npm';

const urlParameter = getURLParameter( 'https://example.com?param=value', 'param' );
console.log( urlParameter );  // 输出：'value'