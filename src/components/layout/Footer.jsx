import React from "react";

function Footer() {
    return (
    <>
        {/* ========== Footer ========== */}
        <footer className="bg-[#8EE5DC] py-14 border-b-[1px]">
            <div className="container mx-auto space-y-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0 lg:grid-cols-4">
            <div className="sm:p-4">
                <p className="text-md leading-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
                debitis voluptates culpa perspiciatis nesciunt laudantium! Fuga
                molestiae exercitationem in eius totam deserunt possimus
                </p>
                <div className="mt-4 space-x-2">
                <a href="#">
                    <i className="fa-brands fa-facebook text-2xl" />
                </a>
                <a href="#">
                    <i className="fa-brands fa-linkedin text-2xl" />
                </a>
                <a href="#">
                    <i className="fa-brands fa-instagram text-2xl" />
                </a>
                <a href="#">
                    <i className="fa-brands fa-twitter text-2xl" />
                </a>
                </div>
            </div>
            <div className="sm:p-4">
                <h4 className="text-3xl font-medium mb-6">Quick Links</h4>
                <ul>
                <li>
                    <a href="#" className="text-md text-slate-700">
                    Home
                    </a>
                </li>
                <li>
                    <a href="#" className="text-md text-slate-700">
                    About
                    </a>
                </li>
                <li>
                    <a href="#" className="text-md text-slate-700">
                    Doctors
                    </a>
                </li>
                <li>
                    <a href="#" className="text-md text-slate-700">
                    Services
                    </a>
                </li>
                <li>
                    <a href="#" className="text-md text-slate-700">
                    Contact
                    </a>
                </li>
                </ul>
            </div>
            <div className="sm:p-4">
                <h4 className="text-3xl font-medium mb-6">Services</h4>
                <ul>
                <li>
                    <a href="#" className="text-md text-slate-700">
                    Vaccination
                    </a>
                </li>
                <li>
                    <a href="#" className="text-md text-slate-700">
                    NDD
                    </a>
                </li>
                <li>
                    <a href="#" className="text-md text-slate-700">
                    Filled Prescription As Is
                    </a>
                </li>
                <li>
                    <a href="#" className="text-md text-slate-700">
                    Patient Referral
                    </a>
                </li>
                <li>
                    <a href="#" className="text-md text-slate-700">
                    Other Roofing
                    </a>
                </li>
                </ul>
            </div>
            <div className="sm:p-4">
                <h4 className="text-3xl font-medium mb-6">Location</h4>
                <p className="text-md leading-5">
                <a href="#">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
                    hic.
                </a>
                </p>
            </div>
            </div>
        </footer>
        <p className="text-center bg-[#8EE5DC] py-3">
            @2023 Wleness || All Rights Reserved
        </p>
    </>
    )
}

export default Footer;