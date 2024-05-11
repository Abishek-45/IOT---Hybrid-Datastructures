"use client";
import { useState } from "react";
import Navbar from "../components/Navbar.js";

export default function Doc() {
    const paragraphs = [
        <div>
            <h2 className="font-bold text-3xl text-black mb-2">Problem Statement for Management Functionalities:</h2>
            <p className="text-black text-lg">
            Develop a IOT management system that allows administrators to create, organize, and manage a hierarchical network structure. The system should support the following functionalities:
                1.Allow the addition and removal of various network devices such as routers, switches, wired PCs, and wireless devices. 
                2.Devices should be organized in a hierarchical structure based on their physical location (e.g., floor, room). 
                3.Provide a visualization of the network structure, showing the relationships between devices, floors, and rooms.This visualization should be intuitive and easy to understand. 
                4.Implement robust error handling mechanisms to prevent duplicate device names, incorrect configurations, and ensure data integrity within the network structure. 
                5.Support common network operations such as querying device details, modifying device configurations, and troubleshooting network connectivity issues. Incorporate security features to authenticate administrators and restrict unauthorized access to network management functionalities.
            </p>
        </div>,
        <div>
            <h2 className="font-bold text-3xl text-black mb-2">Primary Data Structure used for End Devices:</h2>
            <p className="text-black text-lg">
            <span className="font-bold">Tree Structure:</span>The network hierarchy is organized as a tree, where each node represents a device or a network component.
                The nodes are connected hierarchically, with routers acting as internal nodes, wired nodes (PCs), and wireless nodes acting as leaf nodes. <br/>
                <span className="font-bold">Map:</span> Inside the RouterNode class, there's a route table implemented as a Map.
                This map is used to maintain the connections and route information between routers and their connected networks or devices. <br/>
                <span className="font-bold">Lists:</span> Within classes like SwitchNode, wrlessRouterNode, wiredNode, and wirelessNode, a list (children) is used to keep track of connected devices or child nodes.
                These lists represent the connections from switches or wireless routers to end devices.
            </p>
        </div>,
        <div>
            <h2 className="font-bold text-3xl text-black mb-2">Why it is used?</h2>
            <p className="text-black text-lg">
                The tree structure is employed to efficiently represent the hierarchical nature of computer networks, allowing for organized management and traversal of network components. Maps and lists are used within nodes to facilitate fast lookup and organization of network connections and configurations, enhancing the scalability and flexibility of the network model.
            </p>
        </div>,
        <div>
            <h2 className="font-bold text-3xl text-black mb-2">What is the benefit of the system?</h2>
            <p className="text-black text-lg">
                The benefit of using a tree structure, alongside maps and lists, lies in its ability to efficiently represent and manage the hierarchical nature of computer networks. This structure allows for organized management, traversal, and scalability within the network topology.
            </p>
        </div>,
        <div>
            <h2 className="font-bold text-3xl text-black mb-2">Conclusion:</h2>
            <p className="text-black text-lg">
                In conclusion, employing these data structures enhances the efficiency and flexibility of network modeling and management, enabling streamlined communication and resource allocation across connected devices.
            </p>
        </div>
     ];

    const [currentParaIndex, setCurrentParaIndex] = useState(0);

    const handleNext = () => {
        setCurrentParaIndex((prevIndex) => Math.min(prevIndex + 1, paragraphs.length - 1));
    };

    const handlePrevious = () => {
        setCurrentParaIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    return (
        <main className="min-h-screen m-0 p-1 bg-[#CADCFC]">
            <div className="flex flex-col h-full overflow-y-auto scrollbar-thin scrollbar-thumb-white scrollbar-track-[#5A90F9]">
                <div className="flex">
                    <Navbar />
                </div>
                <div className="w-3/4 ml-4">
                    <div className="border-4 border-black p-4 mb-4">
                        {paragraphs[currentParaIndex]}
                    </div>
                    <div className="flex justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                            onClick={handlePrevious}
                            disabled={currentParaIndex === 0}
                            style={{ fontSize: '24px' }}
                        >
                            Previous
                        </button>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                            onClick={handleNext}
                            disabled={currentParaIndex === paragraphs.length - 1}
                            style={{ fontSize: '24px' }}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
