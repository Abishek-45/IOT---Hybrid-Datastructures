class RouterNode {
  constructor(routerName,floorNo) {
      this.routerName = routerName;
      this.floorNo = floorNo;
      this.children = [];
      this.routeTable = {};
      this.subnetMask = "255.255.255.0";
      this.parent = null;
  }
}

class SwitchNode {
  constructor(switchName,floorNo,roomName,netwrok_ip) {
      this.switchName = switchName;
      this.roomName = roomName;
      this.floorNo = floorNo;
      this.children = [];
      this.netwrok_ip = netwrok_ip;
      this.subnetMask = "255.255.255.0";
      this.parent = null;
  }
}

class wrlessRouterNode {
  constructor(routerName,floorNo,roomName,ip,SSID,passwd=null) {
      this.routerName = routerName;
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
  constructor(PC_Name,floorNo,roomName,ip,subnetMask) {
      this.PC_Name = PC_Name;
      this.floorNo = floorNo;
      this.roomName = roomName;
      this.ip = ip;
      this.subnetMask = subnetMask;
      this.state = 1;
      this.parent = null;
  }
}

class wirelessNode {
  constructor(Device_Name,floorNo,roomName,subnetMask,SSID,passwd=null){
      this.Device_Name = Device_Name;
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
