import { NextPage } from "next"
import Image from "next/image"
import Layout from "../components/Layout"

const Midweeks: NextPage = () => {
    return (
        <Layout title="Midweeks">
            <div className="container mt-12 mb-16">
                <div className="md:w-8/12 lg:w-1/2">
                    <h1 className="h1">Midweeks</h1>

                    <p className="para">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Velit deserunt consequuntur distinctio nihil ex maiores
                        aliquid error, non debitis! Ratione saepe quia
                        perferendis eius laboriosam. Iusto libero voluptatum
                        laborum maxime?
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default Midweeks
