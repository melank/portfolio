import { Hono } from "hono"

const app = new Hono()

app.get('/', (c) => c.html('Hello, World!'))

export default app