const Sidebar = () => {
    return(
        <aside className="h-screen">
            <nav className="h-full flex flex-col bg-white border-r shadow-sm">
                <div className="p-4 pb-2 flex justify-between items-center">
                    <img src="./src/assets/logo.png" className="w-8 h-8" alt="logo"/>
                </div>
            </nav>
        </aside>
    )
}

export default Sidebar;