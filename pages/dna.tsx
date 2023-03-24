import { NextPage } from "next"
import Image from "next/image"
import { FC } from "react"
import Layout from "../components/Layout"
import DNAData from "../lib/dna.json"

const DNA: NextPage = () => {
    return (
        <Layout title="DNA">
            <section className="section py-10 bg-black">
                <div className="container">
                    <h2 className="font-bold text-white text-[100px] leading-none text-center">
                        OUR
                    </h2>
                    <h1 className="m-0 -mt-10 text-white font-bold text-[250px] leading-none uppercase text-center">
                        DNA
                    </h1>
                    <p className="para text-stone-200 text-lg lg:w-8/12 mx-auto mt-8">
                        The Freedom Church DNA are the core values of our
                        community. Like a compass they point us towards our
                        identity. We are committed to wholeheartedly practicing
                        and developing these principles in our own lives and as
                        a church, as they inspire, challenge and direct us.
                    </p>
                </div>
            </section>
            <section className="section pb-12 bg-black">
                <div className="container lg:w-2/3 mx-auto pb-3 pt-7">
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
        </Layout>
    )
}

export default DNA

interface DNACardProps {
    title: string
    image: string
    description: string
    right?: boolean
}

const DNACard: FC<DNACardProps> = ({ title, image, description, right }) => {
    return (
        <div
            className={`mx-auto bg-black w-full rounded-lg p-5 flex items-center xflex-col ${
                right && "flex-row-reverse"
            } justify-between shadow`}
        >
            <div>
                <h3 className="h2 text-brand-red mt-0 uppercase">{title}</h3>
                <p className="para text-lg text-white leading-snug">
                    {description}
                </p>
            </div>
            <Image
                src={`/img/dna/${image}`}
                className="mx-auto px-5 rounded-full"
                alt=""
                width="400"
                height="400"
            />
        </div>
    )
}
