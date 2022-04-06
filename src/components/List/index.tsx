import { ITask } from "../../types/tasks";
import Item from "./Item";
import style from './List.module.scss';

interface Props{
    tasks: ITask[],
    selectTask: (selectedTask: ITask) => void // void não retorna nada conforme a função declarada no ap 
}

//novo metodo de declarar um componente
function List( { tasks, selectTask }: Props) {

    return (
        <aside className={style.taskList}>
            <h2>Daily Studies</h2>
            <ul>
                {tasks.map((item => (
                    <Item 
                        key={item.id}
                        selectTask={selectTask}
                        {...item} /*Desestruturação de objetos, retorna item.task e item.time */
                        /*task={item.task}
                          time={item.time}  
                        */
                    />
                )))}
                
            </ul>
        </aside>
    )
    
}

export default List