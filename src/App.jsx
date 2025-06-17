import './App.css'
import {Route, Routes} from "react-router-dom";
import {LayoutComponent} from "./ui-components/layout/LayoutComponent.jsx";
import {Task1Component} from "./ui-components/tasks/task1/Task1Component.jsx";
import {Task2Component} from "./ui-components/tasks/task2/Task2Component.jsx";
import {Task3Component} from "./ui-components/tasks/task3/Task3Component.jsx";
import {Task4Component} from "./ui-components/tasks/task4/Task4Component.jsx";
import {Task5Component} from "./ui-components/tasks/task5/Task5Component.jsx";
import {Task6Component} from "./ui-components/tasks/task6/Task6Component.jsx";
import {UserList} from "./ui-components/tasks/task8/UserList.jsx";

function App() {

    return (
        <Routes>
            <Route path="/" element={<LayoutComponent/>}>
                <Route index element={<Task1Component />} />
                <Route path={"/task1"} element={<Task1Component/>}/>
                <Route path={"/task2"} element={<Task2Component/>}/>
                <Route path={"/task3"} element={<Task3Component/>}/>
                <Route path={"/task4"} element={<Task4Component/>}/>
                <Route path={"/task5"} element={<Task5Component/>}/>
                <Route path={"/task6"} element={<Task6Component/>}/>
                <Route path={"/task8"} element={<UserList/>}/>
            </Route>
        </Routes>
    );
}

export default App
