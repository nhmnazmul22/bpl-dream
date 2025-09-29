import { Flag, User } from "lucide-react";
import React from "react";

const PlayerCard = ({ player }) => {
  return (
    <div className="card bg-base-100 shadow-sm  hover:shadow-xl transition-all duration-300 p-5">
      <figure className="w-full h-[300px] rounded-2xl overflow-hidden">
        <img
          src={player.image}
          alt="Shoes"
          className="w-full h-full object-cover object-top"
        />
      </figure>
      <div className="card-body px-0">
        <h2 className="card-title text-xl font-semibold">
          <span>
            <User fill="currentColor" size={28} />
          </span>
          {player.name}
        </h2>
        <div className="border-b border-gray-100 pb-5 flex justify-between items-center">
          <div className="flex gap-2 items-center text-gray-600">
            <span>
              <Flag fill="currentColor" size={20} />
            </span>
            <p className="text-base">{player.country}</p>
          </div>
          <button className="btn border-0 hover:shadow-none bg-gray-100 rounded-lg text-[#131313]">
            {player["player-type"]}
          </button>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-base">Rating</p>
            <p className="text-right text-gray-600">{player.rating}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-semibold text-base">{player["batting-type"]}</p>
            <p className="text-right text-gray-600">{player["bowling-type"]}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-semibold text-base">${player.price}</p>
            <button className="btn bg-transparent rounded-xl border-gray-200 text-gray-600 hover:bg-[#E7FE29] hover:border-[#E7FE29] hover:text-black transition-all duration-300">
              Choose Player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
