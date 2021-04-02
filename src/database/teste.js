const dataBase = require('./db.js')
const createProffy = require('./createProffy')

dataBase.then(async (db) => {
    proffyValue = {
        name: 'Angelica',
        avatar: 'https://i.pinimg.com/originals/87/db/cb/87dbcbb8b6f954bd86ad7e9ed855488c.jpg',
        whatsapp: '11948632313',
        bio: 'Instrutora de etiqueta',
    }

    classValue = {
        subject: 1,
        cost: "20",
        //proffy id virá pelo BD
    }

    classScheduleValue = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220,
        },
        {
            weekday: 0,
            time_from: 920,
            time_to: 2220,
        }
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValue})

    //Consultar os dados inseridos

    //Todos os proffys 
    const selectedProffys = await db.all("SELECT * FROM proffy")

    //Todas as classes de um determinado proffy e trazer os dados do prof
    const selectClassesAndProffys = await db.all(`
        SELECT class.*, proffy.*
        FROM proffy
        JOIN class ON (class.proffy_id = proffy.id)
        WHERE class.proffy_id = 1;
    `)

    // O horário que a pessoa trabalha, por exemplo, é das 8h as 18h.
    // Nesse caso, o horário do time_from precisa ser menor ou igual ao requerido 
    // requerido: 8h / Time_from: 9h / Time_from <= Requerido / 9h <= 8h / Falso
    // requerido: 12h / Time_from: 10h / Time_from <= Requerido / 10h <= 12h / Verdadeiro
    // o time_to precisa ser acima
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `)

})