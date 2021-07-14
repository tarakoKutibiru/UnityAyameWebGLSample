mergeInto(LibraryManager.library,
{
    Connect: function(signalingUrl, signalingKey, roomId)
    {
        Connect(Pointer_stringify(signalingUrl), Pointer_stringify(roomId), Pointer_stringify(signalingKey));
    },

    Disconnect: function()
    {
        Disconnect();
    },

    SendData: function(message)
    {
        SendData(Pointer_stringify(message));
    },

    InjectionJs:function(url,id)
    {
        url=Pointer_stringify(url);
        id=Pointer_stringify(id);
        if(!document.getElementById(id))
        {
            var s = document.createElement("script");
            s.setAttribute('src',url);
            s.setAttribute('id',id);
            document.head.appendChild(s);
        }
    },
});