/*!
 * Vditor v3.8.117 - A markdown editor written in TypeScript.
 *
 * MIT License
 *
 * Copyright (c) 2018-present B3log 开源, b3log.org
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Vditor"] = factory();
	else
		root["Vditor"] = factory();
})(this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 260:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": function() { return /* binding */ Constants; }
/* harmony export */ });
/* unused harmony export VDITOR_VERSION */
var _VDITOR_VERSION = (/* unused pure expression or super */ null && ("3.8.117"));

var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.ZWSP = "\u200b";
    Constants.DROP_EDITOR = "application/editor";
    Constants.MOBILE_WIDTH = 520;
    Constants.CLASS_MENU_DISABLED = "vditor-menu--disabled";
    Constants.EDIT_TOOLBARS = ["emoji", "headings", "bold", "italic", "strike", "link", "list",
        "ordered-list", "outdent", "indent", "check", "line", "quote", "code", "inline-code", "insert-after",
        "insert-before", "upload", "record", "table"];
    Constants.CODE_THEME = ["abap", "algol", "algol_nu", "arduino", "autumn", "borland", "bw",
        "colorful", "dracula", "emacs", "friendly", "fruity", "github", "igor", "lovelace", "manni", "monokai",
        "monokailight", "murphy", "native", "paraiso-dark", "paraiso-light", "pastie", "perldoc", "pygments",
        "rainbow_dash", "rrt", "solarized-dark", "solarized-dark256", "solarized-light", "swapoff", "tango", "trac",
        "vim", "vs", "xcode", "ant-design"];
    Constants.CODE_LANGUAGES = ["mermaid", "echarts", "mindmap", "plantuml", "abc", "graphviz", "flowchart", "apache",
        "js", "ts", "html",
        // common
        "properties", "apache", "bash", "c", "csharp", "cpp", "css", "coffeescript", "diff", "go", "xml", "http",
        "json", "java", "javascript", "kotlin", "less", "lua", "makefile", "markdown", "nginx", "objectivec", "php",
        "php-template", "perl", "plaintext", "python", "python-repl", "r", "ruby", "rust", "scss", "sql", "shell",
        "swift", "ini", "typescript", "vbnet", "yaml",
        "ada", "clojure", "dart", "erb", "fortran", "gradle", "haskell", "julia", "julia-repl", "lisp", "matlab",
        "pgsql", "powershell", "sql_more", "stata", "cmake", "mathematica"];
    Constants.CDN = "https://cdn.jsdelivr.net/npm/@charescape/vditor-fork@" + "3.8.117";
    Constants.MARKDOWN_OPTIONS = {
        autoSpace: false,
        codeBlockPreview: true,
        fixTermTypo: false,
        footnotes: true,
        linkBase: "",
        linkPrefix: "",
        listStyle: false,
        mark: false,
        mathBlockPreview: true,
        paragraphBeginningSpace: false,
        sanitize: true,
        toc: false,
    };
    Constants.HLJS_OPTIONS = {
        enable: true,
        lineNumber: false,
        style: "github",
    };
    Constants.MATH_OPTIONS = {
        engine: "KaTeX",
        inlineDigit: false,
        macros: {},
    };
    Constants.THEME_OPTIONS = {
        current: "light",
        list: {
            "ant-design": "Ant Design",
            "dark": "Dark",
            "light": "Light",
            "wechat": "WeChat",
        },
        path: Constants.CDN + "/dist/css/content-theme",
    };
    return Constants;
}());



/***/ }),

/***/ 369:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": function() { return /* binding */ abcRender; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(260);
/* harmony import */ var _util_addScript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(228);
/* harmony import */ var _adapterRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46);



var abcRender = function (element, cdn) {
    if (element === void 0) { element = document; }
    if (cdn === void 0) { cdn = _constants__WEBPACK_IMPORTED_MODULE_0__/* .Constants.CDN */ .g.CDN; }
    var abcElements = _adapterRender__WEBPACK_IMPORTED_MODULE_1__.abcRenderAdapter.getElements(element);
    if (abcElements.length > 0) {
        (0,_util_addScript__WEBPACK_IMPORTED_MODULE_2__/* .addScript */ .G)(cdn + "/dist/js/abcjs/abcjs_basic.min.js", "vditorAbcjsScript").then(function () {
            abcElements.forEach(function (item) {
                if (item.parentElement.classList.contains("vditor-wysiwyg__pre") ||
                    item.parentElement.classList.contains("vditor-ir__marker--pre")) {
                    return;
                }
                if (item.getAttribute("data-processed") === "true") {
                    return;
                }
                ABCJS.renderAbc(item, _adapterRender__WEBPACK_IMPORTED_MODULE_1__.abcRenderAdapter.getCode(item).trim());
                item.style.overflowX = "auto";
                item.setAttribute("data-processed", "true");
            });
        });
    }
};


/***/ }),

/***/ 46:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mathRenderAdapter": function() { return /* binding */ mathRenderAdapter; },
/* harmony export */   "mermaidRenderAdapter": function() { return /* binding */ mermaidRenderAdapter; },
/* harmony export */   "mindmapRenderAdapter": function() { return /* binding */ mindmapRenderAdapter; },
/* harmony export */   "chartRenderAdapter": function() { return /* binding */ chartRenderAdapter; },
/* harmony export */   "abcRenderAdapter": function() { return /* binding */ abcRenderAdapter; },
/* harmony export */   "graphvizRenderAdapter": function() { return /* binding */ graphvizRenderAdapter; },
/* harmony export */   "flowchartRenderAdapter": function() { return /* binding */ flowchartRenderAdapter; },
/* harmony export */   "plantumlRenderAdapter": function() { return /* binding */ plantumlRenderAdapter; }
/* harmony export */ });
var mathRenderAdapter = {
    getCode: function (mathElement) { return mathElement.textContent; },
    getElements: function (element) { return element.querySelectorAll(".language-math"); },
};
var mermaidRenderAdapter = {
    /** 不仅要返回code，并且需要将 code 设置为 el 的 innerHTML */
    getCode: function (el) { return el.textContent; },
    getElements: function (element) { return element.querySelectorAll(".language-mermaid"); },
};
var mindmapRenderAdapter = {
    getCode: function (el) { return el.getAttribute("data-code"); },
    getElements: function (el) { return el.querySelectorAll(".language-mindmap"); },
};
var chartRenderAdapter = {
    getCode: function (el) { return el.innerText; },
    getElements: function (el) { return el.querySelectorAll(".language-echarts"); },
};
var abcRenderAdapter = {
    getCode: function (el) { return el.textContent; },
    getElements: function (el) { return el.querySelectorAll(".language-abc"); },
};
var graphvizRenderAdapter = {
    getCode: function (el) { return el.textContent; },
    getElements: function (el) { return el.querySelectorAll(".language-graphviz"); },
};
var flowchartRenderAdapter = {
    getCode: function (el) { return el.textContent; },
    getElements: function (el) { return el.querySelectorAll(".language-flowchart"); },
};
var plantumlRenderAdapter = {
    getCode: function (el) { return el.textContent; },
    getElements: function (el) { return el.querySelectorAll(".language-plantuml"); },
};


/***/ }),

/***/ 726:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": function() { return /* binding */ chartRender; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(260);
/* harmony import */ var _util_addScript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(228);
/* harmony import */ var _adapterRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46);



var chartRender = function (element, cdn, theme) {
    if (element === void 0) { element = document; }
    if (cdn === void 0) { cdn = _constants__WEBPACK_IMPORTED_MODULE_0__/* .Constants.CDN */ .g.CDN; }
    var echartsElements = _adapterRender__WEBPACK_IMPORTED_MODULE_1__.chartRenderAdapter.getElements(element);
    if (echartsElements.length > 0) {
        (0,_util_addScript__WEBPACK_IMPORTED_MODULE_2__/* .addScript */ .G)(cdn + "/dist/js/echarts/echarts.min.js", "vditorEchartsScript").then(function () {
            echartsElements.forEach(function (e) {
                if (e.parentElement.classList.contains("vditor-wysiwyg__pre") ||
                    e.parentElement.classList.contains("vditor-ir__marker--pre")) {
                    return;
                }
                var text = _adapterRender__WEBPACK_IMPORTED_MODULE_1__.chartRenderAdapter.getCode(e).trim();
                if (!text) {
                    return;
                }
                try {
                    if (e.getAttribute("data-processed") === "true") {
                        return;
                    }
                    var option = JSON.parse(text);
                    echarts.init(e, theme === "dark" ? "dark" : undefined).setOption(option);
                    e.setAttribute("data-processed", "true");
                }
                catch (error) {
                    e.className = "vditor-reset--error";
                    e.innerHTML = "echarts render error: <br>" + error;
                }
            });
        });
    }
};


/***/ }),

/***/ 23:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": function() { return /* binding */ codeRender; }
/* harmony export */ });
/* harmony import */ var _util_code160to32__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(769);

var codeRender = function (element) {
    element.querySelectorAll("pre > code").forEach(function (e, index) {
        var _a, _b, _c;
        if (e.parentElement.classList.contains("vditor-wysiwyg__pre") ||
            e.parentElement.classList.contains("vditor-ir__marker--pre")) {
            return;
        }
        if (e.classList.contains("language-mermaid") || e.classList.contains("language-flowchart") ||
            e.classList.contains("language-echarts") || e.classList.contains("language-mindmap") ||
            e.classList.contains("language-plantuml") ||
            e.classList.contains("language-abc") || e.classList.contains("language-graphviz") ||
            e.classList.contains("language-math")) {
            return;
        }
        if (e.style.maxHeight.indexOf("px") > -1) {
            return;
        }
        // 避免预览区在渲染后由于代码块过多产生性能问题 https://github.com/b3log/vditor/issues/67
        if (element.classList.contains("vditor-preview") && index > 5) {
            return;
        }
        var codeText = e.innerText;
        if (e.classList.contains("highlight-chroma")) {
            var codeElement = document.createElement("code");
            codeElement.innerHTML = e.innerHTML;
            codeElement.querySelectorAll(".highlight-ln").forEach(function (item) {
                item.remove();
            });
            codeText = codeElement.innerText;
        }
        var iconHTML = '<svg><use xlink:href="#vditor-icon-copy"></use></svg>';
        if (!document.getElementById("vditorIconScript")) {
            iconHTML = '<svg viewBox="0 0 32 32"><path d="M22.545-0h-17.455c-1.6 0-2.909 1.309-2.909 2.909v20.364h2.909v-20.364h17.455v-2.909zM26.909 5.818h-16c-1.6 0-2.909 1.309-2.909 2.909v20.364c0 1.6 1.309 2.909 2.909 2.909h16c1.6 0 2.909-1.309 2.909-2.909v-20.364c0-1.6-1.309-2.909-2.909-2.909zM26.909 29.091h-16v-20.364h16v20.364z"></path></svg>';
        }
        var divElement = document.createElement("div");
        divElement.className = "vditor-copy";
        divElement.innerHTML = "<span aria-label=\"" + (((_a = window.VditorI18n) === null || _a === void 0 ? void 0 : _a.copy) || "复制") + "\"\nonmouseover=\"this.setAttribute('aria-label', '" + (((_b = window.VditorI18n) === null || _b === void 0 ? void 0 : _b.copy) || "复制") + "')\"\nclass=\"vditor-tooltipped vditor-tooltipped__w\"\nonclick=\"this.previousElementSibling.select();document.execCommand('copy');this.setAttribute('aria-label', '" + (((_c = window.VditorI18n) === null || _c === void 0 ? void 0 : _c.copy) || "已复制") + "')\">" + iconHTML + "</span>";
        var textarea = document.createElement("textarea");
        textarea.value = (0,_util_code160to32__WEBPACK_IMPORTED_MODULE_0__/* .code160to32 */ .X)(codeText);
        divElement.insertAdjacentElement("afterbegin", textarea);
        e.before(divElement);
        e.style.maxHeight = (window.outerHeight - 40) + "px";
    });
};


/***/ }),

/***/ 383:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": function() { return /* binding */ flowchartRender; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(260);
/* harmony import */ var _util_addScript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(228);
/* harmony import */ var _adapterRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46);



var flowchartRender = function (element, cdn) {
    if (cdn === void 0) { cdn = _constants__WEBPACK_IMPORTED_MODULE_0__/* .Constants.CDN */ .g.CDN; }
    var flowchartElements = _adapterRender__WEBPACK_IMPORTED_MODULE_1__.flowchartRenderAdapter.getElements(element);
    if (flowchartElements.length === 0) {
        return;
    }
    (0,_util_addScript__WEBPACK_IMPORTED_MODULE_2__/* .addScript */ .G)(cdn + "/dist/js/flowchart.js/flowchart.min.js", "vditorFlowchartScript").then(function () {
        flowchartElements.forEach(function (item) {
            if (item.getAttribute("data-processed") === "true") {
                return;
            }
            var flowchartObj = flowchart.parse(_adapterRender__WEBPACK_IMPORTED_MODULE_1__.flowchartRenderAdapter.getCode(item));
            item.innerHTML = "";
            flowchartObj.drawSVG(item);
            item.setAttribute("data-processed", "true");
        });
    });
};


/***/ }),

/***/ 890:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": function() { return /* binding */ graphvizRender; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(260);
/* harmony import */ var _util_addScript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(228);
/* harmony import */ var _adapterRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46);



var graphvizRender = function (element, cdn) {
    if (cdn === void 0) { cdn = _constants__WEBPACK_IMPORTED_MODULE_0__/* .Constants.CDN */ .g.CDN; }
    var graphvizElements = _adapterRender__WEBPACK_IMPORTED_MODULE_1__.graphvizRenderAdapter.getElements(element);
    if (graphvizElements.length === 0) {
        return;
    }
    (0,_util_addScript__WEBPACK_IMPORTED_MODULE_2__/* .addScript */ .G)(cdn + "/dist/js/graphviz/viz.js", "vditorGraphVizScript").then(function () {
        graphvizElements.forEach(function (e) {
            var code = _adapterRender__WEBPACK_IMPORTED_MODULE_1__.graphvizRenderAdapter.getCode(e);
            if (e.parentElement.classList.contains("vditor-wysiwyg__pre") ||
                e.parentElement.classList.contains("vditor-ir__marker--pre")) {
                return;
            }
            if (e.getAttribute("data-processed") === "true" || code.trim() === "") {
                return;
            }
            try {
                var blob = new Blob(["importScripts('" + document.getElementById("vditorGraphVizScript").src.replace("viz.js", "full.render.js") + "');"], { type: "application/javascript" });
                var url = window.URL || window.webkitURL;
                var blobUrl = url.createObjectURL(blob);
                var worker = new Worker(blobUrl);
                new Viz({ worker: worker })
                    .renderSVGElement(code).then(function (result) {
                    e.innerHTML = result.outerHTML;
                }).catch(function (error) {
                    e.innerHTML = "graphviz render error: <br>" + error;
                    e.className = "vditor-reset--error";
                });
            }
            catch (e) {
                console.error("graphviz error", e);
            }
            e.setAttribute("data-processed", "true");
        });
    });
};


/***/ }),

/***/ 93:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": function() { return /* binding */ highlightRender; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(260);
/* harmony import */ var _util_addScript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(228);
/* harmony import */ var _util_addStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(946);



var highlightRender = function (hljsOption, element, cdn) {
    if (element === void 0) { element = document; }
    if (cdn === void 0) { cdn = _constants__WEBPACK_IMPORTED_MODULE_0__/* .Constants.CDN */ .g.CDN; }
    var style = hljsOption.style;
    if (!_constants__WEBPACK_IMPORTED_MODULE_0__/* .Constants.CODE_THEME.includes */ .g.CODE_THEME.includes(style)) {
        style = "github";
    }
    var vditorHljsStyle = document.getElementById("vditorHljsStyle");
    var href = cdn + "/dist/js/highlight.js/styles/" + style + ".css";
    if (vditorHljsStyle && vditorHljsStyle.href !== href) {
        vditorHljsStyle.remove();
    }
    (0,_util_addStyle__WEBPACK_IMPORTED_MODULE_1__/* .addStyle */ .c)(cdn + "/dist/js/highlight.js/styles/" + style + ".css", "vditorHljsStyle");
    if (hljsOption.enable === false) {
        return;
    }
    var codes = element.querySelectorAll("pre > code");
    if (codes.length === 0) {
        return;
    }
    (0,_util_addScript__WEBPACK_IMPORTED_MODULE_2__/* .addScript */ .G)(cdn + "/dist/js/highlight.js/highlight.pack.js", "vditorHljsScript").then(function () {
        element.querySelectorAll("pre > code").forEach(function (block) {
            // ir & wysiwyg 区域不渲染
            if (block.parentElement.classList.contains("vditor-ir__marker--pre") ||
                block.parentElement.classList.contains("vditor-wysiwyg__pre")) {
                return;
            }
            if (block.classList.contains("language-mermaid") || block.classList.contains("language-flowchart") ||
                block.classList.contains("language-echarts") || block.classList.contains("language-mindmap") ||
                block.classList.contains("language-plantuml") ||
                block.classList.contains("language-abc") || block.classList.contains("language-graphviz") ||
                block.classList.contains("language-math")) {
                return;
            }
            hljs.highlightElement(block);
            if (!hljsOption.lineNumber) {
                return;
            }
            block.classList.add("vditor-linenumber");
            var linenNumberTemp = block.querySelector(".vditor-linenumber__temp");
            if (!linenNumberTemp) {
                linenNumberTemp = document.createElement("div");
                linenNumberTemp.className = "vditor-linenumber__temp";
                block.insertAdjacentElement("beforeend", linenNumberTemp);
            }
            var whiteSpace = getComputedStyle(block).whiteSpace;
            var isSoftWrap = false;
            if (whiteSpace === "pre-wrap" || whiteSpace === "pre-line") {
                isSoftWrap = true;
            }
            var lineNumberHTML = "";
            var lineList = block.textContent.split(/\r\n|\r|\n/g);
            lineList.pop();
            lineList.map(function (line) {
                var lineHeight = "";
                if (isSoftWrap) {
                    linenNumberTemp.textContent = line || "\n";
                    lineHeight = " style=\"height:" + linenNumberTemp.getBoundingClientRect().height + "px\"";
                }
                lineNumberHTML += "<span" + lineHeight + "></span>";
            });
            linenNumberTemp.style.display = "none";
            lineNumberHTML = "<span class=\"vditor-linenumber__rows\">" + lineNumberHTML + "</span>";
            block.insertAdjacentHTML("beforeend", lineNumberHTML);
        });
    });
};


/***/ }),

/***/ 323:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": function() { return /* binding */ mathRender; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(260);
/* harmony import */ var _util_addScript__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(228);
/* harmony import */ var _util_addStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(946);
/* harmony import */ var _util_code160to32__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(769);
/* harmony import */ var _adapterRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46);





var mathRender = function (element, options) {
    var mathElements = _adapterRender__WEBPACK_IMPORTED_MODULE_1__.mathRenderAdapter.getElements(element);
    if (mathElements.length === 0) {
        return;
    }
    var defaultOptions = {
        cdn: _constants__WEBPACK_IMPORTED_MODULE_0__/* .Constants.CDN */ .g.CDN,
        math: {
            engine: "KaTeX",
            inlineDigit: false,
            macros: {},
        },
    };
    if (options && options.math) {
        options.math =
            Object.assign({}, defaultOptions.math, options.math);
    }
    options = Object.assign({}, defaultOptions, options);
    if (options.math.engine === "KaTeX") {
        (0,_util_addStyle__WEBPACK_IMPORTED_MODULE_2__/* .addStyle */ .c)(options.cdn + "/dist/js/katex/katex.min.css", "vditorKatexStyle");
        (0,_util_addScript__WEBPACK_IMPORTED_MODULE_3__/* .addScript */ .G)(options.cdn + "/dist/js/katex/katex.min.js", "vditorKatexScript").then(function () {
            (0,_util_addScript__WEBPACK_IMPORTED_MODULE_3__/* .addScript */ .G)(options.cdn + "/dist/js/katex/mhchem.min.js", "vditorKatexChemScript").then(function () {
                mathElements.forEach(function (mathElement) {
                    if (mathElement.parentElement.classList.contains("vditor-wysiwyg__pre") ||
                        mathElement.parentElement.classList.contains("vditor-ir__marker--pre")) {
                        return;
                    }
                    if (mathElement.getAttribute("data-math")) {
                        return;
                    }
                    var math = (0,_util_code160to32__WEBPACK_IMPORTED_MODULE_4__/* .code160to32 */ .X)(_adapterRender__WEBPACK_IMPORTED_MODULE_1__.mathRenderAdapter.getCode(mathElement));
                    mathElement.setAttribute("data-math", math);
                    try {
                        mathElement.innerHTML = katex.renderToString(math, {
                            displayMode: mathElement.tagName === "DIV",
                            output: "html",
                        });
                    }
                    catch (e) {
                        mathElement.innerHTML = e.message;
                        mathElement.className = "language-math vditor-reset--error";
                    }
                    mathElement.addEventListener("copy", function (event) {
                        event.stopPropagation();
                        event.preventDefault();
                        var vditorMathElement = event.currentTarget.closest(".language-math");
                        event.clipboardData.setData("text/html", vditorMathElement.innerHTML);
                        event.clipboardData.setData("text/plain", vditorMathElement.getAttribute("data-math"));
                    });
                });
            });
        });
    }
    else if (options.math.engine === "MathJax") {
        var chainAsync_1 = function (fns) {
            if (fns.length === 0) {
                return;
            }
            var curr = 0;
            var last = fns[fns.length - 1];
            var next = function () {
                var fn = fns[curr++];
                fn === last ? fn() : fn(next);
            };
            next();
        };
        if (!window.MathJax) {
            window.MathJax = {
                loader: {
                    paths: { mathjax: options.cdn + "/dist/js/mathjax" },
                },
                startup: {
                    typeset: false,
                },
                tex: {
                    macros: options.math.macros,
                },
            };
        }
        // 循环加载会抛异常
        (0,_util_addScript__WEBPACK_IMPORTED_MODULE_3__/* .addScriptSync */ .J)(options.cdn + "/dist/js/mathjax/tex-svg-full.js", "protyleMathJaxScript");
        var renderMath_1 = function (mathElement, next) {
            var math = (0,_util_code160to32__WEBPACK_IMPORTED_MODULE_4__/* .code160to32 */ .X)(mathElement.textContent).trim();
            var mathOptions = window.MathJax.getMetricsFor(mathElement);
            mathOptions.display = mathElement.tagName === "DIV";
            window.MathJax.tex2svgPromise(math, mathOptions).then(function (node) {
                mathElement.innerHTML = "";
                mathElement.setAttribute("data-math", math);
                mathElement.append(node);
                window.MathJax.startup.document.clear();
                window.MathJax.startup.document.updateDocument();
                var errorTextElement = node.querySelector('[data-mml-node="merror"]');
                if (errorTextElement && errorTextElement.textContent.trim() !== "") {
                    mathElement.innerHTML = errorTextElement.textContent.trim();
                    mathElement.className = "vditor-reset--error";
                }
                if (next) {
                    next();
                }
            });
        };
        window.MathJax.startup.promise.then(function () {
            var chains = [];
            var _loop_1 = function (i) {
                var mathElement = mathElements[i];
                if (!mathElement.parentElement.classList.contains("vditor-wysiwyg__pre") &&
                    !mathElement.parentElement.classList.contains("vditor-ir__marker--pre") &&
                    !mathElement.getAttribute("data-math") && (0,_util_code160to32__WEBPACK_IMPORTED_MODULE_4__/* .code160to32 */ .X)(mathElement.textContent).trim()) {
                    chains.push(function (next) {
                        if (i === mathElements.length - 1) {
                            renderMath_1(mathElement);
                        }
                        else {
                            renderMath_1(mathElement, next);
                        }
                    });
                }
            };
            for (var i = 0; i < mathElements.length; i++) {
                _loop_1(i);
            }
            chainAsync_1(chains);
        });
    }
};


/***/ }),

/***/ 207:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": function() { return /* binding */ mediaRender; }
/* harmony export */ });
var videoRender = function (element, url) {
    element.insertAdjacentHTML("afterend", "<video controls=\"controls\" src=\"" + url + "\"></video>");
    element.remove();
};
var audioRender = function (element, url) {
    element.insertAdjacentHTML("afterend", "<audio controls=\"controls\" src=\"" + url + "\"></audio>");
    element.remove();
};
var iframeRender = function (element, url) {
    var youtubeMatch = url.match(/\/\/(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w|-]{11})(?:(?:[\?&]t=)(\S+))?/);
    var youkuMatch = url.match(/\/\/v\.youku\.com\/v_show\/id_(\w+)=*\.html/);
    var qqMatch = url.match(/\/\/v\.qq\.com\/x\/cover\/.*\/([^\/]+)\.html\??.*/);
    var coubMatch = url.match(/(?:www\.|\/\/)coub\.com\/view\/(\w+)/);
    var facebookMatch = url.match(/(?:www\.|\/\/)facebook\.com\/([^\/]+)\/videos\/([0-9]+)/);
    var dailymotionMatch = url.match(/.+dailymotion.com\/(video|hub)\/(\w+)\?/);
    var bilibiliMatch = url.match(/(?:www\.|\/\/)bilibili\.com\/video\/(\w+)/);
    var tedMatch = url.match(/(?:www\.|\/\/)ted\.com\/talks\/(\w+)/);
    if (youtubeMatch && youtubeMatch[1].length === 11) {
        element.insertAdjacentHTML("afterend", "<iframe class=\"iframe__video\" src=\"//www.youtube.com/embed/" + (youtubeMatch[1] +
            (youtubeMatch[2] ? "?start=" + youtubeMatch[2] : "")) + "\"></iframe>");
        element.remove();
    }
    else if (youkuMatch && youkuMatch[1]) {
        element.insertAdjacentHTML("afterend", "<iframe class=\"iframe__video\" src=\"//player.youku.com/embed/" + youkuMatch[1] + "\"></iframe>");
        element.remove();
    }
    else if (qqMatch && qqMatch[1]) {
        element.insertAdjacentHTML("afterend", "<iframe class=\"iframe__video\" src=\"https://v.qq.com/txp/iframe/player.html?vid=" + qqMatch[1] + "\"></iframe>");
        element.remove();
    }
    else if (coubMatch && coubMatch[1]) {
        element.insertAdjacentHTML("afterend", "<iframe class=\"iframe__video\"\n src=\"//coub.com/embed/" + coubMatch[1] + "?muted=false&autostart=false&originalSize=true&startWithHD=true\"></iframe>");
        element.remove();
    }
    else if (facebookMatch && facebookMatch[0]) {
        element.insertAdjacentHTML("afterend", "<iframe class=\"iframe__video\"\n src=\"https://www.facebook.com/plugins/video.php?href=" + encodeURIComponent(facebookMatch[0]) + "\"></iframe>");
        element.remove();
    }
    else if (dailymotionMatch && dailymotionMatch[2]) {
        element.insertAdjacentHTML("afterend", "<iframe class=\"iframe__video\"\n src=\"https://www.dailymotion.com/embed/video/" + dailymotionMatch[2] + "\"></iframe>");
        element.remove();
    }
    else if (bilibiliMatch && bilibiliMatch[1]) {
        element.insertAdjacentHTML("afterend", "<iframe class=\"iframe__video\"\n src=\"//player.bilibili.com/player.html?bvid=" + bilibiliMatch[1] + "\"></iframe>");
        element.remove();
    }
    else if (tedMatch && tedMatch[1]) {
        element.insertAdjacentHTML("afterend", "<iframe class=\"iframe__video\" src=\"//embed.ted.com/talks/" + tedMatch[1] + "\"></iframe>");
        element.remove();
    }
};
var mediaRender = function (element) {
    if (!element) {
        return;
    }
    element.querySelectorAll("a").forEach(function (aElement) {
        var url = aElement.getAttribute("href");
        if (!url) {
            return;
        }
        if (url.match(/^.+.(mp4|m4v|ogg|ogv|webm)$/)) {
            videoRender(aElement, url);
        }
        else if (url.match(/^.+.(mp3|wav|flac)$/)) {
            audioRender(aElement, url);
        }
        else {
            iframeRender(aElement, url);
        }
    });
};


/***/ }),

/***/ 765:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": function() { return /* binding */ mermaidRender; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(260);
/* harmony import */ var _util_addScript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(228);
/* harmony import */ var _adapterRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46);



var mermaidRender = function (element, cdn, theme) {
    if (cdn === void 0) { cdn = _constants__WEBPACK_IMPORTED_MODULE_0__/* .Constants.CDN */ .g.CDN; }
    var mermaidElements = _adapterRender__WEBPACK_IMPORTED_MODULE_1__.mermaidRenderAdapter.getElements(element);
    if (mermaidElements.length === 0) {
        return;
    }
    (0,_util_addScript__WEBPACK_IMPORTED_MODULE_2__/* .addScript */ .G)(cdn + "/dist/js/mermaid/mermaid.min.js", "vditorMermaidScript").then(function () {
        var config = {
            altFontFamily: "sans-serif",
            flowchart: {
                htmlLabels: true,
                useMaxWidth: true,
            },
            fontFamily: "sans-serif",
            gantt: {
                leftPadding: 75,
                rightPadding: 20,
            },
            securityLevel: "loose",
            sequence: {
                boxMargin: 8,
                diagramMarginX: 8,
                diagramMarginY: 8,
                useMaxWidth: true,
            },
            startOnLoad: false,
        };
        if (theme === "dark") {
            config.theme = "dark";
            config.themeVariables = {
                activationBkgColor: "hsl(180, 1.5873015873%, 28.3529411765%)",
                activationBorderColor: "#81B1DB",
                activeTaskBkgColor: "#81B1DB",
                activeTaskBorderColor: "#ffffff",
                actorBkg: "#1f2020",
                actorBorder: "#81B1DB",
                actorLineColor: "lightgrey",
                actorTextColor: "lightgrey",
                altBackground: "hsl(0, 0%, 40%)",
                altSectionBkgColor: "#333",
                arrowheadColor: "lightgrey",
                background: "#333",
                border1: "#81B1DB",
                border2: "rgba(255, 255, 255, 0.25)",
                classText: "#e0dfdf",
                clusterBkg: "hsl(180, 1.5873015873%, 28.3529411765%)",
                clusterBorder: "rgba(255, 255, 255, 0.25)",
                critBkgColor: "#E83737",
                critBorderColor: "#E83737",
                darkTextColor: "hsl(28.5714285714, 17.3553719008%, 86.2745098039%)",
                defaultLinkColor: "lightgrey",
                doneTaskBkgColor: "lightgrey",
                doneTaskBorderColor: "grey",
                edgeLabelBackground: "hsl(0, 0%, 34.4117647059%)",
                errorBkgColor: "#a44141",
                errorTextColor: "#ddd",
                fillType0: "#1f2020",
                fillType1: "hsl(180, 1.5873015873%, 28.3529411765%)",
                fillType2: "hsl(244, 1.5873015873%, 12.3529411765%)",
                fillType3: "hsl(244, 1.5873015873%, 28.3529411765%)",
                fillType4: "hsl(116, 1.5873015873%, 12.3529411765%)",
                fillType5: "hsl(116, 1.5873015873%, 28.3529411765%)",
                fillType6: "hsl(308, 1.5873015873%, 12.3529411765%)",
                fillType7: "hsl(308, 1.5873015873%, 28.3529411765%)",
                fontFamily: "\"trebuchet ms\", verdana, arial",
                fontSize: "16px",
                gridColor: "lightgrey",
                labelBackground: "#181818",
                labelBoxBkgColor: "#1f2020",
                labelBoxBorderColor: "#81B1DB",
                labelColor: "#ccc",
                labelTextColor: "lightgrey",
                lineColor: "lightgrey",
                loopTextColor: "lightgrey",
                mainBkg: "#1f2020",
                mainContrastColor: "lightgrey",
                nodeBkg: "#1f2020",
                nodeBorder: "#81B1DB",
                noteBkgColor: "#fff5ad",
                noteBorderColor: "rgba(255, 255, 255, 0.25)",
                noteTextColor: "#1f2020",
                primaryBorderColor: "hsl(180, 0%, 2.3529411765%)",
                primaryColor: "#1f2020",
                primaryTextColor: "#e0dfdf",
                secondBkg: "hsl(180, 1.5873015873%, 28.3529411765%)",
                secondaryBorderColor: "hsl(180, 0%, 18.3529411765%)",
                secondaryColor: "hsl(180, 1.5873015873%, 28.3529411765%)",
                secondaryTextColor: "rgb(183.8476190475, 181.5523809523, 181.5523809523)",
                sectionBkgColor: "hsl(52.9411764706, 28.813559322%, 58.431372549%)",
                sectionBkgColor2: "#EAE8D9",
                sequenceNumberColor: "black",
                signalColor: "lightgrey",
                signalTextColor: "lightgrey",
                taskBkgColor: "hsl(180, 1.5873015873%, 35.3529411765%)",
                taskBorderColor: "#ffffff",
                taskTextClickableColor: "#003163",
                taskTextColor: "hsl(28.5714285714, 17.3553719008%, 86.2745098039%)",
                taskTextDarkColor: "hsl(28.5714285714, 17.3553719008%, 86.2745098039%)",
                taskTextLightColor: "lightgrey",
                taskTextOutsideColor: "lightgrey",
                tertiaryBorderColor: "hsl(20, 0%, 2.3529411765%)",
                tertiaryColor: "hsl(20, 1.5873015873%, 12.3529411765%)",
                tertiaryTextColor: "rgb(222.9999999999, 223.6666666666, 223.9999999999)",
                textColor: "#ccc",
                titleColor: "#F9FFFE",
                todayLineColor: "#DB5757",
            };
        }
        mermaid.initialize(config);
        mermaidElements.forEach(function (item) {
            var code = _adapterRender__WEBPACK_IMPORTED_MODULE_1__.mermaidRenderAdapter.getCode(item);
            if (item.getAttribute("data-processed") === "true" || code.trim() === "") {
                return;
            }
            mermaid.init(undefined, item);
            item.setAttribute("data-processed", "true");
        });
    });
};


/***/ }),

/***/ 894:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": function() { return /* binding */ mindmapRender; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(260);
/* harmony import */ var _util_addScript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(228);
/* harmony import */ var _adapterRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46);



var mindmapRender = function (element, cdn, theme) {
    if (element === void 0) { element = document; }
    if (cdn === void 0) { cdn = _constants__WEBPACK_IMPORTED_MODULE_0__/* .Constants.CDN */ .g.CDN; }
    var mindmapElements = _adapterRender__WEBPACK_IMPORTED_MODULE_1__.mindmapRenderAdapter.getElements(element);
    if (mindmapElements.length > 0) {
        (0,_util_addScript__WEBPACK_IMPORTED_MODULE_2__/* .addScript */ .G)(cdn + "/dist/js/echarts/echarts.min.js", "vditorEchartsScript").then(function () {
            mindmapElements.forEach(function (e) {
                if (e.parentElement.classList.contains("vditor-wysiwyg__pre") ||
                    e.parentElement.classList.contains("vditor-ir__marker--pre")) {
                    return;
                }
                var text = _adapterRender__WEBPACK_IMPORTED_MODULE_1__.mindmapRenderAdapter.getCode(e);
                if (!text) {
                    return;
                }
                try {
                    if (e.getAttribute("data-processed") === "true") {
                        return;
                    }
                    echarts.init(e, theme === "dark" ? "dark" : undefined).setOption({
                        series: [
                            {
                                data: [JSON.parse(decodeURIComponent(text))],
                                initialTreeDepth: -1,
                                itemStyle: {
                                    borderWidth: 0,
                                    color: "#4285f4",
                                },
                                label: {
                                    backgroundColor: "#f6f8fa",
                                    borderColor: "#d1d5da",
                                    borderRadius: 5,
                                    borderWidth: 0.5,
                                    color: "#586069",
                                    lineHeight: 20,
                                    offset: [-5, 0],
                                    padding: [0, 5],
                                    position: "insideRight",
                                },
                                lineStyle: {
                                    color: "#d1d5da",
                                    width: 1,
                                },
                                roam: true,
                                symbol: function (value, params) {
                                    var _a;
                                    if ((_a = params === null || params === void 0 ? void 0 : params.data) === null || _a === void 0 ? void 0 : _a.children) {
                                        return "circle";
                                    }
                                    else {
                                        return "path://";
                                    }
                                },
                                type: "tree",
                            },
                        ],
                        tooltip: {
                            trigger: "item",
                            triggerOn: "mousemove",
                        },
                    });
                    e.setAttribute("data-processed", "true");
                }
                catch (error) {
                    e.className = "vditor-reset--error";
                    e.innerHTML = "mindmap render error: <br>" + error;
                }
            });
        });
    }
};


/***/ }),

/***/ 198:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": function() { return /* binding */ outlineRender; }
/* harmony export */ });
/* harmony import */ var _util_hasClosestByHeadings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(615);
/* harmony import */ var _mathRender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(323);


var outlineRender = function (contentElement, targetElement, vditor) {
    var tocHTML = "";
    var ids = [];
    Array.from(contentElement.children).forEach(function (item, index) {
        if ((0,_util_hasClosestByHeadings__WEBPACK_IMPORTED_MODULE_1__/* .hasClosestByHeadings */ .W)(item)) {
            if (vditor) {
                var lastIndex = item.id.lastIndexOf("_");
                item.id = item.id.substring(0, lastIndex === -1 ? undefined : lastIndex) + "_" + index;
            }
            ids.push(item.id);
            tocHTML += item.outerHTML.replace("<wbr>", "");
        }
    });
    if (tocHTML === "") {
        targetElement.innerHTML = "";
        return "";
    }
    var tempElement = document.createElement("div");
    if (vditor) {
        vditor.lute.SetToC(true);
        if (vditor.currentMode === "wysiwyg" && !vditor.preview.element.contains(contentElement)) {
            tempElement.innerHTML = vditor.lute.SpinVditorDOM("<p>[ToC]</p>" + tocHTML);
        }
        else if (vditor.currentMode === "ir" && !vditor.preview.element.contains(contentElement)) {
            tempElement.innerHTML = vditor.lute.SpinVditorIRDOM("<p>[ToC]</p>" + tocHTML);
        }
        else {
            tempElement.innerHTML = vditor.lute.HTML2VditorDOM("<p>[ToC]</p>" + tocHTML);
        }
        vditor.lute.SetToC(vditor.options.preview.markdown.toc);
    }
    else {
        targetElement.classList.add("vditor-outline");
        var lute = Lute.New();
        lute.SetToC(true);
        tempElement.innerHTML = lute.HTML2VditorDOM("<p>[ToC]</p>" + tocHTML);
    }
    var headingsElement = tempElement.firstElementChild.querySelectorAll("li > span[data-target-id]");
    headingsElement.forEach(function (item, index) {
        if (item.nextElementSibling && item.nextElementSibling.tagName === "UL") {
            var iconHTML = "<svg class='vditor-outline__action'><use xlink:href='#vditor-icon-down'></use></svg>";
            if (!document.getElementById("vditorIconScript")) {
                iconHTML = '<svg class="vditor-outline__action" viewBox="0 0 32 32"><path d="M3.76 6.12l12.24 12.213 12.24-12.213 3.76 3.76-16 16-16-16 3.76-3.76z"></path></svg>';
            }
            item.innerHTML = iconHTML + "<span>" + item.innerHTML + "</span>";
        }
        else {
            item.innerHTML = "<svg></svg><span>" + item.innerHTML + "</span>";
        }
        item.setAttribute("data-target-id", ids[index]);
    });
    tocHTML = tempElement.firstElementChild.innerHTML;
    if (headingsElement.length === 0) {
        targetElement.innerHTML = "";
        return tocHTML;
    }
    targetElement.innerHTML = tocHTML;
    if (vditor) {
        (0,_mathRender__WEBPACK_IMPORTED_MODULE_0__/* .mathRender */ .H)(targetElement, {
            cdn: vditor.options.cdn,
            math: vditor.options.preview.math,
        });
    }
    targetElement.firstElementChild.addEventListener("click", function (event) {
        var target = event.target;
        while (target && !target.isEqualNode(targetElement)) {
            if (target.classList.contains("vditor-outline__action")) {
                if (target.classList.contains("vditor-outline__action--close")) {
                    target.classList.remove("vditor-outline__action--close");
                    target.parentElement.nextElementSibling.setAttribute("style", "display:block");
                }
                else {
                    target.classList.add("vditor-outline__action--close");
                    target.parentElement.nextElementSibling.setAttribute("style", "display:none");
                }
                event.preventDefault();
                event.stopPropagation();
                break;
            }
            else if (target.getAttribute("data-target-id")) {
                event.preventDefault();
                event.stopPropagation();
                var idElement = document.getElementById(target.getAttribute("data-target-id"));
                if (!idElement) {
                    return;
                }
                if (vditor) {
                    if (vditor.options.height === "auto") {
                        var windowScrollY = idElement.offsetTop + vditor.element.offsetTop;
                        if (!vditor.options.toolbarConfig.pin) {
                            windowScrollY += vditor.toolbar.element.offsetHeight;
                        }
                        window.scrollTo(window.scrollX, windowScrollY);
                    }
                    else {
                        if (vditor.element.offsetTop < window.scrollY) {
                            window.scrollTo(window.scrollX, vditor.element.offsetTop);
                        }
                        if (vditor.preview.element.contains(contentElement)) {
                            contentElement.parentElement.scrollTop = idElement.offsetTop;
                        }
                        else {
                            contentElement.scrollTop = idElement.offsetTop;
                        }
                    }
                }
                else {
                    window.scrollTo(window.scrollX, idElement.offsetTop);
                }
                break;
            }
            target = target.parentElement;
        }
    });
    return tocHTML;
};


/***/ }),

/***/ 583:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": function() { return /* binding */ plantumlRender; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(260);
/* harmony import */ var _util_addScript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(228);
/* harmony import */ var _adapterRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46);



var plantumlRender = function (element, cdn) {
    if (element === void 0) { element = document; }
    if (cdn === void 0) { cdn = _constants__WEBPACK_IMPORTED_MODULE_0__/* .Constants.CDN */ .g.CDN; }
    var plantumlElements = _adapterRender__WEBPACK_IMPORTED_MODULE_1__.plantumlRenderAdapter.getElements(element);
    if (plantumlElements.length === 0) {
        return;
    }
    (0,_util_addScript__WEBPACK_IMPORTED_MODULE_2__/* .addScript */ .G)(cdn + "/dist/js/plantuml/plantuml-encoder.min.js", "vditorPlantumlScript").then(function () {
        plantumlElements.forEach(function (e) {
            if (e.parentElement.classList.contains("vditor-wysiwyg__pre") ||
                e.parentElement.classList.contains("vditor-ir__marker--pre")) {
                return;
            }
            var text = _adapterRender__WEBPACK_IMPORTED_MODULE_1__.plantumlRenderAdapter.getCode(e).trim();
            if (!text) {
                return;
            }
            try {
                e.innerHTML = "<img src=\"http://www.plantuml.com/plantuml/svg/~1" + plantumlEncoder.encode(text) + "\">";
            }
            catch (error) {
                e.className = "vditor-reset--error";
                e.innerHTML = "plantuml render error: <br>" + error;
            }
        });
    });
};


/***/ }),

/***/ 792:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": function() { return /* binding */ setLute; }
/* harmony export */ });
var setLute = function (options) {
    var lute = Lute.New();
    lute.PutEmojis(options.emojis);
    lute.SetEmojiSite(options.emojiSite);
    lute.SetHeadingAnchor(options.headingAnchor);
    lute.SetInlineMathAllowDigitAfterOpenMarker(options.inlineMathDigit);
    lute.SetAutoSpace(options.autoSpace);
    lute.SetToC(options.toc);
    lute.SetFootnotes(options.footnotes);
    lute.SetFixTermTypo(options.fixTermTypo);
    lute.SetVditorCodeBlockPreview(options.codeBlockPreview);
    lute.SetVditorMathBlockPreview(options.mathBlockPreview);
    lute.SetSanitize(options.sanitize);
    lute.SetChineseParagraphBeginningSpace(options.paragraphBeginningSpace);
    lute.SetRenderListStyle(options.listStyle);
    lute.SetLinkBase(options.linkBase);
    lute.SetLinkPrefix(options.linkPrefix);
    lute.SetMark(options.mark);
    if (options.lazyLoadImage) {
        lute.SetImageLazyLoading(options.lazyLoadImage);
    }
    return lute;
};


/***/ }),

/***/ 264:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": function() { return /* binding */ previewImage; }
/* harmony export */ });
var previewImage = function (oldImgElement, lang, theme) {
    if (lang === void 0) { lang = "zh_CN"; }
    if (theme === void 0) { theme = "classic"; }
    var oldImgRect = oldImgElement.getBoundingClientRect();
    var height = 36;
    document.body.insertAdjacentHTML("beforeend", "<div class=\"vditor vditor-img" + (theme === "dark" ? " vditor--dark" : "") + "\">\n    <div class=\"vditor-img__bar\">\n      <span class=\"vditor-img__btn\" data-deg=\"0\">\n        <svg><use xlink:href=\"#vditor-icon-redo\"></use></svg>\n        " + window.VditorI18n.spin + "\n      </span>\n      <span class=\"vditor-img__btn\"  onclick=\"this.parentElement.parentElement.outerHTML = '';document.body.style.overflow = ''\">\n        X &nbsp;" + window.VditorI18n.close + "\n      </span>\n    </div>\n    <div class=\"vditor-img__img\" onclick=\"this.parentElement.outerHTML = '';document.body.style.overflow = ''\">\n      <img style=\"width: " + oldImgElement.width + "px;height:" + oldImgElement.height + "px;transform: translate3d(" + oldImgRect.left + "px, " + (oldImgRect.top - height) + "px, 0)\" src=\"" + oldImgElement.getAttribute("src") + "\">\n    </div>\n</div>");
    document.body.style.overflow = "hidden";
    // 图片从原始位置移动到预览正中间的动画效果
    var imgElement = document.querySelector(".vditor-img img");
    var translate3d = "translate3d(" + Math.max(0, window.innerWidth - oldImgElement.naturalWidth) / 2 + "px, " + Math.max(0, window.innerHeight - height - oldImgElement.naturalHeight) / 2 + "px, 0)";
    setTimeout(function () {
        imgElement.setAttribute("style", "transition: transform .3s ease-in-out;transform: " + translate3d);
        setTimeout(function () {
            imgElement.parentElement.scrollTo((imgElement.parentElement.scrollWidth - imgElement.parentElement.clientWidth) / 2, (imgElement.parentElement.scrollHeight - imgElement.parentElement.clientHeight) / 2);
        }, 400);
    });
    // 旋转
    var btnElement = document.querySelector(".vditor-img__btn");
    btnElement.addEventListener("click", function () {
        var deg = parseInt(btnElement.getAttribute("data-deg"), 10) + 90;
        if ((deg / 90) % 2 === 1 && oldImgElement.naturalWidth > imgElement.parentElement.clientHeight) {
            imgElement.style.transform = "translate3d(" + Math.max(0, window.innerWidth - oldImgElement.naturalWidth) / 2 + "px, " + (oldImgElement.naturalWidth / 2 - oldImgElement.naturalHeight / 2) + "px, 0) rotateZ(" + deg + "deg)";
        }
        else {
            imgElement.style.transform = translate3d + " rotateZ(" + deg + "deg)";
        }
        btnElement.setAttribute("data-deg", deg.toString());
        setTimeout(function () {
            imgElement.parentElement.scrollTo((imgElement.parentElement.scrollWidth - imgElement.parentElement.clientWidth) / 2, (imgElement.parentElement.scrollHeight - imgElement.parentElement.clientHeight) / 2);
        }, 400);
    });
};


/***/ }),

/***/ 968:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": function() { return /* binding */ setCodeTheme; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(260);
/* harmony import */ var _util_addStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(946);


var setCodeTheme = function (codeTheme, cdn) {
    if (cdn === void 0) { cdn = _constants__WEBPACK_IMPORTED_MODULE_0__/* .Constants.CDN */ .g.CDN; }
    if (!_constants__WEBPACK_IMPORTED_MODULE_0__/* .Constants.CODE_THEME.includes */ .g.CODE_THEME.includes(codeTheme)) {
        codeTheme = "github";
    }
    var vditorHljsStyle = document.getElementById("vditorHljsStyle");
    var href = cdn + "/dist/js/highlight.js/styles/" + codeTheme + ".css";
    if (!vditorHljsStyle) {
        (0,_util_addStyle__WEBPACK_IMPORTED_MODULE_1__/* .addStyle */ .c)(href, "vditorHljsStyle");
    }
    else if (vditorHljsStyle.href !== href) {
        vditorHljsStyle.remove();
        (0,_util_addStyle__WEBPACK_IMPORTED_MODULE_1__/* .addStyle */ .c)(href, "vditorHljsStyle");
    }
};


/***/ }),

/***/ 958:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ setContentTheme; }
/* harmony export */ });
/* harmony import */ var _util_addStyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(946);

var setContentTheme = function (contentTheme, path) {
    if (!contentTheme || !path) {
        return;
    }
    var vditorContentTheme = document.getElementById("vditorContentTheme");
    var cssPath = path + "/" + contentTheme + ".css";
    if (!vditorContentTheme) {
        (0,_util_addStyle__WEBPACK_IMPORTED_MODULE_0__/* .addStyle */ .c)(cssPath, "vditorContentTheme");
    }
    else if (vditorContentTheme.href !== cssPath) {
        vditorContentTheme.remove();
        (0,_util_addStyle__WEBPACK_IMPORTED_MODULE_0__/* .addStyle */ .c)(cssPath, "vditorContentTheme");
    }
};


/***/ }),

/***/ 228:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": function() { return /* binding */ addScriptSync; },
/* harmony export */   "G": function() { return /* binding */ addScript; }
/* harmony export */ });
var addScriptSync = function (path, id) {
    if (document.getElementById(id)) {
        return false;
    }
    var xhrObj = new XMLHttpRequest();
    xhrObj.open("GET", path, false);
    xhrObj.setRequestHeader("Accept", "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01");
    xhrObj.send("");
    var scriptElement = document.createElement("script");
    scriptElement.type = "text/javascript";
    scriptElement.text = xhrObj.responseText;
    scriptElement.id = id;
    document.head.appendChild(scriptElement);
};
var addScript = function (path, id) {
    return new Promise(function (resolve, reject) {
        if (document.getElementById(id)) {
            // 脚本加载后再次调用直接返回
            resolve();
            return false;
        }
        var scriptElement = document.createElement("script");
        scriptElement.src = path;
        scriptElement.async = true;
        // 循环调用时 Chrome 不会重复请求 js
        document.head.appendChild(scriptElement);
        scriptElement.onload = function () {
            if (document.getElementById(id)) {
                // 循环调用需清除 DOM 中的 script 标签
                scriptElement.remove();
                resolve();
                return false;
            }
            scriptElement.id = id;
            resolve();
        };
    });
};


/***/ }),

/***/ 946:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": function() { return /* binding */ addStyle; }
/* harmony export */ });
var addStyle = function (url, id) {
    if (!document.getElementById(id)) {
        var styleElement = document.createElement("link");
        styleElement.id = id;
        styleElement.rel = "stylesheet";
        styleElement.type = "text/css";
        styleElement.href = url;
        document.getElementsByTagName("head")[0].appendChild(styleElement);
    }
};


/***/ }),

/***/ 769:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": function() { return /* binding */ code160to32; }
/* harmony export */ });
var code160to32 = function (text) {
    // 非打断空格转换为空格
    return text.replace(/\u00a0/g, " ");
};


/***/ }),

/***/ 713:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lG": function() { return /* binding */ hasClosestByMatchTag; },
/* harmony export */   "fb": function() { return /* binding */ hasClosestByClassName; }
/* harmony export */ });
/* unused harmony exports hasTopClosestByClassName, hasTopClosestByAttribute, hasTopClosestByTag, getTopList, hasClosestByAttribute, hasClosestBlock, getLastNode */

var hasTopClosestByClassName = function (element, className) {
    var closest = hasClosestByClassName(element, className);
    var parentClosest = false;
    var findTop = false;
    while (closest && !closest.classList.contains("vditor-reset") && !findTop) {
        parentClosest = hasClosestByClassName(closest.parentElement, className);
        if (parentClosest) {
            closest = parentClosest;
        }
        else {
            findTop = true;
        }
    }
    return closest || false;
};
var hasTopClosestByAttribute = function (element, attr, value) {
    var closest = hasClosestByAttribute(element, attr, value);
    var parentClosest = false;
    var findTop = false;
    while (closest && !closest.classList.contains("vditor-reset") && !findTop) {
        parentClosest = hasClosestByAttribute(closest.parentElement, attr, value);
        if (parentClosest) {
            closest = parentClosest;
        }
        else {
            findTop = true;
        }
    }
    return closest || false;
};
var hasTopClosestByTag = function (element, nodeName) {
    var closest = hasClosestByTag(element, nodeName);
    var parentClosest = false;
    var findTop = false;
    while (closest && !closest.classList.contains("vditor-reset") && !findTop) {
        parentClosest = hasClosestByTag(closest.parentElement, nodeName);
        if (parentClosest) {
            closest = parentClosest;
        }
        else {
            findTop = true;
        }
    }
    return closest || false;
};
var getTopList = function (element) {
    var topUlElement = hasTopClosestByTag(element, "UL");
    var topOlElement = hasTopClosestByTag(element, "OL");
    var topListElement = topUlElement;
    if (topOlElement && (!topUlElement || (topUlElement && topOlElement.contains(topUlElement)))) {
        topListElement = topOlElement;
    }
    return topListElement;
};
var hasClosestByAttribute = function (element, attr, value) {
    if (!element) {
        return false;
    }
    if (element.nodeType === 3) {
        element = element.parentElement;
    }
    var e = element;
    var isClosest = false;
    while (e && !isClosest && !e.classList.contains("vditor-reset")) {
        if (e.getAttribute(attr) === value) {
            isClosest = true;
        }
        else {
            e = e.parentElement;
        }
    }
    return isClosest && e;
};
var hasClosestBlock = function (element) {
    if (!element) {
        return false;
    }
    if (element.nodeType === 3) {
        element = element.parentElement;
    }
    var e = element;
    var isClosest = false;
    var blockElement = hasClosestByAttribute(element, "data-block", "0");
    if (blockElement) {
        return blockElement;
    }
    while (e && !isClosest && !e.classList.contains("vditor-reset")) {
        if (e.tagName === "H1" ||
            e.tagName === "H2" ||
            e.tagName === "H3" ||
            e.tagName === "H4" ||
            e.tagName === "H5" ||
            e.tagName === "H6" ||
            e.tagName === "P" ||
            e.tagName === "BLOCKQUOTE" ||
            e.tagName === "OL" ||
            e.tagName === "UL") {
            isClosest = true;
        }
        else {
            e = e.parentElement;
        }
    }
    return isClosest && e;
};
var hasClosestByMatchTag = function (element, nodeName) {
    if (!element) {
        return false;
    }
    if (element.nodeType === 3) {
        element = element.parentElement;
    }
    var e = element;
    var isClosest = false;
    while (e && !isClosest && !e.classList.contains("vditor-reset")) {
        if (e.nodeName === nodeName) {
            isClosest = true;
        }
        else {
            e = e.parentElement;
        }
    }
    return isClosest && e;
};
var hasClosestByClassName = function (element, className) {
    if (!element) {
        return false;
    }
    if (element.nodeType === 3) {
        element = element.parentElement;
    }
    var e = element;
    var isClosest = false;
    while (e && !isClosest && !e.classList.contains("vditor-reset")) {
        if (e.classList.contains(className)) {
            isClosest = true;
        }
        else {
            e = e.parentElement;
        }
    }
    return isClosest && e;
};
var getLastNode = function (node) {
    while (node && node.lastChild) {
        node = node.lastChild;
    }
    return node;
};


/***/ }),

/***/ 615:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": function() { return /* binding */ hasClosestByHeadings; }
/* harmony export */ });
/* unused harmony export hasClosestByTag */
// NOTE: 减少 method.ts 打包，故从 hasClosest.ts 中拆分
var hasClosestByTag = function (element, nodeName) {
    if (!element) {
        return false;
    }
    if (element.nodeType === 3) {
        element = element.parentElement;
    }
    var e = element;
    var isClosest = false;
    while (e && !isClosest && !e.classList.contains("vditor-reset")) {
        if (e.nodeName.indexOf(nodeName) === 0) {
            isClosest = true;
        }
        else {
            e = e.parentElement;
        }
    }
    return isClosest && e;
};
var hasClosestByHeadings = function (element) {
    var headingElement = hasClosestByTag(element, "H");
    if (headingElement && headingElement.tagName.length === 2 && headingElement.tagName !== "HR") {
        return headingElement;
    }
    return false;
};


/***/ }),

/***/ 224:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": function() { return /* binding */ merge; }
/* harmony export */ });
var merge = function () {
    var options = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        options[_i] = arguments[_i];
    }
    var target = {};
    var merger = function (obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                if (Object.prototype.toString.call(obj[prop]) === "[object Object]") {
                    target[prop] = merge(target[prop], obj[prop]);
                }
                else {
                    target[prop] = obj[prop];
                }
            }
        }
    };
    for (var i = 0; i < options.length; i++) {
        merger(options[i]);
    }
    return target;
};


/***/ }),

/***/ 187:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hc": function() { return /* binding */ setSelectionFocus; }
/* harmony export */ });
/* unused harmony exports getEditorRange, getCursorPosition, selectIsEditor, getSelectPosition, setSelectionByPosition, setRangeByWbr, insertHTML */
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(260);



var getEditorRange = function (vditor) {
    var range;
    var element = vditor[vditor.currentMode].element;
    if (getSelection().rangeCount > 0) {
        range = getSelection().getRangeAt(0);
        if (element.isEqualNode(range.startContainer) || element.contains(range.startContainer)) {
            return range;
        }
    }
    if (vditor[vditor.currentMode].range) {
        return vditor[vditor.currentMode].range;
    }
    element.focus();
    range = element.ownerDocument.createRange();
    range.setStart(element, 0);
    range.collapse(true);
    return range;
};
var getCursorPosition = function (editor) {
    var range = window.getSelection().getRangeAt(0);
    if (!editor.contains(range.startContainer) && !hasClosestByClassName(range.startContainer, "vditor-panel--none")) {
        return {
            left: 0,
            top: 0,
        };
    }
    var parentRect = editor.parentElement.getBoundingClientRect();
    var cursorRect;
    if (range.getClientRects().length === 0) {
        if (range.startContainer.nodeType === 3) {
            // 空行时，会出现没有 br 的情况，需要根据父元素 <p> 获取位置信息
            var parent_1 = range.startContainer.parentElement;
            if (parent_1 && parent_1.getClientRects().length > 0) {
                cursorRect = parent_1.getClientRects()[0];
            }
            else {
                return {
                    left: 0,
                    top: 0,
                };
            }
        }
        else {
            var children = range.startContainer.children;
            if (children[range.startOffset] &&
                children[range.startOffset].getClientRects().length > 0) {
                // markdown 模式回车
                cursorRect = children[range.startOffset].getClientRects()[0];
            }
            else if (range.startContainer.childNodes.length > 0) {
                // in table or code block
                var cloneRange = range.cloneRange();
                range.selectNode(range.startContainer.childNodes[Math.max(0, range.startOffset - 1)]);
                cursorRect = range.getClientRects()[0];
                range.setEnd(cloneRange.endContainer, cloneRange.endOffset);
                range.setStart(cloneRange.startContainer, cloneRange.startOffset);
            }
            else {
                cursorRect = range.startContainer.getClientRects()[0];
            }
            if (!cursorRect) {
                var parentElement = range.startContainer.childNodes[range.startOffset];
                while (!parentElement.getClientRects ||
                    (parentElement.getClientRects && parentElement.getClientRects().length === 0)) {
                    parentElement = parentElement.parentElement;
                }
                cursorRect = parentElement.getClientRects()[0];
            }
        }
    }
    else {
        cursorRect = range.getClientRects()[0];
    }
    return {
        left: cursorRect.left - parentRect.left,
        top: cursorRect.top - parentRect.top,
    };
};
var selectIsEditor = function (editor, range) {
    if (!range) {
        if (getSelection().rangeCount === 0) {
            return false;
        }
        else {
            range = getSelection().getRangeAt(0);
        }
    }
    var container = range.commonAncestorContainer;
    return editor.isEqualNode(container) || editor.contains(container);
};
var setSelectionFocus = function (range) {
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
};
var getSelectPosition = function (selectElement, editorElement, range) {
    var position = {
        end: 0,
        start: 0,
    };
    if (!range) {
        if (getSelection().rangeCount === 0) {
            return position;
        }
        range = window.getSelection().getRangeAt(0);
    }
    if (selectIsEditor(editorElement, range)) {
        var preSelectionRange = range.cloneRange();
        if (selectElement.childNodes[0] && selectElement.childNodes[0].childNodes[0]) {
            preSelectionRange.setStart(selectElement.childNodes[0].childNodes[0], 0);
        }
        else {
            preSelectionRange.selectNodeContents(selectElement);
        }
        preSelectionRange.setEnd(range.startContainer, range.startOffset);
        position.start = preSelectionRange.toString().length;
        position.end = position.start + range.toString().length;
    }
    return position;
};
var setSelectionByPosition = function (start, end, editor) {
    var charIndex = 0;
    var line = 0;
    var pNode = editor.childNodes[line];
    var foundStart = false;
    var stop = false;
    start = Math.max(0, start);
    end = Math.max(0, end);
    var range = editor.ownerDocument.createRange();
    range.setStart(pNode || editor, 0);
    range.collapse(true);
    while (!stop && pNode) {
        var nextCharIndex = charIndex + pNode.textContent.length;
        if (!foundStart && start >= charIndex && start <= nextCharIndex) {
            if (start === 0) {
                range.setStart(pNode, 0);
            }
            else {
                if (pNode.childNodes[0].nodeType === 3) {
                    range.setStart(pNode.childNodes[0], start - charIndex);
                }
                else if (pNode.nextSibling) {
                    range.setStartBefore(pNode.nextSibling);
                }
                else {
                    range.setStartAfter(pNode);
                }
            }
            foundStart = true;
            if (start === end) {
                stop = true;
                break;
            }
        }
        if (foundStart && end >= charIndex && end <= nextCharIndex) {
            if (end === 0) {
                range.setEnd(pNode, 0);
            }
            else {
                if (pNode.childNodes[0].nodeType === 3) {
                    range.setEnd(pNode.childNodes[0], end - charIndex);
                }
                else if (pNode.nextSibling) {
                    range.setEndBefore(pNode.nextSibling);
                }
                else {
                    range.setEndAfter(pNode);
                }
            }
            stop = true;
        }
        charIndex = nextCharIndex;
        pNode = editor.childNodes[++line];
    }
    if (!stop && editor.childNodes[line - 1]) {
        range.setStartBefore(editor.childNodes[line - 1]);
    }
    setSelectionFocus(range);
    return range;
};
var setRangeByWbr = function (element, range) {
    var wbrElement = element.querySelector("wbr");
    if (!wbrElement) {
        return;
    }
    if (!wbrElement.previousElementSibling) {
        if (wbrElement.previousSibling) {
            // text<wbr>
            range.setStart(wbrElement.previousSibling, wbrElement.previousSibling.textContent.length);
        }
        else if (wbrElement.nextSibling) {
            if (wbrElement.nextSibling.nodeType === 3) {
                // <wbr>text
                range.setStart(wbrElement.nextSibling, 0);
            }
            else {
                // <wbr><br> https://github.com/Vanessa219/vditor/issues/400
                range.setStartBefore(wbrElement.nextSibling);
            }
        }
        else {
            // 内容为空
            range.setStart(wbrElement.parentElement, 0);
        }
    }
    else {
        if (wbrElement.previousElementSibling.isSameNode(wbrElement.previousSibling)) {
            if (wbrElement.previousElementSibling.lastChild) {
                // <em>text</em><wbr>
                range.setStartBefore(wbrElement);
                range.collapse(true);
                setSelectionFocus(range);
                // fix Chrome set range bug: **c**
                if (isChrome() && (wbrElement.previousElementSibling.tagName === "EM" ||
                    wbrElement.previousElementSibling.tagName === "STRONG" ||
                    wbrElement.previousElementSibling.tagName === "S")) {
                    range.insertNode(document.createTextNode(Constants.ZWSP));
                    range.collapse(false);
                }
                wbrElement.remove();
                return;
            }
            else {
                // <br><wbr>
                range.setStartAfter(wbrElement.previousElementSibling);
            }
        }
        else {
            // <em>text</em>text<wbr>
            range.setStart(wbrElement.previousSibling, wbrElement.previousSibling.textContent.length);
        }
    }
    range.collapse(true);
    wbrElement.remove();
    setSelectionFocus(range);
};
var insertHTML = function (html, vditor) {
    // 使用 lute 方法会添加 p 元素，只有一个 p 元素的时候进行删除
    var tempElement = document.createElement("div");
    tempElement.innerHTML = html;
    var tempBlockElement = tempElement.querySelectorAll("p");
    if (tempBlockElement.length === 1 && !tempBlockElement[0].previousSibling && !tempBlockElement[0].nextSibling &&
        vditor[vditor.currentMode].element.children.length > 0 && tempElement.firstElementChild.tagName === "P") {
        html = tempBlockElement[0].innerHTML.trim();
    }
    var pasteElement = document.createElement("div");
    pasteElement.innerHTML = html;
    var range = getEditorRange(vditor);
    if (range.toString() !== "") {
        vditor[vditor.currentMode].preventInput = true;
        document.execCommand("delete", false, "");
    }
    if (pasteElement.firstElementChild &&
        pasteElement.firstElementChild.getAttribute("data-block") === "0") {
        // 粘贴内容为块元素时，应在下一段落中插入
        pasteElement.lastElementChild.insertAdjacentHTML("beforeend", "<wbr>");
        var blockElement = hasClosestBlock(range.startContainer);
        if (!blockElement) {
            vditor[vditor.currentMode].element.insertAdjacentHTML("beforeend", pasteElement.innerHTML);
        }
        else {
            blockElement.insertAdjacentHTML("afterend", pasteElement.innerHTML);
        }
        setRangeByWbr(vditor[vditor.currentMode].element, range);
    }
    else {
        var pasteTemplate = document.createElement("template");
        pasteTemplate.innerHTML = html;
        range.insertNode(pasteTemplate.content.cloneNode(true));
        range.collapse(false);
        setSelectionFocus(range);
    }
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ method; }
});

// EXTERNAL MODULE: ./src/ts/markdown/abcRender.ts
var abcRender = __webpack_require__(369);
// EXTERNAL MODULE: ./src/ts/markdown/adapterRender.ts
var adapterRender = __webpack_require__(46);
// EXTERNAL MODULE: ./src/ts/markdown/chartRender.ts
var chartRender = __webpack_require__(726);
// EXTERNAL MODULE: ./src/ts/markdown/codeRender.ts
var codeRender = __webpack_require__(23);
// EXTERNAL MODULE: ./src/ts/markdown/flowchartRender.ts
var flowchartRender = __webpack_require__(383);
// EXTERNAL MODULE: ./src/ts/markdown/graphvizRender.ts
var graphvizRender = __webpack_require__(890);
// EXTERNAL MODULE: ./src/ts/markdown/highlightRender.ts
var highlightRender = __webpack_require__(93);
;// CONCATENATED MODULE: ./src/ts/markdown/lazyLoadImageRender.ts
var lazyLoadImageRender = function (element) {
    if (element === void 0) { element = document; }
    var loadImg = function (it) {
        var testImage = document.createElement("img");
        testImage.src = it.getAttribute("data-src");
        testImage.addEventListener("load", function () {
            if (!it.getAttribute("style") && !it.getAttribute("class") &&
                !it.getAttribute("width") && !it.getAttribute("height")) {
                if (testImage.naturalHeight > testImage.naturalWidth &&
                    testImage.naturalWidth / testImage.naturalHeight <
                        document.querySelector(".vditor-reset").clientWidth / (window.innerHeight - 40) &&
                    testImage.naturalHeight > (window.innerHeight - 40)) {
                    it.style.height = (window.innerHeight - 40) + "px";
                }
            }
            it.src = testImage.src;
        });
        it.removeAttribute("data-src");
    };
    if (!("IntersectionObserver" in window)) {
        element.querySelectorAll("img").forEach(function (imgElement) {
            if (imgElement.getAttribute("data-src")) {
                loadImg(imgElement);
            }
        });
        return false;
    }
    if (window.vditorImageIntersectionObserver) {
        window.vditorImageIntersectionObserver.disconnect();
        element.querySelectorAll("img").forEach(function (imgElement) {
            window.vditorImageIntersectionObserver.observe(imgElement);
        });
    }
    else {
        window.vditorImageIntersectionObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entrie) {
                if ((typeof entrie.isIntersecting === "undefined"
                    ? entrie.intersectionRatio !== 0
                    : entrie.isIntersecting)
                    && entrie.target.getAttribute("data-src")) {
                    loadImg(entrie.target);
                }
            });
        });
        element.querySelectorAll("img").forEach(function (imgElement) {
            window.vditorImageIntersectionObserver.observe(imgElement);
        });
    }
};

// EXTERNAL MODULE: ./src/ts/markdown/mathRender.ts
var mathRender = __webpack_require__(323);
// EXTERNAL MODULE: ./src/ts/markdown/mediaRender.ts
var mediaRender = __webpack_require__(207);
// EXTERNAL MODULE: ./src/ts/markdown/mermaidRender.ts
var mermaidRender = __webpack_require__(765);
// EXTERNAL MODULE: ./src/ts/markdown/mindmapRender.ts
var mindmapRender = __webpack_require__(894);
// EXTERNAL MODULE: ./src/ts/markdown/outlineRender.ts
var outlineRender = __webpack_require__(198);
// EXTERNAL MODULE: ./src/ts/markdown/plantumlRender.ts
var plantumlRender = __webpack_require__(583);
// EXTERNAL MODULE: ./src/ts/constants.ts
var constants = __webpack_require__(260);
// EXTERNAL MODULE: ./src/ts/ui/setContentTheme.ts
var setContentTheme = __webpack_require__(958);
// EXTERNAL MODULE: ./src/ts/util/addScript.ts
var addScript = __webpack_require__(228);
// EXTERNAL MODULE: ./src/ts/util/hasClosest.ts
var hasClosest = __webpack_require__(713);
// EXTERNAL MODULE: ./src/ts/util/merge.ts
var merge = __webpack_require__(224);
;// CONCATENATED MODULE: ./src/ts/markdown/anchorRender.ts
var anchorRender = function (type) {
    document.querySelectorAll(".vditor-anchor").forEach(function (anchor) {
        if (type === 1) {
            anchor.classList.add("vditor-anchor--left");
        }
        anchor.onclick = function () {
            var id = anchor.getAttribute("href").substr(1);
            var top = document.getElementById("vditorAnchor-" + id).offsetTop;
            document.querySelector("html").scrollTop = top;
        };
    });
    window.onhashchange = function () {
        var element = document.getElementById("vditorAnchor-" + decodeURIComponent(window.location.hash.substr(1)));
        if (element) {
            document.querySelector("html").scrollTop = element.offsetTop;
        }
    };
};

// EXTERNAL MODULE: ./src/ts/markdown/setLute.ts
var setLute = __webpack_require__(792);
// EXTERNAL MODULE: ./src/ts/util/selection.ts
var selection = __webpack_require__(187);
;// CONCATENATED MODULE: ./src/ts/markdown/speechRender.ts

var speechRender = function (element, lang) {
    if (lang === void 0) { lang = "zh_CN"; }
    if (typeof speechSynthesis === "undefined" || typeof SpeechSynthesisUtterance === "undefined") {
        return;
    }
    var playSVG = '<svg><use xlink:href="#vditor-icon-play"></use></svg>';
    var pauseSVG = '<svg><use xlink:href="#vditor-icon-pause"></use></svg>';
    if (!document.getElementById("vditorIconScript")) {
        playSVG = '<svg viewBox="0 0 32 32"><path d="M3.436 0l25.128 16-25.128 16v-32z"></path></svg>';
        pauseSVG = '<svg viewBox="0 0 32 32"><path d="M20.617 0h9.128v32h-9.128v-32zM2.255 32v-32h9.128v32h-9.128z"></path></svg>';
    }
    var speechDom = document.querySelector(".vditor-speech");
    if (!speechDom) {
        speechDom = document.createElement("div");
        speechDom.className = "vditor-speech";
        document.body.insertAdjacentElement("beforeend", speechDom);
        var getVoice = function () {
            var voices = speechSynthesis.getVoices();
            var currentVoice;
            var defaultVoice;
            voices.forEach(function (item) {
                if (item.lang === lang.replace("_", "-")) {
                    currentVoice = item;
                }
                if (item.default) {
                    defaultVoice = item;
                }
            });
            if (!currentVoice) {
                currentVoice = defaultVoice;
            }
            return currentVoice;
        };
        if (speechSynthesis.onvoiceschanged !== undefined) {
            speechSynthesis.onvoiceschanged = getVoice;
        }
        var voice_1 = getVoice();
        speechDom.onclick = function () {
            if (speechDom.className === "vditor-speech") {
                var utterThis = new SpeechSynthesisUtterance(speechDom.getAttribute("data-text"));
                utterThis.voice = voice_1;
                utterThis.onend = function () {
                    speechDom.className = "vditor-speech";
                    speechSynthesis.cancel();
                    speechDom.innerHTML = playSVG;
                };
                speechSynthesis.speak(utterThis);
                speechDom.className = "vditor-speech vditor-speech--current";
                speechDom.innerHTML = pauseSVG;
            }
            else {
                if (speechSynthesis.speaking) {
                    if (speechSynthesis.paused) {
                        speechSynthesis.resume();
                        speechDom.innerHTML = pauseSVG;
                    }
                    else {
                        speechSynthesis.pause();
                        speechDom.innerHTML = playSVG;
                    }
                }
            }
            (0,selection/* setSelectionFocus */.Hc)(window.vditorSpeechRange);
        };
        document.body.addEventListener("click", function () {
            if (getSelection().toString().trim() === "" && speechDom.style.display === "block") {
                speechDom.className = "vditor-speech";
                speechSynthesis.cancel();
                speechDom.style.display = "none";
            }
        });
    }
    element.addEventListener("mouseup", function (event) {
        var text = getSelection().toString().trim();
        speechSynthesis.cancel();
        if (getSelection().toString().trim() === "") {
            if (speechDom.style.display === "block") {
                speechDom.className = "vditor-speech";
                speechDom.style.display = "none";
            }
            return;
        }
        window.vditorSpeechRange = getSelection().getRangeAt(0).cloneRange();
        var rect = getSelection().getRangeAt(0).getBoundingClientRect();
        speechDom.innerHTML = playSVG;
        speechDom.style.display = "block";
        speechDom.style.top = (rect.top + rect.height + document.querySelector("html").scrollTop - 20) + "px";
        speechDom.style.left = (event.screenX + 2) + "px";
        speechDom.setAttribute("data-text", text);
    });
};

;// CONCATENATED MODULE: ./src/ts/markdown/previewRender.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




















var mergeOptions = function (options) {
    var defaultOption = {
        anchor: 0,
        cdn: constants/* Constants.CDN */.g.CDN,
        customEmoji: {},
        emojiPath: ((options && options.emojiPath) || constants/* Constants.CDN */.g.CDN) + "/dist/images/emoji",
        hljs: constants/* Constants.HLJS_OPTIONS */.g.HLJS_OPTIONS,
        icon: "ant",
        lang: "zh_CN",
        markdown: constants/* Constants.MARKDOWN_OPTIONS */.g.MARKDOWN_OPTIONS,
        math: constants/* Constants.MATH_OPTIONS */.g.MATH_OPTIONS,
        mode: "light",
        speech: {
            enable: false,
        },
        theme: constants/* Constants.THEME_OPTIONS */.g.THEME_OPTIONS,
    };
    return (0,merge/* merge */.T)(defaultOption, options);
};
var md2html = function (mdText, options) {
    var mergedOptions = mergeOptions(options);
    return (0,addScript/* addScript */.G)(mergedOptions.cdn + "/dist/js/lute/lute.min.js", "vditorLuteScript").then(function () {
        var lute = (0,setLute/* setLute */.X)({
            autoSpace: mergedOptions.markdown.autoSpace,
            codeBlockPreview: mergedOptions.markdown.codeBlockPreview,
            emojiSite: mergedOptions.emojiPath,
            emojis: mergedOptions.customEmoji,
            fixTermTypo: mergedOptions.markdown.fixTermTypo,
            footnotes: mergedOptions.markdown.footnotes,
            headingAnchor: mergedOptions.anchor !== 0,
            inlineMathDigit: mergedOptions.math.inlineDigit,
            lazyLoadImage: mergedOptions.lazyLoadImage,
            linkBase: mergedOptions.markdown.linkBase,
            linkPrefix: mergedOptions.markdown.linkPrefix,
            listStyle: mergedOptions.markdown.listStyle,
            mark: mergedOptions.markdown.mark,
            mathBlockPreview: mergedOptions.markdown.mathBlockPreview,
            paragraphBeginningSpace: mergedOptions.markdown.paragraphBeginningSpace,
            sanitize: mergedOptions.markdown.sanitize,
            toc: mergedOptions.markdown.toc,
        });
        if (options === null || options === void 0 ? void 0 : options.renderers) {
            lute.SetJSRenderers({
                renderers: {
                    Md2HTML: options.renderers,
                },
            });
        }
        lute.SetHeadingID(true);
        return lute.Md2HTML(mdText);
    });
};
var previewRender = function (previewElement, markdown, options) { return __awaiter(void 0, void 0, void 0, function () {
    var mergedOptions, html, i18nScriptPrefix, i18nScriptID_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                mergedOptions = mergeOptions(options);
                return [4 /*yield*/, md2html(markdown, mergedOptions)];
            case 1:
                html = _a.sent();
                if (mergedOptions.transform) {
                    html = mergedOptions.transform(html);
                }
                previewElement.innerHTML = html;
                previewElement.classList.add("vditor-reset");
                if (!!mergedOptions.i18n) return [3 /*break*/, 5];
                if (!!["en_US", "ja_JP", "ko_KR", "ru_RU", "zh_CN", "zh_TW"].includes(mergedOptions.lang)) return [3 /*break*/, 2];
                throw new Error("options.lang error, see https://ld246.com/article/1549638745630#options");
            case 2:
                i18nScriptPrefix = "vditorI18nScript";
                i18nScriptID_1 = i18nScriptPrefix + mergedOptions.lang;
                document.querySelectorAll("head script[id^=\"" + i18nScriptPrefix + "\"]").forEach(function (el) {
                    if (el.id !== i18nScriptID_1) {
                        document.head.removeChild(el);
                    }
                });
                return [4 /*yield*/, (0,addScript/* addScript */.G)(mergedOptions.cdn + "/dist/js/i18n/" + mergedOptions.lang + ".js", i18nScriptID_1)];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4: return [3 /*break*/, 6];
            case 5:
                window.VditorI18n = mergedOptions.i18n;
                _a.label = 6;
            case 6:
                if (!mergedOptions.icon) return [3 /*break*/, 8];
                return [4 /*yield*/, (0,addScript/* addScript */.G)(mergedOptions.cdn + "/dist/js/icons/" + mergedOptions.icon + ".js", "vditorIconScript")];
            case 7:
                _a.sent();
                _a.label = 8;
            case 8:
                (0,setContentTheme/* setContentTheme */.Z)(mergedOptions.theme.current, mergedOptions.theme.path);
                if (mergedOptions.anchor === 1) {
                    previewElement.classList.add("vditor-reset--anchor");
                }
                (0,codeRender/* codeRender */.O)(previewElement);
                (0,highlightRender/* highlightRender */.s)(mergedOptions.hljs, previewElement, mergedOptions.cdn);
                (0,mathRender/* mathRender */.H)(previewElement, {
                    cdn: mergedOptions.cdn,
                    math: mergedOptions.math,
                });
                (0,mermaidRender/* mermaidRender */.i)(previewElement, mergedOptions.cdn, mergedOptions.mode);
                (0,flowchartRender/* flowchartRender */.P)(previewElement, mergedOptions.cdn);
                (0,graphvizRender/* graphvizRender */.v)(previewElement, mergedOptions.cdn);
                (0,chartRender/* chartRender */.p)(previewElement, mergedOptions.cdn, mergedOptions.mode);
                (0,mindmapRender/* mindmapRender */.P)(previewElement, mergedOptions.cdn, mergedOptions.mode);
                (0,plantumlRender/* plantumlRender */.B)(previewElement, mergedOptions.cdn);
                (0,abcRender/* abcRender */.Q)(previewElement, mergedOptions.cdn);
                (0,mediaRender/* mediaRender */.Y)(previewElement);
                if (mergedOptions.speech.enable) {
                    speechRender(previewElement);
                }
                if (mergedOptions.anchor !== 0) {
                    anchorRender(mergedOptions.anchor);
                }
                if (mergedOptions.after) {
                    mergedOptions.after();
                }
                if (mergedOptions.lazyLoadImage) {
                    lazyLoadImageRender(previewElement);
                }
                previewElement.addEventListener("click", function (event) {
                    var spanElement = (0,hasClosest/* hasClosestByMatchTag */.lG)(event.target, "SPAN");
                    if (spanElement && (0,hasClosest/* hasClosestByClassName */.fb)(spanElement, "vditor-toc")) {
                        var headingElement = previewElement.querySelector("#" + spanElement.getAttribute("data-target-id"));
                        if (headingElement) {
                            window.scrollTo(window.scrollX, headingElement.offsetTop);
                        }
                        return;
                    }
                });
                return [2 /*return*/];
        }
    });
}); };

// EXTERNAL MODULE: ./src/ts/preview/image.ts
var preview_image = __webpack_require__(264);
// EXTERNAL MODULE: ./src/ts/ui/setCodeTheme.ts
var setCodeTheme = __webpack_require__(968);
;// CONCATENATED MODULE: ./src/method.ts



















var Vditor = /** @class */ (function () {
    function Vditor() {
    }
    /** 点击图片放大 */
    Vditor.adapterRender = adapterRender;
    /** 点击图片放大 */
    Vditor.previewImage = preview_image/* previewImage */.E;
    /** 为 element 中的代码块添加复制按钮 */
    Vditor.codeRender = codeRender/* codeRender */.O;
    /** 对 graphviz 进行渲染 */
    Vditor.graphvizRender = graphvizRender/* graphvizRender */.v;
    /** 为 element 中的代码块进行高亮渲染 */
    Vditor.highlightRender = highlightRender/* highlightRender */.s;
    /** 对数学公式进行渲染 */
    Vditor.mathRender = mathRender/* mathRender */.H;
    /** 流程图/时序图/甘特图渲染 */
    Vditor.mermaidRender = mermaidRender/* mermaidRender */.i;
    /** flowchart.js 渲染 */
    Vditor.flowchartRender = flowchartRender/* flowchartRender */.P;
    /** 图表渲染 */
    Vditor.chartRender = chartRender/* chartRender */.p;
    /** 五线谱渲染 */
    Vditor.abcRender = abcRender/* abcRender */.Q;
    /** 脑图渲染 */
    Vditor.mindmapRender = mindmapRender/* mindmapRender */.P;
    /** plantuml渲染 */
    Vditor.plantumlRender = plantumlRender/* plantumlRender */.B;
    /** 大纲渲染 */
    Vditor.outlineRender = outlineRender/* outlineRender */.k;
    /** 为[特定链接](https://github.com/Vanessa219/vditor/issues/7)分别渲染为视频、音频、嵌入的 iframe */
    Vditor.mediaRender = mediaRender/* mediaRender */.Y;
    /** 对选中的文字进行阅读 */
    Vditor.speechRender = speechRender;
    /** 对图片进行懒加载 */
    Vditor.lazyLoadImageRender = lazyLoadImageRender;
    /** Markdown 文本转换为 HTML，该方法需使用[异步编程](https://ld246.com/article/1546828434083?r=Vaness) */
    Vditor.md2html = md2html;
    /** 页面 Markdown 文章渲染 */
    Vditor.preview = previewRender;
    /** 设置代码主题 */
    Vditor.setCodeTheme = setCodeTheme/* setCodeTheme */.Y;
    /** 设置内容主题 */
    Vditor.setContentTheme = setContentTheme/* setContentTheme */.Z;
    return Vditor;
}());
/* harmony default export */ var method = (Vditor);

}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});