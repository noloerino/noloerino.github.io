import "./App.css";

function App() {
  return (
    <>
      <h1>Jonathan Shi</h1>
      <i>website very under construction! please ignore the vite placeholder favicon, weird spacing, and insufficient text contrasts</i>
      <h2>About</h2>
      <p>
        I'm Jonathan Shi (he/him), and I do software. I like building systems that are performant, usable, and maintainable.
      </p>
      <p>
        I graduated with a B.S. in EECS from UC Berkeley in 2021 and my M.S. in 2022. I'm currently employed as a software engineer at Snowflake, working on the Snowpark team.
      </p>
      <h3>Contact</h3>
      <p>(not yet set up)</p>
      <h2>Portfolio</h2>
      <h3>Publications</h3>
      <p>
        M.S. thesis:{" "}
        <a href="https://www2.eecs.berkeley.edu/Pubs/TechRpts/2022/EECS-2022-149.html">
          Lifting Hardware Models from Implementations for Verification
        </a>
      </p>
      <h3>Open-Source</h3>
      <p>
        <i>
          <a href="https://github.com/noloerino">Personal account</a>
        </i>
        {" "}
        <i>
          <a href="https://github.com/sfc-gh-joshi">Work account (Snowflake)</a>
        </i>
      </p>
      <p>
        <b>Maintainer: <a href="https://github.com/modin-project/modin">Modin</a></b>, a drop-in replacement
        for pandas with distributed computation backends.
      </p>
      <p>
        <b>Contributor: <a href="https://github.com/snowflakedb/snowpark-python">Snowpark Python</a>{" "}
        and Snowpark pandas</b>, APIs for interfacing with and processing data in Snowflake.
      </p>
      <p>
        <b>Lead maintainer: [FFXIV community tool with ~2000 monthly users]</b> I prefer to keep my
        real-life and in-game personas separate so I won't name it directly here, but if you reach out
        directly I'm happy to chat in more detail about it!
      </p>
      <h3>Music</h3>
      <p>
        I'm an amateur alto and soprano saxophonist! I spent several years with <a href="https://linktr.ee/tioatcal">The Intermission{" "}
        Orchestra @ Berkeley</a> in a variety of positions between Music Director, conductor, arranger,
        section leader, and performer.
      </p>
      <p>
        Here's a selection of pieces where I featured as a soloist:
      </p>
      <p>(will list out when I get around to it)</p>
      <p>
        ...and some pieces I arranged/co-arranged:
      </p>
      <p>(see above)</p>
      <p>
        You can find some of my saxophone quartet arrangements on my <a href="https://musescore.com/user/37219703">Musescore profile</a>.
      </p>
      <h3>Previous Teaching Positions</h3>
      <ul>
        {/* TODO dedent li elements */}
        <li>Co-instructor, Summer 2022; and TA, Fall 2021 + Spring 2022: CS 61C (Great Ideas in Computer Architecture)</li>
        <li>TA, Summer 2021: CS 162 (Operating Systems)</li>
      </ul>
      <h2>
      Subheader idk where to put
      </h2>
      <h3>Webcomics I Like</h3>
      <p>
        <a href="https://www.qwantz.com/">Dinosaur Comics</a>,{" "} 
        <a href="https://xkcd.com/">xkcd</a>,{" "}
        <a href="https://nedroid.com/">Nedroid</a>
      </p>
    </>
  );
}

export default App;
