const jwt= require('jsonwebtoken')

const {
  ACTIVE_TOKEN_SECRET,
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET
} = process.env

// export const generateActiveToken = (payload) => {
//   return jwt.sign(payload, `${ACTIVE_TOKEN_SECRET}`, {expiresIn: '5m'})
// }

const generateAccessToken = (payload) => {
  return jwt.sign(payload, `${ACCESS_TOKEN_SECRET}`)
}

// export const generateRefreshToken = (payload: object, res: Response) => {
//   const refresh_token = jwt.sign(payload, `${REFRESH_TOKEN_SECRET}`, {expiresIn: '30d'})
  
//   res.cookie('refreshtoken', refresh_token, {
//     httpOnly: true,
//     path: `/v1/auth/refresh_token`,
//     maxAge: 30*24*60*60*1000 // 30days
//   })
  
//   return refresh_token;
// }

module.exports={
    generateAccessToken
}