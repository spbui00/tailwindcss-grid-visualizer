"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
function App() {
    var initialGridSettings = {
        gridTemplateColumns: "",
        gridColumnSpan: "",
        gridColumnStart: "",
        gridTemplateRows: "",
        gridRowSpan: "",
        gridRowStart: "",
        gridAutoFlow: "",
        gridAutoColumns: "",
        gridAutoRows: "",
        gap: "",
        gapX: "",
        gapY: "",
        justifyItems: "",
        justifySelf: "",
        alignContent: "",
        alignItems: "",
        placeContent: "",
        placeItems: ""
    };
    var gridColsSettings = {
        gridTemplateColumns: "",
        gridColumnSpan: "",
        gridColumnStart: "",
        gridTemplateRows: "",
        gridRowSpan: "",
        gridRowStart: "",
        gridAutoFlow: "",
        gridAutoColumns: "",
        gridAutoRows: "",
        gap: "",
        gapX: "",
        gapY: "",
        justifyItems: "",
        justifySelf: "",
        alignContent: "",
        alignItems: "",
        placeContent: "",
        placeItems: ""
    };
    var gridRowsSettings = {
        gridTemplateColumns: "",
        gridColumnSpan: "",
        gridColumnStart: "",
        gridTemplateRows: "",
        gridRowSpan: "",
        gridRowStart: "",
        gridAutoFlow: "grid-flow-row-dense",
        gridAutoColumns: "",
        gridAutoRows: "auto-rows-max",
        gap: "",
        gapX: "",
        gapY: "",
        justifyItems: "justify-items-stretch",
        justifySelf: "justify-self-auto",
        alignContent: "content-evenly",
        alignItems: "items-stretch",
        placeContent: "place-content-evenly",
        placeItems: "place-items-stretch"
    };
    var _a = (0, react_1.useState)(initialGridSettings), gridSettings = _a[0], setGridSettings = _a[1];
    var _b = (0, react_1.useState)(6), boxCount = _b[0], setBoxCount = _b[1];
    (0, react_1.useEffect)(function () {
        document.title = "Tailwind Grid Visualizer";
    }, []);
    var handleSettingChange = function (e) {
        var _a;
        setGridSettings(__assign(__assign({}, gridSettings), (_a = {}, _a[e.target.name] = e.target.value, _a)));
    };
    var gridClasses = Object.values(gridSettings).join(" ");
    var fieldClasses = "flex flex-row gap-4 w-[100%] items-stretch justify-between";
    var generateSelectField = function (label, name, options) {
        return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: fieldClasses }, { children: [(0, jsx_runtime_1.jsxs)("label", { children: [label, ": "] }, void 0), (0, jsx_runtime_1.jsxs)("select", __assign({ name: name, onChange: handleSettingChange, value: gridSettings[name] }, { children: [options.map(function (option) { return ((0, jsx_runtime_1.jsx)("option", __assign({ value: option }, { children: option }), option)); }), (0, jsx_runtime_1.jsx)("option", __assign({ value: "" }, { children: "None" }), void 0)] }), void 0)] }), void 0));
    };
    var resetGridSettings = function (gridSettings) {
        setGridSettings(gridSettings);
    };
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "App flex flex-row flex-wrap gap-4 p-4 bg-white justify-evenly items-center" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "flex flex-col gap-4" }, { children: [(0, jsx_runtime_1.jsx)("h1", __assign({ className: "text-2xl font-bold" }, { children: "Tailwind Grid Visualizer" }), void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "w-96 flex flex-col gap-2 items-start rounded-md bg-gray-100 p-2 drop-shadow-md" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: fieldClasses }, { children: [(0, jsx_runtime_1.jsx)("label", { children: "Number of Boxes: " }, void 0), (0, jsx_runtime_1.jsx)("input", { type: "number", value: boxCount, onChange: function (e) { return setBoxCount(e.target.value); } }, void 0)] }), void 0), generateSelectField("Grid Template Columns", "gridTemplateColumns", [
                                "grid-cols-1",
                                "grid-cols-2",
                                "grid-cols-3",
                                "grid-cols-4",
                                "grid-cols-5",
                                "grid-cols-none",
                            ]), generateSelectField("Grid Column Span", "gridColumnSpan", [
                                "col-auto",
                                "col-span-1",
                                "col-span-2",
                                "col-span-3",
                                "col-span-4",
                                "col-span-5",
                                "col-span-full",
                            ]), generateSelectField("Grid Column Start", "gridColumnStart", [
                                "col-start-1",
                                "col-start-2",
                                "col-start-3",
                                "col-start-4",
                                "col-start-5",
                                "col-start-auto",
                            ]), generateSelectField("Grid Template Rows", "gridTemplateRows", [
                                "grid-rows-1",
                                "grid-rows-2",
                                "grid-rows-3",
                                "grid-rows-4",
                                "grid-rows-5",
                                "grid-rows-none",
                            ]), generateSelectField("Grid Row Start", "gridRowStart", [
                                "row-start-1",
                                "row-start-2",
                                "row-start-3",
                                "row-start-4",
                                "row-start-5",
                            ]), generateSelectField("Grid Row Span", "gridRowSpan", [
                                "row-auto",
                                "row-span-1",
                                "row-span-2",
                                "row-span-3",
                                "row-span-4",
                                "row-span-5",
                                "row-span-full",
                            ]), generateSelectField("Grid Auto Flow", "gridAutoFlow", [
                                "grid-flow-row",
                                "grid-flow-col",
                                "grid-flow-dense",
                                "grid-flow-row-dense",
                                "grid-flow-col-dense",
                            ]), generateSelectField("Grid Auto Columns", "gridAutoColumns", [
                                "auto-cols-auto",
                                "auto-cols-min",
                                "auto-cols-max",
                                "auto-cols-fr",
                            ]), generateSelectField("Grid Auto Rows", "gridAutoRows", [
                                "auto-rows-auto",
                                "auto-rows-min",
                                "auto-rows-max",
                                "auto-rows-fr",
                            ]), generateSelectField("Gap", "gap", [
                                "gap-0.5",
                                "gap-1",
                                "gap-2",
                                "gap-3",
                                "gap-4",
                                "gap-5",
                                "gap-6",
                            ]), generateSelectField("Gap X", "gapX", [
                                "gap-x-0.5",
                                "gap-x-1",
                                "gap-x-2",
                                "gap-x-3",
                                "gap-x-4",
                                "gap-x-5",
                                "gap-x-6",
                            ]), generateSelectField("Gap Y", "gapY", [
                                "gap-y-0.5",
                                "gap-y-1",
                                "gap-y-2",
                                "gap-y-3",
                                "gap-y-4",
                                "gap-y-5",
                                "gap-y-6",
                            ]), generateSelectField("Justify Items", "justifyItems", [
                                "justify-items-start",
                                "justify-items-end",
                                "justify-items-center",
                                "justify-items-stretch",
                            ]), generateSelectField("Justify Self", "justifySelf", [
                                "justify-self-auto",
                                "justify-self-start",
                                "justify-self-end",
                                "justify-self-center",
                                "justify-self-stretch",
                            ]), generateSelectField("Align Content", "alignContent", [
                                "content-normal",
                                "content-center",
                                "content-start",
                                "content-end",
                                "content-evenly",
                            ]), generateSelectField("Align Items", "alignItems", [
                                "items-center",
                                "items-stretch",
                            ]), generateSelectField("Place Content", "placeContent", [
                                "place-content-center",
                                "place-content-evenly",
                                "place-content-stretch",
                            ]), generateSelectField("Place Items", "placeItems", [
                                "place-items-center",
                                "place-items-stretch",
                            ])] }), void 0)] }), void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "flex flex-col w-full max-w-xl" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "flex flex-row w-full justify-between gap-4" }, { children: [(0, jsx_runtime_1.jsx)("button", __assign({ onClick: function () { return resetGridSettings(initialGridSettings); }, className: "transition duration-150 ease-in-out mt-4 w-full bg-red-500 text-white py-2 px-4 rounded opacity-80 hover:opacity-100 hover:scale-105" }, { children: "Reset Settings" }), void 0), (0, jsx_runtime_1.jsx)("button", __assign({ onClick: function () { return resetGridSettings(gridColsSettings); }, className: "transition duration-150 ease-in-out mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded opacity-80 hover:opacity-100 hover:scale-105" }, { children: "Cols Settings" }), void 0), (0, jsx_runtime_1.jsx)("button", __assign({ onClick: function () { return resetGridSettings(gridRowsSettings); }, className: "transition duration-150 ease-in-out mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded opacity-80 hover:opacity-100 hover:scale-105" }, { children: "Rows Settings" }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "border-4 w-full my-8 grid " + gridClasses }, { children: Array.from({ length: boxCount }, function (_, i) { return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "bg-blue-500 h-16 w-16 flex items-center justify-center" }, { children: i + 1 }), i)); }) }), void 0)] }), void 0)] }), void 0));
}
exports["default"] = App;
