import Button from "../Button";
import Timer from './Timer';
import style from './Stopwatch.module.scss'
import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/tasks";
import { useEffect, useState } from "react";


interface Props{
    selected: ITask | undefined,
    taskCompleted: () => void
}

export default function StopWatch({ selected, taskCompleted }: Props){
    console.log('conv: ', timeToSeconds('01:01:01')) // teste de converção
    const [time, setTime] = useState<number>();

    useEffect(() =>{
        if(selected?.time){
            setTime(timeToSeconds(selected.time))
        }
        
    },[selected]) //sempre que mudar vai executar essa função
    

    function countdown(counter: number = 0) {
        setTimeout(()=> {
            if(counter > 0){
                setTime(counter - 1);
                return countdown(counter - 1); //função recursiva
            }
            taskCompleted()

        },1000)

        
    }

    return(
        <div className={style.stopwatcher}>
            <p className={style.title}>Choose a card then starts the stopwatch</p>
            <div className={style.timeWrapper}>
                <Timer time={time} />
            </div>
            <Button onClick={() => countdown(time) }>
                Start!
            </Button>
        </div>
    )
}