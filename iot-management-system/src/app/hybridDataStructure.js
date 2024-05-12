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
  constructor(routerName, floorNo, roomName, SSID, passwd = null) {
    this.name = routerName;
    this.roomName = roomName;
    this.floorNo = floorNo;
    this.children = [];
    this.SSID = SSID;
    this.passwd = passwd;
    this.subnetMask = "255.255.255.0";
    this.parent = null;
  }
}

class wiredNode {
  constructor(PC_Name, ip) {
    this.name = PC_Name;
    this.ip = ip;
    this.state = 1;
    this.parent = null;
  }
}

class wirelessNode {
  constructor(Device_Name, SSID, passwd = null) {
    this.name = Device_Name;
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
    this.floorList = {};
    this.ipList = [];
    this.root = root;
    if (root != null) {
      this.nameList.push(root.name);
      this.floorList[root.name] = root.floorNo;
    }
  }

  setRoot(router) {
    if (router != null) {
      this.nameList.push(router.name);
      this.floorList["Home Router"] = 0;
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
      this.floorList[newRouter.name] = newRouter.floorNo;
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

  addSwitch(parentRouterName, newSwitch) {
    if (this.nameList.includes(newSwitch.name)) {
      console.log("ERROR: Name already exists");
      return;
    }
    let parent = this.searchElement(parentRouterName, newSwitch.name, 1);
    if (parent) {
      if (parent instanceof RouterNode && parentRouterName !== "Home Router") {
        parent.routeTable.set(newSwitch, {
          names: [newSwitch.name],
          networks: [],
        });
        newSwitch.parent = parent;
        this.nameList.push(newSwitch.name);
        this.floorList[newSwitch.name] = newSwitch.floorNo;
      } else {
        alert("Invalid Parent Type for Switch");
      }
    }
  }

  addWrRouter(parentRouterName, newWrRouter) {
    if (this.nameList.includes(newWrRouter.name)) {
      console.log("ERROR: Name already exists");
      return;
    }
    let parent = this.searchElement(parentRouterName, newWrRouter.name, 1);
    if (parent) {
      if (parent instanceof RouterNode && parentRouterName !== "Home Router") {
        parent.routeTable.set(newWrRouter, {
          names: [newWrRouter.name],
          networks: [],
        });
        newWrRouter.parent = parent;
        this.nameList.push(newWrRouter.name);
      } else {
        alert("Invalid Parent Type for WireLess Router");
      }
    }
  }

  addIotDevice(parentWrRouterName, Device) {
    if (this.nameList.includes(Device.name)) {
      console.log("ERROR: Name already exists");
      return;
    }
    let parent = this.searchElement(parentWrRouterName, Device.name, 0);
    if (parent) {
      if (parent instanceof wrlessRouterNode) {
        if (parent.SSID == Device.SSID) {
          if (parent.passwd) {
            if (parent.passwd == Device.passwd) {
              parent.children.push(Device);
              Device.parent = parent;
            } else {
              alert("ERROR: The password doesn't match");
            }
          } else {
            parent.children.push(Device);
            Device.parent = parent;
          }
        } else {
          alert("ERROR: Incorrect SSID");
        }
      }
    }
  }

  addPC(parentNodeName, pcNode) {
    if (this.nameList.includes(pcNode.name)) {
      console.log("ERROR: Name already exists");
      return;
    }
    let parent = this.searchElement(parentNodeName, pcNode.name, 0);
    if (parent) {
      if (parent instanceof SwitchNode) {
        console.log("#########", parent);
        const paParts = parent.network_ip.split(".");
        console.log(paParts);
        const Parts = pcNode.ip.split(".");
        if (
          paParts[0] == Parts[0] &&
          paParts[1] == Parts[1] &&
          paParts[2] == Parts[2]
        ) {
          parent.children.push(pcNode);
          pcNode.parent = parent;
        } else {
          alert("IP doesn't match with network ip");
        }
      } else {
        alert("Invalid Parent Type for PC");
      }
    }
  }

  editRouter(parentRouterName, oldRouterName, newRouter) {
    this.deleteNode(parentRouterName, oldRouterName);
    if (this.nameList.includes(newRouter.name)) {
      console.log("ERROR: Name already exists");
      return;
    }
    if (Object.values(this.floorList).includes(newRouter.floorNo)) {
      alert("Floor already present!");
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
      this.floorList[newRouter.name] = newRouter.floorNo;
    }
  }
  editSwitch(parentName, oldSwitchName, newSwitch){
    this.deleteNode(parentName, oldSwitchName);
    if (this.nameList.includes(newSwitch.name)) {
      console.log("ERROR: Name already exists");
      return;
    }
    let parent = this.searchElement(parentName, newSwitch.name, 1);
    if (parent) {
      if (parent instanceof RouterNode && parentName !== "Home Router") {
        parent.routeTable.set(newSwitch, {
          names: [newSwitch.name],
          networks: [],
        });
        newSwitch.parent = parent;
        this.nameList.push(newSwitch.name);
        this.floorList[newSwitch.name] = newSwitch.floorNo;
      } else {
        alert("Invalid Parent Type for Switch");
      }
    }
  }

  deleteNode(parentName, nodeName) {
    let parent = this.searchElement(parentName, nodeName, 2);
    if (parent instanceof RouterNode) {
      for (let [child, _] of parent.routeTable.entries()) {
        if (child.name == nodeName) {
          parent.routeTable.delete(child);
        }
      }
    } else if (
      parent instanceof SwitchNode ||
      parent instanceof wrlessRouterNode
    ) {
      parent.children = parent.children.filter(
        (child) => child.name !== nodeName
      );
    }
    console.log("#$",this.floorList)
    delete this.floorList[nodeName];
    console.log("#$",this.floorList)
    this.nameList = this.nameList.filter((item) => item != nodeName);
  }

  searchElement(parentNodeName, childNodeName, mode, node = this.root) {
    if (node.name == parentNodeName) {
      return node;
    } else {
      for (let [child, childValue] of node.routeTable.entries()) {
        if (childValue.names.includes(parentNodeName)) {
          if (mode == 1) childValue.names.push(childNodeName);
          if (mode == 2) {
            childValue.names = childValue.names.filter(
              (item) => item != childNodeName
            );
          }
          return this.searchElement(parentNodeName, childNodeName, mode, child);
        }
      }
    }
  }
  convertToTreeData(node) {
    const treeData = {
      name: node.name,
      children: [],
    };
  
    if (node instanceof RouterNode) {
      treeData.attributes = { floorNo: node.floorNo };
    } else if (node instanceof SwitchNode || node instanceof wrlessRouterNode) {
      treeData.attributes = { floorNo: node.floorNo, roomName: node.roomName };
      if (node instanceof SwitchNode) {
        treeData.attributes.networkIP = node.network_ip;
      } else if (node instanceof wrlessRouterNode) {
        treeData.attributes.SSID = node.SSID;
        treeData.attributes.password = node.passwd;
      }
    } else if (node instanceof wiredNode || node instanceof wirelessNode) {
      treeData.attributes = { ip: node.ip };
      if (node instanceof wirelessNode) {
        treeData.attributes.SSID = node.SSID;
        treeData.attributes.password = node.passwd;
      }
    }
  
    if (node instanceof RouterNode && node.routeTable) {
      for (let [childNode, _] of node.routeTable.entries()) {
        const childTreeData = this.convertToTreeData(childNode);
        treeData.children.push(childTreeData);
      }
    } else if (node instanceof SwitchNode || node instanceof wrlessRouterNode) {
      for (let child of node.children) {
        const childTreeData = this.convertToTreeData(child);
        treeData.children.push(childTreeData);
      }
    }
  
    return treeData;
  }
  
}

export {
  RouterNode,
  SwitchNode,
  wrlessRouterNode,
  wiredNode,
  wirelessNode,
  networkTree,
};
