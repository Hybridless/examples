export const handler = async (event, context) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      context.succeed({ body: { message: 'Go Hybridless!' }, statusCode: 200 });
      resolve();
    }, 200);
  })
};