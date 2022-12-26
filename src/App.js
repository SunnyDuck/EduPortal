import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import MyPage from "./Components/MyPage/MyPage";
import TestsPage from "./Components/TestsPage/TestsPage";
import EducationPage from "./Components/EducationPage/EducationPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RegistrationPage from "./Components/RegistrationPage/RegistrationPage";
import KvadratUr from "./Components/KvadratnieUr/KvadratUr"
import BikvadratUr from "./Components/BikvadratUR/BikvadratUr";
import TrainKvadPage from "./Components/TrainKvadPage/TrainKvadPage";


const App = (props) => {
  return (
      <BrowserRouter>
          <div className='app-wrapper'>
              <Header/>
              <Navbar/>
              <div className='app-wrapper-content'>
                  <Routes>
                      <Route path='*' element={<MyPage
                          Name={props.store.userInfo.Name}
                          SurName={props.store.userInfo.SurName}
                          YourPost={props.store.userInfo.YourPost}
                          Progress={props.store.userInfo.Progress}
                          DoneTask={props.store.userInfo.DoneTask}
                          DoneTheme={props.store.userInfo.DoneTheme}
                      />} />
                      <Route path='/educationpage' element={<EducationPage />} />
                      <Route path='/testpage' element={<TestsPage/>}/>
                      <Route path={'/registrpage'} element={<RegistrationPage
                          addNewName={props.addName}
                          addNewSurname={props.addSurname}
                          addNewPost={props.addPost}
                      />}/>
                      <Route path={'/kvadratnie'} element={<KvadratUr/>}/>
                      <Route path={'/bikvadratnie'} element={<BikvadratUr/>}/>
                      <Route path={'/trainkvadpage'} element={<TrainKvadPage
                          state = {props.store.kvadrTrainQuest}
                          colorReplace = {props.colorReplace}
                      />}/>
                  </Routes>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
