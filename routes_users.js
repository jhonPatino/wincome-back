const express = require('express')
const routes = express.Router()

routes.get('/getusers', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM Usuarios', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/postuser', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO Usuarios set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)
            res.send('user inserted')
        })
    })
})

routes.delete('/deleteuser/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM Usuarios WHERE usuario_id = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('user deleted!')
        })
    })
})

routes.put('/updateuser/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE Usuarios set ? WHERE usuario_id = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('user updated!')
        })
    })
})

module.exports = routes