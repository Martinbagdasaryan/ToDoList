

const errorMiddleware = (err, req, res ,next) => {
    if (res.headersSent) {
      return next(err);
    }
    res.status(400).send({ message: err.message });
  }

export default errorMiddleware