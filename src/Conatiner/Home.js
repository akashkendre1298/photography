import React, { useState, useEffect } from 'react'
import "./Home.css"
import { Parallax } from 'react-parallax';
import Woman from "../Assets/woman.jpg";
import second from "../Assets/gian-porsius-klBWEO1Qp8E-unsplash.jpg";
import Fly from "../Assets/fly.jpg";
import wedding from "../Assets/sabesh-photography-R0fRnLeQXOI-unsplash.jpg";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";

const Home = () => {
    const [openNav, setOpenNav] = useState(false);
    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 z-10 other-content-of-navbar">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    Gallery
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    Packages
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    About Us
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    Contact Us
                </a>
            </Typography>
        </ul>
    );


    return (
        <>
            <div className="container">
                <Parallax strength={300} bgImage={Woman}>
                    {/* <div className="nav-content-over-image m-10">
                        <div className='logo-for-nav'>
                            Hr photography
                        </div>
                        <div>
                            <ul className="other-content-of-navbar">
                                <li>Home</li>
                                <li>About</li>
                                <li>Gallery</li>
                                <li>Packages</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div> */}
                    <div>
                        <Navbar className="mx-auto py-2 px-4 lg:px-8 lg:py-4">
                            <div className="container mx-auto flex items-center justify-between text-blue-gray-900 z-10">
                                <Typography
                                    as="a"
                                    href="#"
                                    variant="small"
                                    className="mr-4 cursor-pointer py-1.5 font-normal"
                                >
                                    <span>
                                        {/* <img src={logo} alt="" width={"150px"} height={"150px"} /> */}
                                        <p className='logo-for-nav'>Hr photography</p>
                                    </span>
                                </Typography>
                                <div className="hidden lg:block">{navList}</div>

                                <IconButton
                                    variant="text"
                                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                                    ripple={false}
                                    onClick={() => setOpenNav(!openNav)}
                                >
                                    {openNav ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            className="h-6 w-6"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </IconButton>
                            </div>
                            <MobileNav open={openNav}>
                                {navList}

                            </MobileNav>
                        </Navbar>
                    </div>
                    <div className="content">
                        <div className="text-content"></div>
                    </div>
                </Parallax>

                <Parallax strength={300} bgImage={second}>
                    <div className="content">
                        <div className="text-content">Photoshop presents</div>
                        <div className="text-content-button">
                            <button class="bg-transparent  text-golden-700 font-semibold hover:text-white py-2 px-4 ">
                                Button
                            </button>
                        </div>
                    </div>
                </Parallax>

                <Parallax strength={600} bgImage={Fly}>
                    <div className="content">
                        <div className="text-content">Reverse Parallax</div>
                    </div>
                </Parallax>
                <Parallax strength={700} bgImage={wedding}>
                    <div className="content">

                    </div>
                </Parallax>

                <div className="content"></div>
            </div >
        </>
    )
}

export default Home