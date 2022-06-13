import type { FormEvent } from 'react'
import { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import type { TaskType } from '@/types/index'

export const useTask = () => {
  const [taskList, setTaskList] = useState<TaskType[]>(() => {
    const taskSaved = localStorage.getItem('taskList')
    if (taskSaved) {
      const initialValue: TaskType[] = JSON.parse(taskSaved)
      return initialValue
    }
    return []
  })
  const [task, setTask] = useState('')
  const [taskEdit, setTaskEdit] = useState<TaskType | null>(null)

  const taskHandler = (e: FormEvent<HTMLFormElement>) => {
    console.log('taskHandler')

    e.preventDefault()
    if (!task) {
      return
    }
    if (taskEdit) {
      setTaskList((taskList) =>
        taskList.map((statTask) =>
          statTask.id === taskEdit.id
            ? {
                id: taskEdit.id,
                title: task
              }
            : statTask
        )
      )
      setTaskEdit(null)
    } else {
      setTaskList((taskList) => [
        ...taskList,
        {
          id: uuid(),
          title: task
        }
      ])
    }
    setTask('')
  }

  const editTask = (task: TaskType | null) => {
    console.log('editTask')
    if (task != null) {
      setTaskEdit(task)
      setTask(task.title)
    } else {
      setTaskEdit(null)
      setTask('')
    }
  }

  const removeTask = (task: TaskType) => {
    console.log('removeTask')
    setTaskList((taskList) => taskList.filter((statTask) => task.id !== statTask.id))
    setTask('')
    setTaskEdit(null)
  }

  useEffect(() => {
    console.log('useEffect')
    localStorage.setItem('taskList', JSON.stringify(taskList))
  }, [taskList])

  return {
    task,
    setTask,
    taskList,
    setTaskList,
    taskEdit,
    setTaskEdit,
    taskHandler,
    editTask,
    removeTask
  }
}
