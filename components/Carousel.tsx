import { useCallback, useEffect, useRef, useState } from "react"

interface Props {
    direction: "left" | "right"
    speed: number
    totalImages: number
    carouselNumber: number
}

const Carousel = ({ direction, speed, totalImages, carouselNumber }: Props) => {
    const children = [...Array(totalImages)].map((el, i) => (
        <img
            src={`/img/carousel-${carouselNumber}/img-${i + 1}.jpg`}
            className="mx-5 h-80 rounded shadow"
            alt=""
        />
    ))

    const [looperInstances, setLooperInstances] = useState(1)
    const outerRef = useRef<HTMLDivElement>(null)
    const innerRef = useRef<HTMLDivElement>(null)

    const setupInstances = useCallback(() => {
        if (!innerRef?.current || !outerRef?.current) return

        const { width } = innerRef.current.getBoundingClientRect()

        const { width: parentWidth } = outerRef.current.getBoundingClientRect()

        const instanceWidth = width / innerRef.current.children.length

        if (width < parentWidth + instanceWidth) {
            setLooperInstances(looperInstances + Math.ceil(parentWidth / width))
        }
    }, [looperInstances])

    useEffect(() => {
        setupInstances()
    }, [])

    return (
        <div className="looper" ref={outerRef}>
            <div className="looper__innerList" ref={innerRef}>
                {[...Array(looperInstances)].map((_, ind) => (
                    <div
                        key={ind}
                        className="looper__listInstance"
                        style={{
                            animationDuration: `${speed}s`,
                            animationDirection:
                                direction === "right" ? "reverse" : "normal",
                        }}
                    >
                        {children}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Carousel
