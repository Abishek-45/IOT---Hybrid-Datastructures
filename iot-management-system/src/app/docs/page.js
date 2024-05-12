import Navbar from "../components/Navbar.js";

export default function Doc() {
    return (
        <main className="min-h-screen flex flex-col justify-center items-center bg-[#CADCFC]">
            <Navbar />
            <div className="container mx-auto p-8 bg-[#CADCFC] rounded-lg shadow-lg mt-11 mb-11">
                <div className="max-w-[80%] mx-auto">
                <h1 className="font-bold text-4xl text-gray-900">Documentation</h1>
                <br />
                    <div className="mb-8">
                        <SectionTitle>Problem Statement for Management Functionalities:</SectionTitle>
                        <p className="text-gray-800 text-lg">
                            Develop an IoT management system that allows administrators to create, organize, and manage a hierarchical network structure. The system should support the following functionalities:
                            <br />
                            <br />1. Allow the addition and removal of various network devices such as routers, switches, wired PCs, and wireless devices.
                            <br />2. Devices should be organized in a hierarchical structure based on their physical location (e.g., floor, room).
                            <br />3. Provide a visualization of the network structure, showing the relationships between devices, floors, and rooms. This visualization should be intuitive and easy to understand.
                            <br />4. Implement robust error handling mechanisms to prevent duplicate device names, incorrect configurations, and ensure data integrity within the network structure.
                            <br />5. Support common network operations such as querying device details, modifying device configurations, and troubleshooting network connectivity issues. Incorporate security features to authenticate administrators and restrict unauthorized access to network management functionalities.
                        </p>
                    </div>
                    <div className="mb-8">
                        <SectionTitle>Primary Data Structure used for End Devices:</SectionTitle>
                        <p className="text-gray-800 text-lg">
                            <span className="font-bold">Tree Structure:</span> The network hierarchy is organized as a tree, where each node represents a device or a network component.
                            The nodes are connected hierarchically, with routers acting as internal nodes, wired nodes (PCs), and wireless nodes acting as leaf nodes. <br />
                            <span className="font-bold">Map:</span> Inside the RouterNode class, there's a route table implemented as a Map.
                            This map is used to maintain the connections and route information between routers and their connected networks or devices. <br />
                            <span className="font-bold">Lists:</span> Within classes like SwitchNode, WirelessRouterNode, WiredNode, and WirelessNode, a list (children) is used to keep track of connected devices or child nodes.
                            These lists represent the connections from switches or wireless routers to end devices.
                        </p>
                    </div>
                    <div className="mb-8">
                        <SectionTitle>Why it is used?</SectionTitle>
                        <p className="text-gray-800 text-lg">
                            The tree structure is employed to efficiently represent the hierarchical nature of computer networks, allowing for organized management and traversal of network components. Maps and lists are used within nodes to facilitate fast lookup and organization of network connections and configurations, enhancing the scalability and flexibility of the network model.
                        </p>
                    </div>
                    <div className="mb-8">
                        <SectionTitle>What is the benefit of the system?</SectionTitle>
                        <p className="text-gray-800 text-lg">
                            The benefit of using a tree structure, alongside maps and lists, lies in its ability to efficiently represent and manage the hierarchical nature of computer networks. This structure allows for organized management, traversal, and scalability within the network topology.
                        </p>
                    </div>
                    <div>
                        <SectionTitle>Conclusion:</SectionTitle>
                        <p className="text-gray-800 text-lg">
                            In conclusion, employing these data structures enhances the efficiency and flexibility of network modeling and management, enabling streamlined communication and resource allocation across connected devices.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}

const SectionTitle = ({ children }) => (
    <h2 className="font-bold text-3xl text-gray-900 mb-4 border-b-2 border-purple-600">{children}</h2>
);
