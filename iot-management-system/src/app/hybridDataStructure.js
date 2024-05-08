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
    this.routeTable = {};
    this.ip = ip;
    this.SSID = SSID;
    this.passwd = passwd;
    this.subnetMask = "255.255.255.0";
    this.parent = null;
  }
}

class wiredNode {
  constructor(PC_Name, floorNo, roomName, ip, subnetMask) {
    this.name = PC_Name;
    this.floorNo = floorNo;
    this.roomName = roomName;
    this.ip = ip;
    this.subnetMask = subnetMask;
    this.state = 1;
    this.parent = null;
  }
}

class wirelessNode {
  constructor(Device_Name, floorNo, roomName, subnetMask, SSID, passwd = null) {
    this.name = Device_Name;
    this.floorNo = floorNo;
    this.roomName = roomName;
    this.SSID = SSID;
    this.passwd = passwd;
    this.subnetMask = subnetMask;
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
    let parent = this.searchElement(parentRouterName);
    if (!parent) {
    } else {
      parent.routeTable.set(newRouter, {
        names: [newRouter.name],
        networks: [],
      });
      newRouter.parent = parent;
    }
  }
  printElements(node = this.root) {
    if (node.parent) console.log("Parent Node: ", node.parent.name);
    console.log("Current Node: ", node.name);
    console.log("\n");
    if (node.routeTable) {
      for (let [child, childvalue] of node.routeTable.entries()) {
        this.printElements(child);
      }
    }
  }

  addSwitch(parentRouterName,newSwitch){
    if (this.nameList.includes(newSwitch.name))
    {
      console.log("ERROR: Name already exists");
      return;
    }
    let parent = this.searchElement(parentRouterName);
    if(parent)
    {
      parent.routeTable.set(newSwitch, {
        names: [newSwitch.name],
        networks: [],
      });
      newSwitch.parent = parent;
    }
  }

  addWrRouter(parentRouterName,newWrRouter){
    if (this.nameList.includes(newWrRouter.name))
    {
      console.log("ERROR: Name already exists");
      return;
    }
    let parent = this.searchElement(parentRouterName);
    if(parent)
    {
      parent.routeTable.set(newWrRouter, {
        names: [newWrRouter.name],
        networks: [],
      });
      newWrRouter.parent = parent;
    }
  }

  searchElement(eleName, node = this.root) {
    if (node.name == eleName) {
      return node;
    } else {
      for (let [child, childValue] of node.routeTable.entries()) {
        if (childValue.names.includes(eleName)) {
          return this.searchElement(eleName, child);
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
Router7 = new RouterNode("Router7", 1);
Switch1 = new SwitchNode("Swtich1",1,"Bedroom1","179.18.1.160");
Switch2 = new SwitchNode("Swtich2",1,"Bedroom2","179.18.2.158");
network.addRouter(network.root.name, Router2);
network.addRouter(network.root.name, Router3);
network.addRouter("Router2", Router4);
network.addRouter("Router3", Router5);
network.addRouter("Router2", Router6);
network.addSwitch("Router4",Switch1);
network.addSwitch("Router2",Switch2);
console.log(Router1.routeTable);
network.printElements();
