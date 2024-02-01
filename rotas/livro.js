const {Router} = require("express")
const {getLivros} = require("../controladores/livro")

const router = Router()

router.get('/', getLivros)

router.post('/',(req, res) => {
    res.send("post")
})

router.patch('/',(req, res) => {
    res.send("patch")
})

router.delete('/',(req, res) => {
    res.send("delete")
})

module.exports = router