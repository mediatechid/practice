import { Outlet, Link } from "react-router-dom";

const JobsLayout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/jobs/1">Job 1</Link>
          </li>
          <li>
            <Link to="/jobs/2">Job 2</Link>
          </li>
          <li>
            <Link to="/jobs/new">New Job</Link>
          </li>
        </ul>
      </nav>
      <hr/>
      <Outlet />

    </>
  )
};

export default JobsLayout;