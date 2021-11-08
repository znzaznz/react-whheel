let importAll = (importcontext)=> importcontext.keys().forEach(importcontext)
try {
    importAll(require.context('./asset', true, /\.svg$/));
}catch (e){
    console.log(e);
}