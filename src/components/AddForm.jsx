import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { newToDoAction } from '../redux/action/actions'

const AddForm = () => {
  const [content, setContent] = useState('')
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setContent(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(newToDoAction({ content }))
    setContent('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Add new todo:</label>
        <input type='text' value={content} onChange={handleChange} />
      </form>
    </>
  )
}

export default AddForm