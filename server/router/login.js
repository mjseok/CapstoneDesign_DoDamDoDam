const router = require('express').Router();
const dbcon = require('../db/conn');


const connectDB = async () => {
    let conn
    try{
        conn = await dbcon.getConnection()
        await conn.query('use Capstone;')
        return conn;
    }catch (e){
        //console.log(e)
    }
}

router.post('/register', (req,res)=>{

    let jobs = req.body.jobs
    const values = req.body.values

    const query = 'INSERT INTO teacher(id, password, name, school, grade, class) VALUES (?,?,?,?,?,?)'
    const params = [values.id, values.password, values.name, values.school, values.grade, values.class]

    connectDB().then(async (conn) => {
        try {
            await conn.query(query, params)
            res.json({state : 200})
        }catch (e){
            if(e.errno === 1062){
                res.json( { err : 'ID가 중복되었습니다.' } )
            }
        }

        return conn
    }).then((conn) => {
        conn.end()
    })

});

router.post('/login', (req,res)=>{

    const values = req.body.values
    connectDB().then(async (conn) => {
        conn.query("SELECT * FROM teacher WHERE id=?",values.id).then( rows => {
            try{
                console.log(rows[0].id)
                if(rows[0].password === values.password) res.json({state : 200})
                else res.json({err : 'PW 가 잘못되었습니다.'})
            }catch (e) {
                if (e instanceof TypeError) res.json({err : 'ID 가 잘못되었습니다'})
            }
        })
        return conn
    }).then((conn) => {
        conn.end()
    })

});

module.exports = router;
