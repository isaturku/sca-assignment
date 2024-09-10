import { cn } from "../../utils/cn"

export const CartPopup = ({ isOpen }) => {
  return (
    <div
      className={cn("absolute top-0 right-[8vw] z-50 w-80 h-fit max-h-[50svh] bg-white shadow-lg transform transition ", { "scale-100": isOpen, " scale-0": !isOpen })}
    >
      <div className="p-6">
        <h2 className="text-xl font-semibold">My Bag, 3 items</h2>
        <div className="mt-4 space-y-6">
          {/* Item 1 */}
          <div className="flex items-center justify-between border-b pb-4">
            <div className="flex">
              <img
                src="image_url_here"
                alt="Running Short"
                className="w-16 h-16 rounded-lg mr-4"
              />
              <div>
                <h3 className="font-semibold">Running Short</h3>
                <p>$50.00</p>
                <p className="mt-2 text-sm">Size: S</p>
                <div className="flex space-x-2 mt-1">
                  <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                  <div className="w-6 h-6 bg-black rounded-full"></div>
                  <div className="w-6 h-6 bg-green-700 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <button className="border rounded-md p-1">+</button>
              <span className="mx-2">1</span>
              <button className="border rounded-md p-1">-</button>
            </div>
          </div>

          <div className="flex items-center justify-between border-b pb-4">
            <div className="flex">
              <img
                src="image_url_here"
                alt="Wayfarer"
                className="w-16 h-16 rounded-lg mr-4"
              />
              <div>
                <h3 className="font-semibold">Wayfarer</h3>
                <p>$75.00</p>
                <p className="mt-2 text-sm">Size: M</p>
                <div className="flex space-x-2 mt-1">
                  <div className="w-6 h-6 bg-teal-700 rounded-full"></div>
                  <div className="w-6 h-6 bg-black rounded-full"></div>
                  <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <button className="border rounded-md p-1">+</button>
              <span className="mx-2">2</span>
              <button className="border rounded-md p-1">-</button>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex justify-between text-lg font-semibold">
            <span>Total</span>
            <span>$200.00</span>
          </div>
          <button className="mt-4 w-full bg-green-500 text-white rounded-lg py-2">
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  )
}
