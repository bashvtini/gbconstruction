const services = document.querySelector("#services ul");

const Services = () => {
  const data = [
    {
      icon: ["fas", "fa-bath"],
      text: "Bathroom Fitters / Shower Installation/ Repair"
    },
    {
      icon: ["fas", "fa-paint-roller"],
      text: "Painting"
    },
    {
      icon: ["fas", "fa-wrench"],
      text: "Plumbing Repairs"
    },
    {
      icon: ["fas", "fa-hot-tub"],
      text: "Boiler installation, Repair or Servicing"
    },
    {
      icon: ["fas", "fa-fire"],
      text: "Gas Central Heating Installation and Servicing"
    },
    {
      icon: ["fab", "fa-hotjar"],
      text: "Under floor heating"
    }
  ];

  data.map(e => {
    const li = document.createElement("li");
    li.classList.add(
      "p-5",
      "bg-white",
      "rounded",
      "md:mr-2",
      "mb-5",
      "md:w-1/6",
      "h-40",
      "mx-2"
    );
    const i = document.createElement("i");
    i.classList.add(e.icon[0], e.icon[1], "text-4xl", "text-orange-400");

    const p = document.createElement("p");
    p.classList.add("text-sm", "pt-2");
    p.textContent = e.text;
    li.append(i, p);
    services.appendChild(li);
  });
};
Services();
