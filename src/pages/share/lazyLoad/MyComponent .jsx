import React, { lazy, Suspense } from "react";
import { FaHardHat, FaSpinner } from "react-icons/fa";

// Lazy load the component
const OtherComponent = lazy(() => import("./OtherComponent"));

const MyComponent = () => {
  return (
    <div className="p-4">
      <Suspense
        fallback={
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <FaHardHat className="text-[#8A1538] text-4xl animate-bounce mb-4" />
            <div className="flex items-center gap-2 text-gray-400 text-sm font-semibold uppercase tracking-wider">
              <FaSpinner className="animate-spin text-[#8A1538]" />
              Loading...
            </div>
          </div>
        }
      >
        <OtherComponent />
      </Suspense>
    </div>
  );
};

export default MyComponent;
