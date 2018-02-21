const inp = '1234567';
const oup = '1,234,567';

const comms = [...[...'1234567']
  .reverse()
  .join('')
  .match(/[\d]{1,3}/g)
  .join(',')].reverse().join('')

console.log(comms);


