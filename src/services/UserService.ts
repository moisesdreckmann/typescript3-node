const db = [
    {
        name: '1',
        email: '2@gmail.com'
    }
];

export class UserService {
    createUser = (name: string, email: string) => {
        const user = {
            name,
            email
        }
        db.push(user)
        console.log('Db atualizado: ', db)
    }

    getUsers = () => {
        return db
    }
}
