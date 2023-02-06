// forIn and forOf
// forOf loop
const social = ["Instagram","facebook","twitter","Amazon","Whatsapp","Netflix","Snap"];
for(const s of social){
    console.log(s);
}

// forIn loop
const symbol = {
    yt : "youtube",
    fb : "Facebook",
    ig : "Instagram",
    tw : "Twitter",
    wa : "Whatsapp",
    nt : "Netflix",
    sp : "Snap"
};

for(const s in symbol){
    console.log(s);
}