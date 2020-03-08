const overlay = document.querySelector("#overlay");

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
      const modal = document.querySelector("#modal");
      openModal(modal);
      const image = document.createElement("img");
      image.setAttribute("src", `${url}${i}.jpeg`);
      image.classList.add("p-10");
      modal.innerHTML = "";
      modal.appendChild(image);
    };
    div.appendChild(li);
    gallery.appendChild(div);
  }
};

overlay.addEventListener("click", () => {
  closeModal();
});

const openModal = modal => {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
};

const closeModal = () => {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
};
