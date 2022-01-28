const jwt = require('jsonwebtoken')

const AuthMiddleware = (
  req, res, next
) => {
  const authorization = req.headers['authorization']

  if (!authorization) {
    return res.status(403).json({
      ok: false,
      errors: [
        {
          message: 'not authenticated',
        },
      ],
    })
  }

  try {
    const token = authorization.slice(7, authorization.length)
    jwt.verify(token, 'ATOKEN')
  } catch (err) {
    return res.status(403).json({
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