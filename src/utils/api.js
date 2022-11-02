const request = ({ endpoint, method = 'GET' }) => 
  fetch(`https://fakestoreapi.com${endpoint}`, { method }).then(res => res.json())

export const getAllProducts = request({ endpoint: '/products' });