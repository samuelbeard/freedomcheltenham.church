const WeMovedBanner = () => {
    const date = new Date()
    const closeDate = new Date("2024-04-17")

    return closeDate > date ? (
        <div className="z-10 bg-brand-yellow w-full text-brand-black text-center p-4 animate-bounce-short">
            <h1 className="text-5xl font-bold ">
                We have moved to a new location!
            </h1>
        </div>
    ) : null
}
export default WeMovedBanner
