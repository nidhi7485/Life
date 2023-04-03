const User = require('../model/User')

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body)
    res.send('user created successfully')
  } catch (error) {
    res.send(error)
  }
}

module.exports = { createUser }
