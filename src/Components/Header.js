import React from "react";

const Header = () => {
  return (
    <div className="Header">
      <h1 className="Subhead-heading"> Create a new repository </h1>
      <div className="Subhead-description">
        <p>
          A repository contains all project files, including the revision
          history. Already have a project repository elsewhere?
        </p>
        <a className="Import" href="https://github.com/new">
          Import a repository.
        </a>
      </div>
    </div>
  );
};

export default Header;
