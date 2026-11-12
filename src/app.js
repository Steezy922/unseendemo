(function () {
  const app = document.getElementById("app");
  const sidebar = document.getElementById("sidebar");
  const openTabs = document.getElementById("open-tabs");
  const controlsHint = document.getElementById("controls-hint");
  const dashboardCenter = document.getElementById("dashboard-center");
  const comingScreen = document.getElementById("coming-screen");
  const comingTitle = document.getElementById("coming-title");
  const comingIcon = document.getElementById("coming-icon");
  const gamesScreen = document.getElementById("games-screen");
  const gamesCatalog = document.getElementById("games-catalog");
  const gameGrid = document.getElementById("game-grid");
  const gamesSearch = document.getElementById("games-search");
  const noGames = document.getElementById("no-games");
  const gamePlayer = document.getElementById("game-player");
  const activeGameTitle = document.getElementById("active-game-title");
  const gameFrame = document.getElementById("game-frame");
  const linksScreen = document.getElementById("links-screen");
  const linksPicker = document.getElementById("links-picker");
  const linkChoiceGrid = document.getElementById("link-choice-grid");
  const linksSelectionCount = document.getElementById("links-selection-count");
  const linksSelectAll = document.getElementById("links-select-all");
  const linksDone = document.getElementById("links-done");
  const linksLoading = document.getElementById("links-loading");
  const linksResults = document.getElementById("links-results");
  const linkResultGroups = document.getElementById("links-result-groups");
  const extrasScreen = document.getElementById("extras-screen");
  const extrasHub = document.getElementById("extras-hub");
  const calculatorTool = document.getElementById("calculator-tool");
  const bugReportTool = document.getElementById("bug-report-tool");
  const calculatorDisplay = document.getElementById("calculator-display");
  const bugReportForm = document.getElementById("bug-report-form");
  const bugReportResult = document.getElementById("bug-report-result");
  const bugReportText = document.getElementById("bug-report-text");
  const batteryIndicator = document.getElementById("battery-indicator");
  const batteryToggle = document.getElementById("extras-battery-toggle");
  const addressInput = document.getElementById("address-input");
  const dashboardSearch = document.getElementById("dashboard-search");
  const settingsDialog = document.getElementById("settings-dialog");
  const startupDialog = document.getElementById("startup-dialog");
  const intro = document.getElementById("intro");
  const introTitle = document.getElementById("intro-title");
  const introLogo = document.querySelector(".intro-logo");
  const notificationStack = document.getElementById("notification-stack");
  const siteFavicon = document.getElementById("site-favicon");
  const maskPicker = document.getElementById("mask-picker");
  const maskPickerButton = document.getElementById("mask-picker-button");
  const maskOptions = document.getElementById("mask-options");
  const maskSelectedIcon = document.getElementById("mask-selected-icon");
  const maskSelectedName = document.getElementById("mask-selected-name");
  const cursorTrailCanvas = document.getElementById("cursor-trail");
  const cursorTrailContext = cursorTrailCanvas.getContext("2d");
  const cursorTrailToggle = document.getElementById("cursor-trail-toggle");
  const cursorTrailColor = document.getElementById("cursor-trail-color");
  const sidebarTip = document.getElementById("sidebar-tip");
  const homeBackground = document.getElementById("home-background");
  const homeBackgroundColor = document.getElementById("home-background-color");
  const tabsBackground = document.getElementById("tabs-background");
  const tabsBackgroundColor = document.getElementById("tabs-background-color");
  const themeAnimationToggle = document.getElementById("theme-animation-toggle");
  const siteFont = document.getElementById("site-font");
  const notificationsToggle = document.getElementById("notifications-toggle");
  const extrasDialog = document.getElementById("extras-dialog");
  const homeExtras = document.getElementById("home-extras");
  const homeTime = document.getElementById("home-time");
  const homeClock = document.getElementById("home-clock");
  const homeDate = document.getElementById("home-date");
  const homeWeather = document.getElementById("home-weather");
  const weatherToggle = document.getElementById("extras-weather-toggle");
  const weatherCity = document.getElementById("extras-weather-city");
  const weatherCountry = document.getElementById("extras-weather-country");
  const weatherUnit = document.getElementById("extras-weather-unit");
  const clockToggle = document.getElementById("extras-clock-toggle");
  const clock24HourToggle = document.getElementById("extras-24-hour");
  const dateToggle = document.getElementById("extras-date-toggle");
  const extrasStatus = document.getElementById("extras-status");
  const weatherSymbol = document.getElementById("weather-symbol");
  const weatherLocation = document.getElementById("weather-location");
  const weatherCondition = document.getElementById("weather-condition");
  const weatherStatus = document.getElementById("weather-status");
  const weatherTemperature = document.getElementById("weather-temperature");
  const weatherRefresh = document.getElementById("weather-refresh");
  const pageNames = ["home", "games", "music", "chat", "links", "extras"];
  const pageLabels = { home: "Home", games: "Games", music: "Music", chat: "Chat", links: "Links", extras: "Extras" };
  const iconFiles = {
    Unseen: "Unseen.png",
    Back: "RetrunButton.png",
    Forward: "ForwardButton.png",
    Refresh: "Refresh.png",
    Home: "HomeButton.png",
    Games: "GamesButton.png",
    Music: "MusicButton.png",
    Chat: "ChatButton.png",
    Links: "LinksButton.png",
    Settings: "SettingsButton.png"
  };
  const games = window.UNSEEN_GAMES;
  const linkGroups = window.UNSEEN_LINK_GROUPS;
  const selectedLinkIds = new Set();
  const siteMasks = [
    { id: "unseen", label: "Unseen", title: "Unseen Unblocker", icon: "Sitelogo.png" },
    { id: "clever", label: "Clever", title: "Clever", icon: "Cleverfav.jpg" },
    { id: "ixl", label: "IXL", title: "IXL | Math, Language Arts, Science, Social Studies, and Spanish", icon: "IXLfav.png" },
    { id: "canvas", label: "Canvas", title: "Dashboard", icon: "Canvasfav.png" },
    { id: "wayground", label: "Wayground (RIP Quizizz)", title: "Quizizz is now Wayground | Teacher AI and Resources", icon: "waygroundfav.ico" },
    { id: "kahoot", label: "Kahoot", title: "Kahoot! | Learning games | Make learning awesome!", icon: "Kahootfav.png" },
    { id: "classroom", label: "Google Classrooms", title: "Home - Classroom", icon: "GoogleClassroomfav.webp" }
  ];
  const siteMaskStorageKey = "unseen-site-mask";
  const tips = [
    "Tired of just playing the games? Wait for the full release where all features will be live!",
    "If you are bored of your background, you can change it in settings!",
    "Schoolwork is OVERATED!",
    "WAZAAAAAA",
    "Share this site with your friends :)",
    "Psst..Hey..Dont tell anyone this but...Vortex is the best chat site in my opinion..."
  ];
  const themeNames = ["unseen", "aurora", "nebula", "stars", "sunset", "ocean", "forest", "grid", "solid"];
  const fonts = {
    "dm-sans": '"DM Sans", "Segoe UI", sans-serif',
    manrope: 'Manrope, "Segoe UI", sans-serif',
    system: 'system-ui, "Segoe UI", sans-serif',
    rounded: '"Trebuchet MS", "Segoe UI", sans-serif',
    serif: 'Georgia, "Times New Roman", serif',
    mono: '"Cascadia Code", Consolas, monospace'
  };
  const tabsStorageKey = "unseen-open-tabs";
  function loadSavedTabs() {
    const saved = localStorage.getItem(tabsStorageKey);
    if (!saved) return null;
    try {
      const state = JSON.parse(saved);
      if (!state || !Array.isArray(state.tabs)) return null;
      const restored = [];
      state.tabs.forEach(function (tab) {
        if (!tab || !Number.isSafeInteger(tab.id) || tab.id < 1) return;
        if (tab.page !== "home" && tab.page !== "games" && tab.page !== "links" && tab.page !== "extras") return;
        const game = tab.page === "games" && games.some(function (item) { return item.title === tab.game; })
          ? tab.game
          : null;
        if (restored.some(function (item) { return item.id === tab.id; })) return;
        restored.push({ id: tab.id, page: tab.page, game: game });
      });
      if (!restored.length) return null;
      const activeId = restored.some(function (tab) { return tab.id === state.activeTabId; })
        ? state.activeTabId
        : restored[0].id;
      const maxId = restored.reduce(function (maximum, tab) { return Math.max(maximum, tab.id); }, 0);
      return { tabs: restored, activeTabId: activeId, nextTabId: maxId + 1 };
    } catch (error) {
      console.warn("Could not restore saved tabs:", error);
      return null;
    }
  }
  const savedTabState = loadSavedTabs();
  let selectedSiteMask = siteMasks[0].id;
  let currentDocumentTitle = "Unseen Unblocker";
  const tabs = savedTabState ? savedTabState.tabs : [{ id: 1, page: "home", game: null }];
  let activeTabId = savedTabState ? savedTabState.activeTabId : 1;
  let nextTabId = savedTabState ? savedTabState.nextTabId : 2;
  const mobileSidebarQuery = window.matchMedia("(max-width: 700px)");
  let sidebarHidden = mobileSidebarQuery.matches;
  let introTimers = [];
  let aboutBlankBlocked = false;
  let linkLoadingTimeout = 0;
  let homeClockInterval = 0;
  let latestTemperatureCelsius = null;
  let weatherRequestController = null;
  const notificationTimeouts = new WeakMap();
  let pointerIdleTimeout = 0;
  let batteryManager = null;
  let batteryRequestPending = false;
  let batteryEventsBound = false;
  let calculatorStoredValue = null;
  let calculatorOperator = null;
  let calculatorWaitingForOperand = false;
  const cursorTrail = [];
  let cursorTrailFrame = 0;
  let lastCursorTrailPoint = 0;

  function loadNamedIcon(image) {
    const file = iconFiles[image.dataset.icon];
    if (!file) return;
    image.src = "assets/icons/" + file;
    image.addEventListener("load", function () {
      image.classList.add("icon-loaded");
    });
    image.addEventListener("error", function () {
      image.classList.add("icon-missing");
    });
  }

  function getSelectedSiteMask() {
    return siteMasks.find(function (mask) {
      return mask.id === selectedSiteMask;
    }) || siteMasks[0];
  }

  function updateMaskedIdentity() {
    const mask = getSelectedSiteMask();
    siteFavicon.href = "assets/img/favicons/" + encodeURIComponent(mask.icon);
    maskSelectedIcon.src = siteFavicon.href;
    maskSelectedIcon.alt = "";
    maskSelectedName.textContent = mask.label;
    document.title = mask.id === "unseen" ? currentDocumentTitle : mask.title;
  }

  function setDocumentTitle(title) {
    currentDocumentTitle = title;
    updateMaskedIdentity();
  }

  function closeMaskOptions(restoreFocus) {
    maskOptions.hidden = true;
    maskPickerButton.setAttribute("aria-expanded", "false");
    if (restoreFocus) maskPickerButton.focus();
  }

  function selectSiteMask(mask) {
    selectedSiteMask = mask.id;
    localStorage.setItem(siteMaskStorageKey, mask.id);
    maskOptions.querySelectorAll('[role="option"]').forEach(function (option) {
      option.setAttribute("aria-selected", String(option.dataset.mask === mask.id));
    });
    updateMaskedIdentity();
    closeMaskOptions(true);
  }

  function renderSiteMaskOptions() {
    siteMasks.forEach(function (mask) {
      const option = document.createElement("button");
      option.className = "mask-option";
      option.type = "button";
      option.id = "mask-option-" + mask.id;
      option.dataset.mask = mask.id;
      option.setAttribute("role", "option");
      option.setAttribute("aria-selected", String(mask.id === selectedSiteMask));

      const icon = document.createElement("img");
      icon.src = "assets/img/favicons/" + encodeURIComponent(mask.icon);
      icon.alt = "";
      icon.loading = "lazy";

      const label = document.createElement("span");
      label.textContent = mask.label;
      option.append(icon, label);
      option.addEventListener("click", function () {
        selectSiteMask(mask);
      });
      maskOptions.appendChild(option);
    });
  }

  function showPage(page, addHistory) {
    if (!pageNames.includes(page)) return;
    const activeTab = getActiveTab();
    activeTab.page = page;
    if (page !== "games") activeTab.game = null;
    const isHome = page === "home";
    const isGames = page === "games";
    const isLinks = page === "links";
    const isExtras = page === "extras";
    app.classList.toggle("showing-home", isHome);
    if (!isGames) closeGame();
    dashboardCenter.hidden = !isHome;
    gamesScreen.hidden = !isGames;
    linksScreen.hidden = !isLinks;
    extrasScreen.hidden = !isExtras;
    extrasHub.hidden = false;
    calculatorTool.hidden = true;
    bugReportTool.hidden = true;
    if (!isLinks) {
      window.clearTimeout(linkLoadingTimeout);
      linkLoadingTimeout = 0;
      linksPicker.hidden = false;
      linksLoading.hidden = true;
      linksResults.hidden = true;
    }
    if (isGames && activeTab.game) {
      const savedGame = games.find(function (game) { return game.title === activeTab.game; });
      if (savedGame) openGame(savedGame);
      else closeGame();
    } else if (isGames) {
      closeGame();
    }
    comingScreen.hidden = isHome || isGames || isLinks || isExtras;
    app.classList.toggle("showing-coming", !isHome);
    if (!isHome && !isGames && !isLinks && !isExtras) {
      comingTitle.textContent = page.charAt(0).toUpperCase() + page.slice(1);
      comingIcon.src = "assets/icons/" + iconFiles[page.charAt(0).toUpperCase() + page.slice(1)];
      comingIcon.alt = page.charAt(0).toUpperCase() + page.slice(1) + " logo";
    }
    document.querySelectorAll("[data-page]").forEach(function (button) {
      button.classList.toggle("is-active", button.dataset.page === page);
    });
    renderTabs();
    setDocumentTitle(activeTab.game
      ? activeTab.game + " — Unseen Unblocker"
      : (isHome ? "Unseen Unblocker" : page.charAt(0).toUpperCase() + page.slice(1) + " — Unseen Unblocker"));
    if (isHome && weatherToggle.checked && latestTemperatureCelsius === null && !weatherRequestController) {
      loadWeather();
    }
    if (addHistory) window.history.pushState({ page: page }, "", "#" + page);
  }

  function getActiveTab() {
    return tabs.find(function (tab) { return tab.id === activeTabId; }) || tabs[0];
  }

  function setSidebarHidden(hidden) {
    sidebarHidden = hidden;
    const mobile = mobileSidebarQuery.matches;
    app.classList.toggle("sidebar-hidden", hidden && !mobile);
    sidebar.classList.toggle("is-open", !hidden && mobile);
    sidebar.setAttribute("aria-hidden", String(hidden));
    sidebar.inert = hidden;
    if (hidden && sidebar.contains(document.activeElement)) {
      document.getElementById("dashboard").focus();
    }
  }

  function toggleDashboard() {
    setSidebarHidden(!sidebarHidden);
  }

  function closeMobileSidebar() {
    if (mobileSidebarQuery.matches) setSidebarHidden(true);
  }

  setSidebarHidden(sidebarHidden);
  mobileSidebarQuery.addEventListener("change", function () {
    setSidebarHidden(sidebarHidden);
  });

  function renderTabs() {
    localStorage.setItem(tabsStorageKey, JSON.stringify({ tabs: tabs, activeTabId: activeTabId }));
    openTabs.replaceChildren();
    tabs.forEach(function (tab) {
      const wrapper = document.createElement("div");
      wrapper.className = "open-tab" + (tab.id === activeTabId ? " is-active" : "");

      const select = document.createElement("button");
      select.className = "open-tab-select";
      select.type = "button";
      select.setAttribute("aria-current", tab.id === activeTabId ? "page" : "false");
      select.setAttribute("aria-label", "Switch to " + pageLabels[tab.page] + " tab");

      const label = document.createElement("span");
      label.className = "open-tab-label";
      label.textContent = tab.game || pageLabels[tab.page];
      const iconFile = iconFiles[tab.page.charAt(0).toUpperCase() + tab.page.slice(1)];
      if (iconFile) {
        const icon = document.createElement("img");
        icon.className = "open-tab-icon";
        icon.src = "assets/icons/" + iconFile;
        icon.alt = "";
        select.append(icon);
      }
      select.append(label);
      select.addEventListener("click", function () {
        activateTab(tab.id);
      });

      const close = document.createElement("button");
      close.className = "open-tab-close";
      close.type = "button";
      close.setAttribute("aria-label", "Close " + (tab.game || pageLabels[tab.page]) + " tab");
      close.textContent = "×";
      close.addEventListener("click", function (event) {
        event.stopPropagation();
        closeTab(tab.id, wrapper);
      });
      wrapper.append(select, close);
      openTabs.appendChild(wrapper);
    });
  }

  function createTab(page) {
    const tab = { id: nextTabId, page: page, game: null };
    nextTabId += 1;
    tabs.push(tab);
    activeTabId = tab.id;
    showPage(page, true);
    return tab;
  }

  function activateTab(tabId) {
    if (activeTabId === tabId) return;
    const tab = tabs.find(function (item) { return item.id === tabId; });
    if (!tab) return;
    activeTabId = tab.id;
    showPage(tab.page, true);
  }

  function closeTab(tabId, wrapper) {
    const tabIndex = tabs.findIndex(function (tab) { return tab.id === tabId; });
    if (tabIndex < 0 || wrapper.classList.contains("is-closing")) return;
    burstParticles(wrapper, 12);
    wrapper.classList.add("is-closing");
    window.setTimeout(function () {
      const currentIndex = tabs.findIndex(function (tab) { return tab.id === tabId; });
      if (currentIndex < 0) return;
      const wasActive = activeTabId === tabId;
      tabs.splice(currentIndex, 1);
      if (!tabs.length) {
        const homeTab = { id: nextTabId, page: "home", game: null };
        nextTabId += 1;
        tabs.push(homeTab);
        activeTabId = homeTab.id;
      } else if (wasActive) {
        activeTabId = tabs[Math.min(currentIndex, tabs.length - 1)].id;
      }
      if (wasActive) {
        const activeTab = getActiveTab();
        showPage(activeTab.page, true);
      } else {
        renderTabs();
      }
    }, 170);
  }

  function showExtrasTool(tool) {
    extrasHub.hidden = true;
    calculatorTool.hidden = tool !== "calculator";
    bugReportTool.hidden = tool !== "bug-report";
  }

  function resetCalculator() {
    calculatorDisplay.textContent = "0";
    calculatorStoredValue = null;
    calculatorOperator = null;
    calculatorWaitingForOperand = false;
  }

  function calculatePair(left, right, operator) {
    if (operator === "add") return left + right;
    if (operator === "subtract") return left - right;
    if (operator === "multiply") return left * right;
    if (operator === "divide") {
      if (right === 0) throw new Error("Cannot divide by zero");
      return left / right;
    }
    throw new Error("Unknown calculator operation");
  }

  function handleCalculatorInput(action) {
    let display = calculatorDisplay.textContent;
    if (action === "clear") {
      resetCalculator();
      return;
    }
    if (action === "backspace") {
      if (calculatorWaitingForOperand) return;
      display = display.length > 1 ? display.slice(0, -1) : "0";
      calculatorDisplay.textContent = display === "-" ? "0" : display;
      return;
    }
    if (action === "sign") {
      if (display === "Error") return;
      if (display !== "0") calculatorDisplay.textContent = display.charAt(0) === "-" ? display.slice(1) : "-" + display;
      return;
    }
    if (action === "decimal") {
      if (calculatorWaitingForOperand) {
        calculatorDisplay.textContent = "0.";
        calculatorWaitingForOperand = false;
      } else if (!display.includes(".")) {
        calculatorDisplay.textContent += ".";
      }
      return;
    }
    if (/^\d$/.test(action)) {
      calculatorDisplay.textContent = calculatorWaitingForOperand || display === "0" || display === "Error"
        ? action
        : (display.length < 16 ? display + action : display);
      calculatorWaitingForOperand = false;
      return;
    }
    if (action === "equals") {
      if (calculatorOperator && calculatorStoredValue !== null) {
        try {
          const result = calculatePair(calculatorStoredValue, Number(display), calculatorOperator);
          calculatorDisplay.textContent = Number.isFinite(result) ? String(Number(result.toPrecision(12))) : "Error";
        } catch (error) {
          console.error("Calculator operation failed:", error);
          calculatorDisplay.textContent = "Error";
        }
        calculatorStoredValue = null;
        calculatorOperator = null;
        calculatorWaitingForOperand = true;
      }
      return;
    }
    if (["add", "subtract", "multiply", "divide"].includes(action)) {
      const currentValue = Number(display);
      if (!Number.isFinite(currentValue)) {
        calculatorDisplay.textContent = "0";
        calculatorStoredValue = 0;
        calculatorOperator = action;
        calculatorWaitingForOperand = true;
        return;
      }
      if (calculatorOperator && calculatorStoredValue !== null && !calculatorWaitingForOperand) {
        try {
          calculatorStoredValue = calculatePair(calculatorStoredValue, currentValue, calculatorOperator);
          calculatorDisplay.textContent = String(Number(calculatorStoredValue.toPrecision(12)));
        } catch (error) {
          console.error("Calculator operation failed:", error);
          calculatorDisplay.textContent = "Error";
          calculatorStoredValue = null;
          calculatorOperator = null;
          calculatorWaitingForOperand = true;
          return;
        }
      } else {
        calculatorStoredValue = currentValue;
      }
      calculatorOperator = action;
      calculatorWaitingForOperand = true;
    }
  }

  function renderGames() {
    games.forEach(function (game) {
      const card = document.createElement("button");
      card.className = "game-card";
      card.type = "button";
      card.setAttribute("aria-label", "Play " + game.title);
      card.dataset.gameTitle = game.title.toLocaleLowerCase();

      const thumbnail = document.createElement("span");
      thumbnail.className = "game-card-thumbnail";
      const image = document.createElement("img");
      image.src = "assets/img/thumbnails/" + encodeURIComponent(game.thumbnail);
      image.alt = "";
      image.loading = "lazy";
      image.addEventListener("error", function () {
        thumbnail.classList.add("thumbnail-missing");
      });
      thumbnail.appendChild(image);

      const title = document.createElement("span");
      title.className = "game-card-title";
      title.textContent = game.title;
      card.append(thumbnail, title);
      card.addEventListener("click", function () {
        openGame(game);
      });
      gameGrid.appendChild(card);
    });
  }

  function filterGames() {
    const query = gamesSearch.value.trim().toLocaleLowerCase();
    let visibleCount = 0;
    gameGrid.querySelectorAll(".game-card").forEach(function (card) {
      const matches = card.dataset.gameTitle.includes(query);
      card.hidden = !matches;
      if (matches) visibleCount += 1;
    });
    noGames.hidden = visibleCount > 0;
  }

  function getAllLinks() {
    return linkGroups.reduce(function (allLinks, group) {
      return allLinks.concat(group.links);
    }, []);
  }

  function updateLinksSelection() {
    const selectedCount = selectedLinkIds.size;
    linksSelectionCount.textContent = selectedCount + (selectedCount === 1 ? " site selected" : " sites selected");
    linksDone.disabled = selectedCount === 0;
    linkChoiceGrid.querySelectorAll(".link-choice").forEach(function (button) {
      const selected = selectedLinkIds.has(button.dataset.linkId);
      button.classList.toggle("is-selected", selected);
      button.setAttribute("aria-pressed", String(selected));
      button.setAttribute("aria-label", (selected ? "Deselect " : "Select ") + button.dataset.linkName);
    });
  }

  function renderLinkChoices() {
    linkGroups.forEach(function (group) {
      group.links.forEach(function (link) {
        const choice = document.createElement("button");
        choice.className = "link-choice";
        choice.type = "button";
        choice.dataset.linkId = link.id;
        choice.dataset.linkName = link.name;
        choice.title = link.name;
        choice.setAttribute("aria-pressed", "false");
        choice.setAttribute("aria-label", "Select " + link.name);

        const icon = document.createElement("img");
        icon.src = "assets/siteicons/" + encodeURIComponent(link.icon);
        icon.alt = "";
        icon.loading = "lazy";

        const check = document.createElement("span");
        check.className = "link-choice-check";
        check.setAttribute("aria-hidden", "true");
        check.textContent = "✓";

        choice.append(icon, check);
        choice.addEventListener("click", function () {
          if (selectedLinkIds.has(link.id)) selectedLinkIds.delete(link.id);
          else selectedLinkIds.add(link.id);
          updateLinksSelection();
        });
        linkChoiceGrid.appendChild(choice);
      });
    });
    updateLinksSelection();
  }

  function renderLinkResults() {
    linkResultGroups.replaceChildren();
    linkGroups.forEach(function (group) {
      const selectedLinks = group.links.filter(function (link) {
        return selectedLinkIds.has(link.id);
      });
      if (!selectedLinks.length) return;

      const section = document.createElement("section");
      section.className = "links-result-group";
      const heading = document.createElement("h3");
      heading.textContent = group.label;
      const list = document.createElement("div");
      list.className = "links-result-list";

      selectedLinks.forEach(function (link) {
        const anchor = document.createElement("a");
        anchor.className = "link-result";
        anchor.href = link.url;
        anchor.target = "_blank";
        anchor.rel = "noopener noreferrer";

        const icon = document.createElement("img");
        icon.src = "assets/siteicons/" + encodeURIComponent(link.icon);
        icon.alt = "";
        icon.loading = "lazy";

        const details = document.createElement("span");
        details.className = "link-result-details";
        const name = document.createElement("strong");
        name.textContent = link.name;
        const url = document.createElement("small");
        url.textContent = link.url;
        details.append(name, url);
        const arrow = document.createElement("span");
        arrow.className = "link-result-arrow";
        arrow.setAttribute("aria-hidden", "true");
        arrow.textContent = "↗";
        anchor.append(icon, details, arrow);
        list.appendChild(anchor);
      });

      section.append(heading, list);
      linkResultGroups.appendChild(section);
    });
  }

  function openGame(game) {
    getActiveTab().game = game.title;
    renderTabs();
    activeGameTitle.textContent = game.title;
    gameFrame.title = game.title;
    gameFrame.src = "assets/games/" + encodeURIComponent(game.file);
    gamesCatalog.hidden = true;
    gamePlayer.hidden = false;
    setDocumentTitle(game.title + " — Unseen Unblocker");
  }

  function closeGame() {
    gameFrame.removeAttribute("src");
    gamePlayer.hidden = true;
    gamesCatalog.hidden = false;
  }

  function burstParticles(element, count, distributed) {
    const bounds = element.getBoundingClientRect();
    const originX = bounds.left + bounds.width / 2;
    const originY = bounds.top + bounds.height / 2;
    for (let index = 0; index < count; index += 1) {
      const particle = document.createElement("span");
      const startX = distributed ? bounds.left + Math.random() * bounds.width : originX;
      const startY = distributed ? bounds.top + Math.random() * bounds.height : originY;
      const angle = distributed
        ? Math.atan2(startY - originY, startX - originX) + (Math.random() - 0.5) * 1.8
        : Math.random() * Math.PI * 2;
      const distance = distributed
        ? 22 + Math.random() * 72
        : 24 + Math.random() * Math.min(110, Math.max(bounds.width, bounds.height) * 0.4);
      particle.className = distributed ? "effect-particle effect-shard" : "effect-particle";
      particle.style.left = startX + "px";
      particle.style.top = startY + "px";
      particle.style.setProperty("--particle-x", Math.cos(angle) * distance + "px");
      particle.style.setProperty("--particle-y", Math.sin(angle) * distance + "px");
      particle.style.setProperty("--particle-delay", Math.random() * (distributed ? 90 : 100) + "ms");
      if (distributed) {
        particle.style.setProperty("--shard-size", 3 + Math.random() * 6 + "px");
        particle.style.setProperty("--shard-hue", 255 + Math.random() * 40 + "deg");
      }
      document.body.appendChild(particle);
      window.setTimeout(function () { particle.remove(); }, 850);
    }
  }

  function resizeCursorTrail() {
    const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
    cursorTrailCanvas.width = Math.round(window.innerWidth * ratio);
    cursorTrailCanvas.height = Math.round(window.innerHeight * ratio);
    cursorTrailContext.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  function drawCursorTrail() {
    cursorTrailFrame = 0;
    if (!cursorTrailToggle.checked) return;

    const now = performance.now();
    while (cursorTrail.length && now - cursorTrail[0].time > 560) cursorTrail.shift();
    cursorTrailContext.clearRect(0, 0, window.innerWidth, window.innerHeight);
    cursorTrailContext.fillStyle = cursorTrailColor.value;
    cursorTrail.forEach(function (point) {
      const progress = (now - point.time) / 560;
      cursorTrailContext.globalAlpha = (1 - progress) * 0.62;
      cursorTrailContext.beginPath();
      cursorTrailContext.arc(point.x, point.y, 1.4 + (1 - progress) * 2.8, 0, Math.PI * 2);
      cursorTrailContext.fill();
    });
    cursorTrailContext.globalAlpha = 1;
    if (cursorTrail.length) cursorTrailFrame = window.requestAnimationFrame(drawCursorTrail);
  }

  function clearCursorTrail() {
    cursorTrail.length = 0;
    if (cursorTrailFrame) {
      window.cancelAnimationFrame(cursorTrailFrame);
      cursorTrailFrame = 0;
    }
    cursorTrailContext.clearRect(0, 0, window.innerWidth, window.innerHeight);
  }

  function trackCursor(event) {
    if (!cursorTrailToggle.checked || (event.pointerType && event.pointerType !== "mouse" && event.pointerType !== "pen")) return;
    const now = performance.now();
    if (now - lastCursorTrailPoint < 18) return;
    lastCursorTrailPoint = now;
    cursorTrail.push({ x: event.clientX, y: event.clientY, time: now });
    if (cursorTrail.length > 28) cursorTrail.shift();
    if (!cursorTrailFrame) cursorTrailFrame = window.requestAnimationFrame(drawCursorTrail);
  }

  resizeCursorTrail();
  window.addEventListener("resize", resizeCursorTrail);
  window.addEventListener("pointermove", trackCursor, { passive: true });
  app.classList.add("pointer-idle");
  window.addEventListener("pointermove", function () {
    app.classList.remove("pointer-idle");
    window.clearTimeout(pointerIdleTimeout);
    pointerIdleTimeout = window.setTimeout(function () {
      app.classList.add("pointer-idle");
    }, 1200);
  }, { passive: true });
  document.documentElement.addEventListener("pointerleave", function () {
    window.clearTimeout(pointerIdleTimeout);
    app.classList.add("pointer-idle");
  });

  function dismissNotification(notice) {
    window.clearTimeout(notificationTimeouts.get(notice));
    if (!notice.isConnected || notice.classList.contains("is-dissolving")) return;
    burstParticles(notice, 24, true);
    notice.classList.remove("is-visible");
    notice.classList.add("is-dissolving");
    window.setTimeout(function () { notice.remove(); }, 420);
  }

  function clearNotifications() {
    Array.from(notificationStack.children).forEach(function (notice) {
      window.clearTimeout(notificationTimeouts.get(notice));
      notice.remove();
    });
  }

  function openInAboutBlank(gameTitle) {
    const blankWindow = window.open("about:blank", "_blank");
    if (!blankWindow) {
      aboutBlankBlocked = true;
      displayNotice("The new tab was blocked. Allow pop-ups for this site and try again.");
      return false;
    }

    const target = new URL(window.location.href);
    target.searchParams.set("unseen-blank", "1");
    if (gameTitle) target.searchParams.set("unseen-game", gameTitle);
    else target.searchParams.delete("unseen-game");
    const frame = blankWindow.document.createElement("iframe");
    frame.title = "Unseen";
    frame.src = target.href;
    frame.allow = "autoplay; fullscreen; gamepad";
    frame.style.cssText = "position:fixed;inset:0;width:100%;height:100%;border:0;";
    const blankDocument = blankWindow.document;
    const blankBody = blankDocument.body || blankDocument.documentElement.appendChild(blankDocument.createElement("body"));
    blankDocument.title = "Unseen";
    blankDocument.documentElement.style.cssText = "width:100%;height:100%;margin:0;overflow:hidden;";
    blankBody.style.cssText = "width:100%;height:100%;margin:0;overflow:hidden;background:#08080b;";
    blankBody.replaceChildren(frame);
    blankWindow.opener = null;
    return true;
  }

  function toggleFullscreen() {
    const target = document.fullscreenElement
      ? null
      : (gamePlayer.hidden ? app : gameFrame);
    const action = target ? target.requestFullscreen() : document.exitFullscreen();
    action.catch(function (error) {
      console.error("Could not change fullscreen mode:", error);
    });
  }

  function syncFullscreenButton() {
    const button = document.getElementById("fullscreen-button");
    const isFullscreen = Boolean(document.fullscreenElement);
    button.setAttribute("aria-pressed", String(isFullscreen));
    button.setAttribute("aria-label", isFullscreen ? "Exit fullscreen" : "Enter fullscreen");
    button.title = isFullscreen ? "Exit fullscreen" : "Enter fullscreen";
    const gameButton = document.getElementById("game-fullscreen");
    const isGameFullscreen = document.fullscreenElement === gameFrame;
    gameButton.setAttribute("aria-pressed", String(isGameFullscreen));
    gameButton.textContent = isGameFullscreen ? "Exit fullscreen" : "Fullscreen";
  }

  selectedSiteMask = localStorage.getItem(siteMaskStorageKey) || "unseen";
  if (!siteMasks.some(function (mask) { return mask.id === selectedSiteMask; })) {
    selectedSiteMask = "unseen";
  }
  renderSiteMaskOptions();
  updateMaskedIdentity();
  maskPickerButton.addEventListener("click", function () {
    const isOpen = maskPickerButton.getAttribute("aria-expanded") === "true";
    maskOptions.hidden = isOpen;
    maskPickerButton.setAttribute("aria-expanded", String(!isOpen));
    if (!isOpen) {
      const selectedOption = maskOptions.querySelector('[aria-selected="true"]');
      if (selectedOption) selectedOption.focus();
    }
  });
  maskOptions.addEventListener("keydown", function (event) {
    const options = Array.from(maskOptions.querySelectorAll('[role="option"]'));
    const currentIndex = options.indexOf(document.activeElement);
    let nextIndex = currentIndex;
    if (event.key === "ArrowDown") nextIndex = (currentIndex + 1) % options.length;
    else if (event.key === "ArrowUp") nextIndex = (currentIndex - 1 + options.length) % options.length;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = options.length - 1;
    else if (event.key === "Escape") {
      event.preventDefault();
      closeMaskOptions(true);
      return;
    } else {
      return;
    }
    event.preventDefault();
    options[nextIndex].focus();
  });
  document.addEventListener("click", function (event) {
    if (!maskPicker.contains(event.target)) closeMaskOptions(false);
  });

  renderGames();
  renderLinkChoices();
  gamesSearch.addEventListener("input", filterGames);
  linksSelectAll.addEventListener("click", function () {
    getAllLinks().forEach(function (link) {
      selectedLinkIds.add(link.id);
    });
    updateLinksSelection();
  });
  linksDone.addEventListener("click", function () {
    linksPicker.hidden = true;
    linksLoading.hidden = false;
    linkLoadingTimeout = window.setTimeout(function () {
      linkLoadingTimeout = 0;
      renderLinkResults();
      linksLoading.hidden = true;
      linksResults.hidden = false;
    }, 650);
  });
  document.getElementById("links-back").addEventListener("click", function () {
    linksResults.hidden = true;
    linksPicker.hidden = false;
  });
  document.querySelectorAll("[data-icon]").forEach(loadNamedIcon);
  document.querySelectorAll("[data-page]").forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      if (button.dataset.page === "music" || button.dataset.page === "chat") {
        button.classList.remove("is-unavailable");
        void button.offsetWidth;
        button.classList.add("is-unavailable");
        window.setTimeout(function () { button.classList.remove("is-unavailable"); }, 420);
        displayNotice("These Features are not available in the demo. But will be added in the full version :)");
        closeMobileSidebar();
        return;
      }
      if (button.dataset.page === "games" || button.dataset.page === "links" || button.dataset.page === "extras") {
        createTab(button.dataset.page);
      } else {
        showPage(button.dataset.page, true);
      }
      closeMobileSidebar();
    });
  });
  document.querySelectorAll("[data-extra-tool]").forEach(function (button) {
    button.addEventListener("click", function () {
      showExtrasTool(button.dataset.extraTool);
    });
  });
  document.querySelectorAll("[data-extras-home]").forEach(function (button) {
    button.addEventListener("click", function () {
      calculatorTool.hidden = true;
      bugReportTool.hidden = true;
      extrasHub.hidden = false;
    });
  });
  calculatorTool.querySelector(".calculator-keys").addEventListener("click", function (event) {
    const key = event.target.closest("[data-calc]");
    if (key) handleCalculatorInput(key.dataset.calc);
  });
  bugReportForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const description = document.getElementById("bug-report-description").value.trim();
    const reportPage = document.getElementById("bug-report-page").value;
    bugReportText.textContent = [
      "Unseen bug report",
      "Page: " + reportPage,
      "Created: " + new Date().toLocaleString(),
      "",
      description
    ].join("\n");
    bugReportResult.hidden = false;
    document.getElementById("bug-report-copy-status").textContent = "";
  });
  document.getElementById("copy-bug-report").addEventListener("click", function () {
    const status = document.getElementById("bug-report-copy-status");
    if (!navigator.clipboard || typeof navigator.clipboard.writeText !== "function") {
      status.textContent = "Clipboard access is unavailable. Select and copy the report above.";
      return;
    }
    navigator.clipboard.writeText(bugReportText.textContent).then(function () {
      status.textContent = "Report copied. Share it wherever you send bug reports.";
    }).catch(function (error) {
      console.error("Could not copy bug report:", error);
      status.textContent = "Could not copy the report. Select and copy it above.";
    });
  });

  document.getElementById("home-button").addEventListener("click", function () {
    addressInput.value = "";
    dashboardSearch.value = "";
    createTab("home");
    closeMobileSidebar();
  });
  document.getElementById("menu-button").addEventListener("click", function () {
    toggleDashboard();
  });
  document.getElementById("about-blank-button").addEventListener("click", openInAboutBlank);
  document.getElementById("fullscreen-button").addEventListener("click", toggleFullscreen);
  document.getElementById("game-about-blank").addEventListener("click", function () {
    openInAboutBlank(getActiveTab().game);
  });
  document.getElementById("game-fullscreen").addEventListener("click", toggleFullscreen);
  document.addEventListener("fullscreenchange", syncFullscreenButton);
  document.getElementById("settings-fullscreen").addEventListener("click", toggleFullscreen);
  document.getElementById("settings-about-blank").addEventListener("click", openInAboutBlank);
  document.getElementById("back-to-games").addEventListener("click", function () {
    burstParticles(gamePlayer, 24);
    closeGame();
    getActiveTab().game = null;
    renderTabs();
    setDocumentTitle("Games — Unseen Unblocker");
  });
  document.getElementById("back-button").addEventListener("click", function () {
    if (window.history.length > 1) window.history.back();
  });
  document.getElementById("forward-button").addEventListener("click", function () {
    window.history.forward();
  });
  document.getElementById("refresh-button").addEventListener("click", function () {
    window.location.reload();
  });
  document.getElementById("bookmark-button").addEventListener("click", function (event) {
    const button = event.currentTarget;
    const saved = button.getAttribute("aria-pressed") !== "true";
    button.setAttribute("aria-pressed", String(saved));
    button.setAttribute("aria-label", saved ? "Remove bookmark" : "Bookmark this page");
    button.title = saved ? "Remove bookmark" : "Bookmark this page";
    localStorage.setItem("unseen-bookmark", String(saved));
  });
  document.getElementById("settings-button").addEventListener("click", function () {
    settingsDialog.showModal();
    closeMobileSidebar();
  });
  document.getElementById("settings-extras").addEventListener("click", function () {
    settingsDialog.close();
    extrasDialog.showModal();
  });
  document.getElementById("extras-close").addEventListener("click", function () {
    extrasDialog.close();
  });
  document.getElementById("extras-back").addEventListener("click", function () {
    extrasDialog.close();
    settingsDialog.showModal();
  });
  document.getElementById("settings-close").addEventListener("click", function () {
    burstParticles(settingsDialog, 14);
    settingsDialog.close();
  });
  document.querySelector(".brand").addEventListener("click", function (event) {
    event.preventDefault();
    showPage("home", true);
  });

  function navigateFromSearch(input) {
    const query = input.value.trim();
    if (!query) return;

    let destination;
    const hasHttpScheme = /^https?:\/\//i.test(query);
    const looksLikeDomain = /^(localhost|(?:[\w-]+\.)+[\w-]+)(?::\d+)?(?:\/\S*)?$/i.test(query);
    try {
      if (hasHttpScheme || looksLikeDomain) {
        const candidate = new URL(hasHttpScheme ? query : "https://" + query);
        destination = candidate.href;
      }
    } catch (error) {
      if (!(error instanceof TypeError)) throw error;
    }

    if (!destination) {
      destination = "https://www.google.com/search?q=" + encodeURIComponent(query);
    }
    window.location.assign(destination);
  }

  [addressInput, dashboardSearch].forEach(function (input, index, inputs) {
    input.addEventListener("input", function () {
      inputs[1 - index].value = input.value;
    });
    input.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        navigateFromSearch(input);
      }
    });
  });
  document.addEventListener("keydown", function (event) {
    const activeElement = document.activeElement;
    const isEditing = activeElement.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(activeElement.tagName);
    if (!isEditing && !event.altKey && !event.ctrlKey && !event.metaKey
      && getActiveTab().page === "extras" && !extrasScreen.hidden && !calculatorTool.hidden) {
      const calculatorKeys = {
        "+": "add",
        "-": "subtract",
        "*": "multiply",
        "/": "divide",
        ".": "decimal",
        Enter: "equals",
        "=": "equals",
        Backspace: "backspace"
      };
      const action = /^\d$/.test(event.key) ? event.key : calculatorKeys[event.key];
      if (action) {
        event.preventDefault();
        handleCalculatorInput(action);
        return;
      }
    }
    if (event.key.toLowerCase() === "t" && !event.altKey && !event.ctrlKey && !event.metaKey
      && !event.repeat && !isEditing && intro.hidden
      && !startupDialog.open && !settingsDialog.open && !extrasDialog.open
      && getActiveTab().page !== "home") {
      event.preventDefault();
      const time = new Intl.DateTimeFormat(undefined, {
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit"
      }).format(new Date());
      displayNotice("Current time: " + time);
      return;
    }
    if (event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey
      && !startupDialog.open && !settingsDialog.open && intro.hidden
      && !isEditing) {
      event.preventDefault();
      toggleDashboard();
      return;
    }
    if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
      event.preventDefault();
      addressInput.focus();
    }
    if (event.key === "Escape" && !sidebarHidden) setSidebarHidden(true);
  });
  window.addEventListener("popstate", function (event) {
    const page = event.state && event.state.page;
    showPage(pageNames.includes(page) ? page : "home", false);
  });

  const bookmarkSaved = localStorage.getItem("unseen-bookmark") === "true";
  const bookmarkButton = document.getElementById("bookmark-button");
  bookmarkButton.setAttribute("aria-pressed", String(bookmarkSaved));
  bookmarkButton.setAttribute("aria-label", bookmarkSaved ? "Remove bookmark" : "Bookmark this page");
  bookmarkButton.title = bookmarkSaved ? "Remove bookmark" : "Bookmark this page";

  function displayNotice(message) {
    if (!notificationsToggle.checked) return;

    const notice = document.createElement("aside");
    notice.className = "project-notice";
    notice.setAttribute("role", "status");
    notice.setAttribute("aria-live", "polite");

    const mark = document.createElement("span");
    mark.className = "notice-mark";
    mark.setAttribute("aria-hidden", "true");
    mark.textContent = "i";

    const noticeMessage = document.createElement("span");
    noticeMessage.className = "notice-message";
    noticeMessage.textContent = message;

    const close = document.createElement("button");
    close.className = "notice-close";
    close.type = "button";
    close.setAttribute("aria-label", "Dismiss notification");
    close.textContent = "×";
    close.addEventListener("click", function () { dismissNotification(notice); });

    const timer = document.createElement("span");
    timer.className = "notice-timer";
    timer.setAttribute("aria-hidden", "true");
    timer.appendChild(document.createElement("span"));

    notice.append(mark, noticeMessage, close, timer);
    notificationStack.prepend(notice);
    window.requestAnimationFrame(function () {
      if (notice.isConnected) notice.classList.add("is-visible");
    });
    notificationTimeouts.set(notice, window.setTimeout(function () {
      dismissNotification(notice);
    }, 6500));
  }

  function showProjectNotice() {
    if (!notificationsToggle.checked) return;
    if (aboutBlankBlocked) {
      aboutBlankBlocked = false;
      displayNotice("The new tab was blocked. Allow pop-ups for this site and try again.");
      return;
    }
    if (localStorage.getItem("unseen-show-notice") === "false") return;
    displayNotice("Unseen is still a work in progress project. Expect bugs!");
  }

  function finishIntro() {
    intro.classList.add("is-leaving");
    document.body.classList.add("intro-complete");
    introTimers.push(window.setTimeout(function () {
      intro.hidden = true;
      controlsHint.hidden = false;
      controlsHint.classList.add("is-visible");
      showProjectNotice();
    }, 720));
  }

  function playIntro() {
    introTimers.forEach(window.clearTimeout);
    introTimers = [];
    intro.hidden = false;
    controlsHint.hidden = true;
    controlsHint.classList.remove("is-visible");
    intro.classList.remove("is-leaving");
    introTitle.classList.remove("is-typing");
    introTitle.classList.remove("is-demo-flickering", "is-demo-cutoff");
    introTitle.textContent = "Unseen";
    introLogo.classList.remove("is-visible");
    document.body.classList.remove("intro-complete");
    clearNotifications();
    void intro.offsetWidth;
    introTitle.classList.add("is-typing");
    introTimers.push(window.setTimeout(function () { introLogo.classList.add("is-visible"); }, 160));
    introTimers.push(window.setTimeout(function () {
      introTitle.textContent = "Demo";
      introTitle.classList.remove("is-typing");
      introTitle.classList.add("is-demo-flickering");
    }, 1120));
    introTimers.push(window.setTimeout(function () {
      introTitle.classList.remove("is-demo-flickering");
      introTitle.classList.add("is-demo-cutoff");
    }, 1880));
    introTimers.push(window.setTimeout(finishIntro, 2120));
  }

  const startupPage = document.getElementById("startup-page");
  startupPage.value = localStorage.getItem("unseen-startup-page") || "home";
  startupPage.addEventListener("change", function () {
    localStorage.setItem("unseen-startup-page", startupPage.value);
  });
  const noticeToggle = document.getElementById("notice-toggle");
  noticeToggle.checked = localStorage.getItem("unseen-show-notice") !== "false";
  noticeToggle.addEventListener("change", function () {
    localStorage.setItem("unseen-show-notice", String(noticeToggle.checked));
  });
  notificationsToggle.checked = localStorage.getItem("unseen-notifications-enabled") !== "false";
  notificationsToggle.addEventListener("change", function () {
    localStorage.setItem("unseen-notifications-enabled", String(notificationsToggle.checked));
    if (!notificationsToggle.checked) clearNotifications();
  });
  cursorTrailToggle.checked = localStorage.getItem("unseen-cursor-trail") !== "false";
  cursorTrailColor.value = localStorage.getItem("unseen-cursor-trail-color") || "#aa85ff";
  cursorTrailToggle.addEventListener("change", function () {
    localStorage.setItem("unseen-cursor-trail", String(cursorTrailToggle.checked));
    if (!cursorTrailToggle.checked) clearCursorTrail();
  });
  cursorTrailColor.addEventListener("input", function () {
    localStorage.setItem("unseen-cursor-trail-color", cursorTrailColor.value);
    cursorTrailContext.fillStyle = cursorTrailColor.value;
  });

  function renderBatteryStatus() {
    if (!batteryToggle.checked) {
      batteryIndicator.hidden = true;
      return;
    }
    batteryIndicator.hidden = false;
    if (!batteryManager || !Number.isFinite(batteryManager.level)) {
      batteryIndicator.textContent = "Battery status unavailable";
      return;
    }
    batteryIndicator.textContent = Math.round(batteryManager.level * 100) + "% battery"
      + (batteryManager.charging ? " · charging" : "");
  }

  function setupBatteryIndicator() {
    if (!batteryToggle.checked) {
      renderBatteryStatus();
      return;
    }
    if (typeof navigator.getBattery !== "function") {
      batteryManager = null;
      renderBatteryStatus();
      return;
    }
    if (batteryManager) {
      renderBatteryStatus();
      return;
    }
    if (batteryRequestPending) return;

    batteryRequestPending = true;
    let batteryRequest;
    try {
      batteryRequest = navigator.getBattery();
    } catch (error) {
      batteryRequestPending = false;
      console.error("Could not read battery status:", error);
      batteryManager = null;
      renderBatteryStatus();
      return;
    }
    Promise.resolve(batteryRequest).then(function (manager) {
      batteryRequestPending = false;
      batteryManager = manager;
      if (!batteryEventsBound) {
        ["levelchange", "chargingchange"].forEach(function (eventName) {
          manager.addEventListener(eventName, renderBatteryStatus);
        });
        batteryEventsBound = true;
      }
      renderBatteryStatus();
    }).catch(function (error) {
      batteryRequestPending = false;
      console.error("Could not read battery status:", error);
      batteryManager = null;
      batteryIndicator.textContent = "Battery status unavailable";
      batteryIndicator.hidden = !batteryToggle.checked;
    });
  }

  batteryToggle.checked = localStorage.getItem("unseen-show-battery") === "true";
  batteryToggle.addEventListener("change", function () {
    localStorage.setItem("unseen-show-battery", String(batteryToggle.checked));
    setupBatteryIndicator();
  });
  setupBatteryIndicator();

  function updateHomeTime() {
    const now = new Date();
    if (clockToggle.checked) {
      homeClock.textContent = new Intl.DateTimeFormat(undefined, {
        hour: "numeric",
        minute: "2-digit",
        hour12: !clock24HourToggle.checked
      }).format(now);
    }
    if (dateToggle.checked) {
      homeDate.textContent = new Intl.DateTimeFormat(undefined, {
        weekday: "long",
        month: "long",
        day: "numeric"
      }).format(now);
    }
  }

  function renderHomeExtras() {
    const showTime = clockToggle.checked || dateToggle.checked;
    homeExtras.hidden = !showTime && !weatherToggle.checked;
    homeTime.hidden = !showTime;
    homeClock.hidden = !clockToggle.checked;
    homeDate.hidden = !dateToggle.checked;
    homeWeather.hidden = !weatherToggle.checked;
    if (weatherToggle.checked) {
      weatherLocation.textContent = weatherCity.value.trim() + ", " + weatherCountry.value.trim();
    }
    if (showTime) {
      updateHomeTime();
      if (!homeClockInterval) {
        homeClockInterval = window.setInterval(updateHomeTime, 15000);
      }
    } else if (homeClockInterval) {
      window.clearInterval(homeClockInterval);
      homeClockInterval = 0;
    }
  }

  function normalizeLocationName(value) {
    return value.trim().toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "");
  }

  function getWeatherDescription(code) {
    const conditions = {
      0: ["Clear sky", "☀"],
      1: ["Mostly clear", "☀"],
      2: ["Partly cloudy", "◐"],
      3: ["Overcast", "☁"],
      45: ["Fog", "≋"],
      48: ["Rime fog", "≋"],
      51: ["Light drizzle", "☂"],
      53: ["Drizzle", "☂"],
      55: ["Heavy drizzle", "☂"],
      56: ["Freezing drizzle", "❄"],
      57: ["Freezing drizzle", "❄"],
      61: ["Light rain", "☂"],
      63: ["Rain", "☂"],
      65: ["Heavy rain", "☂"],
      66: ["Freezing rain", "❄"],
      67: ["Freezing rain", "❄"],
      71: ["Light snow", "❄"],
      73: ["Snow", "❄"],
      75: ["Heavy snow", "❄"],
      77: ["Snow grains", "❄"],
      80: ["Rain showers", "☂"],
      81: ["Rain showers", "☂"],
      82: ["Heavy rain showers", "☂"],
      85: ["Snow showers", "❄"],
      86: ["Heavy snow showers", "❄"],
      95: ["Thunderstorm", "⚡"],
      96: ["Thunderstorm with hail", "⚡"],
      99: ["Thunderstorm with hail", "⚡"]
    };
    return conditions[code] || ["Current conditions", "◌"];
  }

  async function loadWeather() {
    const city = weatherCity.value.trim();
    const country = weatherCountry.value.trim();
    if (!weatherToggle.checked || !city || !country) return;

    if (weatherRequestController) weatherRequestController.abort();
    const controller = new AbortController();
    weatherRequestController = controller;
    const timeout = window.setTimeout(function () { controller.abort(); }, 15000);
    weatherLocation.textContent = city + ", " + country;
    weatherCondition.textContent = "Looking up current conditions...";
    weatherStatus.textContent = "";
    weatherTemperature.textContent = "";

    try {
      const locationUrl = new URL("https://geocoding-api.open-meteo.com/v1/search");
      locationUrl.searchParams.set("name", city);
      locationUrl.searchParams.set("count", "100");
      locationUrl.searchParams.set("language", "en");
      locationUrl.searchParams.set("format", "json");
      if (/^[a-z]{2}$/i.test(country)) locationUrl.searchParams.set("countryCode", country.toUpperCase());

      const locationResponse = await fetch(locationUrl.href, { signal: controller.signal });
      if (!locationResponse.ok) throw new Error("The location service returned an error.");
      const locationData = await locationResponse.json();
      const expectedCountry = normalizeLocationName(country);
      const place = (locationData.results || []).find(function (result) {
        return normalizeLocationName(result.country || "") === expectedCountry
          || normalizeLocationName(result.country_code || "") === expectedCountry;
      });
      if (!place) throw new Error("Could not find that city in the selected country.");

      const forecastUrl = new URL("https://api.open-meteo.com/v1/forecast");
      forecastUrl.searchParams.set("latitude", String(place.latitude));
      forecastUrl.searchParams.set("longitude", String(place.longitude));
      forecastUrl.searchParams.set("current", "temperature_2m,relative_humidity_2m,weather_code");
      forecastUrl.searchParams.set("timezone", "auto");
      const forecastResponse = await fetch(forecastUrl.href, { signal: controller.signal });
      if (!forecastResponse.ok) throw new Error("The weather service returned an error.");
      const forecastData = await forecastResponse.json();
      const current = forecastData.current;
      if (!current || !Number.isFinite(current.temperature_2m)) {
        throw new Error("No current weather is available for that location.");
      }

      latestTemperatureCelsius = current.temperature_2m;
      const fahrenheit = weatherUnit.value === "fahrenheit";
      const temperature = fahrenheit ? (latestTemperatureCelsius * 9 / 5) + 32 : latestTemperatureCelsius;
      const condition = getWeatherDescription(current.weather_code);
      weatherSymbol.textContent = condition[1];
      weatherCondition.textContent = condition[0];
      weatherTemperature.textContent = Math.round(temperature) + "°" + (fahrenheit ? "F" : "C");
      weatherStatus.textContent = Number.isFinite(current.relative_humidity_2m)
        ? "Humidity " + current.relative_humidity_2m + "% · Open-Meteo"
        : "Current data from Open-Meteo";
    } catch (error) {
      if (controller.signal.aborted && weatherRequestController !== controller) return;
      const message = error.name === "AbortError"
        ? "Weather request timed out. Try again."
        : error.message;
      weatherCondition.textContent = "Weather unavailable";
      weatherStatus.textContent = message;
      console.error("Could not load weather:", error);
    } finally {
      window.clearTimeout(timeout);
      if (weatherRequestController === controller) weatherRequestController = null;
    }
  }

  function saveExtrasSettings(refreshWeather) {
    const city = weatherCity.value.trim();
    const country = weatherCountry.value.trim();
    if (weatherToggle.checked && (!city || !country)) {
      weatherToggle.checked = false;
      extrasStatus.textContent = "Enter both a city and country before enabling weather.";
    } else {
      extrasStatus.textContent = "";
    }
    localStorage.setItem("unseen-weather-enabled", String(weatherToggle.checked));
    localStorage.setItem("unseen-weather-city", city);
    localStorage.setItem("unseen-weather-country", country);
    localStorage.setItem("unseen-weather-unit", weatherUnit.value);
    localStorage.setItem("unseen-home-clock", String(clockToggle.checked));
    localStorage.setItem("unseen-home-clock-24h", String(clock24HourToggle.checked));
    localStorage.setItem("unseen-home-date", String(dateToggle.checked));
    renderHomeExtras();
    if (weatherToggle.checked && refreshWeather) {
      loadWeather();
    } else if (!weatherToggle.checked && weatherRequestController) {
      weatherRequestController.abort();
      weatherRequestController = null;
    } else if (weatherToggle.checked && latestTemperatureCelsius !== null) {
      const fahrenheit = weatherUnit.value === "fahrenheit";
      const temperature = fahrenheit ? (latestTemperatureCelsius * 9 / 5) + 32 : latestTemperatureCelsius;
      weatherTemperature.textContent = Math.round(temperature) + "°" + (fahrenheit ? "F" : "C");
    }
  }

  weatherCity.value = localStorage.getItem("unseen-weather-city") || "";
  weatherCountry.value = localStorage.getItem("unseen-weather-country") || "";
  weatherToggle.checked = localStorage.getItem("unseen-weather-enabled") === "true"
    && Boolean(weatherCity.value.trim() && weatherCountry.value.trim());
  weatherUnit.value = localStorage.getItem("unseen-weather-unit") === "fahrenheit" ? "fahrenheit" : "celsius";
  clockToggle.checked = localStorage.getItem("unseen-home-clock") === "true";
  clock24HourToggle.checked = localStorage.getItem("unseen-home-clock-24h") === "true";
  dateToggle.checked = localStorage.getItem("unseen-home-date") === "true";
  renderHomeExtras();
  weatherToggle.addEventListener("change", function () {
    saveExtrasSettings(weatherToggle.checked);
  });
  [weatherCity, weatherCountry].forEach(function (input) {
    input.addEventListener("change", function () {
      saveExtrasSettings(weatherToggle.checked);
    });
  });
  weatherUnit.addEventListener("change", function () {
    saveExtrasSettings(false);
  });
  [clockToggle, clock24HourToggle, dateToggle].forEach(function (toggle) {
    toggle.addEventListener("change", function () {
      saveExtrasSettings(false);
    });
  });
  weatherRefresh.addEventListener("click", loadWeather);

  function applyBackgroundSettings() {
    app.dataset.homeTheme = homeBackground.value;
    app.dataset.tabsTheme = tabsBackground.value;
    app.style.setProperty("--home-color", homeBackgroundColor.value);
    app.style.setProperty("--tabs-color", tabsBackgroundColor.value);
  }

  function loadThemeChoice(select, storageKey, fallback) {
    const saved = localStorage.getItem(storageKey);
    select.value = themeNames.includes(saved) ? saved : fallback;
    select.addEventListener("change", function () {
      localStorage.setItem(storageKey, select.value);
      applyBackgroundSettings();
    });
  }

  loadThemeChoice(homeBackground, "unseen-home-background", "aurora");
  loadThemeChoice(tabsBackground, "unseen-tabs-background", "aurora");
  homeBackgroundColor.value = /^#[\da-f]{6}$/i.test(localStorage.getItem("unseen-home-background-color") || "")
    ? localStorage.getItem("unseen-home-background-color")
    : "#8064d8";
  tabsBackgroundColor.value = /^#[\da-f]{6}$/i.test(localStorage.getItem("unseen-tabs-background-color") || "")
    ? localStorage.getItem("unseen-tabs-background-color")
    : "#8064d8";
  homeBackgroundColor.addEventListener("input", function () {
    localStorage.setItem("unseen-home-background-color", homeBackgroundColor.value);
    applyBackgroundSettings();
  });
  tabsBackgroundColor.addEventListener("input", function () {
    localStorage.setItem("unseen-tabs-background-color", tabsBackgroundColor.value);
    applyBackgroundSettings();
  });
  themeAnimationToggle.checked = localStorage.getItem("unseen-theme-animations") !== "false";
  themeAnimationToggle.addEventListener("change", function () {
    localStorage.setItem("unseen-theme-animations", String(themeAnimationToggle.checked));
    app.classList.toggle("theme-animations-off", !themeAnimationToggle.checked);
  });
  const savedFont = localStorage.getItem("unseen-site-font");
  siteFont.value = Object.prototype.hasOwnProperty.call(fonts, savedFont) ? savedFont : "dm-sans";
  document.documentElement.style.setProperty("--site-font", fonts[siteFont.value]);
  siteFont.addEventListener("change", function () {
    localStorage.setItem("unseen-site-font", siteFont.value);
    document.documentElement.style.setProperty("--site-font", fonts[siteFont.value]);
  });
  applyBackgroundSettings();
  app.classList.toggle("theme-animations-off", !themeAnimationToggle.checked);

  function chooseTip(previousTip) {
    const options = tips.filter(function (tip) { return tip !== previousTip; });
    const tip = options[Math.floor(Math.random() * options.length)];
    sidebarTip.textContent = tip;
    return tip;
  }

  let currentTip = chooseTip("");
  window.setInterval(function () {
    currentTip = chooseTip(currentTip);
  }, 8000);
  document.getElementById("replay-intro").addEventListener("click", function () {
    settingsDialog.close();
    playIntro();
  });

  function startExperience() {
    const parameters = new URLSearchParams(window.location.search);
    const requestedGame = games.find(function (game) { return game.title === parameters.get("unseen-game"); });
    const initialPage = requestedGame ? "games" : window.location.hash.slice(1);
    const page = requestedGame
      ? "games"
      : (savedTabState
        ? getActiveTab().page
        : (pageNames.includes(initialPage) ? initialPage : (startupPage.value === "games" ? "games" : "home")));
    showPage(page, false);
    if (requestedGame) openGame(requestedGame);
    playIntro();
  }

  document.getElementById("continue-here").addEventListener("click", function () {
    burstParticles(startupDialog, 16);
    startupDialog.close();
    startExperience();
  });
  document.getElementById("open-about-blank").addEventListener("click", function () {
    burstParticles(startupDialog, 16);
    startupDialog.close();
    openInAboutBlank();
    startExperience();
  });
  startupDialog.addEventListener("cancel", function (event) {
    event.preventDefault();
  });

  if (new URLSearchParams(window.location.search).has("unseen-blank")) {
    startExperience();
  } else {
    startupDialog.showModal();
  }
}());
