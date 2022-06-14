import type { FC } from 'react'
import { PencilIcon, TrashIcon } from '@heroicons/react/solid'
import type { TaskType } from '@/types/index'

type TaskListType = {
  taskList: TaskType[]
  editTask: (task: TaskType) => void
  removeTask: (task: TaskType) => void
}

const TaskList: FC<TaskListType> = ({ taskList, editTask, removeTask }) => {
  return (
    <ul>
      {taskList.map((task) => (
        <li key={task.id} className="my-3 text-left text-xl flex justify-end">
          <div className="font-bold w-40">{task.title}</div>
          <div className="flex w-20">
            <PencilIcon className="h-7 w-7 to-blue-500 cursor-pointer" onClick={() => editTask(task)}></PencilIcon>
            <TrashIcon className="h-7 w-7 cursor-pointer" onClick={() => removeTask(task)}></TrashIcon>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default TaskList
