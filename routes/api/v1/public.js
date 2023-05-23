const express = require('express')
const router = express.Router()
const userController = require('../../../app/http/controllers/api/public/userController')

// Get all users
router.get('/user', async (req, res) => {
    userController.index(req, res)
})

// Create a new user
router.post('/user', async (req, res) => {
    userController.create(req, res)
})

// Get a single user
router.get('/user/:id', async (req, res) => {
    userController.show(req, res)
})

// Update a user
router.put('/user/:id', async (req, res) => {
    userController.update(req, res)
})

// Delete a user
router.delete('/user/:id', async (req, res) => {
    userController.destroy(req, res)
})

module.exports = router
