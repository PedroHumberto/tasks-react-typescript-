import { ITask } from '../../../types/tasks'
import style from './Item.module.scss'

// reaproveita a interface usada em lista
interface Props extends ITask {
    selectTask: (selectedTask: ITask) => void
}

export default function Item({
    task,
    time,
    selected,
    completed,
    id,
    selectTask
}: Props) {
    return (
        <li 
            className={`${style.item} ${selected ? style.selectedItem : ''} ${completed ? style.itemCompleted : ''}`} 
            onClick={() => !completed && selectTask({
                task,
                time,
                selected,
                completed,
                id
        })}>
            <h3>{task}</h3>
            <span>{time}</span>
            {completed && <span className={style.completed}></span>}
        </li>
    )
}