import Link from "next/link";
import Image from "next/image";

export default function Index() {
	
  return (
    <>
      <div className="py-20 mb-30 max-w-3xl mx-auto">
        <div className="flex w-full justify-center">
          <img width="500" src="/img/bck.png" />
        </div>
        <p className="animateHeader text-4xl font-extrabold text-center text-white">
          Sukuna Bot
        </p>
        <p className="animateHeader text-white text-opacity-50 text-center mt-5">
          How about managing your own entertainment server with Sukuna? Create your own world of freedom, make your own entertainment list, and enjoy the best entertainment.
        </p>
        <div className="animateHeader mt-10 flex flex-wrap items-center justify-center gap-x-4">
          <Link href={"https://discord.com/oauth2/authorize?client_id=1194381787388989481&permissions=8&scope=bot+applications.commands"}>
            <a
              className={
                "flex items-center px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white " 
              }
            >
              Invite
            </a>
          </Link>
          <div className="py-10"></div>
          <Link href={"#"}>
            <a className={" px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white " }>
              Vote
            </a>
          </Link>
        </div>
        <div style={{ zIndex: '-1' }} className="hidden xl:block undrag pointer-events-none opacity-10 -left-[10vw] absolute top-[8vw] h-[35vw] flex-shrink-0 grayscale rotate-[1deg]">
          <Image width="600" height="600" src="/img/gift-left.png"  />
        </div>
        <div style={{ zIndex: '-1' }} className="hidden xl:block undrag opacity-10 pointer-events-none -right-[15vw] absolute top-[13vw] h-[90vw] grayscale -rotate-9">
          <Image  width="600" height="600" src="/img/gift-right.png"  />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-y-0 lg:gap-x-12 py-24">
        <div className="col-span-4">
          <p className="text-white text-4xl font-bold" dangerouslySetInnerHTML={{ __html:"Sukuna" }} />
          <p className="text-white text-md font-medium text-gray-500/75" dangerouslySetInnerHTML={{ __html: "How about creating the best environment where you can relax with your own feelings?" }}/>
          <a href="https://discord.com/oauth2/authorize?client_id=1194381787388989481&permissions=8&scope=bot+applications.commands" className={"mt-10 flex items-center px-4 justify-center gap-x-2 shadow-lg shadow-amber-600/20 cursor-pointer rounded-xl py-4 font-medium bg-gradient-to-r from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white"}>
            <i className="fab fa-discord mr-2" />Invite Sukuna bot
          </a>
        </div>
        <div className="col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <div className="text-white">
              <p className="text-xl font-semibold mt-5"><i className={`fa fa-cogs text-2xl text-amber-500`} /> Optimization</p>
              <p className="text-gray-500 line-clamp-4">SukunaBot provides you with endless entertainment with fast and customizable settings tailored to your server.</p>
            </div>
          </div>
          <div>
            <div className="text-white">
              <p className="text-xl font-semibold mt-5"><i className={`fa fa-universal-access text-2xl text-amber-500`} /> Universal</p>
              <p className="text-gray-500 line-clamp-4">A bot that supports playing music on multiple platforms. (Spotify, Souncloud, YouTube) | (It is a bot that complies with all copyrights and licenses.)</p>
            </div>
          </div>
          <div>
            <div className="text-white">
              <p className="text-xl font-semibold mt-5"><i className={`fa fa-shield text-2xl text-amber-500`} /> Security</p>
              <p className="text-gray-500 line-clamp-4">An open-source, secure bot that you can browse and help us develop.</p>
            </div>
          </div>
          <div>
            <div className="text-white">
              <p className="text-xl font-semibold mt-5"><i className={`fa fa-ticket text-2xl text-amber-500`} /> Support</p>
              <p className="text-gray-500 line-clamp-4">We provide the fastest response to anyone in need of help with our best team mates.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row w-full h-auto lg:h-56 my-14 lg:my-40 bg-gradient-to-br lg:px-30 from-neutral-900/90 flex items-center justify-start to-neutral-900/50 rounded-lg p-1 shadow-md">
        <>
          <div className="lg:mx-4 lg:p-8 py-4 lg:py-16 flex items-center justify-center flex-col text-center w-full lg:w-auto lg:text-left lg:flex-none">
            <img src="https://cdn.discordapp.com/attachments/1208571557836750901/1214660143866847333/icegif-559.gif?ex=65f9eb69&is=65e77669&hm=a4313e68e28cc5c7fdb3021cc368f5d2b1fcef41f93dacec9372b25388987d22&"  width="256" className="lg:hidden rounded-xl mb-5 shadow-xl shadow-black" />
            <p className="text-3xl text-white font-semibold">Use Your Bot Best</p>
            <p className="text-md text-white font-medium text-gray-500 line-clamp-5">Are you ready to organize the best parties with the best and most up-to-date robot, SukunaBot?</p>
          </div>
          <img src="https://cdn.discordapp.com/attachments/1208571557836750901/1214660143866847333/icegif-559.gif?ex=65f9eb69&is=65e77669&hm=a4313e68e28cc5c7fdb3021cc368f5d2b1fcef41f93dacec9372b25388987d22&" className="hidden lg:block rounded-xl perspective-right shadow-xl shadow-black" />
        </>
      </div>
    </>
  )
}
