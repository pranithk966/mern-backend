const express = require('express')
const {
  getTasks,
  getTask,
  postTask,
  updateTask,
  deleteTask,
} = require('../Controllers/controller')

const router = express.Router()

router.get('/', getTasks)

router.get('/:id', getTask)

router.post('/', postTask)

router.patch('/:id', updateTask)

router.delete('/:id', deleteTask)

module.exports = router
