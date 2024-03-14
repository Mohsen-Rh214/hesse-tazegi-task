import Navbar from "./navbar/Navbar"

const Layout = ({ children }) => {
    return (
        <div className="h-screen w-screen flex justify-center overflow-x-hidden">
            <div className="w-[78%] h-full flex flex-col items-center gap-4 pt-4">
                <Navbar />
                {children}
            </div>
        </div>
    )
}

export default Layout;