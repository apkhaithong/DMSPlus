function searchAll(show, returnid) {
    $("body").css("overflow", "hidden");
    var width = $(document).width();
    var height = $(document).height();
    var sqltxt = "";
    var fields = [];
    var keyno = "";
    var data = [];
    var datafields = [];
    var source = {
        localdata: data,
        datatype: 'json',
        datafields: datafields
    };
    var gridDataAdapter = new $.jqx.dataAdapter(source);

    //ตรวจสอบว่าจะค้นหาข้อมูลอะไร พร้อมระบุ Field ที่จะแสดง
    if (show === "invlocat") {
        datafields = [
            { name: 'LOCATCD', type: 'string' },
            { name: 'LOCATNM', type: 'string' },
        ];
        fields = [
            { text: 'รหัสสาขา', datafield: 'LOCATCD', minwidth: 100, width: 250 },
            { text: 'ชื่อสาขา', datafield: 'LOCATNM', minwidth: 200, width: 250 },
        ];
        keyno = 'LOCATCD';
    } else if (show === "setgroup") {
        datafields = [
            { name: 'GCODE', type: 'string' },
            { name: 'GDESC', type: 'string' },
        ];
        fields = [
            { text: 'รหัสกลุ่มสินค้า', datafield: 'GCODE', minwidth: 100, width: 250 },
            { text: 'คำอธิบาย', datafield: 'GDESC', minwidth: 200, width: 250 },
        ];
        keyno = 'GCODE';
    } else if (show === "settype") {
        datafields = [
            { name: 'TYPECOD', type: 'string' },
            { name: 'TYPEDESC', type: 'string' },
        ];
        fields = [
            { text: 'รหัสยี่ห้อสินค้า', datafield: 'TYPECOD', minwidth: 100, width: 250 },
            { text: 'คำอธิบาย', datafield: 'TYPEDESC', minwidth: 200, width: 250 },
        ];
        keyno = 'TYPECOD';
    } else if (show === "setmodel") {
        datafields = [
            { name: 'MODELCOD', type: 'string' },
            { name: 'MODELDESC', type: 'string' },
        ];
        fields = [
            { text: 'รหัสรุ่นสินค้า', datafield: 'MODELCOD', minwidth: 100, width: 250 },
            { text: 'คำอธิบาย', datafield: 'MODELDESC', minwidth: 200, width: 250 },
        ];
        keyno = 'MODELCOD';
    } else if (show === "setbaab") {
        datafields = [
            { name: 'BAABCOD', type: 'string' },
            { name: 'BAABDESC', type: 'string' },
        ];
        fields = [
            { text: 'รหัสแบบสินค้า', datafield: 'BAABCOD', minwidth: 100, width: 250 },
            { text: 'คำอธิบาย', datafield: 'BAABDESC', minwidth: 200, width: 250 },
        ];
        keyno = 'BAABCOD';
    } else if (show === "setcolor") {
        datafields = [
            { name: 'COLORCOD', type: 'string' },
            { name: 'COLORDESC', type: 'string' },
        ];
        fields = [
            { text: 'รหัสสีสินค้า', datafield: 'COLORCOD', minwidth: 100, width: 250 },
            { text: 'คำอธิบาย', datafield: 'COLORDESC', minwidth: 200, width: 250 },
        ];
        keyno = 'COLORCOD';
    } else if (show === "invparking") {
        datafields = [
            { name: 'LOCATPARK', type: 'string' },
            { name: 'LOCATPARKNM', type: 'string' },
            { name: 'LOCATCD', type: 'string' },
        ];
        fields = [
            { text: 'รหัสสถานที่จอด', datafield: 'LOCATPARK', minwidth: 100, width: 250 },
            { text: 'ชื่อสถานที่จอด', datafield: 'LOCATPARKNM', minwidth: 200, width: 250 },
            { text: 'รหัสสาขา', datafield: 'LOCATCD', minwidth: 100, width: 250 },
        ];
        keyno = 'LOCATPARK';
    } else if (show === "payfor") {
        datafields = [
            { name: 'FORCODE', type: 'string' },
            { name: 'FORDESC', type: 'string' },
        ];
        fields = [
            { text: 'รหัสชำระค่า', datafield: 'FORCODE', minwidth: 100, width: 250 },
            { text: 'คำอธิบาย', datafield: 'FORDESC', minwidth: 200, width: 250 },
        ];
        keyno = 'FORCODE';
    } else if (show === "paytyp") {
        datafields = [
            { name: 'PAYCODE', type: 'string' },
            { name: 'PAYDESC', type: 'string' },
            { name: 'ACCMSTCOD', type: 'string' },
        ];
        fields = [
            { text: 'รหัสชำระโดย', datafield: 'PAYCODE', minwidth: 100, width: 250 },
            { text: 'คำอธิบาย', datafield: 'PAYDESC', minwidth: 200, width: 250 },
            { text: 'รหัสบัญชี', datafield: 'ACCMSTCOD', minwidth: 200, width: 250 },
        ];
        keyno = 'PAYCODE';
    } else if (show === "regflag") {
        datafields = [
            { name: 'REGCODE', type: 'string' },
            { name: 'REGDESC', type: 'string' },
        ];
        fields = [
            { text: 'รหัสสถานะทางทะเบียน', datafield: 'REGCODE', minwidth: 100, width: 250 },
            { text: 'คำอธิบาย', datafield: 'REGDESC', minwidth: 200, width: 250 },
        ];
        keyno = 'REGCODE';
    } else if (show === "unit") {
        datafields = [
            { name: 'GCODE', type: 'string' },
            { name: 'GDESC', type: 'string' },
        ];
        fields = [
            { text: 'รหัสหน่วยนับ', datafield: 'GCODE', minwidth: 100, width: 250 },
            { text: 'คำอธิบาย', datafield: 'GDESC', minwidth: 200, width: 250 },
        ];
        keyno = 'GCODE';
    } else if (show === "optmast") {
        datafields = [
            { name: 'OPTCODE', type: 'string' },
            { name: 'OPTNMTH', type: 'string' },
        ];
        fields = [
            { text: 'รหัสอุปกรณ์', datafield: 'OPTCODE', minwidth: 100, width: 250 },
            { text: 'คำอธิบาย', datafield: 'OPTNMTH', minwidth: 200, width: 250 },
        ];
        keyno = 'OPTCODE';
    } else if (show === "optmastlocat") {
        datafields = [
            { name: 'LOCAT', type: 'string' },
            { name: 'OPTCODE', type: 'string' },
            { name: 'OPTNMTH', type: 'string' },
        ];
        fields = [
            { text: 'สาขา', datafield: 'LOCAT', minwidth: 100, width: 250 },
            { text: 'รหัสอุปกรณ์', datafield: 'OPTCODE', minwidth: 100, width: 250 },
            { text: 'คำอธิบาย', datafield: 'OPTNMTH', minwidth: 200, width: 250 },
        ];
        keyno = 'OPTCODE';
    } else if (show === "setmod") {
        datafields = [
            { name: 'OPTCODE', type: 'string' },
            { name: 'OPTNAME', type: 'string' },
        ];
        fields = [
            { text: 'รหัสอุปกรณ์', datafield: 'OPTCODE', minwidth: 100, width: 250 },
            { text: 'คำอธิบาย', datafield: 'OPTNAME', minwidth: 200, width: 250 },
        ];
        keyno = 'OPTCODE';
    } else if (show === "setfleet") {
        datafields = [
            { name: 'FLEETCOD', type: 'string' },
            { name: 'FLEETNAM', type: 'string' },
        ];
        fields = [
            { text: 'รหัส Fleet', datafield: 'FLEETCOD', minwidth: 100, width: 250 },
            { text: 'คำอธิบาย', datafield: 'FLEETNAM', minwidth: 200, width: 250 },
        ];
        keyno = 'FLEETCOD';
    } else if (show === "bookingstatus") {
        datafields = [
            { name: 'BOOKINGCODE', type: 'string' },
            { name: 'BOOKINGDESC', type: 'string' },
        ];
        fields = [
            { text: 'รหัสสถานะ', datafield: 'BOOKINGCODE', minwidth: 100, width: 250 },
            { text: 'คำอธิบาย', datafield: 'BOOKINGDESC', minwidth: 200, width: 250 },
        ];
        keyno = 'BOOKINGCODE';
    } else if (show === "typcont") {
        datafields = [
            { name: 'TYPCODE', type: 'string' },
            { name: 'TYPDESC', type: 'string' },
        ];
        fields = [
            { text: 'รหัสสถานะสัญญา', datafield: 'TYPCODE', minwidth: 100, width: 250 },
            { text: 'คำอธิบาย', datafield: 'TYPDESC', minwidth: 200, width: 250 },
        ];
        keyno = 'TYPCODE';
    } else if (show === "typhold") {
        datafields = [
            { name: 'HOLDCOD', type: 'string' },
            { name: 'HOLDESC', type: 'string' },
        ];
        fields = [
            { text: 'รหัสสาเหตุการยึด', datafield: 'HOLDCOD', minwidth: 100, width: 250 },
            { text: 'คำอธิบาย', datafield: 'HOLDESC', minwidth: 200, width: 250 },
        ];
        keyno = 'HOLDCOD';
    } else if (show === "typlost") {
        datafields = [
            { name: 'LOSTCOD', type: 'string' },
            { name: 'LOSTDESC', type: 'string' },
        ];
        fields = [
            { text: 'รหัสสาเหตุหนี้สูญ', datafield: 'LOSTCOD', minwidth: 100, width: 250 },
            { text: 'คำอธิบาย', datafield: 'LOSTDESC', minwidth: 200, width: 250 },
        ];
        keyno = 'LOSTCOD';
    } else if (show === "argroup") {
        datafields = [
            { name: 'ARGCOD', type: 'string' },
            { name: 'ARGDES', type: 'string' },
        ];
        fields = [
            { text: 'รหัสสาเหตุหนี้สูญ', datafield: 'ARGCOD', minwidth: 100, width: 250 },
            { text: 'คำอธิบาย', datafield: 'ARGDES', minwidth: 200, width: 250 },
        ];
        keyno = 'ARGCOD';
    } else if (show === "setgrade") {
        datafields = [
            { name: 'GRDCOD', type: 'string' },
            { name: 'GRDDES', type: 'string' },
        ];
        fields = [
            { text: 'รหัสกลุ่มอาชีพ', datafield: 'GRDCOD', minwidth: 100, width: 250 },
            { text: 'คำอธิบาย', datafield: 'GRDDES', minwidth: 200, width: 250 },
        ];
        keyno = 'GRDCOD';
    } else if (show === "setaump") {
        datafields = [
            { name: 'AUMPCOD', type: 'string' },
            { name: 'AUMPDES', type: 'string' },
        ];
        fields = [
            { text: 'รหัสอำเภอ', datafield: 'AUMPCOD', minwidth: 100, width: 250 },
            { text: 'คำอธิบาย', datafield: 'AUMPDES', minwidth: 200, width: 250 },
        ];
        keyno = 'AUMPCOD';
    } else if (show === "setprov") {
        datafields = [
            { name: 'PROVCOD', type: 'string' },
            { name: 'PROVDES', type: 'string' },
        ];
        fields = [
            { text: 'รหัสจังหวัด', datafield: 'PROVCOD', minwidth: 100, width: 250 },
            { text: 'คำอธิบาย', datafield: 'PROVDES', minwidth: 200, width: 250 },
        ];
        keyno = 'PROVCOD';
    } else if (show === "accmst") {
        datafields = [
            { name: 'ACCMSTCOD', type: 'string' },
            { name: 'ACCMSTNAM', type: 'string' },
        ];
        fields = [
            { text: 'รหัสบัญชี', datafield: 'ACCMSTCOD', minwidth: 100, width: 250 },
            { text: 'คำอธิบาย', datafield: 'ACCMSTNAM', minwidth: 200, width: 250 },
        ];
        keyno = 'ACCMSTCOD';
    } else if (show === "tsale") {
        datafields = [
            { name: 'TSALE', type: 'string' },
            { name: 'DESC', type: 'string' },
        ];
        fields = [
            { text: 'ประเภทการขาย', datafield: 'TSALE', minwidth: 100, width: 250 },
            { text: 'คำอธิบาย', datafield: 'DESC', minwidth: 200, width: 250 },
        ];
        keyno = 'TSALE';
    } else if (show === "setbank") {
        datafields = [
            { name: 'BANKCOD', type: 'string' },
            { name: 'BANKNAM', type: 'string' },
        ];
        fields = [
            { text: 'รหัสธนาคาร', datafield: 'BANKCOD', minwidth: 100, width: 250 },
            { text: 'คำอธิบาย', datafield: 'BANKNAM', minwidth: 200, width: 250 },
        ];
        keyno = 'BANKCOD';
    } else if (show === "bankbook") {
        datafields = [
            { name: 'BANKBOOKCOD', type: 'string' },
            { name: 'BOOKNO', type: 'string' },
            { name: 'BOOKNAM', type: 'string' },
        ];
        fields = [
            { text: 'รหัส', datafield: 'BANKBOOKCOD', minwidth: 100, width: 250 },
            { text: 'รหัสบัญชีธนาคาร', datafield: 'BOOKNO', minwidth: 200, width: 250 },
            { text: 'ชื่อบัญชี', datafield: 'BOOKNAM', minwidth: 200, width: 250 },
        ];
        keyno = 'BANKBOOKCOD';
    } else if (show === "banklocat") {
        datafields = [
            { name: 'BANKLOCCOD', type: 'string' },
            { name: 'BANKLOCNAM', type: 'string' },
        ];
        fields = [
            { text: 'รหัส', datafield: 'BANKLOCCOD', minwidth: 100, width: 250 },
            { text: 'คำอธิบาย', datafield: 'BANKLOCNAM', minwidth: 200, width: 250 },
        ];
        keyno = 'BANKLOCCOD';
    } else if (show === "bkbooktyp") {
        datafields = [
            { name: 'BOOKTYPCOD', type: 'string' },
            { name: 'BOOKTYPNAM', type: 'string' },
        ];
        fields = [
            { text: 'รหัส', datafield: 'BOOKTYPCOD', minwidth: 100, width: 250 },
            { text: 'คำอธิบาย', datafield: 'BOOKTYPNAM', minwidth: 200, width: 250 },
        ];
        keyno = 'BOOKTYPCOD';
    } else if (show === "rtchq") {
        datafields = [
            { name: 'RTCODE', type: 'string' },
            { name: 'RTNAME', type: 'string' },
        ];
        fields = [
            { text: 'รหัส', datafield: 'RTCODE', minwidth: 100, width: 250 },
            { text: 'คำอธิบาย', datafield: 'RTNAME', minwidth: 200, width: 250 },
        ];
        keyno = 'RTCODE';
    } else if (show === "paydue") {
        datafields = [
            { name: 'DUECODE', type: 'string' },
            { name: 'DUEDESC', type: 'string' },
        ];
        fields = [
            { text: 'รหัส', datafield: 'DUECODE', minwidth: 100, width: 250 },
            { text: 'คำอธิบาย', datafield: 'DUEDESC', minwidth: 200, width: 250 },
        ];
        keyno = 'DUECODE';
    } else if (show === "setacti") {
        datafields = [
            { name: 'ACTICODE', type: 'string' },
            { name: 'ACTIDESC', type: 'string' },
        ];
        fields = [
            { text: 'รหัส', datafield: 'ACTICODE', minwidth: 100, width: 250 },
            { text: 'คำอธิบาย', datafield: 'ACTIDESC', minwidth: 200, width: 250 },
        ];
        keyno = 'ACTICODE';
    } else if (show === "setreson") {
        datafields = [
            { name: 'RESONCD', type: 'string' },
            { name: 'RESNDES', type: 'string' },
        ];
        fields = [
            { text: 'รหัส', datafield: 'RESONCD', minwidth: 100, width: 250 },
            { text: 'คำอธิบาย', datafield: 'RESNDES', minwidth: 200, width: 250 },
        ];
        keyno = 'RESONCD';
    } else if (show === "modmast") {
        datafields = [
            { name: 'MODNO', type: 'string' },
            { name: 'MODELCOD', type: 'string' },
        ];
        fields = [
            { text: 'เลขที่ชุดแต่ง', datafield: 'MODNO', minwidth: 100, width: 250 },
            { text: 'รหัสรุ่น', datafield: 'MODELCOD', minwidth: 200, width: 250 },
        ];
        keyno = 'MODNO';
    } else if (show === "finmast") {
        datafields = [
            { name: 'FINCODE', type: 'string' },
            { name: 'FINNAME', type: 'string' },
            { name: 'ACC_CODE', type: 'string' },
            { name: 'ACC_CODE1', type: 'string' },
        ];
        fields = [
            { text: 'รหัสบริษัท', datafield: 'FINCODE', minwidth: 100, width: 100 },
            { text: 'ชื่อบริษัท', datafield: 'FINNAME', minwidth: 200, width: 250 },
            { text: 'รหัสบัญชี', datafield: 'ACC_CODE', minwidth: 200, width: 120 },
            { text: 'ค่าคอมไฟแนนซ์', datafield: 'ACC_CODE1', minwidth: 200, width: 120 },
        ];
        keyno = 'FINCODE';
    } else if (show === "accmst") {
        datafields = [
            { name: 'ACCMSTCOD', type: 'string' },
            { name: 'ACCMSTNAM', type: 'string' },
        ];
        fields = [
            { text: 'รหัสบัญชี', datafield: 'ACCMSTCOD', minwidth: 100, width: 250 },
            { text: 'ชื่อบัญชี', datafield: 'ACCMSTNAM', minwidth: 200, width: 250 },
        ];
        keyno = 'ACCMSTCOD';
    } else if (show === "garmast") {
        datafields = [
            { name: 'GARCODE', type: 'string' },
            { name: 'GARNAME', type: 'string' },
        ];
        fields = [
            { text: 'รหัสบริษัทประกัน', datafield: 'GARCODE', minwidth: 100, width: 250 },
            { text: 'ชื่อบริษัทประกัน', datafield: 'GARNAME', minwidth: 200, width: 250 },
        ];
        keyno = 'GARCODE';
    } else if (show === "apmast") {
        datafields = [
            { name: 'APCODE', type: 'string' },
            { name: 'APNAME', type: 'string' },
        ];
        fields = [
            { text: 'รหัสบริษัทเจ้าหนี้', datafield: 'APCODE', minwidth: 100, width: 250 },
            { text: 'ชื่อบริษัทเจ้าหนี้', datafield: 'APNAME', minwidth: 200, width: 250 },
        ];
        keyno = 'APCODE';
    } else if (show === "officer") {
        datafields = [
            { name: 'CODE', type: 'string' },
            { name: 'NAME', type: 'string' },
        ];
        fields = [
            { text: 'รหัสพนักงาน', datafield: 'CODE', minwidth: 100, width: 250 },
            { text: 'ชื่อ-นามสกุล', datafield: 'NAME', minwidth: 200, width: 250 },
        ];
        keyno = 'CODE';
    } else if (show === "channelsend") {
        datafields = [
            { name: 'CSCODE', type: 'string' },
            { name: 'CSDESC', type: 'string' },
            { name: 'CSSTAT', type: 'string' },
        ];
        fields = [
            { text: 'รหัสการนำส่งเอกสาร', datafield: 'CSCODE', minwidth: 100, width: 250 },
            { text: 'คำอธิบายรายการ', datafield: 'CSDESC', minwidth: 200, width: 250 },
            { text: 'เลือก', datafield: 'CSSTAT', minwidth: 100, width: 100 },
        ];
        keyno = 'CSCODE';
    } else if (show === "setfollowupcall") {
        datafields = [
            { name: 'FUCCODE', type: 'string' },
            { name: 'FUCDESC', type: 'string' },
        ];
        fields = [
            { text: 'รหัส', datafield: 'FUCCODE', minwidth: 100, width: 250 },
            { text: 'คำอธิบาย', datafield: 'FUCDESC', minwidth: 200, width: 250 },
        ];
        keyno = 'FUCCODE';
    } else if (show === "setcompaint") {
        datafields = [
            { name: 'COPCODE', type: 'string' },
            { name: 'COPDESC', type: 'string' },
        ];
        fields = [
            { text: 'รหัส', datafield: 'COPCODE', minwidth: 100, width: 250 },
            { text: 'คำอธิบาย', datafield: 'COPDESC', minwidth: 200, width: 250 },
        ];
        keyno = 'COPCODE';
    }

    fields.unshift({
        text: 'ลำดับ',
        sortable: false,
        filterable: false,
        editable: false,
        groupable: false,
        draggable: false,
        resizable: false,
        align: 'center',
        cellsalign: 'center',
        datafield: '',
        columntype: 'number',
        width: 40,
        exportable: false,
        cellsrenderer: function(row, column, value) {
            return "<div style='margin:4px;'>" + (value + 1) + "</div>";
        },
        aggregates: ['count'],
        aggregatesrenderer: function(aggregates) {
            var renderstring = "";
            $.each(aggregates, function(key, value) {
                renderstring += '<div style="position: relative; margin: 4px; overflow: hidden; font-weight: bold;">' + value + '</div>';
            });
            return renderstring;
        }
    });
    $("#tbSearch").jqxGrid({
        width: width - 40,
        height: height - 220,
        sortable: true,
        columnsresize: true,
        altrows: true,
        selectionmode: 'singlerow',
        source: gridDataAdapter,
        columns: fields
    });

    $('#okButton').jqxButton({ disabled: true });
    $('#tbSearch').jqxGrid('clearselection');
    $('#search').jqxWindow('open');

    //ฟังก์ชั่น คลิกปุ่มค้นหา และแสดงรายการที่ค้นหาพบ
    $("#searchButton").off().on("click", function(e) {
        $('#tbSearch').jqxGrid('showloadelement');
        var param1 = $('#searchInput').val().toUpperCase();

        //SQL Statement
        if (show === "invlocat") {
            sqltxt = "SELECT * FROM INVLOCAT WHERE UPPER(LOCATCD||LOCATNM) LIKE '%" + param1 + "%' ORDER BY LOCATCD";
        } else if (show === "setgroup") {
            sqltxt = "SELECT * FROM SETGROUP WHERE UPPER(GCODE||GDESC) LIKE '%" + param1 + "%' ORDER BY GCODE";
        } else if (show === "settype") {
            sqltxt = "SELECT * FROM SETTYPE WHERE UPPER(TYPECOD||TYPEDESC) LIKE '%" + param1 + "%' ORDER BY TYPECOD";
        } else if (show === "setmodel") {
            sqltxt = "SELECT * FROM SETMODEL WHERE UPPER(MODELCOD||MODELDESC) LIKE '%" + param1 + "%' ORDER BY MODELCOD";
        } else if (show === "setbaab") {
            sqltxt = "SELECT * FROM SETBAAB WHERE UPPER(BAABCOD||BAABDESC) LIKE '%" + param1 + "%' ORDER BY BAABCOD";
        } else if (show === "setcolor") {
            sqltxt = "SELECT * FROM SETCOLOR WHERE UPPER(COLORCOD||COLORDESC) LIKE '%" + param1 + "%' ORDER BY COLORCOD";
        } else if (show === "invparking") {
            sqltxt = "SELECT * FROM INVPARKING WHERE UPPER(LOCATPARK||LOCATPARKNM) LIKE '%" + param1 + "%' AND LOCATCD = '" + xlocat + "' ORDER BY LOCATPARK";
        } else if (show === "payfor") {
            sqltxt = "SELECT * FROM PAYFOR WHERE UPPER(FORCODE||FORDESC) LIKE '%" + param1 + "%' ORDER BY FORCODE";
        } else if (show === "paytyp") {
            sqltxt = "SELECT * FROM PAYTYP WHERE UPPER(PAYCODE||PAYDESC) LIKE '%" + param1 + "%' ORDER BY PAYCODE";
        } else if (show === "regflag") {
            sqltxt = "SELECT * FROM REGFLAG WHERE UPPER(REGCODE||REGDESC) LIKE '%" + param1 + "%' ORDER BY REGCODE";
        } else if (show === "unit") {
            sqltxt = "SELECT * FROM SETGROUP WHERE UPPER(GCODE||GDESC) LIKE '%" + param1 + "%' ORDER BY GCODE";
        } else if (show === "optmast") {
            sqltxt = "SELECT * FROM OPTMAST WHERE UPPER(OPTCODE||OPTNMTH) LIKE '%" + param1 + "%' ORDER BY OPTCODE";
        } else if (show === "optmastlocat") {
            sqltxt = "SELECT * FROM OPTMASTLOCAT A LEFT JOIN OPTMAST B ON(A.OPTCODE=B.OPTCODE) WHERE UPPER(A.OPTCODE||B.OPTNMTH) LIKE '%" + param1 + "%' ORDER BY A.OPTCODE";
        } else if (show === "setmod") {
            sqltxt = "SELECT * FROM SETMOD WHERE UPPER(OPTCODE||OPTNAME) LIKE '%" + param1 + "%' ORDER BY OPTCODE";
        } else if (show === "setfleet") {
            sqltxt = "SELECT * FROM SETFLEET WHERE UPPER(FLEETCOD||FLEETNAM) LIKE '%" + param1 + "%' ORDER BY FLEETCOD";
        } else if (show === "bookingstatus") {
            sqltxt = "SELECT * FROM BOOKING_STATUS WHERE UPPER(BOOKINGCODE||BOOKINGDESC) LIKE '%" + param1 + "%' ORDER BY BOOKINGCODE";
        } else if (show === "typcont") {
            sqltxt = "SELECT * FROM TYPCONT WHERE UPPER(TYPCODE||TYPDESC) LIKE '%" + param1 + "%' ORDER BY TYPDESC";
        } else if (show === "typhold") {
            sqltxt = "SELECT * FROM TYPHOLD WHERE UPPER(HOLDCOD||HOLDESC) LIKE '%" + param1 + "%' ORDER BY HOLDCOD";
        } else if (show === "typlost") {
            sqltxt = "SELECT * FROM TYPLOST WHERE UPPER(LOSTCOD||LOSTDESC) LIKE '%" + param1 + "%' ORDER BY LOSTCOD";
        } else if (show === "argroup") {
            sqltxt = "SELECT * FROM ARGROUP WHERE UPPER(ARGCOD||ARGDES) LIKE '%" + param1 + "%' ORDER BY ARGCOD";
        } else if (show === "setgrade") {
            sqltxt = "SELECT * FROM SETGRADE WHERE UPPER(GRDCOD||GRDDES) LIKE '%" + param1 + "%' ORDER BY GRDCOD";
        } else if (show === "setaump") {
            sqltxt = "SELECT * FROM SETAUMP WHERE UPPER(AUMPCOD||AUMPDES) LIKE '%" + param1 + "%' ORDER BY AUMPCOD";
        } else if (show === "setprov") {
            sqltxt = "SELECT * FROM SETPROV WHERE UPPER(PROVCOD||PROVDES) LIKE '%" + param1 + "%' ORDER BY PROVCOD";
        } else if (show === "accmst") {
            sqltxt = "SELECT * FROM ACCMST WHERE UPPER(ACCMSTCOD||ACCMSTNAM) LIKE '%" + param1 + "%' ORDER BY ACCMSTCOD";
        } else if (show === "tsale") {
            sqltxt = "SELECT * FROM TSALE WHERE UPPER(TSALE||DESC) LIKE '%" + param1 + "%' ORDER BY TSALE";
        } else if (show === "setbank") {
            sqltxt = "SELECT * FROM SETBANK WHERE UPPER(BANKCOD||BANKNAM) LIKE '%" + param1 + "%' ORDER BY BANKCOD";
        } else if (show === "bankbook") {
            sqltxt = "SELECT * FROM BANKBOOK WHERE UPPER(BANKBOOKCOD||BOOKNO) LIKE '%" + param1 + "%' ORDER BY BANKBOOKCOD";
        } else if (show === "banklocat") {
            sqltxt = "SELECT * FROM BANKLOCAT WHERE UPPER(BANKLOCCOD||BANKLOCNAM) LIKE '%" + param1 + "%' ORDER BY BANKLOCCOD";
        } else if (show === "bkbooktyp") {
            sqltxt = "SELECT * FROM BKBOOKTYPE WHERE UPPER(BOOKTYPCOD||BOOKTYPNAM) LIKE '%" + param1 + "%' ORDER BY BOOKTYPCOD";
        } else if (show === "rtchq") {
            sqltxt = "SELECT * FROM RTCHQ WHERE UPPER(RTCODE||RTNAME) LIKE '%" + param1 + "%' ORDER BY RTCODE";
        } else if (show === "paydue") {
            sqltxt = "SELECT * FROM PAYDUE WHERE UPPER(DUECODE||DUEDESC) LIKE '%" + param1 + "%' ORDER BY DUECODE";
        } else if (show === "setacti") {
            sqltxt = "SELECT * FROM SETACTI WHERE UPPER(ACTICODE||ACTIDESC) LIKE '%" + param1 + "%' ORDER BY ACTICODE";
        } else if (show === "setreson") {
            sqltxt = "SELECT * FROM SETRESON WHERE UPPER(RESONCD||RESNDES) LIKE '%" + param1 + "%' ORDER BY RESONCD";
        } else if (show === "modmast") {
            sqltxt = "SELECT IDNO, MODNO, MODDT, MODELCOD, BAABCOD, SUMQTY, FLAG, USERID, INPUTDT, SUMOPTPRC FROM MODMAST WHERE UPPER(MODNO||MODELCOD) LIKE '%" + param1 + "%' ORDER BY MODNO";
        } else if (show === "finmast") {
            sqltxt = "SELECT * FROM FINMAST WHERE UPPER(COALESCE(FINCODE,'')||COALESCE(FINNAME,'')||COALESCE(ACC_CODE,'')||COALESCE(ACC_CODE1,'')) LIKE '%" + param1 + "%' ORDER BY FINCODE";
        } else if (show === "accmst") {
            sqltxt = "SELECT * FROM ACCMST WHERE UPPER(COALESCE(ACCMSTCOD,'')||COALESCE(ACCMSTNAM,'')) LIKE '%" + param1 + "%' ORDER BY ACCMSTCOD";
        } else if (show === "garmast") {
            sqltxt = "SELECT * FROM GARMAST WHERE UPPER(COALESCE(GARCODE,'')||COALESCE(GARNAME,'')) LIKE '%" + param1 + "%' ORDER BY GARCODE";
        } else if (show === "apmast") {
            sqltxt = "SELECT APCODE, APNAME FROM APMAST WHERE UPPER(COALESCE(APCODE,'')||COALESCE(APNAME,'')) LIKE '%" + param1 + "%' ORDER BY APCODE";
        } else if (show === "officer") {
            sqltxt = "SELECT * FROM OFFICER WHERE UPPER(COALESCE(CODE,'')||COALESCE(NAME,'')) LIKE '%" + param1 + "%' ORDER BY CODE";
        } else if (show === "channelsend") {
            sqltxt = "SELECT CSCODE, CSDESC, CASE CSSTAT WHEN 'Y' THEN 'ส่ง' ELSE '' END AS CSSTAT FROM CHANNELSEND WHERE UPPER(COALESCE(CSCODE,'')||COALESCE(CSDESC,'')) LIKE '%" + param1 + "%' ORDER BY CSCODE";
        } else if (show === "setfollowupcall") {
            sqltxt = "SELECT * FROM SETFOLLOWUPCALL WHERE UPPER(COALESCE(FUCCODE,'')||COALESCE(FUCDESC,'')) LIKE '%" + param1 + "%' ORDER BY FUCCODE";
        } else if (show === "setcompaint") {
            sqltxt = "SELECT * FROM SETCOMPAINT WHERE UPPER(COALESCE(COPCODE,'')||COALESCE(COPDESC,'')) LIKE '%" + param1 + "%' ORDER BY COPCODE";
        }

        // Qurey Data
        $.ajax({
            url: "sqltext",
            data: { sql: sqltxt },
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                source.localdata = data;
                $('#tbSearch').jqxGrid('updatebounddata');
                $('#tbSearch').jqxGrid('autoresizecolumns');
                $('#tbSearch').jqxGrid('hideloadelement');
                $("#tbSearch").jqxGrid('focus');
                $("#tbSearch").jqxGrid('selectrow', 0);
            }
        });
    });

    // Get Value On Click Rows
    $('#tbSearch').on('rowclick', function(event) {
        var args = event.args;
        var rowindex = args.rowindex;
        var data = $('#tbSearch').jqxGrid('getcellvalue', rowindex, keyno);
        $('#okButton').jqxButton({ disabled: false });
        $("#returnvalue").val(data);
    });
    // Click OK
    $('#okButton').off('click').on('click', function() {
        var id = '#' + returnid;
        $(id).val($("#returnvalue").val());
        $(id).triggerHandler('blur');
        $('#search').jqxWindow('close');
    });
    $('#tbSearch').off('rowdoubleclick').on('rowdoubleclick', function(event) {
        event.preventDefault();
        $('#okButton').trigger("click");
    });
    $('#search').on('close', function(event) {
        $('#tbSearch').jqxGrid('clear');
        $("body").css("overflow", "");
    });
}