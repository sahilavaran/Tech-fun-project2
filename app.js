const image = document.getElementById("imageBtn");
const upgradeBtn = document.getElementById("upgradeBtn");
const cookies = document.getElementById("cookieSpan");
const cookiePerSecond = document.getElementById("cpSpan");

//cookie stats
const stats = {
  cookieCount: 0,
  cps: 0, //cookie per second
};

//if the local storage exists, update the stats with it
const storageStats = JSON.parse(localStorage.getItem("stats"));

if (storageStats !== null) {
  stats.cookieCount = storageStats.cookieCount;
  stats.cps = storageStats.cps;
  updatePage();
}

//function for buying cookie
function buyCookie() {
  stats.cookieCount++;
  updatePage();
}

//functions for buying upgrade
function buyUpgrade() {
  stats.cps++;
  updatePage();
  stats.cookieCount -= 10;
}

//events to happen while clicking
image.addEventListener("click", buyCookie);
upgradeBtn.addEventListener("click", buyUpgrade);

//to update the page cookies and cookiesPerSecond in page funcrion

function updatePage() {
  cookies.textContent = stats.cookieCount;
  cookiePerSecond.textContent = stats.cps;
}

//function for updating local storage and page

function updateStorage() {
  localStorage.setItem("stats", JSON.stringify(stats));
}

//set intervals for the cookie to update every one second
setInterval(function () {
  stats.cookieCount += stats.cps;
  updatePage();
  updateStorage();
}, 1000);
