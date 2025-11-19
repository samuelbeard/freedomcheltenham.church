import Link from "next/link"

export const metadata = {
  title: "Giving",
  description: "Give to Freedom Church Cheltenham",
}

export default function Page() {
  return (
      <div className="my-4 space-y-4">
        <section className="section mt-5">
          <h1 className="text-6xl">Giving</h1>
        </section>
        <section className="section">
          <Link
            href="/donate"
            className="bg-brand-red text-white px-10 py-5 text-2xl"
          >
            Give Online Here
          </Link>
        </section>
        <div className="section pt-2">
          <div className="rounded bg-gray-100 p-10 lg:w-1/2">
            <h3>
              BANK TRANSFER (UK)
            </h3>
            <p>Make a payment direct to our bank account</p>
            <p>
              Account name:{" "}
              <span className="font-bold">Freedom Church Cheltenham</span>
              <br />
              Sort code:{" "}
              <span className="font-bold">
                {process.env.NEXT_PUBLIC_BANK_SORT_CODE}
              </span>
              <br />
              Account number:{" "}
              <span className="font-bold">
                {process.env.NEXT_PUBLIC_BANK_ACCOUNT_NUMBER}
              </span>
            </p>
            <p>
              You can also use these details to arrange a regular standing order
              through internet or telephone banking, or at your local branch.
            </p>
          </div>
        </div>
      </div>
  )
}
