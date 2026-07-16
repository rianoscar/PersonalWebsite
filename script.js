const projects = [
  {
    title: "Virtual Machine Training Template",
    type: "VR Training / Desktop Simulation",
    image: "assets/portfolio/virtual-training.jpg",
    alt: "Virtual Machine Training Template VR Unity project screenshots",
    role: "Unity Developer",
    description:
      "A flexible Unity framework for educational machine training across desktop and VR. It supports guided lessons, rich multimedia, interactive 3D animations, virtual controls, quizzes, PDF modules, local data, and free-play exploration.",
    stack: ["Unity", "C#", "VR", "Editor Scripting", "Local Database"],
  },
  {
    title: "Cosmize",
    type: "Metaverse / Cross Platform",
    image: "assets/portfolio/cosmize.jpg",
    alt: "Cosmize metaverse platform with avatars and social spaces",
    role: "Unity Developer",
    description:
      "A cross-platform metaverse product centered on social interaction, avatar customization, personal rooms, and real-time communication. The project includes multiplayer flows, API integration, asset bundles, chat, microphone, friends, and screen-sharing features.",
    stack: ["Unity", "C#", "Multiplayer", "API Integration", "Asset Bundles", "Web / Mobile"],
  },
  {
    title: "Ransverse",
    type: "Metaverse / VR",
    image: "assets/portfolio/ransverse.jpg",
    alt: "Ransverse open-world metaverse platform screenshot",
    role: "Unity Developer",
    description:
      "An open-world social platform where users can explore, meet, communicate, and customize their presence. Its systems include multiplayer, avatars, land customization, chat, microphone support, presentation features, and VR compatibility.",
    stack: ["Unity", "C#", "Multiplayer", "VR", "Voice Chat", "API Integration"],
  },
  {
    title: "Astra Wayfinding",
    type: "Desktop / Kiosk",
    image: "assets/portfolio/astra-wayfinding.jpg",
    alt: "Astra Wayfinding interactive desktop kiosk application",
    role: "Unity Developer",
    description:
      "An interactive 3D wayfinding application designed for touchscreen kiosks. It helps visitors discover tenants, facilities, promotions, and events through an accessible navigation flow and clear spatial guidance.",
    stack: ["Unity", "C#", "3D UI", "Touchscreen", "Kiosk", "API Integration"],
  },
  {
    title: "Astra Kinect Photobooth",
    type: "Kinect / Installation",
    image: "assets/portfolio/kinect-photobooth.jpg",
    alt: "Astra Kinect Photobooth interactive installation screenshots",
    role: "Unity Developer",
    description:
      "A touchscreen event installation combining Kinect body tracking with a guided photobooth flow. It includes live background removal, animated characters, image upload, QR delivery, and supporting API integrations.",
    stack: ["Unity", "C#", "Kinect", "Background Removal", "QR Flow", "API Integration"],
  },
  {
    title: "TikTok & Instagram Filters",
    type: "Social AR",
    image: "assets/portfolio/ar-filters.jpg",
    alt: "TikTok and Instagram interactive AR filter examples",
    role: "Creative Developer",
    description:
      "A collection of social AR filters and mini-games created for TikTok and Instagram. The work combines face tracking, playful interaction, 2D animation, and lightweight game mechanics, reaching more than 30,000 videos and 5.5 million views.",
    stack: ["Effect House", "Spark AR", "Face Tracking", "2D Animation", "Mini Games"],
  },
  {
    title: "Virtual Aquarium & Mini Games",
    type: "Touchscreen / Education",
    image: "assets/portfolio/virtual-aquarium.jpg",
    alt: "Virtual Aquarium educational touchscreen experience and mini-games",
    role: "Unity Developer",
    description:
      "An educational touchscreen aquarium featuring interactive 3D marine life and a collection of themed mini-games. The experience combines visual exploration, accessible information, animation, and responsive touch interaction.",
    stack: ["Unity", "C#", "Touchscreen", "3D Animation", "Mini Games"],
  },
];

const projectItems = Array.from(document.querySelectorAll("[data-project-index]"));
const previewButton = document.querySelector("[data-project-preview]");
const previewImage = document.querySelector("[data-project-preview-image]");
const dialog = document.querySelector("#project-dialog");

let activeProjectIndex = 1;

function setActiveProject(index) {
  activeProjectIndex = index;
  const project = projects[index];

  projectItems.forEach((item, itemIndex) => {
    const isActive = itemIndex === index;
    item.classList.toggle("is-active", isActive);
    item.setAttribute("aria-pressed", String(isActive));
  });

  previewImage.src = project.image;
  previewImage.alt = project.alt;
  previewButton.setAttribute("aria-label", `Open ${project.title} project details`);
}

function updateDialog(index) {
  const project = projects[index];
  const projectNumber = String(index + 1).padStart(2, "0");

  dialog.querySelector("[data-dialog-counter]").textContent = `Project ${projectNumber} / 07`;
  dialog.querySelector("[data-dialog-image]").src = project.image;
  dialog.querySelector("[data-dialog-image]").alt = project.alt;
  dialog.querySelector("[data-dialog-type]").textContent = project.type;
  dialog.querySelector("[data-dialog-title]").textContent = project.title;
  dialog.querySelector("[data-dialog-description]").textContent = project.description;
  dialog.querySelector("[data-dialog-role]").textContent = project.role;

  const stackList = dialog.querySelector("[data-dialog-stack]");
  stackList.replaceChildren(
    ...project.stack.map((technology) => {
      const item = document.createElement("li");
      item.textContent = technology;
      return item;
    }),
  );
}

function openProject(index) {
  setActiveProject(index);
  updateDialog(index);
  document.body.classList.add("modal-open");
  dialog.showModal();
  dialog.querySelector("[data-dialog-close]").focus();
}

function showAdjacentProject(direction) {
  const nextIndex = (activeProjectIndex + direction + projects.length) % projects.length;
  setActiveProject(nextIndex);
  updateDialog(nextIndex);
}

projectItems.forEach((item) => {
  const index = Number(item.dataset.projectIndex);
  item.addEventListener("pointerenter", () => setActiveProject(index));
  item.addEventListener("focus", () => setActiveProject(index));
  item.addEventListener("click", () => openProject(index));
});

previewButton.addEventListener("click", () => openProject(activeProjectIndex));
dialog.querySelector("[data-dialog-close]").addEventListener("click", () => dialog.close());
dialog.querySelector("[data-project-previous]").addEventListener("click", () => showAdjacentProject(-1));
dialog.querySelector("[data-project-next]").addEventListener("click", () => showAdjacentProject(1));

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    dialog.close();
  }
});

dialog.addEventListener("close", () => {
  document.body.classList.remove("modal-open");
});

setActiveProject(activeProjectIndex);
