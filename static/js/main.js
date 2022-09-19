let loaderGif = document.getElementById('loader');
let navOpen = false;

// // // // // // // navbar toggle///////////////
let toggleNav = () => {
  let navBar = document.getElementById('bars');
  let navContainer = document.getElementById('nav-container');

  navBar.addEventListener('click', () => {
    if (navOpen === false) {
      navContainer.classList.add('open-nav');
      navOpen = true;
    } else if (navOpen === true) {
      navContainer.classList.remove('open-nav');
      navOpen = false;
    }
  });
  window.addEventListener('scroll', () => {
    navContainer.classList.remove('open-nav');
    navOpen = false;
  });
};

toggleNav();

// // // // // project detail toggle//////////////

let detailContainer = document.getElementById('details-container');
let url = window.location.href;
let modalToggle = () => {
  let modalButton = document.querySelectorAll('#modal-btn');
  let modalContainer = document.getElementById('modal-container');
  let modalCloseBtn = document.querySelectorAll('#close');
  modalButton.forEach((button) => {
    button.addEventListener('click', () => {
      loaderGif.style.display = 'flex';
      modalContainer.classList.add('modal-open');
      pk = button.getAttribute('data-id');
      $.ajax({
        type: 'GET',
        url: `/get_pro_data/${pk}`,
        success: function (response) {
          data = JSON.parse(response.data);
          loaderGif.style.display = 'none';
          data.forEach((item) => {
            if (item.fields.order_of_display == 1) {
              detailContainer.innerHTML += `
                <div class="carousel-item active">
                  <div class="detail-grid">
                    <img src="images/${item.fields.image}" alt="">
                    <div class="side">
                      <div class="content">
                        <a href="${item.fields.github_link}" 
                        target="”_blank”"
                        > <i class="fa fa-github"></i> View Source Code</a>
                        <p class="header">${item.fields.title}</p>
                        <div class="website-details">
                          <p id="drop-icon">
                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#description" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Project Decription
                            </a>
                          </p>
                          <div class="collapse" id="description">
                            <div class="card card-body">
                            ${item.fields.description}
                            </div>
                          </div>

                          <p id="drop-icon">
                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#difficulties" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Difficulty
                            </a>
                          </p>
                          <div class="collapse" id="difficulties">
                            <div class="card card-body">
                            ${item.fields.difficulties}
                            </div>
                          </div>

                          <p id="drop-icon">
                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#technology" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Technology
                            </a>
                          </p>

                          <div class="collapse" id="technology">
                            <div class="card card-body">
                            ${item.fields.technology}
                            </div>
                          </div>

                        </div>
                        </div>
                      </div>
                    </div>
                </div>
            `;
            } else {
              detailContainer.innerHTML += `
              <div class="carousel-item">
                  <div class="detail-grid">
                    <img src="images/${item.fields.image}" alt="">
                    <div class="side">
                      <div class="content">
                      <a href="${item.fields.github_link}" 
                      target="”_blank”"
                      > <i class="fa fa-github"></i> View Source Code</a>
                        <p class="header">${item.fields.title}</p>
                        <div class="website-details">
                          <p id="drop-icon">
                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#description" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Project Decription
                            </a>
                          </p>
                          <div class="collapse" id="description">
                            <div class="card card-body">
                            ${item.fields.description}
                            </div>
                          </div>

                          <p id="drop-icon">
                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#difficulties" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Difficulty
                            </a>
                          </p>
                          <div class="collapse" id="difficulties">
                            <div class="card card-body">
                            ${item.fields.difficulties}
                            </div>
                          </div>

                          <p id="drop-icon">
                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#technology" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Technology
                            </a>
                          </p>

                          <div class="collapse" id="technology">
                            <div class="card card-body">
                            ${item.fields.technology}
                            </div>
                          </div>

                        </div>
                        </div>
                      </div>
                    </div>
                </div>
              `;
            }
          });
        },
        error: function (error) {
          loaderGif.style.display = 'none';
          swal({
            title: 'Try Again later !',
            text: 'An Error occured again later, ',
            icon: 'error'
          });
        }
      });
    });
  });
  modalCloseBtn.forEach((close) => {
    close.addEventListener('click', () => {
      modalContainer.classList.remove('modal-open');
      detailContainer.innerHTML = '';
    });
  });
};
modalToggle();

////////////////////////////////////////////////////////////////////////////
// // // // // // // // // send mesage/////////////////////////////////////
let sendMessage = () => {
  let name = document.getElementById('name');
  let message = document.getElementById('body');
  let email = document.getElementById('email');
  let form = document.getElementById('form');
  let button = document.getElementById('submit');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    loaderGif.style.display = 'flex';
    $.ajax({
      type: 'POST',
      url: '/contact/',
      data: {
        fullname: name.value,
        email: email.value,
        body: message.value,
        csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
      },
      success: function (response) {
        loaderGif.style.display = 'none';
        swal({
          title: 'Sucessfully Sent !',
          text: 'Your message was sent Successfully',
          icon: 'success'
        });
        form.reset();
      },
      error: function (error) {
        loaderGif.style.display = 'none';
        swal({
          title: 'Try Again later !',
          text: 'An error occured',
          icon: 'error'
        });
        form.reset();
      }
    });
  });
};
sendMessage();

let loadPage = () => {
  window.addEventListener('load', () => {
    loaderGif.style.display = 'none';
  });
};
loadPage();

// // // // // // // // // color picker icon///////////////////

let pickerpop = false;
let colorPicker = () => {
  let pickerCon = document.getElementById('picker');
  let box = document.getElementsByClassName('box');
  let icon = document.getElementById('cog');
  icon.addEventListener('click', () => {
    if (pickerpop == false) {
      icon.style.transform = 'rotate(100deg)';
      pickerCon.classList.add('color-open');
      pickerpop = true;
    } else if (pickerpop == true) {
      icon.style.transform = 'rotate(0deg)';
      pickerCon.classList.remove('color-open');
      pickerpop = false;
    }
  });

  window.addEventListener('scroll', () => {
    pickerCon.classList.remove('color-open');
    pickerpop = false;
  });
};
colorPicker();
