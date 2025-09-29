import { Trash } from "lucide-react";

const SelectedPlayerCard = () => {
  return (
    <div className="bg-white border border-gray-100 p-5 rounded-xl flex justify-between items-center">
      <div className="flex gap-5 items-center">
        <div className="avatar">
          <div className="w-16 rounded">
            <img
              src="https://img.daisyui.com/images/profile/demo/batperson@192.webp"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
        <div className="space-y-1">
          <h3 className="text-2xl font-semibold">Darrell Steward</h3>
          <p className="text-base text-gray-600">Left-Hand-Bat</p>
        </div>
      </div>
      <div>
        <button className="cursor-pointer text-red-600">
          <Trash />
        </button>
      </div>
    </div>
  );
};

export default SelectedPlayerCard;
