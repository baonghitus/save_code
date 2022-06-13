import type { FC } from 'react'
import { ChevronDoubleRightIcon, XIcon, PencilIcon, TrashIcon } from '@heroicons/react/solid'
import { useTask } from '@/hooks/useTask'
import { Link } from 'react-router-dom'

const Task: FC = () => {
  const { task, setTask, taskList, taskEdit, taskHandler, editTask, removeTask } = useTask()
  return (
    <div className="content">
      <div className="text-3xl font-bold">TASK</div>
      <div className="flex w-full mt-10">
        <div className="w-1/2">
          <ul>
            {taskList.map((task) => (
              <li key={task.id} className="my-3 text-left text-xl flex justify-end">
                <div className="font-bold w-40">{task.title}</div>
                <div className="flex w-20">
                  <PencilIcon
                    className="h-7 w-7 to-blue-500 cursor-pointer"
                    onClick={() => editTask(task)}
                  ></PencilIcon>
                  <TrashIcon className="h-7 w-7 cursor-pointer" onClick={() => removeTask(task)}></TrashIcon>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/2 text-left">
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
        </div>
      </div>
      <Link className="mt-2 flex flex-col items-center justify-center" to="/post">
        <ChevronDoubleRightIcon className="h-5 w-5 text-blue-500 cursor-pointer" />
        <p>POST PAGE</p>
      </Link>
    </div>
  )
}

export default Task
