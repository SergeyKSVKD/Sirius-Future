import { NextResponse } from "next/server";

const validUsers = [
    {
        email: 'korben1@test.ru',
        name: 'Korben_1',
        password: '12345',
        avatar: '/images/korben.jpg'
    },
    {
        email: 'korben2@test.ru',
        name: 'Korben_2',
        password: '12345',
        avatar: '/images/korben.jpg'
    },
]

export async function POST(request: Request) {
    const body = await request.json()
    if (body.email) {
        const user = validUsers.find(item => item.email === body.email)
        if (!user) {
            return NextResponse.json({ status: "Пользователь не найден" })
        }
        else {
            if (user.password === body.password) {
                return NextResponse.json({ status: 'успех', name: user.name, avatar: user.avatar })
            }
            else return NextResponse.json({ status: 'Неправильный пароль' })
        }
    }
}