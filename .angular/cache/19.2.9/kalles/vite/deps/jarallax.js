import {
  __spreadValues
} from "./chunk-CX3I3NQG.js";

// node_modules/jarallax/dist/jarallax.esm.js
var defaults$1 = {
  // Base parallax options.
  type: "scroll",
  speed: 0.5,
  containerClass: "jarallax-container",
  imgSrc: null,
  imgElement: ".jarallax-img",
  imgSize: "cover",
  imgPosition: "50% 50%",
  imgRepeat: "no-repeat",
  keepImg: false,
  elementInViewport: null,
  zIndex: -100,
  disableParallax: false,
  // Callbacks.
  onScroll: null,
  onInit: null,
  onDestroy: null,
  onCoverImage: null,
  // Video options.
  videoClass: "jarallax-video",
  videoSrc: null,
  videoStartTime: 0,
  videoEndTime: 0,
  videoVolume: 0,
  videoLoop: true,
  videoPlayOnlyVisible: true,
  videoLazyLoading: true,
  disableVideo: false,
  // Video callbacks.
  onVideoInsert: null,
  onVideoWorkerInit: null
};
var win$1;
if (typeof window !== "undefined") {
  win$1 = window;
} else if (typeof global !== "undefined") {
  win$1 = global;
} else if (typeof self !== "undefined") {
  win$1 = self;
} else {
  win$1 = {};
}
var global$2 = win$1;
function css(el, styles) {
  if (typeof styles === "string") {
    return global$2.getComputedStyle(el).getPropertyValue(styles);
  }
  Object.keys(styles).forEach((key) => {
    el.style[key] = styles[key];
  });
  return el;
}
function extend$1(out, ...args) {
  out = out || {};
  Object.keys(args).forEach((i) => {
    if (!args[i]) {
      return;
    }
    Object.keys(args[i]).forEach((key) => {
      out[key] = args[i][key];
    });
  });
  return out;
}
function getParents(elem) {
  const parents = [];
  while (elem.parentElement !== null) {
    elem = elem.parentElement;
    if (elem.nodeType === 1) {
      parents.push(elem);
    }
  }
  return parents;
}
function ready(callback) {
  if (document.readyState === "complete" || document.readyState === "interactive") {
    callback();
  } else {
    document.addEventListener("DOMContentLoaded", callback, {
      capture: true,
      once: true,
      passive: true
    });
  }
}
var {
  navigator: navigator$1
} = global$2;
var mobileAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator$1.userAgent);
function isMobile() {
  return mobileAgent;
}
var wndW;
var wndH;
var $deviceHelper;
function getDeviceHeight() {
  if (!$deviceHelper && document.body) {
    $deviceHelper = document.createElement("div");
    $deviceHelper.style.cssText = "position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;";
    document.body.appendChild($deviceHelper);
  }
  return ($deviceHelper ? $deviceHelper.clientHeight : 0) || global$2.innerHeight || document.documentElement.clientHeight;
}
function updateWindowHeight() {
  wndW = global$2.innerWidth || document.documentElement.clientWidth;
  if (isMobile()) {
    wndH = getDeviceHeight();
  } else {
    wndH = global$2.innerHeight || document.documentElement.clientHeight;
  }
}
updateWindowHeight();
global$2.addEventListener("resize", updateWindowHeight);
global$2.addEventListener("orientationchange", updateWindowHeight);
global$2.addEventListener("load", updateWindowHeight);
ready(() => {
  updateWindowHeight();
});
function getWindowSize() {
  return {
    width: wndW,
    height: wndH
  };
}
var jarallaxList = [];
function updateParallax() {
  if (!jarallaxList.length) {
    return;
  }
  const {
    width: wndW2,
    height: wndH2
  } = getWindowSize();
  jarallaxList.forEach((data, k) => {
    const {
      instance,
      oldData
    } = data;
    if (!instance.isVisible()) {
      return;
    }
    const clientRect = instance.$item.getBoundingClientRect();
    const newData = {
      width: clientRect.width,
      height: clientRect.height,
      top: clientRect.top,
      bottom: clientRect.bottom,
      wndW: wndW2,
      wndH: wndH2
    };
    const isResized = !oldData || oldData.wndW !== newData.wndW || oldData.wndH !== newData.wndH || oldData.width !== newData.width || oldData.height !== newData.height;
    const isScrolled = isResized || !oldData || oldData.top !== newData.top || oldData.bottom !== newData.bottom;
    jarallaxList[k].oldData = newData;
    if (isResized) {
      instance.onResize();
    }
    if (isScrolled) {
      instance.onScroll();
    }
  });
  global$2.requestAnimationFrame(updateParallax);
}
var visibilityObserver = new global$2.IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.jarallax.isElementInViewport = entry.isIntersecting;
  });
}, {
  // We have to start parallax calculation before the block is in view
  // to prevent possible parallax jumping.
  rootMargin: "50px"
});
function addObserver(instance) {
  jarallaxList.push({
    instance
  });
  if (jarallaxList.length === 1) {
    global$2.requestAnimationFrame(updateParallax);
  }
  visibilityObserver.observe(instance.options.elementInViewport || instance.$item);
}
function removeObserver(instance) {
  jarallaxList.forEach((data, key) => {
    if (data.instance.instanceID === instance.instanceID) {
      jarallaxList.splice(key, 1);
    }
  });
  visibilityObserver.unobserve(instance.options.elementInViewport || instance.$item);
}
var {
  navigator
} = global$2;
var instanceID = 0;
var Jarallax = class {
  constructor(item, userOptions) {
    const self2 = this;
    self2.instanceID = instanceID;
    instanceID += 1;
    self2.$item = item;
    self2.defaults = __spreadValues({}, defaults$1);
    const dataOptions = self2.$item.dataset || {};
    const pureDataOptions = {};
    Object.keys(dataOptions).forEach((key) => {
      const lowerCaseOption = key.substr(0, 1).toLowerCase() + key.substr(1);
      if (lowerCaseOption && typeof self2.defaults[lowerCaseOption] !== "undefined") {
        pureDataOptions[lowerCaseOption] = dataOptions[key];
      }
    });
    self2.options = self2.extend({}, self2.defaults, pureDataOptions, userOptions);
    self2.pureOptions = self2.extend({}, self2.options);
    Object.keys(self2.options).forEach((key) => {
      if (self2.options[key] === "true") {
        self2.options[key] = true;
      } else if (self2.options[key] === "false") {
        self2.options[key] = false;
      }
    });
    self2.options.speed = Math.min(2, Math.max(-1, parseFloat(self2.options.speed)));
    if (typeof self2.options.disableParallax === "string") {
      self2.options.disableParallax = new RegExp(self2.options.disableParallax);
    }
    if (self2.options.disableParallax instanceof RegExp) {
      const disableParallaxRegexp = self2.options.disableParallax;
      self2.options.disableParallax = () => disableParallaxRegexp.test(navigator.userAgent);
    }
    if (typeof self2.options.disableParallax !== "function") {
      const disableParallaxDefault = self2.options.disableParallax;
      self2.options.disableParallax = () => disableParallaxDefault === true;
    }
    if (typeof self2.options.disableVideo === "string") {
      self2.options.disableVideo = new RegExp(self2.options.disableVideo);
    }
    if (self2.options.disableVideo instanceof RegExp) {
      const disableVideoRegexp = self2.options.disableVideo;
      self2.options.disableVideo = () => disableVideoRegexp.test(navigator.userAgent);
    }
    if (typeof self2.options.disableVideo !== "function") {
      const disableVideoDefault = self2.options.disableVideo;
      self2.options.disableVideo = () => disableVideoDefault === true;
    }
    let elementInVP = self2.options.elementInViewport;
    if (elementInVP && typeof elementInVP === "object" && typeof elementInVP.length !== "undefined") {
      [elementInVP] = elementInVP;
    }
    if (!(elementInVP instanceof Element)) {
      elementInVP = null;
    }
    self2.options.elementInViewport = elementInVP;
    self2.image = {
      src: self2.options.imgSrc || null,
      $container: null,
      useImgTag: false,
      // 1. Position fixed is needed for the most of browsers because absolute position have glitches
      // 2. On MacOS with smooth scroll there is a huge lags with absolute position - https://github.com/nk-o/jarallax/issues/75
      // 3. Previously used 'absolute' for mobile devices. But we re-tested on iPhone 12 and 'fixed' position is working better, then 'absolute', so for now position is always 'fixed'
      position: "fixed"
    };
    if (self2.initImg() && self2.canInitParallax()) {
      self2.init();
    }
  }
  css(el, styles) {
    return css(el, styles);
  }
  extend(out, ...args) {
    return extend$1(out, ...args);
  }
  // get window size and scroll position. Useful for extensions
  getWindowData() {
    const {
      width,
      height
    } = getWindowSize();
    return {
      width,
      height,
      y: document.documentElement.scrollTop
    };
  }
  // Jarallax functions
  initImg() {
    const self2 = this;
    let $imgElement = self2.options.imgElement;
    if ($imgElement && typeof $imgElement === "string") {
      $imgElement = self2.$item.querySelector($imgElement);
    }
    if (!($imgElement instanceof Element)) {
      if (self2.options.imgSrc) {
        $imgElement = new Image();
        $imgElement.src = self2.options.imgSrc;
      } else {
        $imgElement = null;
      }
    }
    if ($imgElement) {
      if (self2.options.keepImg) {
        self2.image.$item = $imgElement.cloneNode(true);
      } else {
        self2.image.$item = $imgElement;
        self2.image.$itemParent = $imgElement.parentNode;
      }
      self2.image.useImgTag = true;
    }
    if (self2.image.$item) {
      return true;
    }
    if (self2.image.src === null) {
      self2.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
      self2.image.bgImage = self2.css(self2.$item, "background-image");
    }
    return !(!self2.image.bgImage || self2.image.bgImage === "none");
  }
  canInitParallax() {
    return !this.options.disableParallax();
  }
  init() {
    const self2 = this;
    const containerStyles = {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      overflow: "hidden"
    };
    let imageStyles = {
      pointerEvents: "none",
      transformStyle: "preserve-3d",
      backfaceVisibility: "hidden"
    };
    if (!self2.options.keepImg) {
      const curStyle = self2.$item.getAttribute("style");
      if (curStyle) {
        self2.$item.setAttribute("data-jarallax-original-styles", curStyle);
      }
      if (self2.image.useImgTag) {
        const curImgStyle = self2.image.$item.getAttribute("style");
        if (curImgStyle) {
          self2.image.$item.setAttribute("data-jarallax-original-styles", curImgStyle);
        }
      }
    }
    if (self2.css(self2.$item, "position") === "static") {
      self2.css(self2.$item, {
        position: "relative"
      });
    }
    if (self2.css(self2.$item, "z-index") === "auto") {
      self2.css(self2.$item, {
        zIndex: 0
      });
    }
    self2.image.$container = document.createElement("div");
    self2.css(self2.image.$container, containerStyles);
    self2.css(self2.image.$container, {
      "z-index": self2.options.zIndex
    });
    if (this.image.position === "fixed") {
      self2.css(self2.image.$container, {
        "-webkit-clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
      });
    }
    self2.image.$container.setAttribute("id", `jarallax-container-${self2.instanceID}`);
    if (self2.options.containerClass) {
      self2.image.$container.setAttribute("class", self2.options.containerClass);
    }
    self2.$item.appendChild(self2.image.$container);
    if (self2.image.useImgTag) {
      imageStyles = self2.extend({
        "object-fit": self2.options.imgSize,
        "object-position": self2.options.imgPosition,
        "max-width": "none"
      }, containerStyles, imageStyles);
    } else {
      self2.image.$item = document.createElement("div");
      if (self2.image.src) {
        imageStyles = self2.extend({
          "background-position": self2.options.imgPosition,
          "background-size": self2.options.imgSize,
          "background-repeat": self2.options.imgRepeat,
          "background-image": self2.image.bgImage || `url("${self2.image.src}")`
        }, containerStyles, imageStyles);
      }
    }
    if (self2.options.type === "opacity" || self2.options.type === "scale" || self2.options.type === "scale-opacity" || self2.options.speed === 1) {
      self2.image.position = "absolute";
    }
    if (self2.image.position === "fixed") {
      const $parents = getParents(self2.$item).filter((el) => {
        const styles = global$2.getComputedStyle(el);
        const parentTransform = styles["-webkit-transform"] || styles["-moz-transform"] || styles.transform;
        const overflowRegex = /(auto|scroll)/;
        return parentTransform && parentTransform !== "none" || overflowRegex.test(styles.overflow + styles["overflow-y"] + styles["overflow-x"]);
      });
      self2.image.position = $parents.length ? "absolute" : "fixed";
    }
    imageStyles.position = self2.image.position;
    self2.css(self2.image.$item, imageStyles);
    self2.image.$container.appendChild(self2.image.$item);
    self2.onResize();
    self2.onScroll(true);
    if (self2.options.onInit) {
      self2.options.onInit.call(self2);
    }
    if (self2.css(self2.$item, "background-image") !== "none") {
      self2.css(self2.$item, {
        "background-image": "none"
      });
    }
    addObserver(self2);
  }
  destroy() {
    const self2 = this;
    removeObserver(self2);
    const originalStylesTag = self2.$item.getAttribute("data-jarallax-original-styles");
    self2.$item.removeAttribute("data-jarallax-original-styles");
    if (!originalStylesTag) {
      self2.$item.removeAttribute("style");
    } else {
      self2.$item.setAttribute("style", originalStylesTag);
    }
    if (self2.image.useImgTag) {
      const originalStylesImgTag = self2.image.$item.getAttribute("data-jarallax-original-styles");
      self2.image.$item.removeAttribute("data-jarallax-original-styles");
      if (!originalStylesImgTag) {
        self2.image.$item.removeAttribute("style");
      } else {
        self2.image.$item.setAttribute("style", originalStylesTag);
      }
      if (self2.image.$itemParent) {
        self2.image.$itemParent.appendChild(self2.image.$item);
      }
    }
    if (self2.image.$container) {
      self2.image.$container.parentNode.removeChild(self2.image.$container);
    }
    if (self2.options.onDestroy) {
      self2.options.onDestroy.call(self2);
    }
    delete self2.$item.jarallax;
  }
  coverImage() {
    const self2 = this;
    const {
      height: wndH2
    } = getWindowSize();
    const rect = self2.image.$container.getBoundingClientRect();
    const contH = rect.height;
    const {
      speed
    } = self2.options;
    const isScroll = self2.options.type === "scroll" || self2.options.type === "scroll-opacity";
    let scrollDist = 0;
    let resultH = contH;
    let resultMT = 0;
    if (isScroll) {
      if (speed < 0) {
        scrollDist = speed * Math.max(contH, wndH2);
        if (wndH2 < contH) {
          scrollDist -= speed * (contH - wndH2);
        }
      } else {
        scrollDist = speed * (contH + wndH2);
      }
      if (speed > 1) {
        resultH = Math.abs(scrollDist - wndH2);
      } else if (speed < 0) {
        resultH = scrollDist / speed + Math.abs(scrollDist);
      } else {
        resultH += (wndH2 - contH) * (1 - speed);
      }
      scrollDist /= 2;
    }
    self2.parallaxScrollDistance = scrollDist;
    if (isScroll) {
      resultMT = (wndH2 - resultH) / 2;
    } else {
      resultMT = (contH - resultH) / 2;
    }
    self2.css(self2.image.$item, {
      height: `${resultH}px`,
      marginTop: `${resultMT}px`,
      left: self2.image.position === "fixed" ? `${rect.left}px` : "0",
      width: `${rect.width}px`
    });
    if (self2.options.onCoverImage) {
      self2.options.onCoverImage.call(self2);
    }
    return {
      image: {
        height: resultH,
        marginTop: resultMT
      },
      container: rect
    };
  }
  isVisible() {
    return this.isElementInViewport || false;
  }
  onScroll(force) {
    const self2 = this;
    if (!force && !self2.isVisible()) {
      return;
    }
    const {
      height: wndH2
    } = getWindowSize();
    const rect = self2.$item.getBoundingClientRect();
    const contT = rect.top;
    const contH = rect.height;
    const styles = {};
    const beforeTop = Math.max(0, contT);
    const beforeTopEnd = Math.max(0, contH + contT);
    const afterTop = Math.max(0, -contT);
    const beforeBottom = Math.max(0, contT + contH - wndH2);
    const beforeBottomEnd = Math.max(0, contH - (contT + contH - wndH2));
    const afterBottom = Math.max(0, -contT + wndH2 - contH);
    const fromViewportCenter = 1 - 2 * ((wndH2 - contT) / (wndH2 + contH));
    let visiblePercent = 1;
    if (contH < wndH2) {
      visiblePercent = 1 - (afterTop || beforeBottom) / contH;
    } else if (beforeTopEnd <= wndH2) {
      visiblePercent = beforeTopEnd / wndH2;
    } else if (beforeBottomEnd <= wndH2) {
      visiblePercent = beforeBottomEnd / wndH2;
    }
    if (self2.options.type === "opacity" || self2.options.type === "scale-opacity" || self2.options.type === "scroll-opacity") {
      styles.transform = "translate3d(0,0,0)";
      styles.opacity = visiblePercent;
    }
    if (self2.options.type === "scale" || self2.options.type === "scale-opacity") {
      let scale = 1;
      if (self2.options.speed < 0) {
        scale -= self2.options.speed * visiblePercent;
      } else {
        scale += self2.options.speed * (1 - visiblePercent);
      }
      styles.transform = `scale(${scale}) translate3d(0,0,0)`;
    }
    if (self2.options.type === "scroll" || self2.options.type === "scroll-opacity") {
      let positionY = self2.parallaxScrollDistance * fromViewportCenter;
      if (self2.image.position === "absolute") {
        positionY -= contT;
      }
      styles.transform = `translate3d(0,${positionY}px,0)`;
    }
    self2.css(self2.image.$item, styles);
    if (self2.options.onScroll) {
      self2.options.onScroll.call(self2, {
        section: rect,
        beforeTop,
        beforeTopEnd,
        afterTop,
        beforeBottom,
        beforeBottomEnd,
        afterBottom,
        visiblePercent,
        fromViewportCenter
      });
    }
  }
  onResize() {
    this.coverImage();
  }
};
var jarallax$1 = function(items, options, ...args) {
  if (typeof HTMLElement === "object" ? items instanceof HTMLElement : items && typeof items === "object" && items !== null && items.nodeType === 1 && typeof items.nodeName === "string") {
    items = [items];
  }
  const len = items.length;
  let k = 0;
  let ret;
  for (k; k < len; k += 1) {
    if (typeof options === "object" || typeof options === "undefined") {
      if (!items[k].jarallax) {
        items[k].jarallax = new Jarallax(items[k], options);
      }
    } else if (items[k].jarallax) {
      ret = items[k].jarallax[options].apply(items[k].jarallax, args);
    }
    if (typeof ret !== "undefined") {
      return ret;
    }
  }
  return items;
};
jarallax$1.constructor = Jarallax;
var defaults = {
  autoplay: false,
  loop: false,
  mute: false,
  volume: 100,
  showControls: true,
  accessibilityHidden: false,
  // start / end video time in seconds
  startTime: 0,
  endTime: 0
};
function extend(out, ...args) {
  out = out || {};
  Object.keys(args).forEach((i) => {
    if (!args[i]) {
      return;
    }
    Object.keys(args[i]).forEach((key) => {
      out[key] = args[i][key];
    });
  });
  return out;
}
var ID = 0;
var VideoWorkerBase = class {
  type = "none";
  constructor(url, options) {
    const self2 = this;
    self2.url = url;
    self2.options_default = __spreadValues({}, defaults);
    self2.options = extend({}, self2.options_default, options);
    self2.videoID = self2.constructor.parseURL(url);
    if (self2.videoID) {
      self2.init();
    }
  }
  isValid() {
    return !!this.videoID;
  }
  init() {
    const self2 = this;
    self2.ID = ID;
    ID += 1;
    self2.playerID = `VideoWorker-${self2.ID}`;
  }
  // events
  on(name, callback) {
    this.userEventsList = this.userEventsList || [];
    (this.userEventsList[name] || (this.userEventsList[name] = [])).push(callback);
  }
  off(name, callback) {
    if (!this.userEventsList || !this.userEventsList[name]) {
      return;
    }
    if (!callback) {
      delete this.userEventsList[name];
    } else {
      this.userEventsList[name].forEach((val, key) => {
        if (val === callback) {
          this.userEventsList[name][key] = false;
        }
      });
    }
  }
  fire(name, ...args) {
    if (this.userEventsList && typeof this.userEventsList[name] !== "undefined") {
      this.userEventsList[name].forEach((val) => {
        if (val) {
          val.apply(this, args);
        }
      });
    }
  }
  /**
   * Methods used in providers.
   */
  /* eslint-disable */
  static parseURL(url) {
    return false;
  }
  play(start) {
  }
  pause() {
  }
  mute() {
  }
  unmute() {
  }
  setVolume(volume = false) {
  }
  getVolume(callback) {
  }
  getMuted(callback) {
  }
  setCurrentTime(currentTime = false) {
  }
  getCurrentTime(callback) {
  }
  getImageURL(callback) {
  }
  getVideo(callback) {
  }
  /* eslint-enable */
};
var win;
if (typeof window !== "undefined") {
  win = window;
} else if (typeof global !== "undefined") {
  win = global;
} else if (typeof self !== "undefined") {
  win = self;
} else {
  win = {};
}
var global$1 = win;
function Deferred() {
  this.doneCallbacks = [];
  this.failCallbacks = [];
}
Deferred.prototype = {
  execute(list, args) {
    let i = list.length;
    args = Array.prototype.slice.call(args);
    while (i) {
      i -= 1;
      list[i].apply(null, args);
    }
  },
  resolve(...args) {
    this.execute(this.doneCallbacks, args);
  },
  reject(...args) {
    this.execute(this.failCallbacks, args);
  },
  done(callback) {
    this.doneCallbacks.push(callback);
  },
  fail(callback) {
    this.failCallbacks.push(callback);
  }
};
var YoutubeAPIadded = 0;
var loadingYoutubePlayer = 0;
var loadingYoutubeDefer = new Deferred();
function loadAPI$1() {
  if (YoutubeAPIadded) {
    return;
  }
  YoutubeAPIadded = true;
  const src = "https://www.youtube.com/iframe_api";
  let tag = document.createElement("script");
  let head = document.getElementsByTagName("head")[0];
  tag.src = src;
  head.appendChild(tag);
  head = null;
  tag = null;
}
function onAPIready$1(callback) {
  if ((typeof global$1.YT === "undefined" || global$1.YT.loaded === 0) && !loadingYoutubePlayer) {
    loadingYoutubePlayer = 1;
    global$1.onYouTubeIframeAPIReady = function() {
      global$1.onYouTubeIframeAPIReady = null;
      loadingYoutubeDefer.resolve("done");
      callback();
    };
  } else if (typeof global$1.YT === "object" && global$1.YT.loaded === 1) {
    callback();
  } else {
    loadingYoutubeDefer.done(() => {
      callback();
    });
  }
}
var VideoWorkerYoutube = class extends VideoWorkerBase {
  type = "youtube";
  static parseURL(url) {
    const regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[1].length === 11 ? match[1] : false;
  }
  init() {
    super.init();
    loadAPI$1();
  }
  play(start) {
    const self2 = this;
    if (!self2.player || !self2.player.playVideo) {
      return;
    }
    if (typeof start !== "undefined") {
      self2.player.seekTo(start || 0);
    }
    if (global$1.YT.PlayerState.PLAYING !== self2.player.getPlayerState()) {
      if (self2.options.endTime && !self2.options.loop) {
        self2.getCurrentTime((seconds) => {
          if (seconds < self2.options.endTime) {
            self2.player.playVideo();
          }
        });
      } else {
        self2.player.playVideo();
      }
    }
  }
  pause() {
    const self2 = this;
    if (!self2.player || !self2.player.pauseVideo) {
      return;
    }
    if (global$1.YT.PlayerState.PLAYING === self2.player.getPlayerState()) {
      self2.player.pauseVideo();
    }
  }
  mute() {
    const self2 = this;
    if (!self2.player || !self2.player.mute) {
      return;
    }
    self2.player.mute();
  }
  unmute() {
    const self2 = this;
    if (!self2.player || !self2.player.unMute) {
      return;
    }
    self2.player.unMute();
  }
  setVolume(volume = false) {
    const self2 = this;
    if (!self2.player || typeof volume !== "number" || !self2.player.setVolume) {
      return;
    }
    self2.player.setVolume(volume);
  }
  getVolume(callback) {
    const self2 = this;
    if (!self2.player) {
      callback(false);
      return;
    }
    if (self2.player.getVolume) {
      callback(self2.player.getVolume());
    }
  }
  getMuted(callback) {
    const self2 = this;
    if (!self2.player) {
      callback(null);
      return;
    }
    if (self2.player.isMuted) {
      callback(self2.player.isMuted());
    }
  }
  setCurrentTime(currentTime = false) {
    const self2 = this;
    if (!self2.player || typeof currentTime !== "number" || !self2.player.seekTo) {
      return;
    }
    self2.player.seekTo(currentTime);
  }
  getCurrentTime(callback) {
    const self2 = this;
    if (!self2.player || !self2.player.getCurrentTime) {
      return;
    }
    callback(self2.player.getCurrentTime());
  }
  getImageURL(callback) {
    const self2 = this;
    if (self2.videoImage) {
      callback(self2.videoImage);
      return;
    }
    const availableSizes = ["maxresdefault", "sddefault", "hqdefault", "0"];
    let step = 0;
    const tempImg = new Image();
    tempImg.onload = function() {
      if ((this.naturalWidth || this.width) !== 120 || step === availableSizes.length - 1) {
        self2.videoImage = `https://img.youtube.com/vi/${self2.videoID}/${availableSizes[step]}.jpg`;
        callback(self2.videoImage);
      } else {
        step += 1;
        this.src = `https://img.youtube.com/vi/${self2.videoID}/${availableSizes[step]}.jpg`;
      }
    };
    tempImg.src = `https://img.youtube.com/vi/${self2.videoID}/${availableSizes[step]}.jpg`;
  }
  getVideo(callback) {
    const self2 = this;
    if (self2.$video) {
      callback(self2.$video);
      return;
    }
    onAPIready$1(() => {
      let hiddenDiv;
      if (!self2.$video) {
        hiddenDiv = document.createElement("div");
        hiddenDiv.style.display = "none";
      }
      self2.playerOptions = {
        // GDPR Compliance.
        host: "https://www.youtube-nocookie.com",
        videoId: self2.videoID,
        playerVars: {
          autohide: 1,
          rel: 0,
          autoplay: 0,
          // autoplay enable on mobile devices
          playsinline: 1
        }
      };
      if (!self2.options.showControls) {
        self2.playerOptions.playerVars.iv_load_policy = 3;
        self2.playerOptions.playerVars.modestbranding = 1;
        self2.playerOptions.playerVars.controls = 0;
        self2.playerOptions.playerVars.showinfo = 0;
        self2.playerOptions.playerVars.disablekb = 1;
      }
      let ytStarted;
      let ytProgressInterval;
      self2.playerOptions.events = {
        onReady(e) {
          if (self2.options.mute) {
            e.target.mute();
          } else if (typeof self2.options.volume === "number") {
            e.target.setVolume(self2.options.volume);
          }
          if (self2.options.autoplay) {
            self2.play(self2.options.startTime);
          }
          self2.fire("ready", e);
          if (self2.options.loop && !self2.options.endTime) {
            const secondsOffset = 0.1;
            self2.options.endTime = self2.player.getDuration() - secondsOffset;
          }
          setInterval(() => {
            self2.getVolume((volume) => {
              if (self2.options.volume !== volume) {
                self2.options.volume = volume;
                self2.fire("volumechange", e);
              }
            });
          }, 150);
        },
        onStateChange(e) {
          if (self2.options.loop && e.data === global$1.YT.PlayerState.ENDED) {
            self2.play(self2.options.startTime);
          }
          if (!ytStarted && e.data === global$1.YT.PlayerState.PLAYING) {
            ytStarted = 1;
            self2.fire("started", e);
          }
          if (e.data === global$1.YT.PlayerState.PLAYING) {
            self2.fire("play", e);
          }
          if (e.data === global$1.YT.PlayerState.PAUSED) {
            self2.fire("pause", e);
          }
          if (e.data === global$1.YT.PlayerState.ENDED) {
            self2.fire("ended", e);
          }
          if (e.data === global$1.YT.PlayerState.PLAYING) {
            ytProgressInterval = setInterval(() => {
              self2.fire("timeupdate", e);
              if (self2.options.endTime && self2.player.getCurrentTime() >= self2.options.endTime) {
                if (self2.options.loop) {
                  self2.play(self2.options.startTime);
                } else {
                  self2.pause();
                }
              }
            }, 150);
          } else {
            clearInterval(ytProgressInterval);
          }
        },
        onError(e) {
          self2.fire("error", e);
        }
      };
      const firstInit = !self2.$video;
      if (firstInit) {
        const div = document.createElement("div");
        div.setAttribute("id", self2.playerID);
        hiddenDiv.appendChild(div);
        document.body.appendChild(hiddenDiv);
      }
      self2.player = self2.player || new global$1.YT.Player(self2.playerID, self2.playerOptions);
      if (firstInit) {
        self2.$video = document.getElementById(self2.playerID);
        if (self2.options.accessibilityHidden) {
          self2.$video.setAttribute("tabindex", "-1");
          self2.$video.setAttribute("aria-hidden", "true");
        }
        self2.videoWidth = parseInt(self2.$video.getAttribute("width"), 10) || 1280;
        self2.videoHeight = parseInt(self2.$video.getAttribute("height"), 10) || 720;
      }
      callback(self2.$video);
    });
  }
};
var VimeoAPIadded = 0;
var loadingVimeoPlayer = 0;
var loadingVimeoDefer = new Deferred();
function loadAPI() {
  if (VimeoAPIadded) {
    return;
  }
  VimeoAPIadded = true;
  if (typeof global$1.Vimeo !== "undefined") {
    return;
  }
  const src = "https://player.vimeo.com/api/player.js";
  let tag = document.createElement("script");
  let head = document.getElementsByTagName("head")[0];
  tag.src = src;
  head.appendChild(tag);
  head = null;
  tag = null;
}
function onAPIready(callback) {
  if (typeof global$1.Vimeo === "undefined" && !loadingVimeoPlayer) {
    loadingVimeoPlayer = 1;
    const vimeoInterval = setInterval(() => {
      if (typeof global$1.Vimeo !== "undefined") {
        clearInterval(vimeoInterval);
        loadingVimeoDefer.resolve("done");
        callback();
      }
    }, 20);
  } else if (typeof global$1.Vimeo !== "undefined") {
    callback();
  } else {
    loadingVimeoDefer.done(() => {
      callback();
    });
  }
}
var VideoWorkerVimeo = class extends VideoWorkerBase {
  type = "vimeo";
  static parseURL(url) {
    const regExp = /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;
    const match = url.match(regExp);
    return match && match[3] ? match[3] : false;
  }
  // Try to extract a hash for private videos from the URL.
  // Thanks to https://github.com/sampotts/plyr
  static parseURLHash(url) {
    const regex = /^.*(vimeo.com\/|video\/)(\d+)(\?.*&*h=|\/)+([\d,a-f]+)/;
    const found = url.match(regex);
    return found && found.length === 5 ? found[4] : null;
  }
  init() {
    super.init();
    loadAPI();
  }
  play(start) {
    const self2 = this;
    if (!self2.player) {
      return;
    }
    if (typeof start !== "undefined") {
      self2.player.setCurrentTime(start);
    }
    self2.player.getPaused().then((paused) => {
      if (paused) {
        if (self2.options.endTime && !self2.options.loop) {
          self2.getCurrentTime((seconds) => {
            if (seconds < self2.options.endTime) {
              self2.player.play();
            }
          });
        } else {
          self2.player.play();
        }
      }
    });
  }
  pause() {
    const self2 = this;
    if (!self2.player) {
      return;
    }
    self2.player.getPaused().then((paused) => {
      if (!paused) {
        self2.player.pause();
      }
    });
  }
  mute() {
    const self2 = this;
    if (!self2.player || !self2.player.setVolume) {
      return;
    }
    self2.setVolume(0);
  }
  unmute() {
    const self2 = this;
    if (!self2.player || !self2.player.setVolume) {
      return;
    }
    self2.setVolume(self2.options.volume || 100);
  }
  setVolume(volume = false) {
    const self2 = this;
    if (!self2.player || typeof volume !== "number" || !self2.player.setVolume) {
      return;
    }
    self2.player.setVolume(volume / 100);
  }
  getVolume(callback) {
    const self2 = this;
    if (!self2.player) {
      callback(false);
      return;
    }
    if (self2.player.getVolume) {
      self2.player.getVolume().then((volume) => {
        callback(volume * 100);
      });
    }
  }
  getMuted(callback) {
    const self2 = this;
    if (!self2.player) {
      callback(null);
      return;
    }
    if (self2.player.getVolume) {
      self2.player.getVolume().then((volume) => {
        callback(!!volume);
      });
    }
  }
  setCurrentTime(currentTime = false) {
    const self2 = this;
    if (!self2.player || typeof currentTime !== "number" || !self2.player.setCurrentTime) {
      return;
    }
    self2.player.setCurrentTime(currentTime);
  }
  getCurrentTime(callback) {
    const self2 = this;
    if (!self2.player || !self2.player.getCurrentTime) {
      return;
    }
    self2.player.getCurrentTime().then((currentTime) => {
      callback(currentTime);
    });
  }
  getImageURL(callback) {
    const self2 = this;
    if (self2.videoImage) {
      callback(self2.videoImage);
      return;
    }
    let width = global$1.innerWidth || 1920;
    if (global$1.devicePixelRatio) {
      width *= global$1.devicePixelRatio;
    }
    width = Math.min(width, 1920);
    let request = new XMLHttpRequest();
    request.open("GET", `https://vimeo.com/api/oembed.json?url=${self2.url}&width=${width}`, true);
    request.onreadystatechange = function() {
      if (this.readyState === 4) {
        if (this.status >= 200 && this.status < 400) {
          const response = JSON.parse(this.responseText);
          if (response.thumbnail_url) {
            self2.videoImage = response.thumbnail_url;
            callback(self2.videoImage);
          }
        }
      }
    };
    request.send();
    request = null;
  }
  getVideo(callback) {
    const self2 = this;
    if (self2.$video) {
      callback(self2.$video);
      return;
    }
    onAPIready(() => {
      let hiddenDiv;
      if (!self2.$video) {
        hiddenDiv = document.createElement("div");
        hiddenDiv.style.display = "none";
      }
      self2.playerOptions = {
        // GDPR Compliance.
        dnt: 1,
        id: self2.videoID,
        autopause: 0,
        transparent: 0,
        autoplay: self2.options.autoplay ? 1 : 0,
        loop: self2.options.loop ? 1 : 0,
        muted: self2.options.mute || self2.options.volume === 0 ? 1 : 0
      };
      const urlHash = self2.constructor.parseURLHash(self2.url);
      if (urlHash) {
        self2.playerOptions.h = urlHash;
      }
      if (!self2.options.showControls) {
        self2.playerOptions.controls = 0;
      }
      if (!self2.options.showControls && self2.options.loop && self2.options.autoplay) {
        self2.playerOptions.background = 1;
      }
      if (!self2.$video) {
        let playerOptionsString = "";
        Object.keys(self2.playerOptions).forEach((key) => {
          if (playerOptionsString !== "") {
            playerOptionsString += "&";
          }
          playerOptionsString += `${key}=${encodeURIComponent(self2.playerOptions[key])}`;
        });
        self2.$video = document.createElement("iframe");
        self2.$video.setAttribute("id", self2.playerID);
        self2.$video.setAttribute("src", `https://player.vimeo.com/video/${self2.videoID}?${playerOptionsString}`);
        self2.$video.setAttribute("frameborder", "0");
        self2.$video.setAttribute("mozallowfullscreen", "");
        self2.$video.setAttribute("allowfullscreen", "");
        self2.$video.setAttribute("title", "Vimeo video player");
        if (self2.options.accessibilityHidden) {
          self2.$video.setAttribute("tabindex", "-1");
          self2.$video.setAttribute("aria-hidden", "true");
        }
        hiddenDiv.appendChild(self2.$video);
        document.body.appendChild(hiddenDiv);
      }
      self2.player = self2.player || new global$1.Vimeo.Player(self2.$video, self2.playerOptions);
      if (!self2.options.mute && typeof self2.options.volume === "number") {
        self2.setVolume(self2.options.volume);
      }
      if (self2.options.startTime && self2.options.autoplay) {
        self2.player.setCurrentTime(self2.options.startTime);
      }
      self2.player.getVideoWidth().then((width) => {
        self2.videoWidth = width || 1280;
      });
      self2.player.getVideoHeight().then((height) => {
        self2.videoHeight = height || 720;
      });
      let vmStarted;
      self2.player.on("timeupdate", (e) => {
        if (!vmStarted) {
          self2.fire("started", e);
          vmStarted = 1;
        }
        self2.fire("timeupdate", e);
        if (self2.options.endTime && e.seconds >= self2.options.endTime) {
          if (self2.options.loop) {
            self2.play(self2.options.startTime);
          } else {
            self2.pause();
          }
        }
      });
      self2.player.on("play", (e) => {
        self2.fire("play", e);
        if (self2.options.startTime && e.seconds === 0) {
          self2.play(self2.options.startTime);
        }
      });
      self2.player.on("pause", (e) => {
        self2.fire("pause", e);
      });
      self2.player.on("ended", (e) => {
        self2.fire("ended", e);
      });
      self2.player.on("loaded", (e) => {
        self2.fire("ready", e);
      });
      self2.player.on("volumechange", (e) => {
        self2.getVolume((volume) => {
          self2.options.volume = volume;
        });
        self2.fire("volumechange", e);
      });
      self2.player.on("error", (e) => {
        self2.fire("error", e);
      });
      callback(self2.$video);
    });
  }
};
var VideoWorkerLocal = class extends VideoWorkerBase {
  type = "local";
  static parseURL(url) {
    const videoFormats = url.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/);
    const result = {};
    let ready2 = 0;
    videoFormats.forEach((val) => {
      const match = val.match(/^(mp4|webm|ogv|ogg)\:(.*)/);
      if (match && match[1] && match[2]) {
        result[match[1] === "ogv" ? "ogg" : match[1]] = match[2];
        ready2 = 1;
      }
    });
    return ready2 ? result : false;
  }
  play(start) {
    const self2 = this;
    if (!self2.player) {
      return;
    }
    if (typeof start !== "undefined") {
      self2.player.currentTime = start;
    }
    if (self2.player.paused) {
      if (self2.options.endTime && !self2.options.loop) {
        self2.getCurrentTime((seconds) => {
          if (seconds < self2.options.endTime) {
            self2.player.play();
          }
        });
      } else {
        self2.player.play();
      }
    }
  }
  pause() {
    const self2 = this;
    if (!self2.player || self2.player.paused) {
      return;
    }
    self2.player.pause();
  }
  mute() {
    const self2 = this;
    if (!self2.player) {
      return;
    }
    self2.$video.muted = true;
  }
  unmute() {
    const self2 = this;
    if (!self2.player) {
      return;
    }
    self2.$video.muted = false;
  }
  setVolume(volume = false) {
    const self2 = this;
    if (!self2.player || typeof volume !== "number") {
      return;
    }
    self2.$video.volume = volume / 100;
  }
  getVolume(callback) {
    const self2 = this;
    if (!self2.player) {
      callback(false);
      return;
    }
    callback(self2.$video.volume * 100);
  }
  getMuted(callback) {
    const self2 = this;
    if (!self2.player) {
      callback(null);
      return;
    }
    callback(self2.$video.muted);
  }
  setCurrentTime(currentTime = false) {
    const self2 = this;
    if (!self2.player || typeof currentTime !== "number") {
      return;
    }
    self2.$video.currentTime = currentTime;
  }
  getCurrentTime(callback) {
    const self2 = this;
    if (!self2.player) {
      return;
    }
    callback(self2.player.currentTime);
  }
  getImageURL(callback) {
    const self2 = this;
    if (self2.videoImage) {
      callback(self2.videoImage);
    }
  }
  getVideo(callback) {
    const self2 = this;
    if (self2.$video) {
      callback(self2.$video);
      return;
    }
    let hiddenDiv;
    if (!self2.$video) {
      hiddenDiv = document.createElement("div");
      hiddenDiv.style.display = "none";
    }
    function addSourceElement(element, src, type) {
      const source = document.createElement("source");
      source.src = src;
      source.type = type;
      element.appendChild(source);
    }
    if (!self2.$video) {
      self2.$video = document.createElement("video");
      self2.player = self2.$video;
      if (self2.options.showControls) {
        self2.$video.controls = true;
      }
      if (typeof self2.options.volume === "number") {
        self2.setVolume(self2.options.volume);
      }
      if (self2.options.mute) {
        self2.mute();
      }
      if (self2.options.loop) {
        self2.$video.loop = true;
      }
      self2.$video.setAttribute("playsinline", "");
      self2.$video.setAttribute("webkit-playsinline", "");
      if (self2.options.accessibilityHidden) {
        self2.$video.setAttribute("tabindex", "-1");
        self2.$video.setAttribute("aria-hidden", "true");
      }
      self2.$video.setAttribute("id", self2.playerID);
      hiddenDiv.appendChild(self2.$video);
      document.body.appendChild(hiddenDiv);
      Object.keys(self2.videoID).forEach((key) => {
        addSourceElement(self2.$video, self2.videoID[key], `video/${key}`);
      });
    }
    let locStarted;
    self2.player.addEventListener("playing", (e) => {
      if (!locStarted) {
        self2.fire("started", e);
      }
      locStarted = 1;
    });
    self2.player.addEventListener("timeupdate", function(e) {
      self2.fire("timeupdate", e);
      if (self2.options.endTime && this.currentTime >= self2.options.endTime) {
        if (self2.options.loop) {
          self2.play(self2.options.startTime);
        } else {
          self2.pause();
        }
      }
    });
    self2.player.addEventListener("play", (e) => {
      self2.fire("play", e);
    });
    self2.player.addEventListener("pause", (e) => {
      self2.fire("pause", e);
    });
    self2.player.addEventListener("ended", (e) => {
      self2.fire("ended", e);
    });
    self2.player.addEventListener("loadedmetadata", function() {
      self2.videoWidth = this.videoWidth || 1280;
      self2.videoHeight = this.videoHeight || 720;
      self2.fire("ready");
      if (self2.options.autoplay) {
        self2.play(self2.options.startTime);
      }
    });
    self2.player.addEventListener("volumechange", (e) => {
      self2.getVolume((volume) => {
        self2.options.volume = volume;
      });
      self2.fire("volumechange", e);
    });
    self2.player.addEventListener("error", (e) => {
      self2.fire("error", e);
    });
    callback(self2.$video);
  }
};
function VideoWorker(url, options) {
  let result = false;
  Object.keys(VideoWorker.providers).forEach((key) => {
    if (!result && VideoWorker.providers[key].parseURL(url)) {
      result = new VideoWorker.providers[key](url, options);
    }
  });
  return result || new VideoWorkerBase(url, options);
}
VideoWorker.BaseClass = VideoWorkerBase;
VideoWorker.providers = {
  Youtube: VideoWorkerYoutube,
  Vimeo: VideoWorkerVimeo,
  Local: VideoWorkerLocal
};
function jarallaxVideo$1(jarallax2 = global$2.jarallax) {
  if (typeof jarallax2 === "undefined") {
    return;
  }
  const Jarallax2 = jarallax2.constructor;
  const defOnScroll = Jarallax2.prototype.onScroll;
  Jarallax2.prototype.onScroll = function() {
    const self2 = this;
    defOnScroll.apply(self2);
    const isReady = !self2.isVideoInserted && self2.video && (!self2.options.videoLazyLoading || self2.isElementInViewport) && !self2.options.disableVideo();
    if (isReady) {
      self2.isVideoInserted = true;
      self2.video.getVideo((video) => {
        const $parent = video.parentNode;
        self2.css(video, {
          position: self2.image.position,
          top: "0px",
          left: "0px",
          right: "0px",
          bottom: "0px",
          width: "100%",
          height: "100%",
          maxWidth: "none",
          maxHeight: "none",
          pointerEvents: "none",
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
          margin: 0,
          zIndex: -1
        });
        self2.$video = video;
        if (self2.video.type === "local") {
          if (self2.image.src) {
            self2.$video.setAttribute("poster", self2.image.src);
          } else if (self2.image.$item && self2.image.$item.tagName === "IMG" && self2.image.$item.src) {
            self2.$video.setAttribute("poster", self2.image.$item.src);
          }
        }
        if (self2.options.videoClass) {
          self2.$video.setAttribute("class", `${self2.options.videoClass} ${self2.options.videoClass}-${self2.video.type}`);
        }
        self2.image.$container.appendChild(video);
        $parent.parentNode.removeChild($parent);
        if (self2.options.onVideoInsert) {
          self2.options.onVideoInsert.call(self2);
        }
      });
    }
  };
  const defCoverImage = Jarallax2.prototype.coverImage;
  Jarallax2.prototype.coverImage = function() {
    const self2 = this;
    const imageData = defCoverImage.apply(self2);
    const node = self2.image.$item ? self2.image.$item.nodeName : false;
    if (imageData && self2.video && node && (node === "IFRAME" || node === "VIDEO")) {
      let h = imageData.image.height;
      let w = h * self2.image.width / self2.image.height;
      let ml = (imageData.container.width - w) / 2;
      let mt = imageData.image.marginTop;
      if (imageData.container.width > w) {
        w = imageData.container.width;
        h = w * self2.image.height / self2.image.width;
        ml = 0;
        mt += (imageData.image.height - h) / 2;
      }
      if (node === "IFRAME") {
        h += 400;
        mt -= 200;
      }
      self2.css(self2.$video, {
        width: `${w}px`,
        marginLeft: `${ml}px`,
        height: `${h}px`,
        marginTop: `${mt}px`
      });
    }
    return imageData;
  };
  const defInitImg = Jarallax2.prototype.initImg;
  Jarallax2.prototype.initImg = function() {
    const self2 = this;
    const defaultResult = defInitImg.apply(self2);
    if (!self2.options.videoSrc) {
      self2.options.videoSrc = self2.$item.getAttribute("data-jarallax-video") || null;
    }
    if (self2.options.videoSrc) {
      self2.defaultInitImgResult = defaultResult;
      return true;
    }
    return defaultResult;
  };
  const defCanInitParallax = Jarallax2.prototype.canInitParallax;
  Jarallax2.prototype.canInitParallax = function() {
    const self2 = this;
    let defaultResult = defCanInitParallax.apply(self2);
    if (!self2.options.videoSrc) {
      return defaultResult;
    }
    const video = new VideoWorker(self2.options.videoSrc, {
      autoplay: true,
      loop: self2.options.videoLoop,
      showControls: false,
      accessibilityHidden: true,
      startTime: self2.options.videoStartTime || 0,
      endTime: self2.options.videoEndTime || 0,
      mute: !self2.options.videoVolume,
      volume: self2.options.videoVolume || 0
    });
    if (self2.options.onVideoWorkerInit) {
      self2.options.onVideoWorkerInit.call(self2, video);
    }
    function resetDefaultImage() {
      if (self2.image.$default_item) {
        self2.image.$item = self2.image.$default_item;
        self2.image.$item.style.display = "block";
        self2.coverImage();
        self2.onScroll();
      }
    }
    if (video.isValid()) {
      if (this.options.disableParallax()) {
        defaultResult = true;
        self2.image.position = "absolute";
        self2.options.type = "scroll";
        self2.options.speed = 1;
      }
      if (!defaultResult) {
        if (!self2.defaultInitImgResult) {
          video.getImageURL((url) => {
            const curStyle = self2.$item.getAttribute("style");
            if (curStyle) {
              self2.$item.setAttribute("data-jarallax-original-styles", curStyle);
            }
            self2.css(self2.$item, {
              "background-image": `url("${url}")`,
              "background-position": "center",
              "background-size": "cover"
            });
          });
        }
      } else {
        video.on("ready", () => {
          if (self2.options.videoPlayOnlyVisible) {
            const oldOnScroll = self2.onScroll;
            self2.onScroll = function() {
              oldOnScroll.apply(self2);
              if (!self2.videoError && (self2.options.videoLoop || !self2.options.videoLoop && !self2.videoEnded)) {
                if (self2.isVisible()) {
                  video.play();
                } else {
                  video.pause();
                }
              }
            };
          } else {
            video.play();
          }
        });
        video.on("started", () => {
          self2.image.$default_item = self2.image.$item;
          self2.image.$item = self2.$video;
          self2.image.width = self2.video.videoWidth || 1280;
          self2.image.height = self2.video.videoHeight || 720;
          self2.coverImage();
          self2.onScroll();
          if (self2.image.$default_item) {
            self2.image.$default_item.style.display = "none";
          }
        });
        video.on("ended", () => {
          self2.videoEnded = true;
          if (!self2.options.videoLoop) {
            resetDefaultImage();
          }
        });
        video.on("error", () => {
          self2.videoError = true;
          resetDefaultImage();
        });
        self2.video = video;
        if (!self2.defaultInitImgResult) {
          self2.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
          if (video.type !== "local") {
            video.getImageURL((url) => {
              self2.image.bgImage = `url("${url}")`;
              self2.init();
            });
            return false;
          }
        }
      }
    }
    return defaultResult;
  };
  const defDestroy = Jarallax2.prototype.destroy;
  Jarallax2.prototype.destroy = function() {
    const self2 = this;
    if (self2.image.$default_item) {
      self2.image.$item = self2.image.$default_item;
      delete self2.image.$default_item;
    }
    defDestroy.apply(self2);
  };
}
function jarallaxElement$1(jarallax2 = global$2.jarallax) {
  console.warn("Jarallax Element extension is DEPRECATED, please, avoid using it. We recommend you look at something like `lax.js` library <https://github.com/alexfoxy/lax.js>. It is much more powerful and has a less code (in cases when you don't want to add parallax backgrounds).");
  if (typeof jarallax2 === "undefined") {
    return;
  }
  const Jarallax2 = jarallax2.constructor;
  ["initImg", "canInitParallax", "init", "destroy", "coverImage", "isVisible", "onScroll", "onResize"].forEach((key) => {
    const def = Jarallax2.prototype[key];
    Jarallax2.prototype[key] = function(...args) {
      const self2 = this;
      if (key === "initImg" && self2.$item.getAttribute("data-jarallax-element") !== null) {
        self2.options.type = "element";
        self2.pureOptions.speed = self2.$item.getAttribute("data-jarallax-element") || "100";
      }
      if (self2.options.type !== "element") {
        return def.apply(self2, args);
      }
      self2.pureOptions.threshold = self2.$item.getAttribute("data-threshold") || "";
      switch (key) {
        case "init": {
          const speedArr = `${self2.pureOptions.speed}`.split(" ");
          self2.options.speed = self2.pureOptions.speed || 0;
          self2.options.speedY = speedArr[0] ? parseFloat(speedArr[0]) : 0;
          self2.options.speedX = speedArr[1] ? parseFloat(speedArr[1]) : 0;
          const thresholdArr = self2.pureOptions.threshold.split(" ");
          self2.options.thresholdY = thresholdArr[0] ? parseFloat(thresholdArr[0]) : null;
          self2.options.thresholdX = thresholdArr[1] ? parseFloat(thresholdArr[1]) : null;
          def.apply(self2, args);
          const originalStylesTag = self2.$item.getAttribute("data-jarallax-original-styles");
          if (originalStylesTag) {
            self2.$item.setAttribute("style", originalStylesTag);
          }
          return true;
        }
        case "onResize": {
          const defTransform = self2.css(self2.$item, "transform");
          self2.css(self2.$item, {
            transform: ""
          });
          const rect = self2.$item.getBoundingClientRect();
          self2.itemData = {
            width: rect.width,
            height: rect.height,
            y: rect.top + self2.getWindowData().y,
            x: rect.left
          };
          self2.css(self2.$item, {
            transform: defTransform
          });
          break;
        }
        case "onScroll": {
          const wnd = self2.getWindowData();
          const centerPercent = (wnd.y + wnd.height / 2 - self2.itemData.y - self2.itemData.height / 2) / (wnd.height / 2);
          const moveY = centerPercent * self2.options.speedY;
          const moveX = centerPercent * self2.options.speedX;
          let my = moveY;
          let mx = moveX;
          if (self2.options.thresholdY !== null && moveY > self2.options.thresholdY) my = 0;
          if (self2.options.thresholdX !== null && moveX > self2.options.thresholdX) mx = 0;
          self2.css(self2.$item, {
            transform: `translate3d(${mx}px,${my}px,0)`
          });
          break;
        }
        case "initImg":
        case "isVisible":
        case "coverImage":
          return true;
      }
      return def.apply(self2, args);
    };
  });
}
var jarallax = jarallax$1;
var jarallaxVideo = function jarallaxVideo2() {
  return jarallaxVideo$1(jarallax);
};
var jarallaxElement = function jarallaxElement2() {
  return jarallaxElement$1(jarallax);
};
export {
  jarallax,
  jarallaxElement,
  jarallaxVideo
};
/*! Bundled license information:

jarallax/dist/jarallax.esm.js:
  (*!
   * Jarallax v2.2.1 (https://github.com/nk-o/jarallax)
   * Copyright 2024 nK <https://nkdev.info>
   * Licensed under MIT (https://github.com/nk-o/jarallax/blob/master/LICENSE)
   *)
  (*!
   * Video Worker v2.2.0 (https://github.com/nk-o/video-worker)
   * Copyright 2024 nK <https://nkdev.info>
   * Licensed under MIT (https://github.com/nk-o/video-worker/blob/master/LICENSE)
   *)
*/
//# sourceMappingURL=jarallax.js.map
