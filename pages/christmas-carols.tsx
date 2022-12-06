import { useState } from "react"
import Layout from "../components/Layout"
import { Tab } from "@headlessui/react"

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ")
}

export default function Page() {
    const songs = [
        {
            name: "Angels we have Heard on High",
            lyrics: `
                Angels we have heard on high
                Sweetly singing o'er the plains
                And the mountains in reply
                Echoing their joyous strains

                Angels we have heard on high
                Sweetly, sweetly through the night
                And the mountains in reply
                Echoing their brief delight

                Gloria, in excelsis Deo
                Gloria, in excelsis Deo

                Shepherds, why this jubilee?
                Why your joyous strains prolong?
                What the gladsome tidings be
                Which inspire your heavenly song?

                Gloria, in excelsis Deo
                Gloria, in excelsis Deo

                Come to Bethlehem and see
                Him whose birth the angels sing,
                Come, adore on bended knee,
                Christ the Lord, the newborn King.
                
                Gloria, in excelsis Deo
            `,
        },
        {
            name: "Joy to the world",
            lyrics: `
                Lyrics
                lyrics
                lyrics
            `,
        },
    ]

    return (
        <Layout title="Christmas Carols">
            <div className="container">
                <h1>Christmas Carols</h1>
                <Tab.Group>
                    <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                        {songs.map(song => (
                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                        "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                                        "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                                        selected
                                            ? "bg-white shadow"
                                            : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                                    )
                                }
                            >
                                {song.name}
                            </Tab>
                        ))}
                    </Tab.List>
                    <Tab.Panels className="mt-2">
                        {songs.map(song => (
                            <Tab.Panel
                                className={classNames(
                                    "rounded p-3",
                                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                                )}
                            >
                                <p
                                    className="whitespace-pre-wrap"
                                    dangerouslySetInnerHTML={{
                                        __html: song.lyrics,
                                    }}
                                />
                            </Tab.Panel>
                        ))}
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </Layout>
    )
}
