import type { FC, FormEvent } from 'react'
import type { TaskType } from '@/types/index'
import { XIcon } from '@heroicons/react/solid'

type TaskCreateEdit = {
  task: string
  taskHandler: (e: FormEvent<HTMLFormElement>) => void
  setTask: (task: string) => void
  taskEdit: TaskType | null
  editTask: (task: TaskType | null) => void
}

const TaskCreateEdit: FC<TaskCreateEdit> = ({ task, taskHandler, setTask, taskEdit, editTask }) => {
  return (
    <form onSubmit={taskHandler}>
      <div className="">
        <input
          type="text"
          className="block rounded p-2 my-1 w-50 border-solid border-2 border-sky-500"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <span></span>
      </div>
      <button className="inline-block px-3 py-2 w-20 rounded bg-blue-700 text-white cursor-pointer">
        {taskEdit ? 'edit' : 'create'}
      </button>
      {taskEdit ? (
        <XIcon className="inline-block h-7 w-7 to-blue-500 cursor-pointer" onClick={() => editTask(null)} />
      ) : (
        ''
      )}
    </form>
  )
}

export default TaskCreateEdit
