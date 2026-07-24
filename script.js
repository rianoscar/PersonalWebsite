const existingProjects = [
  {
    title: "Virtual Training V.1",
    type: "Virtual Reality & Desktop",
    image: "assets/projects/01-virtual-machine-training/VMT1.webp",
    images: [
      "assets/projects/01-virtual-machine-training/VMT1.webp",
      "assets/projects/01-virtual-machine-training/VMT2.webp",
      "assets/projects/01-virtual-machine-training/VMT3.webp",
      "assets/projects/01-virtual-machine-training/VMT4.webp",
    ],
    alt: "Virtual Training V.1 Unity project screenshots",
    role: "Unity Developer",
    description:
      "A flexible Unity framework for educational machine training across desktop and VR. It supports guided lessons, rich multimedia, interactive 3D animations, virtual controls, quizzes, PDF modules, local data, and free-play exploration.",
    contributions: [
      "Developed the VR version of the application.",
      "Built virtual interaction systems for both desktop and VR.",
      "Implemented animation systems for guided training sequences.",
      "Created a node graph system for troubleshooting workflows.",
      "Contributed to multiplayer features and integration.",
    ],
    stack: [
      "Unity",
      "C#",
      "VR",
      "Multiplayer",
      "SteamVR",
      "HTC Vive Pro",
      "User Assessment",
      "3D Interaction",
      "Hand Tracking",
      "Editor Scripting",
      "Local Database",
    ],
  },
  {
    title: "Cosmize",
    type: "Website & Mobile",
    image: "assets/projects/02-cosmize/Cosmize1.webp",
    images: [
      "assets/projects/02-cosmize/Cosmize1.webp",
      "assets/projects/02-cosmize/Cosmize2.webp",
      "assets/projects/02-cosmize/Cosmize3.webp",
      "assets/projects/02-cosmize/Cosmize4.webp",
    ],
    alt: "Cosmize metaverse platform with avatars and social spaces",
    role: "Unity Developer",
    description:
      "A cross-platform metaverse product centered on social interaction, avatar customization, personal rooms, and real-time communication. The project includes multiplayer flows, API integration, asset bundles, chat, microphone, friends, and screen-sharing features.",
    contributions: [
      "Refined microphone-based voice communication between players.",
      "Improved the in-app chat system.",
      "Supervised the work of a development team.",
      "Contributed to the avatar system.",
      "Contributed to multiplayer features and integration.",
    ],
    stack: [
      "Unity",
      "C#",
      "Multiplayer",
      "Agora",
      "Photon",
      "Nakama",
      "Blockchain",
      "Metaverse",
      "iOS",
      "API Integration",
      "Asset Bundles",
      "Web / Mobile",
    ],
  },
  {
    title: "Ransverse",
    type: "Desktop & Mobile",
    image: "assets/projects/03-ransverse/Ransverse1.webp",
    images: [
      "assets/projects/03-ransverse/Ransverse1.webp",
      "assets/projects/03-ransverse/Ransverse2.webp",
      "assets/projects/03-ransverse/Ransverse3.webp",
      "assets/projects/03-ransverse/Ransverse4.webp",
    ],
    alt: "Ransverse open-world metaverse platform screenshot",
    role: "Unity Developer",
    description:
      "An open-world social platform where users can explore, meet, communicate, and customize their presence. Its systems include multiplayer, avatars, land customization, chat, microphone support, presentation features, and VR compatibility.",
    contributions: [
      "Developed presentation room features for shared sessions.",
      "Contributed to multiplayer features and integration.",
      "Improved and polished the mobile version.",
      "Built additional room environments and interactive spaces.",
      "Designed and developed Ransverse Creator.",
    ],
    stack: [
      "Unity",
      "C#",
      "Multiplayer",
      "VR",
      "Meta Quest 2",
      "iOS",
      "Blockchain",
      "Avatar Customization",
      "Voice Chat",
      "API Integration",
    ],
  },
  {
    title: "Astra Wayfinding",
    type: "Desktop",
    image: "assets/projects/04-astra-wayfinding/AstraPathfinding1.webp",
    images: [
      "assets/projects/04-astra-wayfinding/AstraPathfinding1.webp",
      "assets/projects/04-astra-wayfinding/AstraPathfinding2.webp",
      "assets/projects/04-astra-wayfinding/AstraPathfinding3.webp",
      "assets/projects/04-astra-wayfinding/AstraPathfinding4.webp",
    ],
    alt: "Astra Wayfinding interactive desktop kiosk application",
    role: "Unity Developer",
    description:
      "An interactive 3D wayfinding application designed for touchscreen kiosks. It helps visitors discover tenants, facilities, promotions, and events through an accessible navigation flow and clear spatial guidance.",
    contributions: [
      "Developed the application from initial setup through final delivery.",
      "Implemented a pathfinding system that identifies and displays the fastest route to a selected destination.",
      "Created UI animations and transitions to provide a smooth navigation flow.",
      "Integrated promotional content with the backend through an API.",
      "Implemented the user interface using the provided design assets.",
    ],
    stack: ["Unity", "C#", "3D UI", "Touchscreen", "Kiosk", "API Integration"],
  },
  {
    title: "Astra Kinect Photobooth",
    type: "Desktop",
    image: "assets/projects/05-astra-kinect-photobooth/AstraPhotobooth1.webp",
    images: [
      "assets/projects/05-astra-kinect-photobooth/AstraPhotobooth1.webp",
      "assets/projects/05-astra-kinect-photobooth/AstraPhotobooth2.webp",
      "assets/projects/05-astra-kinect-photobooth/AstraPhotobooth3.webp",
      "assets/projects/05-astra-kinect-photobooth/AstraPhotobooth4.webp",
    ],
    alt: "Astra Kinect Photobooth interactive installation screenshots",
    role: "Unity Developer",
    description:
      "A touchscreen event installation combining Kinect body tracking with a guided photobooth flow. It includes live background removal, animated characters, image upload, QR delivery, and supporting API integrations.",
    contributions: [
      "Developed the application from initial setup through final delivery.",
      "Integrated Kinect hardware with Unity to support real-time body tracking.",
      "Connected captured photos to the backend workflow so they could be processed and printed.",
      "Implemented the user interface and animation systems.",
      "Supported on-site installation and technical setup during the event.",
    ],
    stack: [
      "Unity",
      "C#",
      "Kinect",
      "Hand Tracking",
      "Interactive Event Installation",
      "Background Removal",
      "QR Flow",
      "API Integration",
    ],
  },
  {
    title: "TikTok & Instagram Filters",
    type: "Mobile",
    image: "assets/projects/06-social-ar-filters/TiktokFilter1.webp",
    images: [
      "assets/projects/06-social-ar-filters/TiktokFilter1.webp",
      "assets/projects/06-social-ar-filters/TiktokFilter2.webp",
      "assets/projects/06-social-ar-filters/TiktokFilter3.webp",
      "assets/projects/06-social-ar-filters/TiktokFilter4.webp",
      "assets/projects/06-social-ar-filters/TiktokFilter5.webp",
      "assets/projects/06-social-ar-filters/TiktokFilter6.webp",
    ],
    alt: "TikTok and Instagram interactive AR filter examples",
    role: "Creative Developer",
    description:
      "A collection of social AR filters and mini-games created for TikTok and Instagram. The work combines face tracking, playful interaction, 2D animation, and lightweight game mechanics, reaching more than 30,000 videos and 5.5 million views.",
    contributions: [
      "Researched social filter trends and strategies to improve reach and audience engagement.",
      "Created UI and sound assets for the filter experiences.",
      "Developed interactive mechanics and user interactions within each filter.",
      "Produced promotional content to support filter launches and discoverability.",
      "Evaluated published filters using performance results and user responses to guide improvements.",
    ],
    stack: [
      "Effect House",
      "Spark AR",
      "TikTok Creator",
      "Instagram & TikTok",
      "Canva",
      "Content Creation",
      "Visual Scripting",
      "Face Tracking",
      "2D Animation",
      "Mini Games",
    ],
  },
  {
    title: "Virtual Aquarium",
    type: "Desktop",
    image: "assets/projects/07-virtual-aquarium/VirtualAquarium.webp",
    images: [
      "assets/projects/07-virtual-aquarium/VirtualAquarium.webp",
      "assets/projects/07-virtual-aquarium/VirtualAquarium2.webp",
      "assets/projects/07-virtual-aquarium/VirtualAquarium3.webp",
    ],
    alt: "Virtual Aquarium educational touchscreen experience",
    role: "Unity Developer",
    description:
      "An educational touchscreen aquarium featuring interactive 3D marine life and a collection of themed mini-games. The experience combines visual exploration, accessible information, animation, and responsive touch interaction.",
    contributions: [
      "Developed the application from initial setup through final delivery.",
      "Implemented autonomous swimming animations and movement behaviors for the fish.",
      "Developed all interactive mini-games included in the experience.",
      "Set up and integrated the user interface.",
      "Built and configured the interactive 3D aquarium environment.",
    ],
    stack: [
      "Unity",
      "C#",
      "Touchscreen",
      "Local Database",
      "Interactive Experience",
      "3D Animation",
      "Mini Games",
    ],
  },
];

const virtualTrainingV2 = {
  title: "Virtual Training V.2",
  type: "Virtual Reality & Desktop",
  image: "assets/projects/08-virtual-training-v2/VMT-V2-1.webp",
  images: [
    "assets/projects/08-virtual-training-v2/VMT-V2-1.webp",
    "assets/projects/08-virtual-training-v2/VMT-V2-2.webp",
    "assets/projects/08-virtual-training-v2/VMT-V2-3.webp",
    "assets/projects/08-virtual-training-v2/VMT-V2-4.webp",
    "assets/projects/08-virtual-training-v2/VMT-V2-5.webp",
    "assets/projects/08-virtual-training-v2/VMT-V2-6.webp",
    "assets/projects/08-virtual-training-v2/VMT-V2-7.webp",
    "assets/projects/08-virtual-training-v2/VMT-V2-8.webp",
    "assets/projects/08-virtual-training-v2/VMT-V2-9.webp",
    "assets/projects/08-virtual-training-v2/VMT-V2-10.webp",
    "assets/projects/08-virtual-training-v2/VMT-V2-11.webp",
  ],
  alt: "Virtual Training V.2 project preview",
  role: "Unity Developer",
  description:
    "A more polished evolution of the Virtual Training framework for educational machine maintenance across desktop and VR. It improves guided procedures, maintenance interactions, visual feedback, training flow, and simulation clarity.",
  contributions: [
    "Refactored and optimized the Virtual Training V.1 codebase to improve efficiency and reduce bugs.",
    "Built the core VR experience, including user flow, interaction logic, and training feedback.",
    "Developed interactive remove-and-install maintenance procedures.",
    "Implemented animation-driven guidance for step-by-step training sequences.",
    "Created gameplay and training features using visual scripting.",
  ],
  stack: [
    "Unity",
    "C#",
    "VR",
    "Visual Scripting",
    "Meta Quest 3",
    "Multiplayer",
    "AI-Assisted Development",
    "Interaction Design",
    "Simulation Systems",
  ],
};

const virtualTourSpbu = {
  title: "SPBU Virtual Tour",
  type: "Website",
  image: "assets/projects/09-virtual-tour-spbu-pertamina/SPBU-1.webp",
  images: [
    "assets/projects/09-virtual-tour-spbu-pertamina/SPBU-1.webp",
    "assets/projects/09-virtual-tour-spbu-pertamina/SPBU-2.webp",
    "assets/projects/09-virtual-tour-spbu-pertamina/SPBU-3.webp",
    "assets/projects/09-virtual-tour-spbu-pertamina/SPBU-4.webp",
  ],
  alt: "SPBU Virtual Tour web experience preview",
  role: "Interactive Developer",
  description:
    "A browser-based virtual tour for SPBU environments built with krpano. The experience supports panoramic exploration, guided navigation, interactive hotspots, and contextual information across desktop and mobile browsers.",
  contributions: [
    "Mapped nearby public facilities for each SPBU location by checking Google Maps.",
    "Set up the virtual tour in krpano using the provided panoramic assets.",
    "Maintained Git updates to make future revisions easier to track and deliver.",
  ],
  stack: [
    "krpano",
    "XML",
    "JavaScript",
    "Web",
    "360 Virtual Tour",
    "Interactive Hotspots",
    "Responsive UI",
    "Google Workspace",
    "Google Maps",
  ],
};

const wirosablegVrExperience = {
  title: "WiroSableg VR Experience",
  type: "Virtual Reality",
  image: "assets/projects/10-wirosableg-vr-experience/WiroSableng-1.webp",
  images: [
    "assets/projects/10-wirosableg-vr-experience/WiroSableng-1.webp",
    "assets/projects/10-wirosableg-vr-experience/WiroSableng-2.webp",
    "assets/projects/10-wirosableg-vr-experience/WiroSableng-3.webp",
  ],
  alt: "WiroSableg VR Experience project preview",
  role: "Unity Developer",
  description:
    "An immersive VR experience designed to promote the movie Wiro Sableng. Users can step into the role of the legendary martial artist and practice iconic moves from the film, supported by realistic physics and motion tracking that make the experience feel responsive and physical.",
  contributions: [
    "Collaborated with the film production team to define the application's experience flow.",
    "Researched how Wiro Sableng's signature martial arts moves could be translated into VR interactions.",
    "Developed the application from initial concept through final delivery.",
    "Set up and integrated the user interface and 3D environment.",
    "Supported on-site supervision, testing, and experience evaluation during the event.",
  ],
  stack: [
    "Unity",
    "C#",
    "VR",
    "HTC Vive",
    "SteamVR",
    "HTC Vive Tracker",
    "Interactive Event Installation",
    "Film Adaptation",
    "Interactive Experience",
  ],
};

const fireSafetyVrExperience = {
  title: "Fire Safety VR Training",
  type: "Virtual Reality",
  image: "assets/projects/11-fire-safety-vr-experience/FireSafety1.webp",
  images: [
    "assets/projects/11-fire-safety-vr-experience/FireSafety1.webp",
    "assets/projects/11-fire-safety-vr-experience/FireSafety2.webp",
    "assets/projects/11-fire-safety-vr-experience/FireSafety3.webp",
    "assets/projects/11-fire-safety-vr-experience/FireSafety4.webp",
  ],
  alt: "Fire Safety VR Training project preview",
  role: "Unity Developer",
  description:
    "An immersive VR training application designed to provide realistic simulations of fire emergencies. Users can practice essential safety procedures, such as using fire extinguishers and evacuating buildings, within a safe and controlled virtual environment.",
  contributions: [
    "Researched and developed the initial concept for the VR training experience.",
    "Researched VR UI and UX approaches to improve comfort, clarity, and accessibility.",
    "Developed the application from initial setup through final delivery.",
    "Set up and integrated the user interface, sound, and animation systems.",
    "Performed application testing, troubleshooting, and bug fixing.",
  ],
  stack: [
    "Unity",
    "C#",
    "VR",
    "HTC Vive",
    "Oculus VR Headset",
    "SteamVR",
    "Safety Training",
  ],
};

const vtuberVrResearch = {
  title: "Vtuber VR Research",
  type: "Virtual Reality",
  image: "assets/projects/12-vtuber-vr-research/Vtuber-1.webp",
  images: [
    "assets/projects/12-vtuber-vr-research/Vtuber-1.webp",
    "assets/projects/12-vtuber-vr-research/Vtuber-2.webp",
  ],
  alt: "Vtuber VR Research project preview",
  role: "Unity Developer",
  description:
    "A VTuber research prototype that uses VR as a control system for a 3D avatar. The project explores body movement, facial expression control, and voice detection to create a more expressive and responsive virtual performance workflow.",
  contributions: [
    "Researched VTuber trends and common virtual performance workflows.",
    "Explored VR-based avatar control methods for movement and expression tracking.",
    "Developed the research application from initial concept through a working prototype.",
    "Configured the 3D avatar for movement and facial expressions, and set up the virtual environment.",
    "Connected microphone input to audio-driven speaking animations for the avatar.",
  ],
  stack: [
    "Unity",
    "C#",
    "VR",
    "HTC Vive",
    "Oculus VR Headset",
    "SteamVR",
    "OVR LipSync",
    "Research",
    "Prototype",
  ],
};

const zombike = {
  title: "Zombike",
  type: "Virtual Reality",
  image: "assets/projects/13-zombike/Zombike1.webp",
  images: [
    "assets/projects/13-zombike/Zombike1.webp",
    "assets/projects/13-zombike/Zombike2.webp",
    "assets/projects/13-zombike/Zombike3.webp",
  ],
  alt: "Zombike project preview",
  role: "Unity Developer",
  description:
    "An innovative VR entertainment application designed to captivate event attendees. By connecting to real-life stationary bikes, the app creates an immersive virtual cycling experience where users pedal through a virtual city while shooting hordes of zombies.",
  contributions: [
    "Researched and developed the initial concept for the interactive VR experience.",
    "Integrated stationary bicycle hardware with Unity to translate physical pedaling into in-game movement.",
    "Developed the application from initial setup through final delivery.",
    "Set up and implemented the user interface and zombie animation systems.",
    "Performed on-site testing and evaluated the experience while the event was running.",
  ],
  stack: [
    "Unity",
    "C#",
    "HTC Vive",
    "SteamVR",
    "Hardware Integration",
    "Interactive Event Installation",
    "Local Database",
    "Game Development",
    "Interactive Systems",
  ],
  video: {
    id: "ZQs_Zwow3w4",
    title: "Zombike gameplay video",
  },
};

const virtualTrainingV1 = {
  ...existingProjects[0],
  title: "Virtual Training V.1",
  type: "Virtual Reality & Desktop",
  alt: "Virtual Training V.1 Unity project screenshots",
};

const socialArFilter = {
  ...existingProjects[5],
  title: "TikTok & Instagram Filter",
};

const virtualAquarium = {
  ...existingProjects[6],
  title: "Virtual Aquarium",
};

const projects = [
  virtualTrainingV2,
  virtualTourSpbu,
  existingProjects[1],
  virtualTrainingV1,
  existingProjects[2],
  socialArFilter,
  existingProjects[3],
  existingProjects[4],
  virtualAquarium,
  wirosablegVrExperience,
  fireSafetyVrExperience,
  vtuberVrResearch,
  zombike,
];

const projectItems = Array.from(document.querySelectorAll("[data-project-index]"));
const previewButton = document.querySelector("[data-project-preview]");
const previewImage = document.querySelector("[data-project-preview-image]");
const projectPageNodes = Array.from(document.querySelectorAll("[data-project-page]"));
const dialog = document.querySelector("#project-dialog");
const dialogImage = dialog.querySelector("[data-dialog-image]");
const dialogVideoFrame = dialog.querySelector("[data-dialog-video-frame]");
const galleryCounter = dialog.querySelector("[data-gallery-counter]");
const galleryThumbnails = dialog.querySelector("[data-gallery-thumbnails]");
const galleryPrevious = dialog.querySelector("[data-gallery-previous]");
const galleryNext = dialog.querySelector("[data-gallery-next]");
const dialogTabs = dialog.querySelector("[data-dialog-tabs]");
const dialogTabButtons = Array.from(dialog.querySelectorAll("[data-dialog-tab]"));
const dialogTabPanels = Array.from(dialog.querySelectorAll("[data-dialog-panel]"));
const contributionTab = dialog.querySelector('[data-dialog-tab="contributions"]');
const contributionCount = dialog.querySelector("[data-dialog-contribution-count]");
const contributionList = dialog.querySelector("[data-dialog-contributions]");

let activeProjectIndex = 0;
let activeMediaIndex = 0;
let activeProjectPage = 0;
const projectsPerPage = 5;

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

function setProjectPage(page, selectFirstProject = true) {
  activeProjectPage = page;
  const firstProjectIndex = page * projectsPerPage;
  const lastProjectIndex = firstProjectIndex + projectsPerPage;

  projectItems.forEach((item, index) => {
    item.hidden = index < firstProjectIndex || index >= lastProjectIndex;
  });

  projectPageNodes.forEach((node, index) => {
    const isActive = index === page;
    node.classList.toggle("is-active", isActive);
    if (isActive) {
      node.setAttribute("aria-current", "page");
    } else {
      node.removeAttribute("aria-current");
    }
  });

  if (selectFirstProject) {
    setActiveProject(firstProjectIndex);
  }
}

function getProjectMedia(project) {
  const videoItems = project.video
    ? [
        {
          type: "video",
          id: project.video.id,
          title: project.video.title,
          thumbnail: `https://img.youtube.com/vi/${project.video.id}/hqdefault.jpg`,
        },
      ]
    : [];

  return [
    ...videoItems,
    ...project.images.map((image, index) => ({
      type: "image",
      src: image,
      alt: `${project.alt}, image ${index + 1} of ${project.images.length}`,
    })),
  ];
}

function getYouTubeEmbedUrl(videoId) {
  const params = new URLSearchParams({
    rel: "0",
    playsinline: "1",
  });

  if (window.location.origin && window.location.origin !== "null") {
    params.set("origin", window.location.origin);
  }

  return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
}

function setActiveGalleryItem(project, index) {
  const mediaItems = getProjectMedia(project);
  const mediaCount = mediaItems.length;
  const media = mediaItems[(index + mediaCount) % mediaCount];
  activeMediaIndex = (index + mediaCount) % mediaCount;
  const mediaNumber = String(activeMediaIndex + 1).padStart(2, "0");
  const totalMedia = String(mediaCount).padStart(2, "0");

  if (media.type === "video") {
    dialogImage.hidden = true;
    dialogVideoFrame.hidden = false;
    dialogVideoFrame.title = media.title;
    dialogVideoFrame.src = getYouTubeEmbedUrl(media.id);
  } else {
    dialogVideoFrame.hidden = true;
    dialogVideoFrame.src = "";
    dialogVideoFrame.title = "";
    dialogImage.hidden = false;
    dialogImage.src = media.src;
    dialogImage.alt = media.alt;
  }

  galleryCounter.textContent = `${mediaNumber} / ${totalMedia}`;

  galleryThumbnails.querySelectorAll("button").forEach((thumbnail, thumbnailIndex) => {
    const isActive = thumbnailIndex === activeMediaIndex;
    thumbnail.classList.toggle("is-active", isActive);
    thumbnail.setAttribute("aria-pressed", String(isActive));
  });
}

function buildProjectGallery(project) {
  const mediaItems = getProjectMedia(project);

  galleryThumbnails.replaceChildren(
    ...mediaItems.map((media, index) => {
      const button = document.createElement("button");
      const thumbnail = document.createElement("img");
      const isVideo = media.type === "video";

      button.type = "button";
      button.className = "project-gallery-thumbnail";
      button.classList.toggle("is-video", isVideo);
      button.setAttribute(
        "aria-label",
        isVideo ? `Play ${media.title}` : `Show media ${index + 1} of ${mediaItems.length}`,
      );
      button.addEventListener("click", () => setActiveGalleryItem(project, index));

      thumbnail.src = isVideo ? media.thumbnail : media.src;
      thumbnail.alt = "";
      thumbnail.loading = "lazy";
      button.append(thumbnail);
      return button;
    }),
  );

  const hasMultipleMedia = mediaItems.length > 1;
  galleryPrevious.hidden = !hasMultipleMedia;
  galleryNext.hidden = !hasMultipleMedia;
  setActiveGalleryItem(project, 0);
}

function setDialogTab(tabName, focusTab = false) {
  dialogTabButtons.forEach((button) => {
    const isActive = button.dataset.dialogTab === tabName;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
    button.tabIndex = isActive ? 0 : -1;

    if (isActive && focusTab) {
      button.focus();
    }
  });

  dialogTabPanels.forEach((panel) => {
    panel.hidden = panel.dataset.dialogPanel !== tabName;
  });
}

function updateDialog(index) {
  const project = projects[index];
  const projectNumber = String(index + 1).padStart(2, "0");

  const projectTotal = String(projects.length).padStart(2, "0");
  dialog.querySelector("[data-dialog-counter]").textContent = `Project ${projectNumber} / ${projectTotal}`;
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

  const contributions = project.contributions ?? [];
  const hasContributions = contributions.length > 0;
  dialogTabs.hidden = !hasContributions;
  contributionTab.hidden = !hasContributions;
  contributionCount.textContent = `(${contributions.length})`;
  contributionList.replaceChildren(
    ...contributions.map((contribution) => {
      const item = document.createElement("li");
      item.textContent = contribution;
      return item;
    }),
  );
  setDialogTab("overview");

  buildProjectGallery(project);
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
  const nextPage = Math.floor(nextIndex / projectsPerPage);
  if (nextPage !== activeProjectPage) {
    setProjectPage(nextPage, false);
  }
  setActiveProject(nextIndex);
  updateDialog(nextIndex);
}

projectItems.forEach((item) => {
  const index = Number(item.dataset.projectIndex);
  item.addEventListener("pointerenter", () => setActiveProject(index));
  item.addEventListener("focus", () => setActiveProject(index));
  item.addEventListener("click", () => openProject(index));
});

projectPageNodes.forEach((node) => {
  const page = Number(node.dataset.projectPage);
  node.addEventListener("click", () => setProjectPage(page));
});

previewButton.addEventListener("click", () => openProject(activeProjectIndex));
dialog.querySelector("[data-dialog-close]").addEventListener("click", () => dialog.close());
dialog.querySelector("[data-project-previous]").addEventListener("click", () => showAdjacentProject(-1));
dialog.querySelector("[data-project-next]").addEventListener("click", () => showAdjacentProject(1));
dialogTabButtons.forEach((button) => {
  button.addEventListener("click", () => setDialogTab(button.dataset.dialogTab));
  button.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
      return;
    }

    event.preventDefault();
    const availableTabs = dialogTabButtons.filter((tabButton) => !tabButton.hidden);
    const currentIndex = availableTabs.indexOf(button);
    let nextIndex = currentIndex;

    if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = availableTabs.length - 1;
    } else {
      const direction = event.key === "ArrowRight" ? 1 : -1;
      nextIndex = (currentIndex + direction + availableTabs.length) % availableTabs.length;
    }

    setDialogTab(availableTabs[nextIndex].dataset.dialogTab, true);
  });
});
galleryPrevious.addEventListener("click", () => {
  setActiveGalleryItem(projects[activeProjectIndex], activeMediaIndex - 1);
});
galleryNext.addEventListener("click", () => {
  setActiveGalleryItem(projects[activeProjectIndex], activeMediaIndex + 1);
});

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    dialog.close();
  }
});

dialog.addEventListener("close", () => {
  document.body.classList.remove("modal-open");
  dialogVideoFrame.src = "";
});

setProjectPage(activeProjectPage, false);
setActiveProject(activeProjectIndex);
