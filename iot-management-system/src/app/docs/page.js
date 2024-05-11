import Navbar from "../components/Navbar.js";

export default function Doc() {
    return (
        <main className="min-h-screen m-0 p-1 bg-[#CADCFC]">
            <div className="flex flex-col h-full overflow-y-auto scrollbar-thin scrollbar-thumb-white scrollbar-track-[#5A90F9]">
                <div className="flex">
                    <Navbar />
                </div>
                <div className="w-3/4 ml-4">
                    <p className="text-black">Problem Statement:</p>
                    <ol className="list-decimal ml-6">
                        <li className="text-black">Allow the addition and removal of various network devices such as routers, switches, wired PCs, and wireless devices. Devices should be organized in a hierarchical structure based on their physical location (e.g., floor, room).</li>
                        <li className="text-black">Provide a visualization of the network structure, showing the relationships between devices, floors, and rooms. This visualization should be intuitive and easy to understand.</li>
                        <li className="text-black">Implement robust error handling mechanisms to prevent duplicate device names, incorrect configurations, and ensure data integrity within the network structure.</li>
                        <li className="text-black">Support common network operations such as querying device details, modifying device configurations, and troubleshooting network connectivity issues.</li>
                        <li className="text-black">Incorporate security features to authenticate administrators and restrict unauthorized access to network management functionalities.</li>
                    </ol>
                    <p className="text-black mt-4">Primary Data Structure used: Tree Structure</p>
                    <p className="text-black">Tree Structure:</p>
                    <p className="text-black">The network hierarchy is organized as a tree, where each node represents a device or a network component. The nodes are connected hierarchically, with routers acting as internal nodes and switches, wired nodes (PCs), and wireless nodes acting as leaf nodes. Each node in the tree may have child nodes, representing devices or networks connected to it.</p>
                    <p className="text-black">Variations within the tree structure:</p>
                    <p className="text-black">Map:</p>
                    <p className="text-black">Inside the RouterNode class, there's a route table implemented as a Map. This map is used to maintain the connections and route information between routers and their connected networks or devices.</p>
                    <p className="text-black">Lists:</p>
                    <p className="text-black">Within classes like SwitchNode, wrlessRouterNode, wiredNode, and wirelessNode, a list (children) is used to keep track of connected devices or child nodes. These lists represent the connections from switches or wireless routers to end devices.</p>
                    <p className="text-black">Why it is used?</p>
                    <p className="text-black">The tree structure is employed to efficiently represent the hierarchical nature of computer networks, allowing for organized management and traversal of network components. Maps and lists are used within nodes to facilitate fast lookup and organization of network connections and configurations, enhancing the scalability and flexibility of the network model.</p>
                    <p className="text-black">What is the benefit of the system?</p>
                    <p className="text-black">The benefit of using a tree structure, alongside maps and lists, lies in its ability to efficiently represent and manage the hierarchical nature of computer networks. This structure allows for organized management, traversal, and scalability within the network topology.</p>
                    <p className="text-black">Conclusion:</p>
                    <p className="text-black">In conclusion, employing these data structures enhances the efficiency and flexibility of network modeling and management, enabling streamlined communication and resource allocation across connected devices.</p>
                </div>
            </div>
        </main>
    );
}
