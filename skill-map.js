const map = document.querySelector(".skill-map");
const coreElement = document.querySelector(".skill-core");
const links = document.querySelector(".skill-map-links");

function relativeRect(element) {
  const left = element.offsetLeft;
  const top = element.offsetTop;
  const width = element.offsetWidth;
  const height = element.offsetHeight;
  return {
    left,
    right: left + width,
    top,
    bottom: top + height,
    width,
    height,
  };
}

function drawSkillLinks() {
  if (!map || !coreElement || !links || window.innerWidth <= 800) return;

  const mapRect = map.getBoundingClientRect();
  const core = relativeRect(coreElement);
  links.setAttribute("viewBox", `0 0 ${mapRect.width} ${mapRect.height}`);

  const definitions = [
    ["creative", ".skill-creative", "left", 0.22, 0.18],
    ["technical", ".skill-technical", "right", 0.22, 0.18],
    ["tools", ".skill-tools", "left", 0.22, 0.63],
    ["platforms", ".skill-platforms", "right", 0.22, 0.63],
  ];

  definitions.forEach(([name, selector, side, cardPosition, corePosition]) => {
    const card = relativeRect(document.querySelector(selector));
    const startX = side === "left" ? card.right : card.left;
    const startY = card.top + card.height * cardPosition;
    const endX = side === "left" ? core.left : core.right;
    const endY = core.top + core.height * corePosition;
    const distance = Math.abs(endX - startX);
    const elbowX = startX + (side === "left" ? 1 : -1) * Math.max(28, distance * 0.45);

    links.querySelector(`[data-skill-link="${name}"]`).setAttribute(
      "d",
      `M ${startX} ${startY} L ${elbowX} ${startY} L ${endX} ${endY}`,
    );
    const node = links.querySelector(`[data-skill-node="${name}"]`);
    node.setAttribute("cx", startX);
    node.setAttribute("cy", startY);
    const coreNode = links.querySelector(`[data-skill-node="${name}-core"]`);
    coreNode.setAttribute("cx", endX);
    coreNode.setAttribute("cy", endY);
  });

  const interaction = relativeRect(document.querySelector(".skill-interaction"));
  const interactionX = interaction.left + interaction.width / 2;
  const coreX = core.left + core.width / 2;
  links.querySelector('[data-skill-link="interaction"]').setAttribute(
    "d",
    `M ${coreX} ${core.bottom} L ${interactionX} ${interaction.top}`,
  );
  const interactionNode = links.querySelector('[data-skill-node="interaction"]');
  interactionNode.setAttribute("cx", interactionX);
  interactionNode.setAttribute("cy", interaction.top);
  const interactionCoreNode = links.querySelector('[data-skill-node="interaction-core"]');
  interactionCoreNode.setAttribute("cx", coreX);
  interactionCoreNode.setAttribute("cy", core.bottom);
}

let resizeFrame;
function scheduleSkillLinks() {
  cancelAnimationFrame(resizeFrame);
  resizeFrame = requestAnimationFrame(drawSkillLinks);
}

scheduleSkillLinks();
window.addEventListener("load", scheduleSkillLinks);
window.addEventListener("resize", scheduleSkillLinks);
