export const errorHandler = (statusCode, message) => {
  // handle error
  const error = new Error();
  error.statusCode = statusCode;
  error.message = message;
  return error;
};
