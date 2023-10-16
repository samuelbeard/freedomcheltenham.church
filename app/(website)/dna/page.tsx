import Image from "next/image"
import DNAData from "lib/dna.json"

export const metadata = {
    title: "Our DNA | Freedom Church Cheltenham",
}

export default function Page() {
    return (
        <>
            <section className="section bg-black py-10">
                <div className="container">
                    <h2 className="text-center text-4xl font-bold leading-none text-white md:text-[100px]">
                        OUR
                    </h2>
                    <h1 className="m-0 text-center text-6xl font-bold uppercase leading-none text-white md:-mt-10 md:text-[250px]">
                        DNA
                    </h1>
                    <p className="para mx-auto mt-8 text-lg text-stone-200 lg:w-8/12">
                        The Freedom Church DNA are the core values of our
                        community. Like a compass they point us towards our
                        identity. We are committed to wholeheartedly practicing
                        and developing these principles in our own lives and as
                        a church, as they inspire, challenge and direct us.
                    </p>
                </div>
            </section>
            <section className="section bg-black pb-12">
                <div className="container mx-auto pb-3 pt-7 lg:w-5/6 2xl:w-4/5">
                    {DNAData.map((dna, i) => (
                        <DNACard
                            key={dna.title}
                            title={dna.title}
                            image={dna.image}
                            description={dna.description}
                            right={(i + 1) % 2 === 0}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}

interface DNACardProps {
    title: string
    image: string
    description: string
    right?: boolean
}

const DNACard = ({ title, image, description, right }: DNACardProps) => {
    return (
        <div
            className={`mx-auto flex w-full flex-col items-center rounded-lg bg-black p-5 ${
                right ? "md:flex-row-reverse" : "md:flex-row"
            } justify-between shadow`}
        >
            <div>
                <h3 className="h2 mt-0 uppercase text-brand-red">{title}</h3>
                <p className="para text-lg leading-snug text-white">
                    {description}
                </p>
            </div>
            <Image
                src={`/img/dna/${image}`}
                className="mx-auto rounded-full px-5"
                alt=""
                width="400"
                height="400"
            />
        </div>
    )
}
