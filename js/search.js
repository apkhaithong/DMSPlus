﻿function searchAll(show, returnid) {
    $("body").css("overflow", "hidden");
    var width = $( window ).width();
    var height = $( window ).height();
    var sqltxt = "";
    var fields = [];
    var keyno = "";
    var data = [];
    var datafields = [];

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
    } else if (show === "payforano") {
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
    } else if (show === "invinvo") {
        datafields = [
            { name: 'RECVNO', type: 'string' },
            { name: 'INVNO', type: 'string' },
            { name: 'APCODE', type: 'string' },
            { name: 'APNAME', type: 'string' },
            { name: 'STRNO', type: 'string' },
            { name: 'ENGNO', type: 'string' },
        ];
        fields = [
            { text: 'เลขใบรับสินค้า', datafield: 'RECVNO', minwidth: 100, width: 250 },
            { text: 'เลขใบส่งสินค้า', datafield: 'INVNO', minwidth: 100, width: 250 },
            { text: 'รหัสเจ้าหนี้', datafield: 'APCODE', minwidth: 100, width: 250 },
            { text: 'ชื่อเจ้าหนี้', datafield: 'APNAME', minwidth: 250, width: 250 },
            { text: 'เลขตัวถัง', datafield: 'STRNO', minwidth: 250, width: 250 },
            { text: 'เลขเครื่องยนต์', datafield: 'ENGNO', minwidth: 250, width: 250 },
        ];
        keyno = 'RECVNO';
    } else if (show === "custmast") {
        datafields = [
            { name: 'CUSCOD', type: 'string' },
            { name: 'NAME1', type: 'string' },
            { name: 'NAME2', type: 'string' },
            { name: 'NOCARD', type: 'string' },
            { name: 'GRADE', type: 'string' },
        ];
        fields = [
            { text: 'รหัสลูกค้า', datafield: 'CUSCOD', minwidth: 100, width: 250 },
            { text: 'ชื่อ', datafield: 'NAME1', minwidth: 250, width: 250 },
            { text: 'นามสกุล', datafield: 'NAME2', minwidth: 250, width: 250 },
            { text: 'เลขที่บัตร', datafield: 'NOCARD', minwidth: 250, width: 250 },
            { text: 'เกรด', datafield: 'GRADE', minwidth: 100, width: 250 },
        ];
        keyno = 'CUSCOD';
    } else if (show === "custanother") {
        datafields = [
            { name: 'CUSCOD', type: 'string' },
            { name: 'SNAM', type: 'string' },
            { name: 'NAME1', type: 'string' },
            { name: 'NAME2', type: 'string' },
        ];
        fields = [
            { text: 'รหัสลูกค้า', datafield: 'CUSCOD', minwidth: 100, width: 100 },
            { text: 'คำนำหน้า', datafield: 'SNAM', minwidth: 100, width: 80 },
            { text: 'ชื่อ', datafield: 'NAME1', minwidth: 100, width: 100 },
            { text: 'นามสกุล', datafield: 'NAME2', minwidth: 100, width: 100 },
        ];
        keyno = 'CUSCOD';
    } else if (show === "arresvSale") {
        datafields = [
            { name: 'RESVNO', type: 'string' },
            { name: 'NAME1', type: 'string' },
            { name: 'NAME2', type: 'string' },
            { name: 'STRNO', type: 'string' },
        ];
        fields = [
            { text: 'เลขที่ใบจอง', datafield: 'RESVNO', minwidth: 100, width: 250 },
            { text: 'ชื่อ', datafield: 'NAME1', minwidth: 250, width: 250 },
            { text: 'นามสกุล', datafield: 'NAME2', minwidth: 250, width: 250 },
            { text: 'เลขตัวถัง', datafield: 'STRNO', minwidth: 250, width: 250 },
        ];
        keyno = 'RESVNO';
    } else if (show === "strnoSale") {
        datafields = [
            { name: 'STRNO', type: 'string' },
            { name: 'ENGNO', type: 'string' },
            { name: 'REGNO', type: 'string' },
            { name: 'TYPECOD', type: 'string' },
            { name: 'MODELCOD', type: 'string' },
            { name: 'BAABCOD', type: 'string' },
            { name: 'COLORCOD', type: 'string' },
        ];
        fields = [
            { text: 'เลขตัวถัง', datafield: 'STRNO', minwidth: 200, width: 250 },
            { text: 'เลขเครื่องยนต์', datafield: 'ENGNO', minwidth: 150, width: 250 },
            { text: 'เลขทะเบียน', datafield: 'REGNO', minwidth: 100, width: 250 },
            { text: 'ยี่ห้อ', datafield: 'TYPECOD', minwidth: 100, width: 250 },
            { text: 'รุ่น', datafield: 'MODELCOD', minwidth: 100, width: 250 },
            { text: 'แบบ', datafield: 'BAABCOD', minwidth: 100, width: 250 },
            { text: 'สี', datafield: 'COLORCOD', minwidth: 100, width: 250 },
        ];
        keyno = 'STRNO';
    } else if (show === "arcred") {
        datafields = [
            { name: 'CONTNO', type: 'string' },
            { name: 'RESVNO', type: 'string' },
            { name: 'NAME1', type: 'string' },
            { name: 'NAME2', type: 'string' },
            { name: 'STRNO', type: 'string' },
            { name: 'REGNO', type: 'string' },
            { name: 'FLAG', type: 'string' },
        ];
        fields = [
            { text: 'เลขสัญญา', datafield: 'CONTNO', minwidth: 100, width: 100 },
            { text: 'เลขที่ใบจอง', datafield: 'RESVNO', minwidth: 100, width: 100 },
            { text: 'ชื่อ', datafield: 'NAME1', minwidth: 100, width: 100 },
            { text: 'นามสกุล', datafield: 'NAME2', minwidth: 100, width: 100 },
            { text: 'เลขตัวถัง', datafield: 'STRNO', minwidth: 100, width: 200 },
            { text: 'เลขทะเบียน', datafield: 'REGNO', minwidth: 100, width: 100 },
            { text: 'สถานะ', datafield: 'FLAG', minwidth: 100, width: 100 },
        ];
        keyno = 'CONTNO';
    } else if (show === "arfinc") {
        datafields = [
            { name: 'CONTNO', type: 'string' },
            { name: 'RESVNO', type: 'string' },
            { name: 'FINNAME', type: 'string' },
            { name: 'NAME1', type: 'string' },
            { name: 'NAME2', type: 'string' },
            { name: 'STRNO', type: 'string' },
            { name: 'REGNO', type: 'string' },
            { name: 'FLAG', type: 'string' },
        ];
        fields = [
            { text: 'เลขสัญญา', datafield: 'CONTNO', minwidth: 100, width: 100 },
            { text: 'เลขที่ใบจอง', datafield: 'RESVNO', minwidth: 100, width: 100 },
            { text: 'บริษัทไฟแนนซ์', datafield: 'FINNAME', minwidth: 100, width: 200 },
            { text: 'ชื่อ', datafield: 'NAME1', minwidth: 100, width: 100 },
            { text: 'นามสกุล', datafield: 'NAME2', minwidth: 100, width: 100 },
            { text: 'เลขตัวถัง', datafield: 'STRNO', minwidth: 100, width: 200 },
            { text: 'เลขทะเบียน', datafield: 'REGNO', minwidth: 100, width: 100 },
            { text: 'สถานะ', datafield: 'FLAG', minwidth: 100, width: 100 },
        ];
        keyno = 'CONTNO';
    } else if (show === "netarinvoi") {
        datafields = [
            { name: 'CONTNO', type: 'string' },
            { name: 'NAME1', type: 'string' },
            { name: 'NAME2', type: 'string' },
            { name: 'NETAR', type: 'float' },
        ];
        fields = [
            { text: 'เลขสัญญา', datafield: 'CONTNO', minwidth: 100, width: 100 },
            { text: 'ชื่อ', datafield: 'NAME1', minwidth: 100, width: 100 },
            { text: 'นามสกุล', datafield: 'NAME2', minwidth: 100, width: 100 },
            { text: 'ยอดลูกหนี้คงเหลือ', datafield: 'NETAR', minwidth: 100, width: 120,cellsalign: 'right', cellsformat: 'd2' },
        ];
        keyno = 'CONTNO';
    } else if (show === "netarcred") {
        datafields = [
            { name: 'CONTNO', type: 'string' },
            { name: 'NAME1', type: 'string' },
            { name: 'NAME2', type: 'string' },
            { name: 'STRNO', type: 'string' },
            { name: 'NETAR', type: 'float' },
        ];
        fields = [
            { text: 'เลขสัญญา', datafield: 'CONTNO', minwidth: 100, width: 100 },
            { text: 'ชื่อ', datafield: 'NAME1', minwidth: 100, width: 100 },
            { text: 'นามสกุล', datafield: 'NAME2', minwidth: 100, width: 100 },
            { text: 'เลขตัวถัง', datafield: 'STRNO', minwidth: 100, width: 200 },
            { text: 'ยอดลูกหนี้คงเหลือ', datafield: 'NETAR', minwidth: 100, width: 120,cellsalign: 'right', cellsformat: 'd2' },
        ];
        keyno = 'CONTNO';
    } else if (show === "netarfinc") {
        datafields = [
            { name: 'CONTNO', type: 'string' },
            { name: 'NAME1', type: 'string' },
            { name: 'NAME2', type: 'string' },
            { name: 'STRNO', type: 'string' },
            { name: 'NETAR', type: 'float' },
        ];
        fields = [
            { text: 'เลขสัญญา', datafield: 'CONTNO', minwidth: 100, width: 100 },
            { text: 'ชื่อ', datafield: 'NAME1', minwidth: 100, width: 100 },
            { text: 'นามสกุล', datafield: 'NAME2', minwidth: 100, width: 100 },
            { text: 'เลขตัวถัง', datafield: 'STRNO', minwidth: 100, width: 200 },
            { text: 'ยอดลูกหนี้คงเหลือ', datafield: 'NETAR', minwidth: 100, width: 120,cellsalign: 'right', cellsformat: 'd2' },
        ];
        keyno = 'CONTNO';
    } else if (show === "netarresv") {
        datafields = [
            { name: 'RESVNO', type: 'string' },
            { name: 'NAME1', type: 'string' },
            { name: 'NAME2', type: 'string' },
            { name: 'STRNO', type: 'string' },
            { name: 'NETAR', type: 'float' },
        ];
        fields = [
            { text: 'เลขที่ใบจอง', datafield: 'RESVNO', minwidth: 100, width: 100 },
            { text: 'ชื่อ', datafield: 'NAME1', minwidth: 100, width: 100 },
            { text: 'นามสกุล', datafield: 'NAME2', minwidth: 100, width: 100 },
            { text: 'เลขตัวถัง', datafield: 'STRNO', minwidth: 100, width: 200 },
            { text: 'ยอดลูกหนี้คงเหลือ', datafield: 'NETAR', minwidth: 100, width: 120,cellsalign: 'right', cellsformat: 'd2' },
        ];
        keyno = 'RESVNO';
    } else if (show === "netarothsale") {
        datafields = [
            { name: 'RESVNO', type: 'string' },
            { name: 'NAME1', type: 'string' },
            { name: 'NAME2', type: 'string' },
            { name: 'STRNO', type: 'string' },
            { name: 'NETAR', type: 'float' },
        ];
        fields = [
            { text: 'เลขที่สัญญา', datafield: 'ARCONT', minwidth: 100, width: 100 },
            { text: 'ชื่อ', datafield: 'NAME1', minwidth: 100, width: 100 },
            { text: 'นามสกุล', datafield: 'NAME2', minwidth: 100, width: 100 },
            { text: 'ค้างชำระค่า', datafield: 'FORDESC', minwidth: 100, width: 250 },
            { text: 'ยอดลูกหนี้คงเหลือ', datafield: 'NETAR', minwidth: 100, width: 120,cellsalign: 'right', cellsformat: 'd2' },
        ];
        keyno = 'ARCONT';
    } else if (show === "chqmas") {
        datafields = [
            { name: 'TMBILL', type: 'string' },
            { name: 'BILLNO', type: 'string' },
            { name: 'CONTNO', type: 'string' },
            { name: 'NAME1', type: 'string' },
            { name: 'NAME2', type: 'string' },
            { name: 'PAYFOR', type: 'string' },
            { name: 'FORDESC', type: 'string' },
            { name: 'TPAYAMT', type: 'float' },
            { name: 'FLAG', type: 'string' },
        ];
        fields = [
            { text: 'เลขที่ใบรับเงิน', datafield: 'TMBILL', minwidth: 100, width: 100 },
            { text: 'เลขที่ใบเสร็จ', datafield: 'BILLNO', minwidth: 100, width: 100 },
            { text: 'เลขที่สัญญา', datafield: 'CONTNO', minwidth: 100, width: 100 },
            { text: 'ชื่อ', datafield: 'NAME1', minwidth: 100, width: 100 },
            { text: 'นามสกุล', datafield: 'NAME2', minwidth: 100, width: 100 },
            { text: 'รหัสการชำระ', datafield: 'PAYFOR', minwidth: 80, width: 100 },
            { text: 'ชำระค่า', datafield: 'FORDESC', minwidth: 100, width: 250 },
            { text: 'จำนวนเงิน', datafield: 'TPAYAMT', minwidth: 100, width: 120,cellsalign: 'right', cellsformat: 'd2' },
            { text: 'สถานะ', datafield: 'FLAG', minwidth: 100, width: 100 },
        ];
        keyno = 'TMBILL';
    } else if (show === "optinvoi") {
        datafields = [
            { name: 'RECVNO', type: 'string' },
            { name: 'INVNO', type: 'string' },
            { name: 'APCODE', type: 'string' },
            { name: 'APNAME', type: 'string' },
            { name: 'LOCAT', type: 'string' },
        ];
        fields = [
            { text: 'เลขใบรับสินค้า', datafield: 'RECVNO', minwidth: 100, width: 250 },
            { text: 'เลขใบส่งสินค้า', datafield: 'INVNO', minwidth: 100, width: 250 },
            { text: 'รหัสเจ้าหนี้', datafield: 'APCODE', minwidth: 100, width: 250 },
            { text: 'ชื่อเจ้าหนี้', datafield: 'APNAME', minwidth: 250, width: 250 },
            { text: 'สาขา', datafield: 'LOCAT', minwidth: 100, width: 250 },
        ];
        keyno = 'RECVNO';
    } else if (show === "mcmast") {
        datafields = [
            { name: 'LOCAT', type: 'string' },
            { name: 'MCNO', type: 'string' },
            { name: 'MCDT', type: 'date', format: 'dd/MM/yyyy' },
            { name: 'STRNO', type: 'string' },
            { name: 'SUMQTY', type: 'float' },
        ];
        fields = [
            { text: 'สาขา', datafield: 'LOCAT', minwidth: 100, width: 100 },
            { text: 'เลขที่เบิก', datafield: 'MCNO', minwidth: 100, width: 100 },
            { text: 'วันที่เบิก', datafield: 'MCDT', columntype: 'date', cellsformat: 'dd/MM/yyyy', minwidth: 100, width: 100 },
            { text: 'เลขตัวถัง', datafield: 'STRNO', minwidth: 200, width: 250 },
            { text: 'จำนวนเบิก', datafield: 'SUMQTY', minwidth: 100, width: 100 },
        ];
        keyno = 'MCNO';
    } else if (show === "strnoAll") {
        datafields = [
            { name: 'STRNO', type: 'string' },
            { name: 'ENGNO', type: 'string' },
            { name: 'REGNO', type: 'string' },
            { name: 'TYPECOD', type: 'string' },
            { name: 'MODELCOD', type: 'string' },
            { name: 'BAABCOD', type: 'string' },
            { name: 'COLORCOD', type: 'string' },
        ];
        fields = [
            { text: 'เลขตัวถัง', datafield: 'STRNO', minwidth: 200, width: 250 },
            { text: 'เลขเครื่องยนต์', datafield: 'ENGNO', minwidth: 150, width: 250 },
            { text: 'เลขทะเบียน', datafield: 'REGNO', minwidth: 100, width: 250 },
            { text: 'ยี่ห้อ', datafield: 'TYPECOD', minwidth: 100, width: 250 },
            { text: 'รุ่น', datafield: 'MODELCOD', minwidth: 100, width: 250 },
            { text: 'แบบ', datafield: 'BAABCOD', minwidth: 100, width: 250 },
            { text: 'สี', datafield: 'COLORCOD', minwidth: 100, width: 250 },
        ];
        keyno = 'STRNO';
    } else if (show === "adjstk") {
        datafields = [
            { name: 'ADJNO', type: 'string' },
            { name: 'STRNO', type: 'string' },
            { name: 'ENGNO', type: 'string' },
            { name: 'REGNO', type: 'string' },
        ];
        fields = [
            { text: 'เลขที่ปรับปรุง', datafield: 'ADJNO', minwidth: 200, width: 250 },
            { text: 'เลขตัวถัง', datafield: 'STRNO', minwidth: 200, width: 250 },
            { text: 'เลขเครื่องยนต์', datafield: 'ENGNO', minwidth: 150, width: 250 },
            { text: 'เลขทะเบียน', datafield: 'REGNO', minwidth: 100, width: 250 },
        ];
        keyno = 'ADJNO';
    } else if (show === "invmovm") {
        datafields = [
            { name: 'MOVENO', type: 'string' },
            { name: 'MOVEDT', type: 'string' },
            { name: 'MOVEFM', type: 'string' },
            { name: 'MOVETO', type: 'string' },
            { name: 'STRNO', type: 'string' },
            { name: 'ENGNO', type: 'string' },
            { name: 'REGNO', type: 'string' },
        ];
        fields = [
            { text: 'เลขที่โอนย้าย', datafield: 'MOVENO', minwidth: 100, width: 100 },
            { text: 'เลขที่โอนย้าย', datafield: 'MOVEDT', minwidth: 100, width: 100 },
            { text: 'โอนจากสาขา', datafield: 'MOVEFM', minwidth: 100, width: 100 },
            { text: 'ไปยังสาขา', datafield: 'MOVETO', minwidth: 100, width: 100 },
            { text: 'เลขตัวถัง', datafield: 'STRNO', minwidth: 200, width: 250 },
            { text: 'เลขเครื่องยนต์', datafield: 'ENGNO', minwidth: 150, width: 250 },
            { text: 'เลขทะเบียน', datafield: 'REGNO', minwidth: 100, width: 250 },
        ];
        keyno = 'MOVENO';
    } else if (show === "comp_asset") {
        datafields = [
            { name: 'CONTNO', type: 'string' },
            { name: 'NAME1', type: 'string' },
            { name: 'NAME2', type: 'string' },
            { name: 'STRNO', type: 'string' },
            { name: 'REGNO', type: 'string' },
            { name: 'FLAG', type: 'string' },
        ];
        fields = [
            { text: 'เลขสัญญา', datafield: 'CONTNO', minwidth: 100, width: 100 },
            { text: 'ชื่อ', datafield: 'NAME1', minwidth: 100, width: 100 },
            { text: 'นามสกุล', datafield: 'NAME2', minwidth: 100, width: 100 },
            { text: 'เลขตัวถัง', datafield: 'STRNO', minwidth: 100, width: 200 },
            { text: 'เลขทะเบียน', datafield: 'REGNO', minwidth: 100, width: 100 },
            { text: 'สถานะ', datafield: 'FLAG', minwidth: 100, width: 100 },
        ];
        keyno = 'CONTNO';
    } else if (show === "locatparking") {
        datafields = [
            { name: 'REFNOIN', type: 'string' },
            { name: 'STRNO', type: 'string' },
            { name: 'ENGNO', type: 'string' },
            { name: 'REGNO', type: 'string' },
            { name: 'LOCAT', type: 'string' },
            { name: 'LOCATPARK', type: 'string' },
        ];
        fields = [
            { text: 'เลขที่บันทึก', datafield: 'REFNOIN', minwidth: 200, width: 100 },
            { text: 'เลขตัวถัง', datafield: 'STRNO', minwidth: 200, width: 250 },
            { text: 'เลขเครื่องยนต์', datafield: 'ENGNO', minwidth: 150, width: 250 },
            { text: 'เลขทะเบียน', datafield: 'REGNO', minwidth: 100, width: 100 },
            { text: 'สาขา', datafield: 'LOCAT', minwidth: 100, width: 100 },
            { text: 'สถานที่จอด', datafield: 'LOCATPARK', minwidth: 100, width: 100 },
        ];
        keyno = 'REFNOIN';
    } else if (show === "chqstat") {
        datafields = [
            { name: 'CHQNO', type: 'string' },
            { name: 'RVCHQNO', type: 'string' },
            { name: 'NAME1', type: 'string' },
            { name: 'NAME2', type: 'string' },
        ];
        fields = [
            { text: 'เลขที่เช็ค', datafield: 'CHQNO', minwidth: 200, width: 100 },
            { text: 'เลขตัที่ใบรับเช็ค', datafield: 'RVCHQNO', minwidth: 200, width: 100 },
            { text: 'ชื่อ', datafield: 'NAME1', minwidth: 100, width: 100 },
            { text: 'นามสกุล', datafield: 'NAME2', minwidth: 100, width: 100 },
        ];
        keyno = 'RVCHQNO';
    } else if (show === "bookno") {
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
        keyno = 'BOOKNO';
    } else if (show === "paymenttranfer") {
        datafields = [
            { name: 'LOCAT', type: 'string' },
            { name: 'CHQNO', type: 'string' },
            { name: 'CHQDT', type: 'date' },
            { name: 'BOOKCODE', type: 'string' },
            { name: 'CHQAMT', type: 'float' },
            { name: 'OFFCHQ', type: 'string' },
            { name: 'FLAG', type: 'string' },
        ];
        fields = [
            { text: 'สาขา', datafield: 'LOCAT', minwidth: 100, width: 100 },
            { text: 'เลขที่บันทึก', datafield: 'CHQNO', minwidth: 100, width: 100 },
            { text: 'วันที่บันทึก', datafield: 'CHQDT', minwidth: 100, width: 100, cellsalign: 'left', columntype: 'datetimeinput', cellsformat: 'dd/MM/yyyy' },
            { text: 'เลขที่บัญชีธนาคาร', datafield: 'BOOKCODE', minwidth: 100, width: 200 },
            { text: 'ยอดเงินโอน', datafield: 'CHQAMT', minwidth: 100, width: 100, cellsalign: 'right', cellsformat: 'd2' },
            { text: 'ผู้บันทึก', datafield: 'OFFCHQ', minwidth: 100, width: 100 },
            { text: 'สถานะ', datafield: 'FLAG', minwidth: 100, width: 100 },
        ];
        keyno = 'CHQNO';
    } else if (show === "chqanother") {
        datafields = [
            { name: 'TMBILL', type: 'string' },
            { name: 'NAME1', type: 'string' },
            { name: 'NAME2', type: 'string' },
            { name: 'FORCODE', type: 'string' },
            { name: 'FORDESC', type: 'string' },
            { name: 'PAYAMT', type: 'float' },
            { name: 'FLAG', type: 'string' },
        ];
        fields = [
            { text: 'เลขที่ใบเสร็จ', datafield: 'TMBILL', minwidth: 100, width: 100 },
            { text: 'ชื่อ', datafield: 'NAME1', minwidth: 100, width: 100 },
            { text: 'นามสกุล', datafield: 'NAME2', minwidth: 100, width: 100 },
            { text: 'รหัสชำระ', datafield: 'FORCODE', minwidth: 100, width: 100 },
            { text: 'ชำระค่า', datafield: 'FORDESC', minwidth: 100, width: 100 },
            { text: 'ยอดชำระ', datafield: 'PAYAMT', minwidth: 100, width: 100, cellsalign: 'right', cellsformat: 'd2' },
            { text: 'สถานะ', datafield: 'FLAG', minwidth: 100, width: 100 },
        ];
        keyno = 'TMBILL';
    } else if (show === "division") {
        datafields = [
            { name: 'DIVICOD', type: 'string' },
            { name: 'DIVINAM', type: 'string' },
        ];
        fields = [
            { text: 'รหัสแผนก', datafield: 'DIVICOD', minwidth: 100, width: 250 },
            { text: 'คำอธิบาย', datafield: 'DIVINAM', minwidth: 200, width: 250 },
        ];
        keyno = 'DIVICOD';
    } else if (show === "acard") {
        datafields = [
            { name: 'ACARDNO', type: 'string' },
            { name: 'ACARDDT', type: 'date' },
            { name: 'SALCOD', type: 'string' },
            { name: 'NAME1', type: 'string' },
            { name: 'NAME2', type: 'string' },
            { name: 'FLAG', type: 'string' },
        ];
        fields = [
            { text: 'เลขที่ A-Card', datafield: 'ACARDNO', minwidth: 100, width: 100 },
            { text: 'วันที่', datafield: 'ACARDDT', minwidth: 100, width: 100, cellsalign: 'left', columntype: 'datetimeinput', cellsformat: 'dd/MM/yyyy' },
            { text: 'พนักงานขาย', datafield: 'SALCOD', minwidth: 100, width: 100 },
            { text: 'ชื่อลูกค้า', datafield: 'NAME1', minwidth: 100, width: 250 },
            { text: 'นามสกุลลูกค้า', datafield: 'NAME2', minwidth: 100, width: 250 },
            { text: 'สถานะ', datafield: 'FLAG', minwidth: 100, width: 100 },
        ];
        keyno = 'ACARDNO';
    } else if (show === "resvnoformatch") {
        datafields = [
            { name: 'RESVNO', type: 'string' },
            { name: 'RESVDT', type: 'date' },
            { name: 'NAME1', type: 'string' },
            { name: 'NAME2', type: 'string' },
        ];
        fields = [
            { text: 'เลขที่ใบจอง', datafield: 'RESVNO', minwidth: 100, width: 100 },
            { text: 'วันที่จอง', datafield: 'RESVDT', minwidth: 100, width: 100, cellsalign: 'left', columntype: 'datetimeinput', cellsformat: 'dd/MM/yyyy' },
            { text: 'ชื่อลูกค้า', datafield: 'NAME1', minwidth: 100, width: 250 },
            { text: 'นามสกุลลูกค้า', datafield: 'NAME2', minwidth: 100, width: 250 },
        ];
        keyno = 'RESVNO';
    } else if (show === "matching") {
        datafields = [
            { name: 'IDNO', type: 'integer' },
            { name: 'STRNO', type: 'string' },
            { name: 'RESVNO', type: 'string' },
            { name: 'ACARDNO', type: 'string' },
            { name: 'NAME1', type: 'string' },
            { name: 'NAME2', type: 'string' },
            { name: 'FLAG', type: 'string' },
        ];
        fields = [
            { text: 'IDNO', datafield: 'IDNO', minwidth: 100, width: 100, hidden: true },
            { text: 'เลขตัวถัง', datafield: 'STRNO', minwidth: 100, width: 100 },
            { text: 'เลขที่ใบจอง', datafield: 'RESVNO', minwidth: 100, width: 100 },
            { text: 'เลขที่ A-Card', datafield: 'ACARDNO', minwidth: 100, width: 100 },
            { text: 'ชื่อลูกค้า', datafield: 'NAME1', minwidth: 100, width: 250 },
            { text: 'นามสกุลลูกค้า', datafield: 'NAME2', minwidth: 100, width: 250 },
            { text: 'สถานะ', datafield: 'FLAG', minwidth: 100, width: 100 },
        ];
        keyno = 'IDNO';
    } else if (show === "arinvoi") {
        datafields = [
            { name: 'CONTNO', type: 'string' },
            { name: 'STRNO', type: 'string' },
            { name: 'NAME1', type: 'string' },
            { name: 'NAME2', type: 'string' },
            { name: 'FLAG', type: 'string' },
        ];
        fields = [
            { text: 'เลขที่สัญญา', datafield: 'CONTNO', minwidth: 100, width: 100 },
            { text: 'เลขตัวถัง', datafield: 'STRNO', minwidth: 100, width: 100 },
            { text: 'ชื่อลูกค้า', datafield: 'NAME1', minwidth: 100, width: 250 },
            { text: 'นามสกุลลูกค้า', datafield: 'NAME2', minwidth: 100, width: 250 },
            { text: 'สถานะ', datafield: 'FLAG', minwidth: 100, width: 100 },
        ];
        keyno = 'CONTNO';
    } else if (show === "passwrd") {
        datafields = [
            { name: 'USERID', type: 'string' },
            { name: 'NAME', type: 'string' },
            { name: 'SURNAME', type: 'string' },
        ];
        fields = [
            { text: 'Userid', datafield: 'USERID', minwidth: 100, width: 100 },
            { text: 'ชื่อ', datafield: 'NAME', minwidth: 100, width: 250 },
            { text: 'นามสกุล', datafield: 'SURNAME', minwidth: 100, width: 250 },
        ];
        keyno = 'USERID';
    } else if (show === "arresv") {
        datafields = [
            { name: 'RESVNO', type: 'string' },
            { name: 'CUSTNAME', type: 'string' },
            { name: 'STRNO', type: 'string' },
            { name: 'ACARDNO', type: 'string' },
        ];
        fields = [
            { text: 'เลขที่ใบจอง', datafield: 'RESVNO', minwidth: 100, width: 250 },
            { text: 'ชื่อผู้จอง', datafield: 'CUSTNAME', minwidth: 150, width: 250 },
            { text: 'เลขตัวถัง', datafield: 'STRNO', minwidth: 150, width: 250 },
            { text: 'เลขที่ A-card', datafield: 'ACARDNO', minwidth: 100, width: 250 },
        ];
        keyno = 'RESVNO';
    } else if (show === "locsale") {
        datafields = [
            { name: 'LOCATCD', type: 'string' },
            { name: 'LOCATNM', type: 'string' },
        ];
        fields = [
            { text: 'รหัสสาขา', datafield: 'LOCATCD', minwidth: 100, width: 250 },
            { text: 'ชื่อสาขา', datafield: 'LOCATNM', minwidth: 200, width: 250 },
        ];
        keyno = 'LOCATCD';
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
    
    var source = {
        localdata: data,
        datatype: 'json',
        datafields: datafields
    };
    var gridDataAdapter = new $.jqx.dataAdapter(source);
    $("#tbSearch").jqxGrid({
        width: '100%',
        height: '92%',
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
            sqltxt = "SELECT * FROM INVPARKING WHERE UPPER(LOCATPARK||LOCATPARKNM) LIKE '%" + param1 + "%' AND LOCATCD LIKE '"+$.session.get('paramSrch1')+"%' ORDER BY LOCATPARK";
        } else if (show === "payfor") {
            sqltxt = "SELECT * FROM PAYFOR WHERE UPPER(FORCODE||FORDESC) LIKE '%" + param1 + "%' ORDER BY FORCODE";
        } else if (show === "payforano") {
            sqltxt = "SELECT * FROM PAYFORANO WHERE UPPER(FORCODE||FORDESC) LIKE '%" + param1 + "%' ORDER BY FORCODE";
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
            sqltxt = "SELECT CODE, COALESCE(NAME,'')||'   '||COALESCE(SURNAME,'') AS NAME FROM OFFICER WHERE UPPER(COALESCE(CODE,'')||COALESCE(NAME,'')||COALESCE(SURNAME,'')) LIKE '%" + param1 + "%' ORDER BY CODE";
        } else if (show === "channelsend") {
            sqltxt = "SELECT CSCODE, CSDESC, CASE CSSTAT WHEN 'Y' THEN 'ส่ง' ELSE '' END AS CSSTAT FROM CHANNELSEND WHERE UPPER(COALESCE(CSCODE,'')||COALESCE(CSDESC,'')) LIKE '%" + param1 + "%' ORDER BY CSCODE";
        } else if (show === "setfollowupcall") {
            sqltxt = "SELECT * FROM SETFOLLOWUPCALL WHERE UPPER(COALESCE(FUCCODE,'')||COALESCE(FUCDESC,'')) LIKE '%" + param1 + "%' ORDER BY FUCCODE";
        } else if (show === "setcompaint") {
            sqltxt = "SELECT * FROM SETCOMPAINT WHERE UPPER(COALESCE(COPCODE,'')||COALESCE(COPDESC,'')) LIKE '%" + param1 + "%' ORDER BY COPCODE";
        } else if (show === "invinvo") {
            sqltxt = "SELECT A.RECVNO, A.INVNO, A.APCODE, C.APNAME, B.STRNO, B.ENGNO FROM INVINVO A, INVTRAN B, APMAST C WHERE A.RECVNO = B.RECVNO AND A.APCODE = C.APCODE AND UPPER(COALESCE(A.RECVNO,'')||COALESCE(A.INVNO,'')||COALESCE(A.APCODE,'')||COALESCE(C.APNAME,'')||COALESCE(B.STRNO,'')||COALESCE(B.ENGNO,'')) LIKE '%" + param1 + "%' ORDER BY A.RECVNO";
        } else if (show === "custmast") {
            sqltxt = "SELECT CUSCOD, SNAM, NAME1, NAME2, NOCARD, GRADE FROM CUSTMAST WHERE UPPER(COALESCE(CUSCOD,'')||COALESCE(NAME1,'')||COALESCE(NAME2,'')||COALESCE(NOCARD,'')||COALESCE(GRADE,'')) LIKE '%" + param1 + "%' ORDER BY NAME1,NAME2";
        } else if (show === "custanother") {
            sqltxt = "SELECT CUSCOD, SNAM, NAME1, NAME2 FROM CUSTANOTHER WHERE UPPER(COALESCE(CUSCOD,'')||COALESCE(SNAM,'')||COALESCE(NAME1,'')||COALESCE(NAME2,'')) LIKE '%" + param1 + "%' ORDER BY CUSCOD";
        } else if (show === "arresvSale") {
            sqltxt = "SELECT A.RESPAY,A.SMPAY,A.FLAG,A.IDNO,A.RESVNO,A.RESVDT,B.CUSCOD,B.NAME1,B.NAME2,A.SDATE,A.LOCAT,A.STRNO,A.CHQMAS FROM ARRESV A,CUSTMAST B WHERE A.CUSCOD=B.CUSCOD AND UPPER(COALESCE(A.RESVNO,'')||COALESCE(B.NAME1,'')||COALESCE(B.NAME2,'')||COALESCE(A.STRNO,'')) LIKE '%" + param1 + "%' AND A.CANFLAG <> 'C' AND A.SMPAY<=A.RESPAY AND A.STRNO <> '' AND A.SDATE IS NULL ORDER BY A.RESVNO ";
        } else if (show === "strnoSale") {
            sqltxt = "SELECT A.IDNO,B.STRNO,A.ENGNO,A.REGNO,A.TYPECOD,A.MODELCOD,A.BAABCOD,A.COLORCOD,B.CURSTAT,B.REFDTIN,B.IDNO AS IDNO1, B.TADDCOST,B.CRCOST,B.DISCT,B.NETCOST,B.CRVAT,B.TOTCOST,B.STDPRC,B.REFNOIN FROM INVTRAN A,STKCARD B WHERE A.STRNO = B.STRNO AND B.FLAG = 'D' AND B.LOCAT LIKE '"+$.session.get('paramSrch1')+"%' AND UPPER(COALESCE(B.STRNO,'')||COALESCE(A.ENGNO,'')||COALESCE(A.REGNO,'')||COALESCE(A.TYPECOD,'')||COALESCE(A.MODELCOD,'')||COALESCE(A.BAABCOD,'')||COALESCE(A.COLORCOD,'')) LIKE '%" + param1 + "%' ORDER BY B.STRNO";
        } else if (show === "arcred") {
            sqltxt = "SELECT A.CONTNO, A.RESVNO, B.NAME1, B.NAME2, A.STRNO, C.REGNO, (CASE WHEN A.FLAG = 'C' THEN 'ยกเลิก' ELSE ' ' END) AS FLAG FROM ARCRED A, CUSTMAST B, INVTRAN C WHERE A.CUSCOD = B.CUSCOD AND A.STRNO = C.STRNO AND UPPER(COALESCE(A.CONTNO,'')||COALESCE(A.RESVNO,'')||COALESCE(B.NAME1,'')||COALESCE(B.NAME2,'')||COALESCE(A.STRNO,'')||COALESCE(C.REGNO,'')) LIKE '%" + param1 + "%' ORDER BY A.CONTNO";
        } else if (show === "arfinc") {
            sqltxt = "SELECT A.CONTNO, A.RESVNO, A.FINCOD, D.FINNAME, B.NAME1, B.NAME2, A.STRNO, C.REGNO, (CASE WHEN A.FLAG = 'C' THEN 'ยกเลิก' ELSE ' ' END) AS FLAG FROM ARFINC A, CUSTMAST B, INVTRAN C, FINMAST D WHERE A.CUSCOD = B.CUSCOD AND A.STRNO = C.STRNO AND A.FINCOD = D.FINCODE AND UPPER(COALESCE(A.CONTNO,'')||COALESCE(A.RESVNO,'')||COALESCE(B.NAME1,'')||COALESCE(B.NAME2,'')||COALESCE(A.STRNO,'')||COALESCE(C.REGNO,'')||COALESCE(D.FINNAME,'')) LIKE '%" + param1 + "%' ORDER BY A.CONTNO";
        } else if (show === "netarinvoi") {
            sqltxt = "SELECT A.IDNO,A.TSALE,A.CONTNO,A.CUSCOD,B.NAME1,B.NAME2,A.LOCAT,A.SDATE,A.KEYINPRC,A.SMPAY,A.KEYINPRC-A.SMPAY AS NETAR, A.VATRT FROM AR_INVOI A,CUSTMAST B WHERE A.CUSCOD=B.CUSCOD AND A.FLAG<>'C' AND A.KEYINPRC > A.SMPAY AND UPPER(COALESCE(A.CONTNO,'')||COALESCE(B.NAME1,'')||COALESCE(B.NAME2,'')) LIKE '%" + param1 + "%' ORDER BY A.CONTNO";
        } else if (show === "netarcred") {
            sqltxt = "SELECT A.IDNO,A.TSALE,A.CONTNO,A.CUSCOD,B.NAME1,B.NAME2, A.LOCAT,A.STRNO,A.SDATE,A.KEYINPRC,A.SMPAY,A.KEYINPRC-A.SMPAY AS NETAR, A.DUEDT FROM ARCRED A,CUSTMAST B, INVTRAN I WHERE A.CUSCOD=B.CUSCOD  AND A.STRNO=I.STRNO AND A.FLAG<>'C' AND A.KEYINPRC > A.SMPAY AND UPPER(COALESCE(A.CONTNO,'')||COALESCE(B.NAME1,'')||COALESCE(B.NAME2,'')||COALESCE(A.STRNO,'')) LIKE '%" + param1 + "%' ORDER BY A.CONTNO";
        } else if (show === "netarfinc") {
            sqltxt = "SELECT A.IDNO,A.TSALE,A.CONTNO,A.CUSCOD,B.NAME1,B.NAME2, A.LOCAT,A.STRNO,A.SDATE,A.KEYINPRC,A.SMPAY,A.KEYINPRC-A.SMPAY AS NETAR FROM ARFINC A,CUSTMAST B, INVTRAN I WHERE A.CUSCOD=B.CUSCOD  AND A.STRNO=I.STRNO AND A.FLAG<>'C' AND A.KEYINPRC > A.SMPAY AND UPPER(COALESCE(A.CONTNO,'')||COALESCE(B.NAME1,'')||COALESCE(B.NAME2,'')||COALESCE(A.STRNO,'')) LIKE '%" + param1 + "%' ORDER BY A.CONTNO";
        } else if (show === "netarresv") {
            sqltxt = "SELECT A.IDNO,A.RESVNO,A.CUSCOD,A.LOCAT,B.NAME1,B.NAME2,A.RESVDT,A.RESPAY,A.SMPAY,A.RESPAY-A.SMPAY AS NETAR, B.CUSCOD, I.STRNO FROM ARRESV A LEFT JOIN INVTRAN I ON A.STRNO=I.STRNO, CUSTMAST B WHERE A.CUSCOD=B.CUSCOD  AND A.SDATE IS NULL AND A.CANFLAG<>'C' AND UPPER(COALESCE(A.RESVNO,'')||COALESCE(B.NAME1,'')||COALESCE(B.NAME2,'')||COALESCE(A.STRNO,'')) LIKE '%" + param1 + "%' ORDER BY A.RESVNO";
        } else if (show === "netarothsale") {
            sqltxt = "SELECT A.IDNO,A.ARCONT,A.LOCAT,B.CUSCOD,B.NAME1,B.NAME2,A.PAYFOR,A.ARDATE, A.PAYAMT,A.TSALE,A.SMPAY,A.CUSCOD,A.CONTID, C.FORDESC,A.PAYAMT-A.SMPAY AS NETAR FROM AROTHSALE A,CUSTMAST B, PAYFOR C WHERE A.CUSCOD=B.CUSCOD AND A.PAYAMT>A.SMPAY AND A.PAYFOR = C.FORCODE AND UPPER(COALESCE(A.ARCONT,'')||COALESCE(B.NAME1,'')||COALESCE(B.NAME2,'')||COALESCE(A.PAYFOR,'')) LIKE '%" + param1 + "%' ORDER BY A.ARCONT";
        } else if (show === "chqmas") {
            sqltxt = "SELECT A.IDNO,A.TMBILL,A.BILLNO,A.TMBILDT,A.CUSCOD,B.NAME1,B.NAME2, A.LOCATRECV,C.NETPAY AS TPAYAMT,A.CHQNO,C.CONTNO,C.PAYFOR, D.FORDESC, (CASE WHEN A.FLAG = 'C' THEN 'ยกเลิก' ELSE ' ' END) AS FLAG FROM CHQMAS A,CHQTRAN C,CUSTMAST B, PAYFOR D WHERE A.IDNO=C.CHQMASID AND A.CUSCOD=B.CUSCOD AND C.PAYFOR = D.FORCODE AND UPPER(COALESCE(A.TMBILL,'')||COALESCE(A.BILLNO,'')||COALESCE(B.NAME1,'')||COALESCE(B.NAME2,'')||COALESCE(C.PAYFOR,'')||COALESCE(D.FORDESC,'')) LIKE '%" + param1 + "%' ORDER BY A.TMBILDT DESC,A.TMBILL";
        } else if (show === "optinvoi") {
            sqltxt = "SELECT A.RECVNO, A.INVNO, A.APCODE, C.APNAME, B.LOCAT FROM OPTINVOI A, OPTINVTRAN B, APMAST C WHERE A.RECVNO = B.RECVNO AND A.APCODE = C.APCODE AND UPPER(COALESCE(A.RECVNO,'')||COALESCE(A.INVNO,'')||COALESCE(A.APCODE,'')||COALESCE(C.APNAME,'')||COALESCE(B.LOCAT,'')) LIKE '%" + param1 + "%' ORDER BY A.RECVNO";
        } else if (show === "mcmast") {
            sqltxt = "SELECT IDNO, MCNO, MCDT, LOCAT, REFNO, STRNO, SUMQTY, FLAG, USERID, INPUTDT, SUMOPTPRC FROM MCMAST WHERE UPPER(COALESCE(MCNO,'')||COALESCE(STRNO,'')) LIKE '%" + param1 + "%' ORDER BY MCNO";
        } else if (show === "strnoAll") {
            sqltxt = "SELECT A.IDNO,A.STRNO,A.ENGNO,A.REGNO,A.TYPECOD,A.MODELCOD,A.BAABCOD,A.COLORCOD FROM INVTRAN A WHERE UPPER(COALESCE(A.STRNO,'')||COALESCE(A.ENGNO,'')||COALESCE(A.REGNO,'')||COALESCE(A.TYPECOD,'')||COALESCE(A.MODELCOD,'')||COALESCE(A.BAABCOD,'')||COALESCE(A.COLORCOD,'')) LIKE '%" + param1 + "%' ORDER BY A.STRNO";
        } else if (show === "adjstk") {
            sqltxt = "SELECT A.IDNO, A.LOCAT, A.ADJNO, A.ADJDT, A.STRNO, A.TADDCOST, A.CRCOST, A.DISCT, A.NETCOST, A.CRVAT, A.TOTCOST, A.STDPRC, A.USERID, A.INPUTDT, A.LOCATPARK, A.POSTGL, A.APCODE, A.VATRT, A.STAT, B.ENGNO, B.REGNO FROM ADJSTK A, INVTRAN B WHERE A.STRNO = B.STRNO AND UPPER(COALESCE(A.ADJNO,'')||COALESCE(A.STRNO,'')||COALESCE(B.ENGNO,'')||COALESCE(B.REGNO,'')) LIKE '%" + param1 + "%' ORDER BY A.ADJNO";
        } else if (show === "invmovm") {
            sqltxt = "SELECT A.IDNO, A.MOVENO, A.STRNO, A.MOVEDT, A.MOVEFM, A.MOVETO, A.TADDCOST, A.CRCOST, A.DISCT, A.NETCOST, A.CRVAT, A.TOTCOST, A.STDPRC, A.FLAGDEL, A.REFNO, A.STAT, A.LOCATPARK, B.GCODE, B.TYPECOD, B.MODELCOD, B.BAABCOD, B.COLORCOD, B.CC, B.ENGNO, B.REGNO FROM INVMOVT A, INVTRAN B WHERE A.STRNO = B.STRNO AND UPPER(COALESCE(A.MOVENO,'')||COALESCE(A.STRNO,'')||COALESCE(A.MOVEFM,'')||COALESCE(A.MOVETO,'')||COALESCE(B.ENGNO,'')||COALESCE(B.REGNO,'')) LIKE '%" + param1 + "%' ORDER BY A.MOVENO";
        } else if (show === "comp_asset") {
            sqltxt = "SELECT A.CONTNO, B.NAME1, B.NAME2, A.STRNO, C.REGNO, (CASE WHEN A.FLAG = 'C' THEN 'ยกเลิก' ELSE ' ' END) AS FLAG FROM COMP_ASSET A, CUSTMAST B, INVTRAN C WHERE A.CUSCOD = B.CUSCOD AND A.STRNO = C.STRNO AND UPPER(COALESCE(A.CONTNO,'')||COALESCE(B.NAME1,'')||COALESCE(B.NAME2,'')||COALESCE(A.STRNO,'')||COALESCE(C.REGNO,'')) LIKE '%" + param1 + "%' ORDER BY A.CONTNO";
        } else if (show === "locatparking") {
            sqltxt = "SELECT A.LOCAT, A.LOCATPARK, A.STRNO, A.REFNO, A.OFFCOD, A.REFNOIN, A.REFDTIN, B.ENGNO, B.REGNO FROM LOCATPARKING A, INVTRAN B WHERE A.STRNO = B.STRNO AND UPPER(COALESCE(A.REFNOIN,'')||COALESCE(A.STRNO,'')||COALESCE(B.ENGNO,'')||COALESCE(B.REGNO,'')||COALESCE(A.LOCAT,'')||COALESCE(A.LOCATPARK,'')) LIKE '%" + param1 + "%' ORDER BY A.REFNOIN";
        } else if (show === "locatparking") {
            sqltxt = "SELECT A.LOCAT, A.LOCATPARK, A.STRNO, A.REFNO, A.OFFCOD, A.REFNOIN, A.REFDTIN, B.ENGNO, B.REGNO FROM LOCATPARKING A, INVTRAN B WHERE A.STRNO = B.STRNO AND UPPER(COALESCE(A.REFNOIN,'')||COALESCE(A.STRNO,'')||COALESCE(B.ENGNO,'')||COALESCE(B.REGNO,'')||COALESCE(A.LOCAT,'')||COALESCE(A.LOCATPARK,'')) LIKE '%" + param1 + "%' ORDER BY A.REFNOIN";
        } else if (show === "chqstat") {
            sqltxt = "SELECT A.RVCHQNO, A.CHQNO, A.CHQDT, B.NAME1, B.NAME2 FROM CHQSTAT A, CUSTMAST B WHERE A.CUSCOD = B.CUSCOD AND UPPER(COALESCE(A.RVCHQNO,'')||COALESCE(A.CHQNO,'')||COALESCE(B.NAME1,'')||COALESCE(B.NAME2,'')) LIKE '%" + param1 + "%' ORDER BY A.CHQDT DESC,A.CHQNO";
        } else if (show === "bookno") {
            sqltxt = "SELECT * FROM BANKBOOK WHERE UPPER(BANKBOOKCOD||BOOKNO) LIKE '%" + param1 + "%' ORDER BY BANKBOOKCOD";
        } else if (show === "paymenttranfer") {
            sqltxt = "SELECT IDNO, LOCAT, CHQNO, CHQDT, BOOKCODE, CHQAMT, CHQPAY, OFFCHQ, (CASE WHEN FLAG = 'C' THEN 'ยกเลิก' ELSE ' ' END) AS FLAG, ACC_CODE, USERID, INPUTDT, CANDT, CANUSERID, POSTGL FROM PAYMENTTRANFER WHERE UPPER(COALESCE(LOCAT,'')||COALESCE(CHQNO,'')||COALESCE(BOOKCODE,'')) LIKE '%" + param1 + "%' ORDER BY CHQDT DESC,CHQNO";
        } else if (show === "chqanother") {
            sqltxt = "SELECT A.TMBILL, B.NAME1, B.NAME2, A.FORCODE, C.FORDESC, A.PAYAMT, (CASE WHEN A.FLAG = 'C' THEN 'ยกเลิก' ELSE ' ' END) AS FLAG FROM CHQANOTHER A, CUSTANOTHER B, PAYFORANO C WHERE A.CUSCOD = B.CUSCOD AND A.FORCODE = C.FORCODE AND UPPER(COALESCE(A.TMBILL,'')||COALESCE(B.NAME1,'')||COALESCE(B.NAME2,'')||COALESCE(A.FORCODE,'')||COALESCE(C.FORDESC,'')) LIKE '%" + param1 + "%' ORDER BY A.TMBILL";
        } else if (show === "division") {
            sqltxt = "SELECT * FROM DIVISION WHERE UPPER(COALESCE(DIVICOD,'')||COALESCE(DIVINAM,'')) LIKE '%" + param1 + "%' ORDER BY DIVICOD";
        } else if (show === "acard") {
            sqltxt = "SELECT A.ACARDNO, A.ACARDDT, A.SALCOD, A.CUSCOD, B.NAME1, B.NAME2, (CASE WHEN A.FLAG = 'C' THEN 'ยกเลิก' ELSE ' ' END) AS FLAG FROM ACARD A, CUSTMAST B WHERE A.CUSCOD = B.CUSCOD AND UPPER(COALESCE(A.ACARDNO,'')||COALESCE(A.SALCOD,'')||COALESCE(B.NAME1,'')||COALESCE(B.NAME2,'')) LIKE '%" + param1 + "%' ORDER BY A.ACARDNO";
        } else if (show === "resvnoformatch") {
            sqltxt = "SELECT A.RESPAY,A.SMPAY,A.FLAG,A.IDNO,A.RESVNO,A.RESVDT,B.CUSCOD,B.NAME1,B.NAME2,A.SDATE,A.LOCAT,A.STRNO,A.REFUND FROM ARRESV A,CUSTMAST B WHERE UPPER(COALESCE(A.RESVNO,'')||COALESCE(B.NAME1,'')||COALESCE(B.NAME2,'')) LIKE '%" + param1 + "%' AND A.CUSCOD=B.CUSCOD AND (A.STRNO = '' OR A.STRNO IS NULL) ORDER BY A.RESVNO";
        } else if (show === "matching") {
            sqltxt = "SELECT A.IDNO, A.LOCAT, A.STRNO, A.RESVNO, A.MATCHDT, B.ACARDNO, C.NAME1, C.NAME2, (CASE WHEN A.FLAG = 'C' THEN 'ยกเลิก' ELSE ' ' END) AS FLAG FROM MATCHSTRNO A, ARRESV B LEFT JOIN CUSTMAST C ON B.CUSCOD = C.CUSCOD WHERE A.RESVNO = B.RESVNO AND UPPER(COALESCE(A.RESVNO,'')||COALESCE(A.STRNO,'')||COALESCE(B.ACARDNO,'')||COALESCE(C.NAME1,'')||COALESCE(C.NAME2,'')) LIKE '%" + param1 + "%' ORDER BY A.RESVNO ";
        } else if (show === "arinvoi") {
            sqltxt = "SELECT A.IDNO,A.LOCAT,A.CONTNO,A.CUSCOD,C.NAME1,C.NAME2,I.STRNO, (CASE WHEN A.FLAG = 'C' THEN 'ยกเลิก' ELSE ' ' END) AS FLAG FROM AR_INVOI A,CUSTMAST C,AR_TRANS I WHERE A.IDNO = I.CONTID AND A.CUSCOD=C.CUSCOD AND UPPER(COALESCE(A.CONTNO,'')||COALESCE(I.STRNO,'')||COALESCE(C.NAME1,'')||COALESCE(C.NAME2,'')) LIKE '%" + param1 + "%' ORDER BY A.CONTNO, I.STRNO ";
        } else if (show === "passwrd") {
            sqltxt = "SELECT A.USERID, B.NAME, B.SURNAME FROM PASSWRD A, OFFICER B WHERE A.CUSCOD = B.CODE AND UPPER(COALESCE(A.USERID,'')||COALESCE(B.NAME,'')||COALESCE(B.SURNAME,'')) LIKE '%" + param1 + "%' ORDER BY A.USERID, B.NAME ";
        } else if (show === "arresv") {
            sqltxt = "SELECT A.RESVNO,A.ACARDNO,A.RESVDT,A.STRNO,A.SALCOD,B.NAME||' '||B.SURNAME AS SALNAME,A.CUSCOD,TRIM(C.SNAM)||TRIM(C.NAME1)||' '||TRIM(C.NAME2) AS CUSTNAME FROM ARRESV A LEFT JOIN OFFICER B ON(A.SALCOD=B.CODE) LEFT JOIN CUSTMAST C ON(A.CUSCOD=C.CUSCOD) WHERE UPPER(COALESCE(A.RESVNO,'')||COALESCE(A.ACARDNO,'')||COALESCE(A.STRNO,'')||COALESCE(A.CUSCOD,'')||COALESCE(C.NAME1,'')||COALESCE(C.NAME2,'')) LIKE '%" + param1 + "%' ORDER BY A.RESVNO";
        } else if (show === "locsale") {
            sqltxt = "SELECT * FROM INVLOCAT WHERE UPPER(LOCATCD||LOCATNM) LIKE '%" + param1 + "%' ORDER BY LOCATCD";
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
        $.session.set('paramSrch1', '');
        $.session.set('paramSrch2', '');
        $("body").css("overflow", "");
    });
}