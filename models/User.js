import mongoose from 'mongoose'


const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
})


const User = mongoose.model('User', userSchema)

export default User