import React from "react";
import favicon from "../images/favicon.png";

export default function Footer() {
  return (
    <div className="container footer">
      <footer className="pt-4 my-md-5 pt-md-5 border-top">
        <div className="row">
          <div className="col-12 col-md">
            <img
              className="mb-2"
              src={favicon}
              alt="favicon"
              width="24"
              height="24"
            />
            <small className="d-block mb-3 text-muted">
              ©
              <a
                href="https://github.com/yumemily/EmilysFortniteShop"
                style={{ color: "teal" }}
              >
                {" "}
                Emily Yum
              </a>{" "}
              2021
            </small>
          </div>
          <div class="col-6 col-md">
            <h5>Features</h5>
            <ul class="list-unstyled text-small">
              <li>
                <a class="text-muted" href="#">
                  Cool stuff
                </a>
              </li>
              <li>
                <a class="text-muted" href="#">
                  Random feature
                </a>
              </li>
              <li>
                <a class="text-muted" href="#">
                  Team feature
                </a>
              </li>
              <li>
                <a class="text-muted" href="#">
                  Stuff for developers
                </a>
              </li>
              <li>
                <a class="text-muted" href="#">
                  Another one
                </a>
              </li>
              <li>
                <a class="text-muted" href="#">
                  Last time
                </a>
              </li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>Resources</h5>
            <ul class="list-unstyled text-small">
              <li>
                <a class="text-muted" href="#">
                  Resource
                </a>
              </li>
              <li>
                <a class="text-muted" href="#">
                  Resource name
                </a>
              </li>
              <li>
                <a class="text-muted" href="#">
                  Another resource
                </a>
              </li>
              <li>
                <a class="text-muted" href="#">
                  Final resource
                </a>
              </li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>About</h5>
            <ul class="list-unstyled text-small">
              <li>
                <a class="text-muted" href="#">
                  Team
                </a>
              </li>
              <li>
                <a class="text-muted" href="#">
                  Locations
                </a>
              </li>
              <li>
                <a class="text-muted" href="#">
                  Privacy
                </a>
              </li>
              <li>
                <a class="text-muted" href="#">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
