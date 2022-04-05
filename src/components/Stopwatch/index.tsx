import Button from "../Button";
import Timer from './Timer';
import style from './Stopwatch.module.scss'

export default function StopWatch(){
    return(
        <div className={style.stopwatcher}>
            <p className={style.title}>Choose a card then starts the stopwatch</p>
            <div className={style.timeWrapper}>
                <Timer />
            </div>
            <Button>
                Start!
            </Button>
        </div>
    )
}