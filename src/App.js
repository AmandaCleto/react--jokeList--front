import React from "react"

import Joke from "./Joke"
import jokesData from "./jokesData"
import './style.css';

function App() {
    const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)

    return (
        <div>
            <h1>Piadas.......</h1>
            {jokeComponents}
        </div>
    )
}

export default App