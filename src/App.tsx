import React, { useEffect, useState } from "react";

function App() {
  const initialGridSettings = {
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
    placeItems: "",
  };

  const gridColsSettings = {
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
    placeItems: "",
  };

  const gridRowsSettings = {
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
    placeItems: "place-items-stretch",
  };

  const [gridSettings, setGridSettings] = useState(initialGridSettings);
  const [boxCount, setBoxCount] = useState(6);

  useEffect(() => {
    document.title = "Tailwind Grid Visualizer";
  }, []);

  const handleSettingChange = (e) => {
    setGridSettings({ ...gridSettings, [e.target.name]: e.target.value });
  };

  const gridClasses = Object.values(gridSettings).join(" ");
  const fieldClasses =
    "flex flex-row gap-4 w-[100%] items-stretch justify-between";

  const generateSelectField = (
    label: string,
    name: string,
    options: any,
  ): JSX.Element => {
    return (
      <div className={fieldClasses}>
        <label>{label}: </label>
        <select
          name={name}
          onChange={handleSettingChange}
          value={gridSettings[name]}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
          <option value="">None</option>
        </select>
      </div>
    );
  };

  const resetGridSettings = (gridSettings) => {
    setGridSettings(gridSettings);
  };

  return (
    <div className="App flex flex-row flex-wrap gap-4 p-4 bg-white justify-evenly items-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Tailwind Grid Visualizer</h1>
        <div className="w-96 flex flex-col gap-2 items-start rounded-md bg-gray-100 p-2 drop-shadow-md">
          {/* Number of Boxes */}
          <div className={fieldClasses}>
            <label>Number of Boxes: </label>
            <input
              type="number"
              value={boxCount}
              onChange={(e) => setBoxCount(e.target.value)}
            />
          </div>

          {/* Grid Template Columns */}
          {generateSelectField("Grid Template Columns", "gridTemplateColumns", [
            "grid-cols-1",
            "grid-cols-2",
            "grid-cols-3",
            "grid-cols-4",
            "grid-cols-5",
            "grid-cols-none",
          ])}

          {/* Grid Column Span */}
          {generateSelectField("Grid Column Span", "gridColumnSpan", [
            "col-auto",
            "col-span-1",
            "col-span-2",
            "col-span-3",
            "col-span-4",
            "col-span-5",
            "col-span-full",
          ])}

          {/* Grid Column Start */}
          {generateSelectField("Grid Column Start", "gridColumnStart", [
            "col-start-1",
            "col-start-2",
            "col-start-3",
            "col-start-4",
            "col-start-5",
            "col-start-auto",
          ])}

          {/* Grid Template Rows */}
          {generateSelectField("Grid Template Rows", "gridTemplateRows", [
            "grid-rows-1",
            "grid-rows-2",
            "grid-rows-3",
            "grid-rows-4",
            "grid-rows-5",
            "grid-rows-none",
          ])}

          {/* Grid Row Start */}
          {generateSelectField("Grid Row Start", "gridRowStart", [
            "row-start-1",
            "row-start-2",
            "row-start-3",
            "row-start-4",
            "row-start-5",
          ])}

          {/* Grid Row Span */}
          {generateSelectField("Grid Row Span", "gridRowSpan", [
            "row-auto",
            "row-span-1",
            "row-span-2",
            "row-span-3",
            "row-span-4",
            "row-span-5",
            "row-span-full",
          ])}

          {/* Grid Auto Flow */}
          {generateSelectField("Grid Auto Flow", "gridAutoFlow", [
            "grid-flow-row",
            "grid-flow-col",
            "grid-flow-dense",
            "grid-flow-row-dense",
            "grid-flow-col-dense",
          ])}

          {/* Grid Auto Columns */}
          {generateSelectField("Grid Auto Columns", "gridAutoColumns", [
            "auto-cols-auto",
            "auto-cols-min",
            "auto-cols-max",
            "auto-cols-fr",
          ])}

          {/* Grid Auto Rows */}
          {generateSelectField("Grid Auto Rows", "gridAutoRows", [
            "auto-rows-auto",
            "auto-rows-min",
            "auto-rows-max",
            "auto-rows-fr",
          ])}

          {/* Gap */}
          {generateSelectField("Gap", "gap", [
            "gap-0.5",
            "gap-1",
            "gap-2",
            "gap-3",
            "gap-4",
            "gap-5",
            "gap-6",
          ])}

          {/* Gap X */}
          {generateSelectField("Gap X", "gapX", [
            "gap-x-0.5",
            "gap-x-1",
            "gap-x-2",
            "gap-x-3",
            "gap-x-4",
            "gap-x-5",
            "gap-x-6",
          ])}

          {/* Gap Y */}
          {generateSelectField("Gap Y", "gapY", [
            "gap-y-0.5",
            "gap-y-1",
            "gap-y-2",
            "gap-y-3",
            "gap-y-4",
            "gap-y-5",
            "gap-y-6",
          ])}

          {/* Justify Items */}
          {generateSelectField("Justify Items", "justifyItems", [
            "justify-items-start",
            "justify-items-end",
            "justify-items-center",
            "justify-items-stretch",
          ])}

          {/* Justify Self */}
          {generateSelectField("Justify Self", "justifySelf", [
            "justify-self-auto",
            "justify-self-start",
            "justify-self-end",
            "justify-self-center",
            "justify-self-stretch",
          ])}

          {/* Align Content */}
          {generateSelectField("Align Content", "alignContent", [
            "content-normal",
            "content-center",
            "content-start",
            "content-end",
            "content-evenly",
          ])}

          {/* Align Items */}
          {generateSelectField("Align Items", "alignItems", [
            "items-center",
            "items-stretch",
          ])}

          {/* Place Content */}
          {generateSelectField("Place Content", "placeContent", [
            "place-content-center",
            "place-content-evenly",
            "place-content-stretch",
          ])}

          {/* Place Items */}
          {generateSelectField("Place Items", "placeItems", [
            "place-items-center",
            "place-items-stretch",
          ])}
        </div>
      </div>

      <div className="flex flex-col w-full max-w-xl">
        <div className="flex flex-row w-full justify-between gap-4">
          <button
            onClick={() => resetGridSettings(initialGridSettings)}
            className="transition duration-150 ease-in-out mt-4 w-full bg-red-500 text-white py-2 px-4 rounded opacity-80 hover:opacity-100 hover:scale-105"
          >
            Reset Settings
          </button>
          <button
            onClick={() => resetGridSettings(gridColsSettings)}
            className="transition duration-150 ease-in-out mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded opacity-80 hover:opacity-100 hover:scale-105"
          >
            Cols Settings
          </button>
          <button
            onClick={() => resetGridSettings(gridRowsSettings)}
            className="transition duration-150 ease-in-out mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded opacity-80 hover:opacity-100 hover:scale-105"
          >
            Rows Settings
          </button>
        </div>
        <div className={`border-4 w-full my-8 grid ${gridClasses}`}>
          {Array.from({ length: boxCount }, (_, i) => (
            <div
              key={i}
              className="bg-blue-500 h-16 w-16 flex items-center justify-center"
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
