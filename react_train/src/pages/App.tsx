import { useState, useEffect } from 'react'

import '@/styles/App.css'
interface Name {
  title: string
  first: string
  last: string
}

enum Gender {
  Female = 'female',
  Male = 'male'
}
interface UserInfo {
  gender: Gender
  name: Name
}

interface Info {
  seed: number
  results: number
  page: number
  version: string
}

interface UserResults {
  results: UserInfo[]
  info: Info
}

function App() {
  const [count, setCount] = useState(0)
  const [friend, setFriend] = useState<String>('')
  const [userList, serUserList] = useState<UserInfo[]>([])

  useEffect(() => {}, [friend])

  const getDataUser = () => {
    fetch(`https://randomuser.me/api/?results=21`)
      .then((res) => res.json())
      .then((data) => {
        const resData: UserResults = data
        const users: UserInfo[] = resData.results
        serUserList(users)
        console.log(users)
      })
      .catch((error) => console.error(error))
  }

  const getFriend = () => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/getUser`)
      .then((res) => res.json())
      .then((data) => {
        const persons = data.firstName
        setFriend(persons)
      })
      .catch((error) => console.error(error))
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
          <button type="button" onClick={getFriend}>
            get Frend
          </button>
          <span>{friend}</span>
          <button type="button" onClick={getDataUser}>
            get User
          </button>
        </p>
        {/* <span>{userList[0].name.first}</span> */}
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
