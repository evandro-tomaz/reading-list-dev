import {NextResponse} from "next/server";
import { fakerPT_BR as faker } from "@faker-js/faker"

export function GET() {
    const data = [...new Array(10)].map((_, i) => ({
        id: faker.string.uuid(),
        title: faker.lorem.words(),
        author: faker.person.fullName(),
        url: faker.internet.url(),
        cover: faker.image.urlLoremFlickr({
            width: 200,
            height: 300,
            category: "book"
        }),
        progress: Math.floor(Math.random() * 100)
    }))

    return NextResponse.json(data)
}