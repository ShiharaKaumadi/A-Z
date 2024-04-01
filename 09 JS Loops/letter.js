const topic = document.querySelector('#topic');
let order = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

for (i = 0; i < order.length; i++) {
    let node = document.createElement('div');
    let style = "width:45px;height:45px;font-size: 40px;font-weight:bold;padding:15px 15px 15px 15px;margin:12px 12px;display:inline-block;background-color:springgreen;color:white;border:8px solid skyblue; border-radius:12px;justify-items:center;align-content:center;text-align:center;"
    node.style =style;
    node.textContent = order[i];
    console.log(`%c`+ node.textContent, style);
    document.body.append(node);
}



