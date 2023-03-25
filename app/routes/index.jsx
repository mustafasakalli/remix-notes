import { Link } from "@remix-run/react";

import homeStyles from "../styles/home.css"

export default function Index() {
  return (
    <main id="content">
      <h1>Keep track of your notes</h1>
      <p>Never lose your notes again</p>
      <p id="cta">
        <Link to="/notes">Try Now</Link>
      </p>
    </main>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: homeStyles }];
}
