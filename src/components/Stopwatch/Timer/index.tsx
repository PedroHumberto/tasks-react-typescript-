import style from './Timer.module.scss'

interface Props{
    time: number | undefined
}

export default function Timer({ time = 0 }: Props){
    const minuts = Math.floor( time / 60)
    const seconds = time % 60
    const [minutsD, minutsUnit] = String(minuts)//downlevelIteration
    .padStart(2, '0') //permite cadeira de caracteres padrão, e transforma em caracteres padrões
    const [secondsD, secondsUnit] = String(seconds).padStart(2, '0')
    return (
        <>
            <span className={style.timeNumber}>{minutsD}</span>
            <span className={style.timeNumber}>{minutsUnit}</span>
            <span className={style.timeDivision}>:</span>
            <span className={style.timeNumber}>{secondsD}</span>
            <span className={style.timeNumber}>{secondsUnit}</span>
        </>
    )
}