import React from "react";
import { useState } from "react";

const Permission = () => {
  const [isPublic, setPublic] = useState(false);
  const [isPrivate, setPrivate] = useState(false);

  const publicClick = () => {
    if (isPrivate) {
      setPrivate(false);
    }
    setPublic(true);
  };
  const privateClick = () => {
    if (isPublic) {
      setPublic(false);
    }
    setPrivate(true);
  };

  return (
    <form className="permission-field">
      <p className="my-2">
        Great repository names are short and memorable. Need inspiration? How
        about <strong class="repo-suggestion">cuddly-palm-tree</strong>?
      </p>
      <dl className="form-group">
        <dt className="input-label">
          <label className="description">
            Description
            <span className="optional">(optional)</span>
          </label>
        </dt>
        <dd>
          <input className="form-control long" />
        </dd>
      </dl>
      <hr aria-hidden="true"></hr>
      <div className="form-checkbox">
        <label className="privacy">
          <input
            type="radio"
            value="0"
            onClick={publicClick}
            checked={isPublic}
          ></input>
          <svg
            height="32"
            class="octicon octicon-repo float-left mt-1 mr-2"
            viewBox="0 0 24 24"
            version="1.1"
            width="32"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M3 2.75A2.75 2.75 0 015.75 0h14.5a.75.75 0 01.75.75v20.5a.75.75 0 01-.75.75h-6a.75.75 0 010-1.5h5.25v-4H6A1.5 1.5 0 004.5 18v.75c0 .716.43 1.334 1.05 1.605a.75.75 0 01-.6 1.374A3.25 3.25 0 013 18.75v-16zM19.5 1.5V15H6c-.546 0-1.059.146-1.5.401V2.75c0-.69.56-1.25 1.25-1.25H19.5z"
            ></path>
            <path d="M7 18.25a.25.25 0 01.25-.25h5a.25.25 0 01.25.25v5.01a.25.25 0 01-.397.201l-2.206-1.604a.25.25 0 00-.294 0L7.397 23.46a.25.25 0 01-.397-.2v-5.01z"></path>
          </svg>
          Public
          {/* <span className="public-description"> */}
          <p className="note">
            Anyone on the internet can see this repository. You choose who can
            commit.
          </p>
          {/* </span> */}
        </label>
      </div>
      <div className="form-checkbox form-private">
        <label className="privacy">
          <input
            type="radio"
            onClick={privateClick}
            checked={isPrivate}
          ></input>
          <svg
            height="32"
            class="octicon octicon-lock color-private-icon float-left mt-1 mr-2"
            viewBox="0 0 24 24"
            version="1.1"
            width="32"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M6 9V7.25C6 3.845 8.503 1 12 1s6 2.845 6 6.25V9h.5a2.5 2.5 0 012.5 2.5v8a2.5 2.5 0 01-2.5 2.5h-13A2.5 2.5 0 013 19.5v-8A2.5 2.5 0 015.5 9H6zm1.5-1.75C7.5 4.58 9.422 2.5 12 2.5c2.578 0 4.5 2.08 4.5 4.75V9h-9V7.25zm-3 4.25a1 1 0 011-1h13a1 1 0 011 1v8a1 1 0 01-1 1h-13a1 1 0 01-1-1v-8z"
            ></path>
          </svg>
          Private
          {/* <span className="private-description"> */}
          <p className="note">
            You choose who can see and commit to this repository.
          </p>
          {/* </span> */}
        </label>
      </div>
      <div className="auto-init-options">
        <hr aria-hidden="true"></hr>
        <h3 className="h5">Initialize this repository with:</h3>
        <p className="color-text-secondary">
          Skip this step if you're importing an existing repository.
        </p>
        <div className="form-checkbox mt-0 mb-3">
          <input type="checkbox"></input>
          <label className="check-description">Add a README file</label>
          <span className="note">
            This is where you can write a long description for your project.
            <a href="https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/about-readmes">
              Learn more.
            </a>
          </span>
        </div>
        <div className="form-checkbox mt-0 mb-3">
          <input type="checkbox"></input>
          <label className="check-description">Add .gitignore</label>
          <span className="note">
            Choose which files not to track from a list of templates.
            <a href="https://docs.github.com/en/github/using-git/ignoring-files">
              Learn more.
            </a>
          </span>
        </div>
        <div className="form-checkbox mt-0 mb-3">
          <input type="checkbox"></input>
          <label className="check-description">Choose a license</label>
          <span className="note">
            A license tells others what they can and can't do with your code.
            <a href="https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/licensing-a-repository">
              Learn more.
            </a>
          </span>
        </div>
      </div>
    </form>
  );
};

export default Permission;
