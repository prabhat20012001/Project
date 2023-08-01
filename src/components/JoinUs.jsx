// import React from "react";
// import { Elipse1, Elipse2, Elipse3 } from "../../src";

// export default function JoinUs() {
//   return (
//     <div>
//       <div>
//         <h1>Join Us</h1>
//         <p>
//           Do you have the zest to become a mental health warrior and save lives?
//           If yes, worry no more as we have the perfect platform for you. Choose
//           any domain as per your expertise and join our amazing team in this
//           noble cause of making the world a better place mentally.
//         </p>
//       </div>
//       <div>
//         <img src={Elipse1} alt="elip1" />
//         <img src={Elipse2} alt="elip2" />
//         <img src={Elipse3} alt="elip3" />
//       </div>
//     </div>
//   );
// }

import React from "react";

const JoinUs = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Join Us Pop-up</h2>
        <p>Pop-up content goes here...</p>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default JoinUs;
