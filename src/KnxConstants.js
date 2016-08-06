// SOURCES:
// http://knxnetipdissect.sourceforge.net/doc.html
// http://dz.prosyst.com/pdoc/mBS_SH_SDK_7.3.0/modules/knx/api/com/prosyst/mbs/services/knx/ip/Constants.html
KnxConstants = {};

KnxConstants.SERVICE_TYPE = {
    SEARCH_REQUEST:   0x0201,
    SEARCH_RESPONSE:  0x0202,
    DESCRIPTION_REQUEST:  0x0203,
    DESCRIPTION_RESPONSE: 0x0204,
    CONNECT_REQUEST:   0x0205,
    CONNECT_RESPONSE:  0x0206,
    CONNECTIONSTATE_REQUEST:  0x0207,
    CONNECTIONSTATE_RESPONSE: 0x0208,
    DISCONNECT_REQUEST:   0x0209,
    DISCONNECT_RESPONSE:  0x020a,
    DEVICE_CONFIGURATION_REQUEST: 0x0310,
    DEVICE_CONFIGURATION_ACK:     0x0311,
    TUNNELLING_REQUEST: 0x0420,
    TUNNELLING_ACK:     0x0421,
    ROUTING_INDICATION:   0x0530,
    ROUTING_LOST_MESSAGE: 0x0531,
    UNKNOWN: -1
};
//
KnxConstants.CONNECTION_TYPE = {
  DEVICE_MGMT_CONNECTION: 0x03,
  TUNNEL_CONNECTION: 0x04,
  REMOTE_LOGGING_CONNECTION: 0x06,
  REMOTE_CONFIGURATION_CONNECTION: 0x07,
  OBJECT_SERVER_CONNECTION: 0x08
};
//
KnxConstants.PROTOCOL_TYPE = {
  IPV4_UDP: 0x01,
  IPV4_TCP: 0x02,
};
//
KnxConstants.KNX_LAYER = {
  LINK_LAYER: 0x02,      /** Tunneling on link layer, establishes a link layer tunnel to the KNX network.*/
  RAW_LAYER: 0x04,  /** Tunneling on raw layer, establishes a raw tunnel to the KNX network. */
  BUSMONITOR_LAYER: 0x80 /** Tunneling on busmonitor layer, establishes a busmonitor tunnel to the KNX network.*/
}

KnxConstants.FRAMETYPE = {
   EXTENDED: 0x00,
   STANDARD: 0x01
};

KnxConstants.RESPONSECODE = {
  E_NO_ERROR: 0x00, // E_NO_ERROR - The connection was established succesfully
  E_CONNECTION_ID: 0x21, // - The KNXnet/IP server device could not find an active data connection with the given ID
  E_CONNECTION_TYPE: 0x22, // - The requested connection type is not supported by the KNXnet/IP server device
  E_CONNECTION_OPTION: 0x23, // - The requested connection options is not supported by the KNXnet/IP server device
  E_NO_MORE_CONNECTIONS: 0x24, //  - The KNXnet/IP server could not accept the new data connection (Maximum reached)
  E_DATA_CONNECTION: 0x26,// - The KNXnet/IP server device detected an erro concerning the Dat connection with the given ID
  E_KNX_CONNECTION: 0x27  // - The KNXnet/IP server device detected an error concerning the KNX Bus with the given ID
}

KnxConstants.MESSAGECODES = {
  "L_Raw.req":       0x10,
  "L_Data.req":      0x11,
  "L_Poll_Data.req": 0x13,
  "L_Poll_Data.con": 0x25,
  "L_Data.ind":      0x29,
  "L_Busmon.ind":    0x2B,
  "L_Raw.ind":       0x2D,
  "L_Data.con":      0x2E,
  "L_Raw.con":       0x2F
};

KnxConstants.APCICODES =
  ["A_GroupValue_Read", "A_GroupValue_Response", "A_GroupValue_Write",
  "A_PhysicalAddress_Write",  "A_PhysicalAddress_Read", "A_PhysicalAddress_Response",
  "A_ADC_Read", "A_ADC_Response",
  "A_Memory_Read", "A_Memory_Response", "A_Memory_Write",
  "A_UserMemory", "A_DeviceDescriptor_Read", "A_DeviceDescriptor_Response",
  "A_Restart", "A_OTHER"]


  /* TODO helper function to print enum keys */
KnxConstants.keyText = function(mapref, value) {
  // pass in map by name or value
  var map = KnxConstants[mapref] || mapref;
  if (typeof map !== 'object')
    throw "Unknown map: " + mapref;
  for (var key in map) {
    if (map[key] == value) return key;
  }
  return "(not found: "+value+")";
}

module.exports = KnxConstants;