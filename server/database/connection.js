const mongoose = require('mongoose')
const databaseUrl = "mongodb+srv://bZVq8QBa546g8p:MCo4sH7zZA41a4hd@argentbank.6qj0zst.mongodb.net/?retryWrites=true&w=majority&appName=ArgentBank"
// const databaseUrl = process.env.DATABASE_URL

module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, { useNewUrlParser: true })
    console.log('Database successfully connected')
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
}
