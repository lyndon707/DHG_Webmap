ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:28355").setExtent([493313.139181, 5201112.527236, 506842.816790, 5206355.653971]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Heritage_Walk_Sites_1 = new ol.format.GeoJSON();
var features_Heritage_Walk_Sites_1 = format_Heritage_Walk_Sites_1.readFeatures(json_Heritage_Walk_Sites_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28355'});
var jsonSource_Heritage_Walk_Sites_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Heritage_Walk_Sites_1.addFeatures(features_Heritage_Walk_Sites_1);
var lyr_Heritage_Walk_Sites_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Heritage_Walk_Sites_1, 
                style: style_Heritage_Walk_Sites_1,
                interactive: true,
                title: '<img src="styles/legend/Heritage_Walk_Sites_1.png" /> Heritage_Walk_Sites'
            });
var format_Dover_Streets_2 = new ol.format.GeoJSON();
var features_Dover_Streets_2 = format_Dover_Streets_2.readFeatures(json_Dover_Streets_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28355'});
var jsonSource_Dover_Streets_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dover_Streets_2.addFeatures(features_Dover_Streets_2);
var lyr_Dover_Streets_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dover_Streets_2, 
                style: style_Dover_Streets_2,
                interactive: true,
                title: '<img src="styles/legend/Dover_Streets_2.png" /> Dover_Streets'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Heritage_Walk_Sites_1.setVisible(true);lyr_Dover_Streets_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Heritage_Walk_Sites_1,lyr_Dover_Streets_2];
lyr_Heritage_Walk_Sites_1.set('fieldAliases', {'BUILD_ID': 'BUILD_ID', 'BUILD_TY': 'BUILD_TY', 'BUILD_NAME': 'BUILD_NAME', 'BLD_PUR': 'BLD_PUR', 'MEAN_HGT': 'MEAN_HGT', 'UFI': 'UFI', 'CREATED_ON': 'CREATED_ON', 'LIST_GUID': 'LIST_GUID', 'NOM_REG_NO': 'NOM_REG_NO', 'FEAT_REL': 'FEAT_REL', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', 'BOOKLET_NO': 'BOOKLET_NO', 'YEAR': 'YEAR', 'BKLT_TEXT': 'BKLT_TEXT', 'Desc': 'Desc', 'Pic_01': 'Pic_01', 'Pic_02': 'Pic_02', 'Pic_03': 'Pic_03', });
lyr_Dover_Streets_2.set('fieldAliases', {'id': 'id', 'Road_ID': 'Road_ID', 'Name': 'Name', 'Descrip': 'Descrip', });
lyr_Heritage_Walk_Sites_1.set('fieldImages', {'BUILD_ID': 'Hidden', 'BUILD_TY': 'Hidden', 'BUILD_NAME': 'TextEdit', 'BLD_PUR': 'Hidden', 'MEAN_HGT': 'Hidden', 'UFI': 'Hidden', 'CREATED_ON': 'Hidden', 'LIST_GUID': 'Hidden', 'NOM_REG_NO': 'Hidden', 'FEAT_REL': 'Hidden', 'SHAPE_AREA': 'Hidden', 'SHAPE_LEN': 'Hidden', 'BOOKLET_NO': 'Hidden', 'YEAR': 'TextEdit', 'BKLT_TEXT': 'Hidden', 'Desc': 'TextEdit', 'Pic_01': 'TextEdit', 'Pic_02': 'Hidden', 'Pic_03': 'Hidden', });
lyr_Dover_Streets_2.set('fieldImages', {'id': 'Hidden', 'Road_ID': 'Hidden', 'Name': 'TextEdit', 'Descrip': 'TextEdit', });
lyr_Heritage_Walk_Sites_1.set('fieldLabels', {'BUILD_NAME': 'no label', 'YEAR': 'no label', 'Desc': 'no label', 'Pic_01': 'no label', });
lyr_Dover_Streets_2.set('fieldLabels', {'Name': 'no label', 'Descrip': 'no label', });
lyr_Dover_Streets_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});