class RouterNode {
  constructor(routerName, floorNo) {
    this.name = routerName;
    this.floorNo = floorNo;
    this.routeTable = new Map(); // routerObject : { names: [], networks: [] },
    this.subnetMask = "255.255.255.0";
    this.parent = null;
  }
}

class SwitchNode {
  constructor(switchName, floorNo, roomName, network_ip) {
    this.name = switchName;
    this.roomName = roomName;
    this.floorNo = floorNo;
    this.children = [];
    this.network_ip = network_ip;
    this.subnetMask = "255.255.255.0";
    this.parent = null;
  }
}

class wrlessRouterNode {
  constructor(routerName, floorNo, roomName, ip, SSID, passwd = null) {
    this.name = routerName;
    this.roomName = roomName;
    this.floorNo = floorNo;
    this.children = [];
    this.ip = ip;
    this.SSID = SSID;
    this.passwd = passwd;
    this.subnetMask = "255.255.255.0";
    this.parent = null;
  }
}

class wiredNode {
  constructor(PC_Name, floorNo, roomName, ip) {
    this.name = PC_Name;
    this.floorNo = floorNo;
    this.roomName = roomName;
    this.ip = ip;
    this.state = 1;
    this.parent = null;
  }
}

class wirelessNode {
  constructor(Device_Name, floorNo, roomName, SSID, passwd = null) {
    this.name = Device_Name;
    this.floorNo = floorNo;
    this.roomName = roomName;
    this.SSID = SSID;
    this.passwd = passwd;
    this.state = 1;
    this.attributes = {};
    this.parent = null;
  }
}

class networkTree {
  constructor(root = null) {
    this.nameList = [];
    this.ipList = [];
    this.root = root;
    if (root != null) {
      this.nameList.push(root.name);
    }
  }

  setRoot(router) {
    if (router != null) {
      this.nameList.push(router.name);
      this.root = router;
    }
  }

  addRouter(parentRouterName, newRouter) {
    if (this.nameList.includes(newRouter.name)) {
      console.log("ERROR: Name already exists");
      return;
    }
    let parent = this.searchElement(parentRouterName, newRouter.name, 1);
    if (!parent) {
    } else {
      parent.routeTable.set(newRouter, {
        names: [newRouter.name],
        networks: [],
      });
      newRouter.parent = parent;
      this.nameList.push(newRouter.name);
    }
  }
  printElements(node = this.root) {
    // modification needed
    if (node.parent) console.log("Parent Node: ", node.parent.name);
    console.log("Current Node: ", node.name);
    console.log("\n");
    if (node.routeTable) {
      for (let [child, childvalue] of node.routeTable.entries()) {
        this.printElements(child);
      }
    }
  }

  addSwitch(parentRouterName, newSwitch) {
    if (this.nameList.includes(newSwitch.name)) {
      console.log("ERROR: Name already exists");
      return;
    }
    let parent = this.searchElement(parentRouterName, newSwitch.name, 1);
    console.log("PPPPPP:", parent)
    if (parent) {
      parent.routeTable.set(newSwitch, {
        names: [newSwitch.name],
        networks: [],
      });
      newSwitch.parent = parent;
      this.nameList.push(newSwitch.name);
    }
  }

  addWrRouter(parentRouterName, newWrRouter) {
    if (this.nameList.includes(newWrRouter.name)) {
      console.log("ERROR: Name already exists");
      return;
    }
    let parent = this.searchElement(parentRouterName, newWrRouter.name, 1);
    if (parent) {
      parent.routeTable.set(newWrRouter, {
        names: [newWrRouter.name],
        networks: [],
      });
      newWrRouter.parent = parent;
    }
  }

  addIotDevice(parentWrRouterName, Device) {
    if (this.nameList.includes(Device.name)) {
      console.log("ERROR: Name already exists");
      return;
    }
    let parent = this.searchElement(parentWrRouterName, Device.name, 0);
    if (parent) {
      if (parent.SSID == Device.SSID) {
        if (parent.passwd) {
          if (parent.passwd == Device.passwd) {
            parent.children.push(Device);
            Device.parent = parent;
          } else {
            console.log("ERROR: The password doesn't match");
          }
        } else {
          parent.children.push(Device);
          Device.parent = parent;
        }
      } else {
        console.log("ERROR: Incorrect SSID");
      }
    }
  }

  addPC(parentNodeName, pcNode) {
    if (this.nameList.includes(pcNode.name)) {
      console.log("ERROR: Name already exists");
      return;
    }
    let parent = this.searchElement(parentNodeName, pcNode.name, 0);
    parent.children.push(pcNode);
    pcNode.parent = parent;
  }

  //Logic needs to be changed (here we are not using parent node so the if condition in for loop will not work properly)
  deleteSearch(nodename, node = this.root) {
    console.log(node)
    if (!node instanceof RouterNode) {
      console.log("###");
      return node;
    }
    if (node.name == nodename) {
      console.log("$$$");

      return node;
    }
    for (let [child, childValue] of node.routeTable.entries()) {
      if (childValue.names.includes(nodename)) {
        childValue.names = childValue.names.filter((item) => item !== nodename);
        return this.deleteSearch(nodename, child);
      }
    }
  }

  deleteDevice(nodename) {
    let delNode = this.deleteSearch(nodename);
    delNode.parent.children = delNode.parent.children.filter(
      (node) => node !== nodename
    );
  }

  deleteRoomNetwork(nodename) {
    let delNode = this.deleteSearch(nodename);
    console.log(delNode)
    if (delNode) {
      delNode.children = null;
      delNode.parent.routeTable.delete(delNode);
    }
  }

  deleteFloorNetwork(nodename) {
    let delNode = this.deleteSearch(nodename);
    delNode.routeTable = null;
    delNode.parent.routeTable.delete(delNode);
  }

  searchElement(parentNodeName, childNodeName, mode, node = this.root) {
    if (node.name == parentNodeName) {
      return node;
    } else {
      for (let [child, childValue] of node.routeTable.entries()) {
        if (childValue.names.includes(parentNodeName)) {
          if (mode == 1) childValue.names.push(childNodeName);
          return this.searchElement(parentNodeName, childNodeName, mode, child);
        }
      }
    }
  }
  convertToTreeData(node) {
    const treeData = {
      name: node.name,
      children: []
    };
  
    // Check if the node is a RouterNode and has a routeTable
    if (node instanceof RouterNode && node.routeTable) {
      for (let [childNode, _] of node.routeTable.entries()) {
        const childTreeData = this.convertToTreeData(childNode);
        treeData.children.push(childTreeData);
      }
    } else {
      // Check if the node is a SwitchNode
      if (node instanceof SwitchNode) {
        for (let child of node.children) {
          const childTreeData = this.convertToTreeData(child);
          treeData.children.push(childTreeData);
        }
      }
      // Check if the node is a wrlessRouterNode
      else if (node instanceof wrlessRouterNode) {
        for (let child of node.children) {
          const childTreeData = this.convertToTreeData(child);
          treeData.children.push(childTreeData);
        }
      }
      // Check if the node is a wiredNode or wirelessNode
      else if (node instanceof wiredNode || node instanceof wirelessNode) {
        // No children for wiredNode or wirelessNode
      }
    }
  
    return treeData;
  }
}

let Router1 = new RouterNode("Router1", 0);
let network = new networkTree(Router1);
let Router2 = new RouterNode("Router2", 1);
let Router3 = new RouterNode("Router3", 1);
let Router4 = new RouterNode("Router4", 1);
let Router5 = new RouterNode("Router5", 1);
let Router6 = new RouterNode("Router6", 1);
let Router7 = new RouterNode("Router7", 1);
let Switch1 = new SwitchNode("Swtich1", 1, "Bedroom1", "179.18.1.160");
let Switch2 = new SwitchNode("Swtich2", 1, "Bedroom2", "179.18.2.158");
let PC1 = new wiredNode("PC1", "1", "Bathroom", "192.168.152.2", "255.255.255.0");
network.addRouter(network.root.name, Router2);
network.addRouter(network.root.name, Router3);
network.addRouter("Router2", Router4);
network.addRouter("Router3", Router5);
network.addRouter("Router2", Router6);
network.addSwitch("Router4", Switch1);
network.addSwitch("Router2", Switch2);
network.addPC("Swtich2", PC1);
network.printElements();
network.deleteRoomNetwork("swtich2");
network.printElements();
console.log(network.convertToTreeData(Router1))


export  {RouterNode, SwitchNode, wrlessRouterNode, wiredNode, wirelessNode, networkTree}