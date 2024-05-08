class RouterNode {
  constructor(routerName, floorNo) {
    this.name = routerName;
    this.floorNo = floorNo;
    this.children = [];
    this.routeTable = {
      // routerObject : { names: [], networks: [] },
    };
    this.subnetMask = "255.255.255.0";
    this.parent = null;
  }
  updateRoutingTable() {
    this.routeTable = {};
    this.children.forEach((child, index) => {
      this.routeTable[index] = [];
    });
  }
  searchElement(eleName) {
    if(this.name == eleName){
      return this
    }
    else{
      for (let child in this.routeTable) {
        if (eleName in child.names) {
          return child.searchElement(eleName)
        }
      }
    }
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
    if(newRouter.name in this.nameList){
      console.log("ERROR: Name already exist")
      return
    }
    parent = this.root.searchElement(parentRouterName)
    parent.routeTable[newRouter] = {names:[newRouter.name],networks:[]}
  }
}

Router1 = new RouterNode("Router1", 0);
network = new networkTree(Router1);
Router2 = new RouterNode("Router1",1);
networkTree.addRouter(networkTree.root, Router2);