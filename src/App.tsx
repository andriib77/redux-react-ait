import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Homework29 from "./homeworks/Homework29/Homework29"
import Homework30 from "./homeworks/Homework30/Homework30"

import Layout from "pages/UsersApp/Layout/Layout"
import Home from "pages/UsersApp/Home/Home"
import Users from "pages/UsersApp/Users/Users"
import RandomJoke from "components/RandomJoke/RandomJoke"
import RandomCatFact from "components/CatFacts/CatFacts"
import RandomUser from "components/RandomUser/RandomUser"

function App() {
  return (
    <BrowserRouter>
      {/* <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element="Page Not Found" />
        </Routes>
      </Layout> */}
      {/* <Homework30 /> */}
      {/* <RandomJoke /> */}
      {/* <RandomCatFact /> */}
      <RandomUser />
    </BrowserRouter>
  )
}

export default App
