

export function Main() {

  return (
    <div className="flex  bg-red-400 h-screen justify-center items-center">
      <div className="player_info_1 flex flex-col  items-center bg-red-300  border rounded-l-lg h-[600px] w-[500px]">
        <h3 className="text-[30px] mt-20">player1</h3>
        <p className="text-[50px] mt-10">7</p>
        <div
          className="current flex flex-col bg-red-600 w-[240px] h-[100px] mt-44 rounded justify-center items-center
        "
        >
          <p>CURRENT</p>
          <span className="text-[30px]">7</span>
        </div>
      </div>
      <div className="player_info_1 flex flex-col  items-center bg-red-200  border rounded-r-lg h-[600px] w-[500px]">
        <h3 className="text-[30px] mt-20">player2</h3>
        <p className="text-[50px] mt-10">7</p>
        <div
          className="current flex flex-col bg-red-600 w-[240px] h-[100px] mt-44 rounded justify-center items-center
        "
        >
          <p>CURRENT</p>
          <span className="text-[30px]">7</span>
        </div>
      </div>
      <div
        className="flex flex-col  items-center absolute
      "
      >
        <button
          className="bg-red-100 w-[200px] h-16 rounded-full text-[25px]
        "
        >
          NEW GAME
        </button>
        <div className=" mt-[90px]">Dice</div>
        <button
          className="bg-red-100 w-[200px] h-12 rounded-full text-[20px] mt-40
        "
        >
          ROLL DICE
        </button>
        <button
          className="bg-red-100 w-[140px] h-12 rounded-full text-[20px] mt-5
        "
        >
          HOLD
        </button>
      </div>
    </div>
  );
}
