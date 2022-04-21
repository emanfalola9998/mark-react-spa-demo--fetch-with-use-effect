import { useEffect, useState } from "react";

// interface quote {
//   id: number;
//   type: string;
//   setup: string;
//   punchline: string;
// }

interface kanyeWestQuotes {
  quote: string
}

function App() {
  const [quote, setquote] = useState<kanyeWestQuotes>();

  useEffect(() => {
    const fetchquote = async () => {
      const response = await fetch(
        "https://api.kanye.rest/"
      );
      const jsonBody: kanyeWestQuotes = await response.json();
      setquote(jsonBody);
    };

    fetchquote();
  }, []);

  // useEffect(() => {
  //   fetch("https://quotestemp.neillbogie.repl.co/quotes/general/random")
  //     .then(response => response.json())
  //     .then((jsonBody: quote[]) => setquote(jsonBody[0]));
  // }, [])

  return (
    <>
      <h1>quote app</h1>
      {quote && (
        // This is a conditional rendering strategy
        //  using 'short-circuiting': if the left-hand
        //  side of an && is false, then JavaScript
        //  doesn't bother to evaluate the right-hand
        //  side (since the overall expression is false
        //  regardless)
        //
        // Exploiting that feature to conditional render JSX!
        <>
          <p>
            <b>{quote.quote}</b>
          </p>
          <p>
            {/* <i>{quote.punchline}</i> */}
          </p>
        </>
      )}
    </>
  );
}

export default App;
