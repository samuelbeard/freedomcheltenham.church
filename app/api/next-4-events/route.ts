export const dynamic = "force-static"

interface Event {
  identifier: string
  name: string
  datetime_start: string
  datetime_end: string
  location: {
    name: string
  }
  images: {
    md: {
      url: string
    }
  }
  signup_options: {
    tickets: {
      url: string
    }
  }
}

export async function GET() {
  const res = await fetch(
    "https://freedomcheltenham.churchsuite.com/embed/calendar/json?num_results=4",
  )
  const data = await res.json()

  return Response.json({ data })
}
