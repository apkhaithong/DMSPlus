function loadMenu() {
    var mastMenu = [],
        subMenu1 = [],
        subMenu2 = [];
    // Menu Level 1
    $.ajax({
        type: "GET",
        url: "sqltext",
        contentType : "application/json;charset=utf-8",
        dataType: "json",
        async: false,
        data: {sql: "SELECT A.MENUCODE, B.MENUNAME FROM USERMENU A, MAINMENU B WHERE A.MENUCODE = B.MENUCODE AND A.USERID = 'ADMIN' AND B.LEVAL = 1 AND ACTIVE = 'Y' AND SYSTEMCOD = 'DMSPlus' AND A.M_ACCESS = 'Y' ORDER BY B.SORT"}
    })
    .done(function(data) {
        mastMenu = data;
    });

    var icon = '';
    var htmlMenu = '<ul class="nav sidebar-menu"><li class="sidebar-label pt20">เมนูหลัก</li>';
    for (var i = 0; i < mastMenu.length; i++) {
        var menuCode = mastMenu[i].MENUCODE.trim();
        var menuName = mastMenu[i].MENUNAME.trim();
        switch(menuCode) {
            case "SET000": icon = 'glyphicons glyphicons-imac'; break;
            case "STK000": icon = 'glyphicons glyphicons-car'; break;
            case "SAL000": icon = 'glyphicons glyphicons-shopping_cart'; break;
            case "FIN000": icon = 'glyphicons glyphicons-usd'; break;
            case "AR000": icon = 'glyphicons glyphicons-parents'; break;
            case "ADMIN000": icon = 'glyphicons glyphicons-shield'; break;
        }
        htmlMenu += '<li id="'+menuCode+'"><a class="accordion-toggle" href="#"><span class="'+icon+'"></span><span class="sidebar-title">'+menuName+'</span><span class="caret"></span></a>';
        // Menu Level 2
        $.ajax({
            type: "GET",
            url: "sqltext",
            contentType : "application/json;charset=utf-8",
            dataType: "json",
            async: false,
            data: {sql: "SELECT A.MENUCODE, B.MENUNAME FROM USERMENU A, MAINMENU B WHERE A.MENUCODE = B.MENUCODE AND B.MENUGRP = '"+menuCode+"' AND A.USERID = 'ADMIN' AND B.LEVAL = 2 AND B.ACTIVE = 'Y' AND B.SYSTEMCOD = 'DMSPlus' AND A.M_ACCESS = 'Y' ORDER BY B.SORT"}
        })
        .done(function(data, status, xhr) {
            subMenu1 = data;
        });
        htmlMenu += '<ul class="nav sub-nav">';
        for (var j = 0; j < subMenu1.length; j++) {
            var subMenu1Code = subMenu1[j].MENUCODE.trim();
            var subMenu1Name = subMenu1[j].MENUNAME.trim();
            // Menu Level 3
            $.ajax({
                type: "GET",
                url: "sqltext",
                contentType : "application/json;charset=utf-8",
                dataType: "json",
                async: false,
                data: {sql: "SELECT A.MENUCODE, B.MENUNAME FROM USERMENU A, MAINMENU B WHERE A.MENUCODE = B.MENUCODE AND B.MENUGRP = '"+subMenu1Code+"' AND A.USERID = 'ADMIN' AND B.LEVAL = 3 AND B.ACTIVE = 'Y' AND B.SYSTEMCOD = 'DMSPlus' AND A.M_ACCESS = 'Y' ORDER BY B.SORT"}
            })
            .done(function(data, status, xhr) {
                subMenu2 = data;
            });
            if (subMenu2.length === 0) {
                htmlMenu += '<li id="'+subMenu1Code+'"><a href="#">'+subMenu1Name+'</a>';
            } else {
                htmlMenu += '<li id="'+subMenu1Code+'"><a class="accordion-toggle" href="#">'+subMenu1Name+'<span class="caret"></span></a>';
            }
            htmlMenu += '<ul class="nav sub-nav">';
            for (var k = 0; k < subMenu2.length; k++) {
                var subMenu2Code = subMenu2[k].MENUCODE.trim();
                var subMenu2Name = subMenu2[k].MENUNAME.trim();
                htmlMenu += '<li id="'+subMenu2Code+'"><a href="#">'+subMenu2Name+'</a></li>';
            };
            htmlMenu += '</ul></li>';
        };
        htmlMenu += '</ul></li>';
    };

    htmlMenu += '<li class="sidebar-label pt20">รายงานระบบ</li><li class="sidebar-proj" id="RP01"><a href="#"><span class="fa fa-dot-circle-o text-primary"></span><span class="sidebar-title">รายงาน 1</span></a></li><li class="sidebar-proj"><a href="#projectTwo"><span class="fa fa-dot-circle-o text-info"></span><span class="sidebar-title">รายงาน 2</span></a></li><li class="sidebar-proj"><a href="#projectTwo"><span class="fa fa-dot-circle-o text-danger"></span><span class="sidebar-title">รายงาน 3</span></a></li><li class="sidebar-proj"><a href="#projectThree"><span class="fa fa-dot-circle-o text-warning"></span><span class="sidebar-title">รายงาน 4</span></a></li>';
    htmlMenu += '</ul>';
    //console.log(htmlMenu);
    $('#leftMenu').append(htmlMenu);
}
