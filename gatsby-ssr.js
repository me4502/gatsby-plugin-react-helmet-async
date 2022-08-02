"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapRootElement = exports.onRenderBody = void 0;
var react_1 = __importDefault(require("react"));
var react_helmet_async_1 = require("react-helmet-async");
var context = {};
var onRenderBody = function (_a) {
    var _b;
    var setHeadComponents = _a.setHeadComponents, setHtmlAttributes = _a.setHtmlAttributes, setBodyAttributes = _a.setBodyAttributes;
    var helmet = context.helmet;
    if (helmet) {
        var baseComponent = helmet.base.toComponent();
        var titleComponent = helmet.title.toComponent();
        var components = [
            helmet.priority.toComponent(),
            helmet.meta.toComponent(),
            helmet.link.toComponent(),
            helmet.style.toComponent(),
            helmet.script.toComponent(),
            helmet.noscript.toComponent()
        ];
        setHeadComponents(((_b = titleComponent[0]) === null || _b === void 0 ? void 0 : _b.props.children)
            ? __spreadArray([baseComponent, titleComponent], components, true) : __spreadArray([baseComponent], components, true));
        setHtmlAttributes(helmet.htmlAttributes.toComponent());
        setBodyAttributes(helmet.bodyAttributes.toComponent());
    }
};
exports.onRenderBody = onRenderBody;
var wrapRootElement = function (_a) {
    var element = _a.element;
    return (react_1.default.createElement(react_helmet_async_1.HelmetProvider, { context: context }, element));
};
exports.wrapRootElement = wrapRootElement;
