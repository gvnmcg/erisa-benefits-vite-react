export function Nav() {
  return (
    <nav class='navbar navbar-expand-lg bg-light'>
      <div class='container-fluid'>
        <button
          class='navbar-toggler ms-auto'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarNav'>
          <ul class='navbar-nav'>
            <li class='nav-item'>
              <a class='nav-link' href='index.html'>
                Home
              </a>
            </li>
            <li class='nav-item'>
              <a
                class='nav-link'
                href='https://healthcenters.proactive-md.com/state-of-new-mexico/stay-well-health-center-santa-fe/'
              >
                Stay Well Health Center
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='employeePortal.html'>
                Employee Resources
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='employerResources.html'>
                Employer Resources
              </a>
            </li>
            <li class='nav-item'>
              <a href='employeePortal.html' class='nav-link'>
                Enroll Here
              </a>
            </li>
            <li class='nav-item'>
              <a href='#contactSection' class='nav-link'>
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
