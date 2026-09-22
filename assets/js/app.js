const internshipList =
  document.getElementById("internship-list");

internshipList.innerHTML = internships.map(internship => `

  <div class="card">

    <div class="card-header">
    <div class="company-logo ${internship.logoColor}">
  <i class="${internship.logoo}"></i>
</div>


      <span class="badge">
      
        ${internship.type}
      </span>
    </div>

    <h3>${internship.title}</h3>

    <p class="company-name">
      ${internship.company}
    </p>

    <div class="details">

      <span>
        <i class="fa-solid fa-location-dot"></i>
        ${internship.location}
      </span>

      <span>
        <i class="fa-solid fa-clock"></i>
        ${internship.duration}
      </span>

      <span>
        <i class="fa-solid fa-wallet"></i>
        ${internship.salary}
      </span>

    </div>

    <p class="description">
      ${internship.description}
    </p>

    <div class="tags">
      ${internship.tags.map(tag => `
        <span>${tag}</span>
      `).join("")}
    </div>

    <div class="card-footer">
      <button class="btn-apply">
        Apply Now
      </button>

      <button class="btn-save">
        <i class="fa-regular fa-bookmark"></i>
        Save
      </button>
    </div>

  </div>

`).join("");
