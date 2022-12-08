"use client"
import Layout from "../components/Layout"
import { Tab } from "@headlessui/react"
import { Suspense } from "react"
// import { songs } from "../lib/christmas-carols"
// import { useEffect } from "react"

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ")
}

const songs = [
    {
        name: "Angels we have Heard on High",
        lyrics: `
Angels we have on heard high
Sweetly singing o'er the plains
And the mountains in reply
Echoing their joyous strains
Gloria, in excelsis Deo

Come to Bethlehem and see
Christ, whose birth the angels sing
Come adore on bended knee
Christ the Lord the newborn King
Gloria, in excelsis Deo
Gloria, in excelsis Deo

See Him in a manger laid
Whom the choirs of angels praise
Mary, Joseph, lend your aid
While our hearts in love, we raise
Gloria, in excelsis Deo
Gloria, in excelsis Deo
            `,
    },
    {
        name: "Hark the Herald",
        lyrics: `
Hark! The herald angels sing
"Glory to the newborn King
Peace on earth and mercy mild
God and sinners reconciled"

Joyful all ye nations rise
Join the triumph of the skies
With angelic host proclaim
"Christ is born in Bethlehem"

Hark! The herald angels sing
"Glory to the newborn King"

Christ by highest Heaven adored
Christ, the everlasting Lord
Late in time behold He'll come
Offspring of a Virgin's womb

Veiled in flesh the Godhead see
Hail the incarnate deity
Pleased as man with man to dwell
Jesus, our Emmanuel

Hark! The herald angels sing
"Glory to the newborn King"

Oh, glory in the highest
Our God has come to save us
Emmanuel is with us

Oh, hail the Heaven born Prince of Peace
Hail the Son of Righteousness
Light and life to all He brings
Risen with healing in His wings

Mild He lays His glory by
Born that man no more may die
Born to raise the sons of earth
Born to give them second birth

Hark! The herald angels sing
"Glory to the newborn King"
            `,
    },
    {
        name: "Joy to the World",
        lyrics: `
You are my joy, joy, joy

Joy to the world the Lord is come
Let earth receive her King
Let every heart prepare Him room
And heaven and nature sing
And heaven and nature sing
And heaven, and heaven and nature sing

joy, joy, joy
joy, joy, joy
You are my joy, joy, joy

He rules the world with truth and grace
And makes the nations prove
The glories of His righteousness
And wonders of His love
Oh the wonders of His love
Oh the wonders and wonders of His love

You are my joy
You are my joy
Yes, You are
You are my joy

Joy to the world the Lord is come
Let earth receive her King
Let every heart prepare Him room
And heaven and nature sing
And heaven and nature sing
And heaven, and heaven and nature sing

Joy joy joy
You are my joy
Joy joy joy
You are my joy
You are my joy
            `,
    },
    {
        name: "O Come All Ye Faithful",
        lyrics: `
O Come All Ye Faithful
Joyful and triumphant
O come ye, O come ye to Bethlehem
Come and behold Him
Born the King of Angels

O come, let us adore Him
O come, let us adore Him
O come, let us adore Him
Christ the Lord

Sing, choirs of angels
Sing in exaltation
Sing all ye citizens of Heaven above
Glory to God, in the highest

O come, let us adore Him
O come, let us adore Him
O come, let us adore Him
Christ the Lord

Oh, yes, Lord, we greet Thee
Born this happy morning
Jesus to Thee be all Glory
Word of the Father, now in flesh appearing

O come, let us adore Him
O come, let us adore Him
O come, let us adore Him
Christ the Lord

O come, O come adore Him
Gather round the throne before him
O come, O come adore Him
Christ the Lord

O come, O come adore Him
Gather round the throne before him
O come, O come adore Him
Christ the Lord

Christ the Lord
Christ the Lord

O come let us adore Him
O come let us adore Him
O come let us adore Him
Christ the Lord
            `,
    },
    {
        name: "The First Noel",
        lyrics: `
The First Noel the Angels did say
Was to certain poor shepherds in fields as they lay
In fields where they lay keeping their sheep
On a cold winter's night that was so deep

Noel Noel Noel Noel
Born is the King of Israel!

They looked up and saw a star
Shining in the East beyond them far
And to the earth it gave great light
And so it continued both day and night

Noel Noel Noel Noel
Born is the King of Israel!

And by the light of that same star
Three Wise men came from country far
To seek for a King was their intent
And to follow the star wherever it went

Noel Noel Noel Noel
Born is the King of Israel!

This star drew nigh to the northwest
O'er Bethlehem it took it's rest
And there it did both Pause and stay
Right o'er the place where Jesus lay

Noel Noel Noel Noel
Born is the King of Israel!

Then let us all with one accord
Sing praises to our heavenly Lord
That hath made Heaven and earth of nought
And with his blood mankind hath bought

Noel Noel Noel Noel
Born is the King of Israel!
Noel Noel Noel Noel
Born is the King
Born is the King
Born is the King of Israel!
        `,
    },
    {
        name: "Oh Holy Night",
        lyrics: `
We fall to our knees
Lord we adore You
With angels above
We bow down before You
The light of Your love
Shines bright on this holy night
Your love shines bright
On this holy night

Oh holy night
The stars are brightly shining
It is the night
Of our dear Savior's birth

Long lay the world
In sin and error pining
Till He appeared
And the soul felt its worth

A thrill of hope
The weary world rejoices
For yonder breaks
A new and glorious morn

Fall on your knees
Oh hear the angel voices
Oh night divine
Oh night when Christ was born
Oh night divine
Oh night divine

A thrill of hope
The weary world rejoices
For yonder breaks
A new and glorious morn

Fall on your knees
Oh hear the angel voices
Oh night divine
Oh night when Christ was born
Oh night divine
Oh night divine
        `,
    },
    {
        name: "Jingle Bell Rock",
        lyrics: `
Oh Jingle bell, jingle bell, jingle bell rock
Jingle bells swing and jingle bells ring
Snowing and blowing up bushels of fun
Now the jingle hop has begun

Jingle bell, jingle bell, jingle bell rock
Jingle bells chime in jingle bell time
Dancing and prancing in Jingle Bell Square
In the frosty air.

What a bright time, it's the right time
To rock the night away
Jingle bell time is a swell time
To go gliding in a one-horse sleigh

Oh giddy-up jingle horse, pick up your feet
Jingle around the clock
Oh mix and a-mingle in the jingling feet
That's the jingle bell rock

What a bright time, it's the right time
To rock the night away
Jingle bell time is a swell time
To go gliding in a one-horse sleigh

Oh giddy-up jingle horse, pick up your feet
Jingle around the clock
Oh mix and a-mingle in the jingling feet
That's the jingle bell
That's the jingle bell,
That's the jingle bell rock.
        `,
    },
]

export default function Page() {
    return (
        <Layout title="Christmas Carols">
            <Suspense>
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
            </Suspense>
        </Layout>
    )
}
