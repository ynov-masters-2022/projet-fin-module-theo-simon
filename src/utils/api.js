const request = async ({ endpoint, method = 'GET' }) => {
  const request = fetch('https://fakestoreapi.com' + endpoint ,{
    method,
  }).then(res => res.json())

  return request;
};

const preload = (promise, timeout) => {
  let status = 'pending'
  let response

  const suspender = promise.then(
    (res) => setTimeout(() => {
      status = 'success'
      response = res
    }, timeout),
    (err) => {
      status = 'error'
      response = err
    },
  );

  const read = () => {
    switch (status) {
      case 'pending':
        throw suspender
      case 'error':
        throw response
      default:
        return response
    }
  }

  return { read }
};

export const getAllProducts = async () => preload(request({ endpoint: '/products' }), 500);