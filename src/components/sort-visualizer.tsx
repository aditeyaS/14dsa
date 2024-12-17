// created by ChatGPT
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import SortFunction from "@/types/sort-function";
import { Pause, Play, Shuffle } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

const DEFAULT_SPEED = 200;

interface SortVisualizerProps {
  sortFunction: SortFunction;
}

const SortVisualizer: React.FC<SortVisualizerProps> = ({ sortFunction }) => {
  const [array, setArray] = useState<number[]>([]);
  const [currentIndices, setCurrentIndices] = useState<[number, number] | null>(
    null
  );
  const [isSorting, setIsSorting] = useState(false);
  const [speed, setSpeed] = useState(DEFAULT_SPEED);
  const stopSorting = useRef(false);

  useEffect(() => {
    generateNewArray();
  }, []);

  const generateNewArray = () => {
    if (isSorting) return;
    const newArray = Array.from(
      { length: 20 },
      () => Math.floor(Math.random() * 100) + 1
    );
    setArray(newArray);
    setCurrentIndices(null);
    stopSorting.current = false;
  };

  const updateVisualization = async (
    arr: number[],
    indices: [number, number] | null
  ) => {
    setArray([...arr]);
    setCurrentIndices(indices);
    await new Promise((resolve) => setTimeout(resolve, speed));
  };

  const handleSort = async () => {
    setIsSorting(true);
    stopSorting.current = false;
    await sortFunction(
      [...array],
      updateVisualization,
      () => stopSorting.current
    );
    setCurrentIndices(null);
    setIsSorting(false);
  };

  const handleStop = () => {
    stopSorting.current = true;
    setIsSorting(false);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <Button
          onClick={generateNewArray}
          disabled={isSorting}
          variant={"outline"}
          size={"icon"}
          title="Generate new array"
        >
          <Shuffle />
        </Button>
        <Button
          size={"icon"}
          onClick={isSorting ? handleStop : handleSort}
          title={isSorting ? "Pause" : "Start"}
        >
          {isSorting ? <Pause /> : <Play />}
        </Button>
        <Slider
          id="speed"
          disabled={isSorting}
          className="w-40"
          value={[speed]}
          defaultValue={[DEFAULT_SPEED]}
          min={50}
          max={1000}
          step={50}
          onValueChange={(e) => setSpeed(Number(e[0]))}
        />
        <Label htmlFor="speed">{speed} ms</Label>
      </div>
      <div className="flex gap-2 min-h-[210px]">
        {array.map((value, index) => (
          <div
            key={index}
            className={`w-6 text-center rounded ${
              currentIndices?.includes(index) ? "bg-primary" : "bg-input"
            }`}
            style={{ height: `${value * 2}px` }}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SortVisualizer;
