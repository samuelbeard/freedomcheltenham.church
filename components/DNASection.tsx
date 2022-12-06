import Image from "next/image"
import { FC } from "react"
import DNAData from "../lib/dna.json"

const DNASection: FC = () => {
    return (
        <>
            <section className="section mt-6">
                <div className="container">
                    <h1 className="h1">Our DNA</h1>
                    <p className="para text-lg lg:w-8/12">
                        The Freedom Church DNA are the core values of our
                        community. Like a compass they point us towards our
                        identity. We are committed to wholeheartedly practicing
                        and developing these principles in our own lives and as
                        a church, as they inspire, challenge and direct us.
                    </p>
                </div>
            </section>
            <section className="section mb-12">
                <div className="container mx-auto pb-3 pt-7 grid grid-cols-6 gap-6">
                    {DNAData.map(dna => (
                        <DNACard
                            key={dna.title}
                            title={dna.title}
                            image={dna.image}
                            description={dna.description}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}

export default DNASection

interface DNACardProps {
    title: string
    image: string
    description: string
}

const DNACard: FC<DNACardProps> = ({ title, image, description }) => {
    return (
        <div
            className={`col-span-6 sm:col-span-3 lg:col-span-2 mx-auto bg-black w-full rounded-lg p-5 flex flex-col justify-between shadow`}
        >
            <div>
                <h3 className="h3 text-white mt-0">{title}</h3>
                <p className="para text-lg text-white leading-snug">
                    {description}
                </p>
            </div>
            {/* <img src={`/img/dna/${image}`} alt="" /> */}
            <Image src={`/img/dna/${image}`} alt="" width="500" height="500" />
        </div>
    )
}
