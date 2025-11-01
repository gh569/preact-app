// @ts-nocheck
import Test from "./test.jsx";
import { Link } from "preact-router";

export default function () {
  return (
    <div>
      <h1 className="h1">about</h1>
      <br />
      <p>
        <Link href="/test">Test</Link>
      </p>
      <style jsx>
        {`
          .h1 {
            color: blue;
          }
        `}
      </style>
    </div>
  );
}
