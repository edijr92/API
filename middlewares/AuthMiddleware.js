const jwt = require('jsonwebtoken')
//Middleware utilizado para verificar la autenticacion de los usuarios
const AuthMiddleware = (
  req, res, next
) => {
  const authorization = req.headers['authorization']
  try {
    const token = authorization.slice(7, authorization.length)
    jwt.verify(token, 'ATOKEN');
  } 
  catch (err) {
    return res.status(403).send({
      ok: false,
      errors: [
        {
          message: 'not authenticated',
        },
      ],
    })
  }
  next()
}

module.exports = AuthMiddleware;