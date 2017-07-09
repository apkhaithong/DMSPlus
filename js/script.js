function createElements() {
    $('#confirmdlg').jqxWindow({
        maxHeight: 150,
        maxWidth: 280,
        minHeight: 40,
        minWidth: 250,
        height: 145,
        width: 270,
        resizable: false,
        isModal: true,
        modalOpacity: 0.3,
        okButton: $('#ok'),
        cancelButton: $('#cancel'),
        initContent: function() {
            $('#ok').jqxButton({ width: '65px', template: "success" });
            $('#cancel').jqxButton({ width: '65px', template: "danger" });
            $('#ok').focus();
        }
    });
    $('#confirmdlg').jqxWindow('open');
}

function createElementAlert() {
    $('#alertdlg').jqxWindow({
        maxHeight: 150,
        maxWidth: 280,
        minHeight: 40,
        minWidth: 250,
        height: 145,
        width: 270,
        resizable: false,
        isModal: true,
        modalOpacity: 0.3,
        okButton: $('#okAlert'),
        initContent: function() {
            $('#okAlert').jqxButton({ width: '65px', template: "danger" });
            // $('#cancel').jqxButton({ width: '65px', theme: theme, template: "danger" });
            $('#okAlert').focus();
        }
    });
    $('#alertdlg').jqxWindow('open');
}

function loadHTML(filename) {
    $("#panelContent").load(filename);
}
$(document).ready(function() {
    $.confirmdlg = function(message, type) {
        var info = '<i class="fa fa-info-circle fa-3x" style="vertical-align: middle; color: #1F4788;"></i>&nbsp;&nbsp;';
        var warning = '<i class="fa fa-exclamation-triangle fa-3x" style="vertical-align: middle; color: #FFA400;"></i>&nbsp;&nbsp;';
        var error = '<i class="fa fa-times-circle fa-3x" style="vertical-align: middle; color: #C3272B;"></i>&nbsp;&nbsp;';
        var dlgtype = '';
        var dlgtitle = '';
        if (type == 'info') {
            dlgtype = info;
            dlgtitle = 'ยืนยัน';
        } else if (type == 'warning') {
            dlgtype = warning;
            dlgtitle = 'แจ้งเตือน';
        } else if (type == 'error') {
            dlgtype = error;
            dlgtitle = 'Error';
        } else {
            dlgtype = '';
            dlgtitle = '';
        }
        $("#confirmdlg").remove();
        $("#content").append('<div id="confirmdlg"><div style="color: #2e6e9e;">' + dlgtitle + '</div><div><div style="width: 265px; height: 75px; text-align: center; padding-top: 15px; font-size: 14px">' + dlgtype + message + '</div><div><div style="float: left;"><input type="button" id="ok" value="ตกลง" style="margin-right: 10px; margin-left: 65px;" /><input type="button" id="cancel" value="ยกเลิก" /></div></div></div></div>');
        createElements();
    }

    // alert
    $.alertdlg = function(message, type) {
        var info = '<i class="fa fa-info-circle fa-3x" style="vertical-align: middle; color: #1F4788;"></i>&nbsp;&nbsp;';
        var warning = '<i class="fa fa-exclamation-triangle fa-3x" style="vertical-align: middle; color: #FFA400;"></i>&nbsp;&nbsp;';
        var error = '<i class="fa fa-times-circle fa-3x" style="vertical-align: middle; color: #C3272B;"></i>&nbsp;&nbsp;';
        var dlgtype = '';
        var dlgtitle = '';
        if (type == 'info') {
            dlgtype = info;
            dlgtitle = 'ยืนยัน';
        } else if (type == 'warning') {
            dlgtype = warning;
            dlgtitle = 'แจ้งเตือน';
        } else if (type == 'error') {
            dlgtype = error;
            dlgtitle = 'Error';
        } else {
            dlgtype = '';
            dlgtitle = '';
        }
        $("#alertdlg").remove();
        $("#content").append('<div id="alertdlg"><div style="color: #2e6e9e;">' + dlgtitle + '</div><div><div style="width: 265px; height: 75px; text-align: center; padding-top: 15px; font-size: 14px">' + dlgtype + message + '</div><div><div style="float: left;"><input type="button" id="okAlert" value="ตกลง" style="margin-right: 10px; margin-left: 95px;" /></div></div></div></div>');
        createElementAlert();
    }
});

function openReport (verb, url, data, target) {
    var form = document.createElement("form");
    form.action = url;
    form.method = verb;
    form.target = target || "_blank";
    if (data) {
        for (var key in data) {
            var input = document.createElement("textarea");
            input.name = key;
            input.value = typeof data[key] === "object" ? JSON.stringify(data[key]) : data[key];
            form.appendChild(input);
        }
    }
    form.style.display = 'none';
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
};

function checkRundoc(hd_docno) {
    var result = false;
    var value = JSON.stringify([{
        doc: hd_docno,
        locat: $.session.get('locatcd')
    }]);
    $.ajax({
        async: false,
        url: "checkRundoc",
        contentType: "application/json",
        dataType: 'json',
        type: 'POST',
        data: value,
        success: function (data) {
            if (data[0].RUNNING === 'Y') {
                result = true
            } else {
                result = false
            }
        }
    });
    return result;
};

function checkRight(menucode) {
    var chkright = [];
    var value = JSON.stringify([{
        menucode: menucode,
        userid: $.session.get('username')
    }]);
    $.ajax({
        async: false,
        url: "checkright",
        contentType: "application/json",
        dataType: 'json',
        type: 'POST',
        data: value,
        success: function (data) {
            chkright = data[0];
            if (chkright.M_ACCESS === 'Y') {
                chkright.M_ACCESS = true
            } else {
                chkright.M_ACCESS = false
            }
            if (chkright.M_DELETE === 'Y') {
                chkright.M_DELETE = true
            } else {
                chkright.M_DELETE = false
            }
            if (chkright.M_EDIT === 'Y') {
                chkright.M_EDIT = true
            } else {
                chkright.M_EDIT = false
            }
            if (chkright.M_INSERT === 'Y') {
                chkright.M_INSERT = true
            } else {
                chkright.M_INSERT = false
            }
        }
    });
    return chkright;
};

function getLocatName(locatcd) {
    var locatnm = '';
    $.ajax({
        async: false,
        url: "sqltext",
        data: { sql: "SELECT LOCATNM FROM INVLOCAT WHERE LOCATCD = '"+locatcd+"' " },
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            locatnm = data[0].LOCATNM;
        }
    });
    return locatnm;
};

function getLocatparkName(locatpark) {
    var locatparknm = '';
    $.ajax({
        async: false,
        url: "sqltext",
        data: { sql: "SELECT LOCATPARKNM FROM INVPARKING WHERE LOCATPARK = '"+locatpark+"' " },
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            locatparknm = data[0].LOCATPARKNM;
        }
    });
    return locatparknm;
};

function getApName(apcode) {
    var apname = '';
    $.ajax({
        async: false,
        url: "sqltext",
        data: { sql: "SELECT APNAME FROM APMAST WHERE APCODE = '"+apcode+"' " },
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            apname = data[0].APNAME;
        }
    });
    return apname;
};

function getOfficeName(offcode) {
    var offfname = '';
    $.ajax({
        async: false,
        url: "sqltext",
        data: { sql: "SELECT NAME||'   '||SURNAME AS NAME FROM OFFICER WHERE CODE = '"+offcode+"' " },
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            offfname = data[0].NAME;
        }
    });
    return offfname;
};

function getCustname(cuscod) {
    var custname = '';
    $.ajax({
        async: false,
        url: "sqltext",
        data: { sql: "SELECT TRIM(SNAM)||TRIM(NAME1)||'   '||TRIM(NAME2) AS NAME FROM CUSTMAST WHERE CUSCOD = '"+cuscod+"' " },
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            custname = data[0].NAME;
        }
    });
    return custname;
};

function getSaleCustname(contno) {
    var custname = '';
    $.ajax({
        async: false,
        url: "sqltext",
        data: { sql: "SELECT TRIM(SNAME)||TRIM(NAME1)||'   '||TRIM(NAME2) AS NAME FROM VWSALE WHERE CONTNO = '"+contno+"' " },
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            custname = data[0].NAME;
        }
    });
    return custname;
};

function getFinname(fincode) {
    var finname = '';
    $.ajax({
        async: false,
        url: "sqltext",
        data: { sql: "SELECT FINNAME FROM FINMAST WHERE FINCODE = '"+fincode+"' " },
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            finname = data[0].FINNAME;
        }
    });
    return finname;
};

function getPaydue(paytyp) {
    var duedesc = '';
    $.ajax({
        async: false,
        url: "sqltext",
        data: { sql: "SELECT DUECODE, DUEDESC FROM PAYDUE WHERE DUECODE = '"+paytyp+"' " },
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            duedesc = data[0].DUEDESC;
        }
    });
    return duedesc;
};