import Image from "next/image";

import { KangarooGif } from "./kangaroo-gif";

export const AnimationContainer = ({ kangarooPopulationChange }) => {
  // Calculate the number of kangaroo GIFs to display
  const numberOfKangaroos = Math.max(
    1,
    Math.ceil(15 * (1 + kangarooPopulationChange)),
  );

  const kangarooGifs = Array.from({ length: numberOfKangaroos });

  return (
    <>
      <div className="absolute right-0 top-10 z-10 flex h-80 w-72 flex-col items-center rounded-xl border-4 border-gray-200 bg-white p-4 dark:bg-gray-800 dark:text-white">
        <h1 className="mb-2 text-center text-xl font-bold text-blue-500">
          Kangaroo population
        </h1>
        <div className="flex flex-wrap items-center gap-x-5">
          {kangarooGifs.map((_, index) => (
            <div key={index} className="h-16 w-16 border-red-50">
              <KangarooGif />
            </div>
          ))}
        </div>
      </div>

    </>
  );
};
