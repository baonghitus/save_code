import type { FC } from 'react'
import { ChevronDoubleRightIcon } from '@heroicons/react/solid'
import { useTask } from '@/hooks/useTask'
import { Link } from 'react-router-dom'
import TaskList from '@/components/Task/TaskList'
import TaskCreateEdit from '@/components/Task/TaskCreateEdit'

const Task: FC = () => {
  const { task, setTask, taskList, taskEdit, taskHandler, editTask, removeTask } = useTask()
  return (
    <div className="content">
      <div className="text-3xl font-bold pageTitle">TASK</div>
      <div className="flex w-full mt-10">
        <div className="w-1/2">
          <TaskList taskList={taskList} editTask={editTask} removeTask={removeTask} />
        </div>
        <div className="w-1/2 text-left">
          <TaskCreateEdit
            task={task}
            taskHandler={taskHandler}
            setTask={setTask}
            taskEdit={taskEdit}
            editTask={editTask}
          />
        </div>
      </div>
      <Link className="mt-10 flex flex-col items-center justify-center" to="/post">
        <ChevronDoubleRightIcon className="h-5 w-5 text-blue-500 cursor-pointer" />
        <p>POST PAGE</p>
      </Link>
    </div>
  )
}

export default Task
