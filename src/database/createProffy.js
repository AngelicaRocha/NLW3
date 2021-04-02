module.exports = async function(db, { proffyValue, classValue, classScheduleValue }) {
    //Inserir dados na tabela de proffys
    const insertedProffy = await db.run(`
        INSERT INTO proffy (
            name, 
            avatar, 
            whatsapp, 
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
    `)

    const proffy_id = insertedProffy.lastID

    //Inserir dados na tabela de classes

    const insertedClass = await db.run(`
            INSERT INTO class (
                subject,
                cost,
                proffy_id
            ) VALUES (
                "${classValue.subject}",
                "${classValue.cost}",
                "${proffy_id}"
            );
    `)

    const class_id = insertedClass.lastID

    //Inserir dados na tabela classSchedule
    const insertedAllClassScheduleValues = classScheduleValue.map((value) => {
            return db.run(`
                INSERT INTO class_schedule (
                    class_id,
                    weekday,
                    time_from,
                    time_to
                ) VALUES (
                    "${class_id}",
                    "${value.weekday}",
                    "${value.time_from}",
                    "${value.time_to}"
                );
            `)
    })

    //Executa todos os db.runs() da class_schedule
    await Promise.all(insertedAllClassScheduleValues)

}