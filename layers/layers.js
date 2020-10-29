var wms_layers = [];


        var lyr_Satellite_0 = new ol.layer.Tile({
            'title': 'Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Beremend_Kontur_1 = new ol.format.GeoJSON();
var features_Beremend_Kontur_1 = format_Beremend_Kontur_1.readFeatures(json_Beremend_Kontur_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Beremend_Kontur_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Beremend_Kontur_1.addFeatures(features_Beremend_Kontur_1);
var lyr_Beremend_Kontur_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Beremend_Kontur_1, 
                style: style_Beremend_Kontur_1,
                interactive: false,
                title: '<img src="styles/legend/Beremend_Kontur_1.png" /> Beremend_Kontur'
            });
var format_Beremend_All_Sentinel_2 = new ol.format.GeoJSON();
var features_Beremend_All_Sentinel_2 = format_Beremend_All_Sentinel_2.readFeatures(json_Beremend_All_Sentinel_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Beremend_All_Sentinel_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Beremend_All_Sentinel_2.addFeatures(features_Beremend_All_Sentinel_2);
var lyr_Beremend_All_Sentinel_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Beremend_All_Sentinel_2, 
                style: style_Beremend_All_Sentinel_2,
                interactive: true,
    title: 'Beremend_All_Sentinel<br />\
    <img src="styles/legend/Beremend_All_Sentinel_2_0.png" /> 25.26 - 25.26<br />\
    <img src="styles/legend/Beremend_All_Sentinel_2_1.png" /> 25.26 - 40.25<br />\
    <img src="styles/legend/Beremend_All_Sentinel_2_2.png" /> 40.25 - 47.58<br />\
    <img src="styles/legend/Beremend_All_Sentinel_2_3.png" /> 47.58 - 52.63<br />\
    <img src="styles/legend/Beremend_All_Sentinel_2_4.png" /> 52.63 - 59.42<br />\
    <img src="styles/legend/Beremend_All_Sentinel_2_5.png" /> 59.42 - 62.91<br />\
    <img src="styles/legend/Beremend_All_Sentinel_2_6.png" /> 62.91 - 66.99<br />\
    <img src="styles/legend/Beremend_All_Sentinel_2_7.png" /> 66.99 - 70.86<br />\
    <img src="styles/legend/Beremend_All_Sentinel_2_8.png" /> 70.86 - 75.95<br />\
    <img src="styles/legend/Beremend_All_Sentinel_2_9.png" /> 75.95 - 80.49<br />\
    <img src="styles/legend/Beremend_All_Sentinel_2_10.png" /> 80.49 - 85.94<br />\
    <img src="styles/legend/Beremend_All_Sentinel_2_11.png" /> 85.94 - 90.66<br />\
    <img src="styles/legend/Beremend_All_Sentinel_2_12.png" /> 90.66 - 94.21<br />\
    <img src="styles/legend/Beremend_All_Sentinel_2_13.png" /> 94.21 - 97.34<br />\
    <img src="styles/legend/Beremend_All_Sentinel_2_14.png" /> 97.34 - 99.53<br />\
    <img src="styles/legend/Beremend_All_Sentinel_2_15.png" /> 99.53 - 101.05<br />\
    <img src="styles/legend/Beremend_All_Sentinel_2_16.png" /> 101.05 - 102.19<br />\
    <img src="styles/legend/Beremend_All_Sentinel_2_17.png" /> 102.19 - 103.12<br />\
    <img src="styles/legend/Beremend_All_Sentinel_2_18.png" /> 103.12 - 103.9<br />\
    <img src="styles/legend/Beremend_All_Sentinel_2_19.png" /> 103.9 - 105.58<br />'
        });
var format_Beremend_Kisparcella_csak_az_atfedes_3 = new ol.format.GeoJSON();
var features_Beremend_Kisparcella_csak_az_atfedes_3 = format_Beremend_Kisparcella_csak_az_atfedes_3.readFeatures(json_Beremend_Kisparcella_csak_az_atfedes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Beremend_Kisparcella_csak_az_atfedes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Beremend_Kisparcella_csak_az_atfedes_3.addFeatures(features_Beremend_Kisparcella_csak_az_atfedes_3);
var lyr_Beremend_Kisparcella_csak_az_atfedes_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Beremend_Kisparcella_csak_az_atfedes_3, 
                style: style_Beremend_Kisparcella_csak_az_atfedes_3,
                interactive: false,
                title: '<img src="styles/legend/Beremend_Kisparcella_csak_az_atfedes_3.png" /> Beremend_Kisparcella_csak_az_atfedes'
            });
var format_Beremend_Kisparcella_4 = new ol.format.GeoJSON();
var features_Beremend_Kisparcella_4 = format_Beremend_Kisparcella_4.readFeatures(json_Beremend_Kisparcella_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Beremend_Kisparcella_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Beremend_Kisparcella_4.addFeatures(features_Beremend_Kisparcella_4);
var lyr_Beremend_Kisparcella_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Beremend_Kisparcella_4, 
                style: style_Beremend_Kisparcella_4,
                interactive: false,
                title: '<img src="styles/legend/Beremend_Kisparcella_4.png" /> Beremend_Kisparcella'
            });
var format_Beremend_CenterPivot_tagok_buffer_5 = new ol.format.GeoJSON();
var features_Beremend_CenterPivot_tagok_buffer_5 = format_Beremend_CenterPivot_tagok_buffer_5.readFeatures(json_Beremend_CenterPivot_tagok_buffer_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Beremend_CenterPivot_tagok_buffer_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Beremend_CenterPivot_tagok_buffer_5.addFeatures(features_Beremend_CenterPivot_tagok_buffer_5);
var lyr_Beremend_CenterPivot_tagok_buffer_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Beremend_CenterPivot_tagok_buffer_5, 
                style: style_Beremend_CenterPivot_tagok_buffer_5,
                interactive: false,
                title: '<img src="styles/legend/Beremend_CenterPivot_tagok_buffer_5.png" /> Beremend_Center Pivot_tagok_buffer'
            });
var format_Beremend_CenterPivot_tagok_6 = new ol.format.GeoJSON();
var features_Beremend_CenterPivot_tagok_6 = format_Beremend_CenterPivot_tagok_6.readFeatures(json_Beremend_CenterPivot_tagok_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Beremend_CenterPivot_tagok_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Beremend_CenterPivot_tagok_6.addFeatures(features_Beremend_CenterPivot_tagok_6);
var lyr_Beremend_CenterPivot_tagok_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Beremend_CenterPivot_tagok_6, 
                style: style_Beremend_CenterPivot_tagok_6,
                interactive: false,
                title: '<img src="styles/legend/Beremend_CenterPivot_tagok_6.png" /> Beremend_Center Pivot_tagok'
            });
var format_Beremend_ABegyenes_7 = new ol.format.GeoJSON();
var features_Beremend_ABegyenes_7 = format_Beremend_ABegyenes_7.readFeatures(json_Beremend_ABegyenes_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Beremend_ABegyenes_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Beremend_ABegyenes_7.addFeatures(features_Beremend_ABegyenes_7);
var lyr_Beremend_ABegyenes_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Beremend_ABegyenes_7, 
                style: style_Beremend_ABegyenes_7,
                interactive: false,
                title: '<img src="styles/legend/Beremend_ABegyenes_7.png" /> Beremend_AB egyenes'
            });
var format_Beremend_CenterPivot_labak_8 = new ol.format.GeoJSON();
var features_Beremend_CenterPivot_labak_8 = format_Beremend_CenterPivot_labak_8.readFeatures(json_Beremend_CenterPivot_labak_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Beremend_CenterPivot_labak_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Beremend_CenterPivot_labak_8.addFeatures(features_Beremend_CenterPivot_labak_8);
var lyr_Beremend_CenterPivot_labak_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Beremend_CenterPivot_labak_8, 
                style: style_Beremend_CenterPivot_labak_8,
                interactive: false,
                title: '<img src="styles/legend/Beremend_CenterPivot_labak_8.png" /> Beremend_Center Pivot_labak'
            });

lyr_Satellite_0.setVisible(true);lyr_Beremend_Kontur_1.setVisible(true);lyr_Beremend_All_Sentinel_2.setVisible(true);lyr_Beremend_Kisparcella_csak_az_atfedes_3.setVisible(true);lyr_Beremend_Kisparcella_4.setVisible(true);lyr_Beremend_CenterPivot_tagok_buffer_5.setVisible(true);lyr_Beremend_CenterPivot_tagok_6.setVisible(true);lyr_Beremend_ABegyenes_7.setVisible(true);lyr_Beremend_CenterPivot_labak_8.setVisible(true);
var layersList = [lyr_Satellite_0,lyr_Beremend_Kontur_1,lyr_Beremend_All_Sentinel_2,lyr_Beremend_Kisparcella_csak_az_atfedes_3,lyr_Beremend_Kisparcella_4,lyr_Beremend_CenterPivot_tagok_buffer_5,lyr_Beremend_CenterPivot_tagok_6,lyr_Beremend_ABegyenes_7,lyr_Beremend_CenterPivot_labak_8];
lyr_Beremend_Kontur_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'AREA_GEO': 'AREA_GEO', 'Mintasz_5h': 'Mintasz_5h', 'Mintasz_3h': 'Mintasz_3h', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_Beremend_All_Sentinel_2.set('fieldAliases', {'grid_code': 'grid_code', });
lyr_Beremend_Kisparcella_csak_az_atfedes_3.set('fieldAliases', {'FID_1': 'FID_1', 'LABEL_POS': 'LABEL_POS', 'AREA': 'AREA', 'NAME': 'NAME', 'Avg_BUFF_D': 'Avg_BUFF_D', });
lyr_Beremend_Kisparcella_4.set('fieldAliases', {'LABEL_POS': 'LABEL_POS', 'AREA': 'AREA', 'NAME': 'NAME', });
lyr_Beremend_CenterPivot_tagok_buffer_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'TAGOK': 'TAGOK', 'BUFF_DIST': 'BUFF_DIST', 'ORIG_FID': 'ORIG_FID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Beremend_CenterPivot_tagok_6.set('fieldAliases', {'Id': 'Id', 'TAGOK': 'TAGOK', });
lyr_Beremend_ABegyenes_7.set('fieldAliases', {'Id': 'Id', });
lyr_Beremend_CenterPivot_labak_8.set('fieldAliases', {'ID': 'ID', 'Y': 'Y', 'X': 'X', 'Z': 'Z', });
lyr_Beremend_Kontur_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'TextEdit', 'Base': 'TextEdit', 'Clamped': 'TextEdit', 'Extruded': 'TextEdit', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', 'AREA_GEO': 'TextEdit', 'Mintasz_5h': 'TextEdit', 'Mintasz_3h': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_Beremend_All_Sentinel_2.set('fieldImages', {'grid_code': 'TextEdit', });
lyr_Beremend_Kisparcella_csak_az_atfedes_3.set('fieldImages', {'FID_1': 'Range', 'LABEL_POS': 'TextEdit', 'AREA': 'TextEdit', 'NAME': 'TextEdit', 'Avg_BUFF_D': 'TextEdit', });
lyr_Beremend_Kisparcella_4.set('fieldImages', {'LABEL_POS': 'TextEdit', 'AREA': 'TextEdit', 'NAME': 'TextEdit', });
lyr_Beremend_CenterPivot_tagok_buffer_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'TAGOK': 'TextEdit', 'BUFF_DIST': 'TextEdit', 'ORIG_FID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Beremend_CenterPivot_tagok_6.set('fieldImages', {'Id': 'Range', 'TAGOK': 'TextEdit', });
lyr_Beremend_ABegyenes_7.set('fieldImages', {'Id': 'Range', });
lyr_Beremend_CenterPivot_labak_8.set('fieldImages', {'ID': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'Z': 'TextEdit', });
lyr_Beremend_Kontur_1.set('fieldLabels', {'OBJECTID': 'no label', 'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', 'AREA_GEO': 'no label', 'Mintasz_5h': 'no label', 'Mintasz_3h': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', });
lyr_Beremend_All_Sentinel_2.set('fieldLabels', {'grid_code': 'no label', });
lyr_Beremend_Kisparcella_csak_az_atfedes_3.set('fieldLabels', {'FID_1': 'no label', 'LABEL_POS': 'no label', 'AREA': 'no label', 'NAME': 'no label', 'Avg_BUFF_D': 'no label', });
lyr_Beremend_Kisparcella_4.set('fieldLabels', {'LABEL_POS': 'no label', 'AREA': 'no label', 'NAME': 'inline label', });
lyr_Beremend_CenterPivot_tagok_buffer_5.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'TAGOK': 'no label', 'BUFF_DIST': 'no label', 'ORIG_FID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Beremend_CenterPivot_tagok_6.set('fieldLabels', {'Id': 'no label', 'TAGOK': 'no label', });
lyr_Beremend_ABegyenes_7.set('fieldLabels', {'Id': 'no label', });
lyr_Beremend_CenterPivot_labak_8.set('fieldLabels', {'ID': 'header label', 'Y': 'no label', 'X': 'no label', 'Z': 'no label', });
lyr_Beremend_CenterPivot_labak_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});