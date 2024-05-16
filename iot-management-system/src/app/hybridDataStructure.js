/*
This is RouterNode Class which stores its name,floorNo which its denoted by , 
a routing table of map data structure in which it stores it's children's details
and a parent variable to link the node to its parent 
*/
class RouterNode {
  constructor(routerName, floorNo) {
    this.name = routerName;
    this.floorNo = floorNo;
    this.routeTable = new Map();
    this.subnetMask = "255.255.255.0";
    this.parent = null;
  }
}

/*
This is SwitchNode Class which stores its name,floorNo under which the switch has been connected,room name which it is denoted by
a children array in which it stores it's children's details,network_ip to store its unique network_ip
and a parent variable to link the node to its parent 
*/
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
/*
This is WiFi-Router Node Class which stores its name,floorNo under which the switch has been connected,room name which it is denoted by
a children array in which it stores it's children's details,SSID to store its unique SSID , password to secure the network
and a parent variable to link the node to its parent 
*/
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

/*
This is PCNode Class which stores its name,
ip to store its unique address which should be matched with its parent network_ip
and a parent variable to link the node to its parent 
*/
class wiredNode {
  constructor(PC_Name, ip) {
    this.name = PC_Name;
    this.ip = ip;
    this.state = 1;
    this.parent = null;
  }
}

/*
This is IoT Device Node Class which stores its name,SSID to store its unique SSID , 
password to secure the network and to match with its parent SSID and passwd,
and a parent variable to link the node to its parent 
*/
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

/*
This is Main Network Tree which has a namelist array to store the added components after each add function
and floor list to store the floor No of each router to check
*/
class networkTree {
  constructor(root = null) {
    this.nameList = [];
    this.floorList = {};
    this.root = root;
    if (root != null) {
      this.nameList.push(root.name);
      this.floorList[root.name] = root.floorNo;
    }
  }

  /*
This Funtcion is used to set the root of the network tree as home router with floor value 0
      Time Complexity : O(1)
*/
  setRoot(router) {
    if (router != null) {
      this.nameList.push(router.name);
      this.floorList["Home Router"] = 0;
      this.root = router;
    }
  }

  /*
This Funtcion is used to add the router node to the specified parentName with its floor no
    Time Complexity : O(1)
*/
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

  /*
This Funtcion is used to add the switch node to the specified parentName with its room Name , network_ip
    Time Complexity : O(nlogn)
*/
  addSwitch(parentRouterName, newSwitch) {
    if (this.nameList.includes(newSwitch.name)) {
      console.log("ERROR: Name already exists");
      s;
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

  /*
This Funtcion is used to add the WiFi-Router node to the specified parentName with its room Name , SSID and passwd
    Time Complexity : O(nlogn) 
*/
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

  /*
This Funtcion is used to add the IoT Device node to the specified parentName with its SSID and passwd
It also check the parent SSID and passwd to match with its SSID and passwd
    Time Complexity : O(nlogn)
*/
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
              this.nameList.push(Device.name);
            } else {
              alert("ERROR: The password doesn't match");
              return;
            }
          } else {
            parent.children.push(Device);
            Device.parent = parent;
            this.nameList.push(Device.name);
          }
        } else {
          alert("ERROR: Incorrect SSID");
          return;
        }
      }
    }
  }

  /*
This Funtcion is used to add the PC node to the specified parentName with its ip address 
It aslo check the match between network_ip and its ip.
    Time Complexity : O(nlogn)
*/
  addPC(parentNodeName, pcNode) {
    if (this.nameList.includes(pcNode.name)) {
      return;
    }
    let parent = this.searchElement(parentNodeName, pcNode.name, 0);
    if (parent) {
      if (parent instanceof SwitchNode) {
        const paParts = parent.network_ip.split(".");
        const Parts = pcNode.ip.split(".");
        if (
          paParts[0] == Parts[0] &&
          paParts[1] == Parts[1] &&
          paParts[2] == Parts[2]
        ) {
          parent.children.push(pcNode);
          pcNode.parent = parent;
          this.nameList.push(pcNode.name);
        } else {
          alert("IP doesn't match with network ip");
          return;
        }
      } else {
        alert("Invalid Parent Type for PC");
        return;
      }
    }
  }

  /*
    All Edit Functions are used to edit the properties of the specified component . It uses delete function and add function
    Time Complexity : O(2logn)
*/

  editRouter(parentRouterName, oldRouterName, newRouter) {
    this.deleteNode(parentRouterName, oldRouterName);
    this.addRouter(parentRouterName, newRouter);
  }
  editSwitch(parentName, oldParent, oldSwitchName, newSwitch) {
    this.deleteNode(oldParent, oldSwitchName);
    this.addSwitch(parentName, newSwitch);
  }

  editWRouter(parentRouterName, oldParent, oldWRouterName, newWrRouter) {
    this.deleteNode(oldParent, oldWRouterName);
    this.addWrRouter(parentRouterName, newWrRouter);
  }
  editPC(parentNodeName, oldParent, oldPCName, pcNode) {
    this.deleteNode(oldParent, oldPCName);
    this.addPC(parentNodeName, pcNode);
  }

  editDevice(parentNodeName, oldParent, oldDeviceName, deviceNode) {
    this.deleteNode(oldParent, oldDeviceName);
    this.addIotDevice(parentNodeName, deviceNode);
  }

  /*
    This Funtcion is used to delete the specified component .
    Time Complexity : O(nlogn)
*/
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
    delete this.floorList[nodeName];
    this.nameList = this.nameList.filter((item) => item != nodeName);
    console.log("Before Editing but after deleting inside delete function");
    this.printElements();
  }

  /*
This Funtcion is used to search for a particular node's parent . 
    Time Complexity : O(nlogn)
*/

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
  /*
This Funtcion is used to convert the backend data into a graphical tree structure . 
    Time Complexity : O(n)
*/
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
