import speed from 'performance-now'

let handler = async(m, { conn }) => {
let ini_timestamp = speed();
            let ini_latensi = speed() - ini_timestamp;
            let text_ping = `Kecepatan Respon ${ini_latensi.toFixed(4)} _Second_`;
m.reply(text_ping) 
}
handler.command = ['test']

export default handler