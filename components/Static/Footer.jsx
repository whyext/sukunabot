import Link from "next/link";
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

export default function Footer() {

    return (
        <>
            <footer className="py-10">
                <div className="pt-10 mx-auto">
                    <div className="lg:grid lg:grid-cols-6 gap-20">
                        <div className="col-span-3">
                            <div className="flex items-center space-x-5">
                                <img src="/img/logo2.png" className="rounded-full w-12" />
                                <p className="font-semibold text-xl text-white">Sukuna Bot</p>
                            </div>
                                    <Menu.Button className="flex z-1 items-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                        <img
                                            src={`https://flagcdn.com/w80/${selectedLanguage}.png`}
                                            width="24"
                                            height="18"
                                            className="mr-2 h-4 rounded-sm"
                                        />
                                        {selectedLanguage === 'tr' ? 'Türkçe' : 'English'}
                                        <ChevronDownIcon
                                            className="w-5 h-5 ml-2 -mr-1 transform rotate-180 text-violet-200 hover:text-violet-100"
                                            aria-hidden="true"
                                        />
                                    </Menu.Button>
                                </div>
                                <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link href="#">
                                                <a
                                                    onClick={() => handleLanguageChange('en')}
                                                    className={`${
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-900'
                                                        } group flex items-center w-full px-2 py-2 text-sm`}
                                                >
                                                    <img
                                                        src={`https://flagcdn.com/w80/en.png`}
                                                        width="24"
                                                        height="18"
                                                        className="mr-2 h-4 rounded-sm"
                                                    />
                                                    English
                                                </a>
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link href="#">
                                                <a
                                                    onClick={() => handleLanguageChange('tr')}
                                                    className={`${
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-900'
                                                        } group flex items-center w-full px-2 py-2 text-sm`}
                                                >
                                                    <img
                                                        src={`https://flagcdn.com/w80/tr.png`}
                                                        width="24"
                                                        height="18"
                                                        className="mr-2 h-4 rounded-sm"
                                                    />
                                                    Türkçe
                                                </a>
                                            </Link>
                                        )}
                                    </Menu.Item>
                                </Menu.Items>
                            </Menu>
                        </div>

                        <div className="col-span-1">
                            <p className="text-white font-medium mt-3 sm:mt-0 sm:mb-3">Links</p>
                            <div>
                                <Link href="#">
                                    <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                                    <i className={`fa-brands fa fa-globe`} /> Vote
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <a href="https://discord.gg/ZcDprCrFTn" target="_blank" className="text-white/50 hover:text-white hover:underline transform duration-200">
                                <i className={`fa-brands fa fa-compass`} /> Destek
                                </a>
                            </div>
                            <div>
                                <a href="https://discord.com/api/oauth2/authorize?client_id=774043716797071371&permissions=277028620608&scope=applications.commands%20bot" target="_blank" className="text-white/50 hover:text-white hover:underline transform duration-200">
                                <i className={`fa-brands fa fa-gift`} /> Davet Et
                                </a>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <p className="text-white font-medium mt-3 sm:mt-0 sm:mb-3">Social Media</p>
                            <div>
                                <Link href="https://discord.gg/whydow">
                                    <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                                    <i className={`fa-brands fa-discord`} /> Discord
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <Link href="https://github.com/whyext">
                                    <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                                    <i className={`fa-brands fa-github`} /> GitHub 
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <Link href="https://www.instagram.com/whyext_/">
                                    <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                                    <i className={`fa-brands fa-instagram`} /> Instagram 
                                    </a>
                                </Link>
                            </div>
                        </div>
                        </div>
                        <div className="col-span-1">
                            <p className="text-white font-medium mt-3 sm:mt-0 sm:mb-3">Important</p>
                            <div>
                                <Link href="/tos">
                                    <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                                        Kullanım Şartları
                                    </a>
                                </Link>                            
                        </div>
                    </div>
                    <div className="mt-10 grid content-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                        <p className="text-white text-center sm:text-left text-opacity-50">
                            {new Date().getFullYear()} &copy; Sukuna
                        </p>
                        <div className="hidden md:flex items-center justify-center">
                                <p className={"text-xs text-green-400"}>
                                    Bot Active
                                </p>
                        </div>
                        <p className="text-white text-center sm:text-right text-opacity-50">
                            {"Powered by Whydow ❤️"}
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};
