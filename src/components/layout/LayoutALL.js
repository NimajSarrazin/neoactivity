export default function LayoutALL({ children }) {
  return (
    <div className="flex h-screen" id="layout-overlay">
      <div
        className="m-auto bg-[#3838389b] rounded-md w-3/5 h-3/4 grid lg:grid-cols-2"
      >
        <div className="flex items-center mx-auto">
          <div className="text-center text-5xl lg:text-7xl text-yellow-200">
            <h2 className="">NEO ARCADE</h2>
          </div>
        </div>
        <div className="right flex flex-col justify-evenly bg-white">
          <div className="text-center py-10">{children}</div>
        </div>
      </div>
    </div>
  );
}
