import User from './api'

export const SignInUser = async (data) => {
  const res = await User.post('/api/user/login', data)
  localStorage.setItem('token', res.data.token)
  return res.data.user
}

export const RegisterUser = async (data) => {
  const res = await User.post('/api/user/register', data)
  return res.data
}

export const CheckSession = async () => {
  const res = await User.get('/api/user/session')
  return res.data
}
