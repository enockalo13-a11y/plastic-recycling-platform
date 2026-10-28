// Prototype request handling. Requests live in the browser's localStorage
// until a real backend and database exist.

const STORAGE_KEY = "pickupRequests";

function loadRequests() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveRequests(requests) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(requests));
}

function addRequest(data) {
  const requests = loadRequests();
  requests.push({
    id: Date.now(),
    ...data,
    status: "pending",
    createdAt: new Date().toISOString(),
  });
  saveRequests(requests);
}

function completeRequest(id) {
  const requests = loadRequests().map((r) =>
    r.id === id ? { ...r, status: "collected" } : r
  );
  saveRequests(requests);
  renderRequests();
}

function renderRequests() {
  const container = document.getElementById("requests");
  if (!container) return;

  const requests = loadRequests();
  container.innerHTML = "";

  if (requests.length === 0) {
    container.textContent = "No requests yet.";
    return;
  }

  requests.forEach((r) => {
    const el = document.createElement("div");
    el.className = "request";

    const title = document.createElement("strong");
    title.textContent = `${r.name} (${r.area})`;

    const badge = document.createElement("span");
    badge.className = "badge" + (r.status === "collected" ? " done" : "");
    badge.textContent = r.status;

    const details = document.createElement("div");
    details.className = "muted";
    details.textContent = `${r.type}, ${r.amount}. Phone: ${r.phone}`;

    el.append(title, " ", badge, details);

    if (r.status === "pending") {
      const btn = document.createElement("button");
      btn.className = "secondary";
      btn.type = "button";
      btn.textContent = "Mark as collected";
      btn.addEventListener("click", () => completeRequest(r.id));
      el.append(btn);
    }

    container.append(el);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("pickup-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      addRequest(Object.fromEntries(new FormData(form)));
      form.reset();
      document.getElementById("status").textContent =
        "Request received. An aggregator will contact you.";
    });
  }

  const clear = document.getElementById("clear");
  if (clear) {
    clear.addEventListener("click", () => {
      saveRequests([]);
      renderRequests();
    });
  }

  renderRequests();
});
