class UI {
  constructor() {
    this.profile = document.getElementById('profile')
  }
  showProfile(user) {
    this.clearAlert();
    // console.log(user)
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
    <div class="row">
    <div class="col-md-3">
      <img class="img-fluid mb-2" src="${user.avatar_url}">
      <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">Profile</a>
    </div>
    <div class="col-md-9">
      <span class="mb-1 badge badge-primary">Public Repos: ${user.public_repos}</span>
      <span class="mb-1 badge badge-secondary">Public Gists: ${user.public_gists}</span>
      <span class="mb-1 badge badge-success">Public Followers: ${user.public_followers}</span>
      <span class="mb-1 badge badge-info">Public Following: ${user.public_following}</span>
      <br><br>
      <ul class="list-group">
        <li class="list-group-item">
        Company: ${user.company}
        </li>
        <li class="list-group-item">
        Blog: ${user.blog}
        </li>
        <li class="list-group-item">
        Location: ${user.location}
        </li>
        <li class="list-group-item">
        Member Since: ${user.created_at}
        </li>
      </ul>
    </div>    
    </div>
    </div>
    <h3 class="page-heading mb-4">Latest Repos</h3>
    <div id="repos"></div>

    `;
  }
  showRepos(repos) {
    let output = ''
    repos.forEach((repo) => {
      output +=
        `
      <div class="card card-body mb-2">
      <div class="row">
      
      <div class="col-md-6"><a href="${repo.html_url}" target="_blank">${repo.name}</div>
      <div class="col-md-6">
      <span class="mb-1 badge badge-primary">Stars: ${repo.stargazers_count}</span>
      <span class="mb-1 badge badge-secondary">Watchers: ${repo.watchers_count}</span>
      <span class="mb-1 badge badge-success">Forks: ${repo.form_count}</span>
      
      </div>

      </div>
      </div>
      `
    })
    document.getElementById('repos').innerHTML = output;
  }
  showAlert(msg, className) {
    this.clearAlert()
    const div = document.createElement('div')
    div.className = className
    div.appendChild(document.createTextNode(msg))
    const container = document.querySelector('.searchContainer');
    const search = document.querySelector('.search');
    container.insertBefore(div, search)

    setTimeout(() => { this.clearAlert() }, 1500)
  }
  clearProfile() {
    this.profile.innerHTML = '';
  }
  clearAlert() {
    const currentAlert = document.querySelector('.alert')
    if (currentAlert) {
      currentAlert.remove()
    }
  }
}

