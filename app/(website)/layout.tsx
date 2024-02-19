import Header from "components/Header"
import Footer from "../../components/Footer"

export default function ({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-brand-beige">
            <Header background={"red"} />
            {children}
            <Footer />
        </div>
    )
}
