export const metadata = {
  title: "Giving",
  description: "Give to Freedom Church Cheltenham",
}

export default function Page() {
  return (
    <>
      <section className="section mt-5">
        <h1 className="h1 text-6xl">Giving</h1>
      </section>
      <div className="section py-10">
        <div className="rounded bg-gray-100 p-10 lg:w-1/2">
          <h2 className="h2">BANK TRANSFER (UK)</h2>
          <p className="para">Make a payment direct to our bank account</p>
          <p className="para">
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
          <p className="para">
            You can also use these details to arrange a regular standing order
            through internet or telephone banking, or at your local branch.
          </p>
        </div>
      </div>
    </>
  )
}
