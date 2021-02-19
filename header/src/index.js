const header = document.createElement('header')
header.innerHTML = 'This is Heading';
header.style.fontSize = '30px';
header.style.fontWeight = 'bold';

document.getElementById('root').appendChild(header);

module.exports = () => header;
// module.exports = () => console.log('object');
