function isIPv4Address(inputString) {
  const octets = inputString.split('.');
  return octets.length === 4 &&
         octets.every(oct => oct && oct >= 0 && oct <= 255);
}

const a1 = '172.16.254.1';
console.log(`IPv4 ${a1} ? ${isIPv4Address(a1)}`);

const a2 = '172.316.254.1';
console.log(`IPv4 ${a2} ? ${isIPv4Address(a2)}`);

const a3 = '.254.255.0';
console.log(`IPv4 ${a3} ? ${isIPv4Address(a2)}`);

const a4 = '172.-16.254.1';
console.log(`IPv4 ${a4} ? ${isIPv4Address(a4)}`);

const a5 = '172.00.254.1';
console.log(`IPv4 ${a5} ? ${isIPv4Address(a5)}`);
