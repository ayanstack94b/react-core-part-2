import { useState } from "react"

export default function Batsman() {
    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0)

    const handleSingles = () => {
        let updatedRuns = runs + 1;

        setRuns(updatedRuns)
    }

    const handleFours = () => {
        const fours = runs + 4;
        setRuns(fours)
    }

    const handleSix = () => {
        const six = runs + 6;
        const updatedSix = sixes + 1;
        setSixes(updatedSix)
        setRuns(six)
    }

    return (
        <div>
            <h3>Player: Bangla batsman</h3>
            <p>Six: {sixes}</p>
            {
                runs > 50 && <p>You score: 50</p>
            }
            <h1>Score: {runs}</h1>
            <button onClick={handleSingles}>Singles</button>
            <button onClick={handleFours}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}