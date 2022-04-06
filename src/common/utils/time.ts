export function timeToSeconds(time: string) {

    const [hours = '0', minuts ='0', seconds = '0'] = time.split(":")

    const hoursInSeconds = Number(hours) * 3600; //1h = 3600s
    const minutsInSeconds = Number(minuts) * 60; //1min = 60s
    return hoursInSeconds + minutsInSeconds + Number(seconds)
}