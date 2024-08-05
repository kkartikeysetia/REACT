import React from "react";

const UserContext = React.createContext();
export default UserContext;

/* usercontext is a provider iske sath ek provider bhi bnana hota h jo data provide krta h
componensts bnaye wrap kiya usercontext mai toh yeh bangye provider menas 
 iske andar jo bhi componensts unko access milgya global context ka & sari states ka through user context

<>
<login></login>
<Card></Card>
</>
*/
