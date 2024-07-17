import Link from "next/link"

export const metadata = {
  title: "Calendar",
}

export default function Page() {
  return (
    <>
      <div className="container mx-auto p-0 lg:p-2">
        <iframe
          height="800"
          src="https://freedom.churchsuite.com/embed/calendar?preview=true&body_bgcolor=F5F6F7&categories=&show_categories=1&sites=3"
          style={{ borderWidth: 0 }}
          width="100%"
          className="focus:outline-none"
        ></iframe>
      </div>
      <div className="container mx-auto text-center py-10">
        <Link
          href="/calendar-subscribe"
          className="bg-brand-red text-white px-5 py-3 rounded-lg hover:bg-black transition-all"
        >
          Subscribe to the Calendar
        </Link>
      </div>
    </>
  )
}
