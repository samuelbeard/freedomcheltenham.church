"use client"
import Layout from "../components/Layout"
import { Tab } from "@headlessui/react"
import { songs } from "../lib/christmas-carols"
import { useEffect } from "react"

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ")
}

export default function Page() {
    return (
        <Layout title="Christmas Carols">
            <div className="container">
                <h1 className="h1">Christmas Carols</h1>
                <Tab.Group>
                    <Tab.List className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 flex-wrap xspace-x-1 rounded p-1">
                        {songs.map(song => (
                            <Tab
                                key={song.name}
                                className={({ selected }) =>
                                    classNames(
                                        "w-full h-16 col-span-1 rounded py-3 px-2 text-sm leading-5 text-black",
                                        selected
                                            ? "bg-black !text-white shadow"
                                            : "text-blue-100 hover:text-white border-2 bg-gray-100"
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
                                key={song.name}
                                className={classNames("rounded p-3")}
                            >
                                <h2 className="h3 mb-0">{song.name}</h2>
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
