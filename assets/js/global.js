// Drawer-post-contents

dict_h2 = {};
dict_h3 = {};

h2 = mdui.$('#main').find('h2');
for (let i = 0; i < h2.length; i++) {
    dict_h2[h2[i].id] = h2[i].innerHTML;
}
for (var key in dict_h2) {
    objs = mdui.$('#' + key).nextUntil('h2');
    dict_temp = {}
    for (let i = 0; i < objs.length; i++) {
        if (objs[i].tagName == 'H3') {
            dict_temp[objs[i].id] = objs[i].innerHTML;
        }
    }
    dict_h3[key] = dict_temp;
}

var html_ul_content = new String;
for (key in dict_h3) {
    html_ul_content += `<li class='list-li-contents'><a href='#${key}'>${dict_h2[key]}</a></li>`;
    dict_temp_h3 = dict_h3[key];
    html_li_h3 = "";
    for (key in dict_temp_h3) {
        html_li_h3 += `<li class='list-li-contents'><a href='#${key}'>${dict_temp_h3[key]}</a></li>`;
    }
    html_ul_content += `<ul>${html_li_h3}</ul>`;
}

var drawer_post_contents_list_container = document.getElementById('drawer-post-contents-list-container');
drawer_post_contents_list_container.innerHTML = `<ul class="list-ul-contents">${html_ul_content}</ul>`