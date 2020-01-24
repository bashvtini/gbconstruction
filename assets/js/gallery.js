// Modal

// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

const modalContent = document.querySelector(".modal-content");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const data = {
  bath: {
    length: 9,
    url: "./assets/img/gallery/bath"
  },
  tiling: {
    length: 9,
    url: "./assets/img/gallery/tiling"
  },
  kitchen: {
    length: 2,
    url: "./assets/img/gallery/kitchen"
  }
};

const load = () => {
  Gallery(data.bath.length, data.bath.url);
};

const gallery = document.querySelector("#gallery");
const select = document.querySelector("select");

select.addEventListener("change", e => {
  Gallery(data[e.target.value].length, data[e.target.value].url);
});

const Gallery = (length, url) => {
  gallery.innerHTML = "";
  for (let i = 1; i < length + 1; i++) {
    const li = document.createElement("li");
    const div = document.createElement("div");
    div.classList.add("md:w-1/4", "sm:w-1/3", "w-1/2", "p-2");
    li.classList.add("m-2", "bc");
    li.style = `background-image: url(${url}${i}.jpeg);`;
    li.onclick = function() {
      modal.style.display = "block";
      const image = document.createElement("img");
      const wrapper = document.createElement("div");
      image.setAttribute("src", `${url}${i}.jpeg`);
      wrapper.classList.add("mx-auto", "my-5", "w-5/6", "md:w-1/3");
      modal.innerHTML = "";
      wrapper.appendChild(image);
      modal.appendChild(wrapper);
    };
    div.appendChild(li);
    gallery.appendChild(div);
  }
};
