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
    }
    this.root = router;
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
    }
  }
  printElements(node = this.root) { // modification needed
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
    if (parent) {
      parent.routeTable.set(newSwitch, {
        names: [newSwitch.name],
        networks: [],
      });
      newSwitch.parent = parent;
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
    if (typeof parent == typeof SwitchNode) {
      parent.routeTable.set(newWrRouter, {
        names: [newWrRouter.name],
        networks: [],
      });
      newWrRouter.parent = parent;
    }
  }

  searchElement(parentNodeName, childNodeName, mode, node = this.root) {
    if (node.name == parentNodeName) {
      return node;
    } else {
      for (let [child, childValue] of node.routeTable.entries()) {
        if (childValue.names.includes(parentNodeName)) {
          if (mode == 1) childValue.names.push(childNodeName);
          if (mode == 2)
            childValue.names = childValue.names.filter(
              (item) => item != childNodeName
            );
          return this.searchElement(parentNodeName, childNodeName, mode, child);
        }
      }
    }
  }
}

Router1 = new RouterNode("Router1", 0);
network = new networkTree(Router1);
Router2 = new RouterNode("Router2", 1);
Router3 = new RouterNode("Router3", 1);
Router4 = new RouterNode("Router4", 1);
Router5 = new RouterNode("Router5", 1);
Router6 = new RouterNode("Router6", 1);

wr1 = new wrlessRouterNode(
  "wr1",
  1,
  "Bedroom",
  "179.1.19.50",
  "BedroomForMe",
  "iloveyou"
);

Ac = new wirelessNode("AC", 1, "Bedroom", "BedroomForMe", "iloveyou");

network.addRouter(network.root.name, Router2);
network.addRouter(network.root.name, Router3);
network.addRouter("Router2", Router4);
network.addRouter("Router3", Router5);
network.addRouter("Router2", Router6);
network.addWrRouter("Router3", wr1);
network.addIotDevice("wr1", Ac);

network.printElements();
