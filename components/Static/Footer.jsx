import { useState } from 'react';
import Link from "next/link";
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

export default function Footer() {
    const [language, setLanguage] = useState('tr'); // Default language is Turkish ('tr')

    const toggleLanguage = () => {
        setLanguage(language === 'tr' ? 'en' : 'tr'); // Toggles between 'tr' (Turkish) and 'en' (English)
    };

    // Define a function to get the flag URL based on the language
    const getFlagUrl = (lang) => {
        if (lang === 'tr') return 'https://flagcdn.com/w80/tr.png'; // Turkish flag URL
        else if (lang === 'en') return 'https://flagcdn.com/w80/gb.png'; // English flag URL (GB for United Kingdom)
        else return ''; // Add support for other languages if needed
    };

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
                            <Menu as="div" className="relative mt-3 inline-block text-left">
                                <div>
                                    <Menu.Button onClick={toggleLanguage} className="flex z-1 items-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                        <img
                                            src={getFlagUrl(language)}
                                            width="24"
                                            height="18"
                                            className="mr-2 h-4 rounded-sm"
                                        />
                                        {language === 'tr' ? 'Türkçe' : 'English'}
                                        <ChevronDownIcon
                                            className="w-5 h-5 ml-2 -mr-1 transform rotate-180 text-violet-200 hover:text-violet-100"
                                            aria-hidden="true"
                                        />
                                    </Menu.Button>
                                </div>
                            </Menu>
                        </div>
                        <div className="col-span-1">
                            <p className="text-white font-medium mt-3 sm:mt-0 sm:mb-3">{language === 'tr' ? 'Linkler' : 'Links'}</p>
                            <div>
                                <Link href="#">
                                    <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                                        <i className={`fa-brands fa fa-globe`} /> {language === 'tr' ? 'Oylama' : 'Vote'}
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <a href="https://discord.gg/ZcDprCrFTn" target="_blank" className="text-white/50 hover:text-white hover:underline transform duration-200">
                                <i className={`fa-brands fa fa-compass`} /> {language === 'tr' ? 'Destek' : 'Support'}
                                </a>
                            </div>
                            <div>
                                <a href="https://discord.com/api/oauth2/authorize?client_id=774043716797071371&permissions=277028620608&scope=applications.commands%20bot" target="_blank" className="text-white/50 hover:text-white hover:underline transform duration-200">
                                <i className={`fa-brands fa fa-gift`} /> {language === 'tr' ? 'Davet Et' : 'Invite'}
                                </a>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <p className="text-white font-medium mt-3 sm:mt-0 sm:mb-3">Sosyal Medya</p>
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
                        <div className="col-span-1">
                            <p className="text-white font-medium mt-3 sm:mt-0 sm:mb-3">Önemli</p>
                            <div>
                                <Link href="/tos">
                                    <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                                        Kullanım Şartları
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <Link href="/privacy">
                                    <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                                        Gizlilik Politikası
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 grid content-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                        <p className="text-white text-center sm:text-left text-opacity-50">
                            {new Date().getFullYear()} &copy; Sukuna
                        </p>
                        <div className="hidden md:flex items-center justify-center">
                                <p className={"text-xs text-green-400"}>
                                    {language === 'tr' ? 'Bot Aktif' : 'Bot Active'}
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
