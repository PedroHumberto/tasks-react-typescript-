import style from './Timer.module.scss'
export default function Timer(){
    return (
        <>
            <span className={style.timeNumber}>0</span>
            <span className={style.timeNumber}>0</span>
            <span>:</span>
            <span className={style.timeNumber}>0</span>
            <span className={style.timeNumber}>0</span>
        </>
    )
}