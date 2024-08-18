import React from "react";

const UserContext = React.createContext();
export default UserContext;

/*Context kia sath provider bhi bnna hota hai jo data provide krta h
Usercontext is a provider iske sath ek provider bhi bnana hota h jo data provide krta h
componensts bnaye wrap kiya usercontext sai toh yeh ban gya : provider meeans
iske andar jo bhi componensts unko access milgya global context ka & sari states ka through user context


<usercontext>
<login></login>
<Card></Card>
</usercontext>
*/
