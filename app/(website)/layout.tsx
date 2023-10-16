import Header from "components/Header"

export default function ({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Header background={"red"} />
            {children}
        </div>
    )
}
