const tasks = require('../Models/model')
const mongoose = require('mongoose')

const getTasks = async (req, res) => {
  const task = await tasks.find({}).sort({ createdAt: -1 })

  res.status(200).json(task)
}

const getTask = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'no such task found' })
  }

  const task = await tasks.findById(id)

  if (!task) {
    return res.status(404).json({ error: 'no such task found' })
  }

  res.status(200).json(task)
}

const postTask = async (req, res) => {
  const { title, description, status } = req.body

  try {
    const task = await tasks.create({ title, description, status })
    res.status(200).json(task)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const updateTask = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'no such task found' })
  }

  const task = await tasks.findOneAndUpdate({ _id: id }, { ...req.body })

  if (!task) {
    return res.status(404).json({ error: error.message })
  }
  res.status(200).json(task)
}

const deleteTask = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'no such task found' })
  }

  const task = await tasks.findByIdAndDelete(id)
  if (!task) {
    return res.status(400).json({ error: error.message })
  }

  res.status(200).json(task)
}

module.exports = { getTasks, getTask, postTask, updateTask, deleteTask }
