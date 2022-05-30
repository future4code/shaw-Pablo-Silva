import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

type Users = {
    id: number,
    name: string,
    email: string | number,
    website: string,
    phone: number | string
}

type Posts = {
    id: number,
    title: string,
    body: string | number,
    userId: number
}

const arrayUsers: Array<Users> = [
    {
        id: 1,
        name: 'Pablo Andrade',
        email: 'pablofla@gmail.com',
        website: 'www.fufu.com.br',
        phone: '99691-2926'
    },
    {
        id: 2,
        name: 'Suzane Fonseca',
        email: 'susu@gmail.com',
        website: 'www.susu.com.br',
        phone: '96991-8964'
    },
    {
        id: 3,
        name: 'Yasmin',
        email: 'yasmin@kk.com',
        website: 'www.yaya.com.br',
        phone: '98844-2123'
    },
]

const arrayPosts: Array<Posts> = [

    {
        id: 1,
        title: 'Oi gente',
        body: 'Bom dia kk',
        userId: 1
    },
    {
        id: 2,
        title: 'Olá gente',
        body: 'Boa tarde a todos',
        userId: 2
    },
    {
        id: 3,
        title: 'Olá Labenu',
        body: 'Estamos no back uhuuuullll !!!',
        userId: 3
    }
]


app.get('/users', (req, res) => {
    res.send(arrayUsers)
})

app.get('/posts', (req, res) => {
    res.send(arrayPosts)
})

app.get('/posts/:id', (req, res) => {

    const { id } = req.params
    const userId = Number(id)

    const result = arrayPosts.filter((item) => {
        if (item.userId === userId) {
            return item
        }

    })
    res.json(result)

})