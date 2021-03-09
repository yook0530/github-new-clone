import React from "react";

const Repository = () => {
  return (
    <div className="repository">
      <div className="owner-reponame float-left">
        <dl className="form-group float-left mt-1">
          <dt className="form-group-header">
            <label>Owner *</label>
          </dt>
          <dd>
            <details className="details float-left">
              <summary className="btn btn-details">yook0530</summary>
            </details>
          </dd>
        </dl>
        <span class="float-left mt-1 pt-4 mx-2 f2">/</span>
        <dl className="form-group float-left mt-1">
          <dt className="input-label">
            <label>Repository Name *</label>
          </dt>
          <dd>
            <input className="form-control"></input>
          </dd>
        </dl>
      </div>
    </div>
  );
};

export default Repository;
