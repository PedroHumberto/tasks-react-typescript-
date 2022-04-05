import React, { useState } from "react";
import Item from "./Item";
import style from './List.module.scss';


//novo metodo de declarar um componente
function List() {
    const [tasks, setTasks] = useState([
        {
            task: 'React',
            time: '02:00:00'
        },
        {
            task: 'JavaScript',
            time: '01:00:00'
        },
        {
            task: 'TypeScript',
            time: '03:00:00'
        }
    ])
    return (
        <aside className={style.taskList}>
            <h2 onClick={() => {
                setTasks([...tasks, {task: "Study State", time: "05:00:00"}])
            }}>Daily Studies</h2>
            <ul>
                {tasks.map((item, index) => (
                    <Item key={index}
                        {...item} /*Desestruturação de objetos, retorna item.task e item.time */
                        /*task={item.task}
                          time={item.time}  
                        */
                    />
                ))}
                
            </ul>
        </aside>
    )
    
}

export default List