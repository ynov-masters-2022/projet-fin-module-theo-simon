const request = async ({ endpoint, method = 'GET' }) => {
  const request = await fetch('https://fakestoreapi.com' + endpoint ,{
    method,
  })

  return await request.json();
};

export const getAllProducts = async () => await request({ endpoint: '/products' });