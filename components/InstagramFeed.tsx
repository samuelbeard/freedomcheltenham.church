import { useEffect, useState } from "react"

interface IInstagramFeed {
    permalink: string
    media_type: string
    media_url: string
}

const InstagramFeed = () => {
    const [data, setData] = useState<IInstagramFeed[]>()

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `https://graph.instagram.com/17841401594020697/media?fields=media_count,media_type,permalink,media_url,caption&&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN}`
            )
            const json = await response.json()

            setData(json.data)
        }

        fetchData()
    }, [])

    return (
        <>
            <div>
                <h1 className="h1 text-white mb-10 text-center">
                    Latest from Instagram
                </h1>
            </div>
            <div className="flex justify-around items-center">
                {data &&
                    data.slice(0, 5).map(item => {
                        if (item.media_type === "IMAGE") {
                            return (
                                <img
                                    key={item.permalink}
                                    className="w-44 xh-44"
                                    src={item.media_url}
                                    alt=""
                                />
                            )
                        }

                        if (item.media_type === "CAROUSEL_ALBUM") {
                            return (
                                <img
                                    key={item.permalink}
                                    className="w-44 xh-44"
                                    src={item.media_url}
                                    alt=""
                                />
                            )
                        }

                        if (item.media_type === "VIDEO") {
                            return (
                                <video
                                    key={item.permalink}
                                    className="w-44 xh-44"
                                    controls
                                >
                                    <source
                                        src={item.media_url}
                                        type="video/mp4"
                                    />
                                </video>
                            )
                        }
                    })}
            </div>
        </>
    )
}

export default InstagramFeed
