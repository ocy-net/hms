var wms_layers = [];

var format_p_kankyo_0 = new ol.format.GeoJSON();
var features_p_kankyo_0 = format_p_kankyo_0.readFeatures(json_p_kankyo_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_p_kankyo_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_p_kankyo_0.addFeatures(features_p_kankyo_0);
var lyr_p_kankyo_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_p_kankyo_0, 
                style: style_p_kankyo_0,
                popuplayertitle: 'p_kankyo',
                interactive: true,
    title: 'p_kankyo<br />\
    <img src="styles/legend/p_kankyo_0_0.png" /> 1<br />\
    <img src="styles/legend/p_kankyo_0_1.png" /> 2<br />\
    <img src="styles/legend/p_kankyo_0_2.png" /> 3<br />\
    <img src="styles/legend/p_kankyo_0_3.png" /> <br />' });
var format_p_jinko_1 = new ol.format.GeoJSON();
var features_p_jinko_1 = format_p_jinko_1.readFeatures(json_p_jinko_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_p_jinko_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_p_jinko_1.addFeatures(features_p_jinko_1);
var lyr_p_jinko_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_p_jinko_1, 
                style: style_p_jinko_1,
                popuplayertitle: 'p_jinko',
                interactive: true,
                title: '<img src="styles/legend/p_jinko_1.png" /> p_jinko'
            });
var format_p_toritsukekan_2 = new ol.format.GeoJSON();
var features_p_toritsukekan_2 = format_p_toritsukekan_2.readFeatures(json_p_toritsukekan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_p_toritsukekan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_p_toritsukekan_2.addFeatures(features_p_toritsukekan_2);
var lyr_p_toritsukekan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_p_toritsukekan_2, 
                style: style_p_toritsukekan_2,
                popuplayertitle: 'p_toritsukekan',
                interactive: true,
                title: '<img src="styles/legend/p_toritsukekan_2.png" /> p_toritsukekan'
            });
var format_p_shorijoryunyuten_3 = new ol.format.GeoJSON();
var features_p_shorijoryunyuten_3 = format_p_shorijoryunyuten_3.readFeatures(json_p_shorijoryunyuten_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_p_shorijoryunyuten_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_p_shorijoryunyuten_3.addFeatures(features_p_shorijoryunyuten_3);
var lyr_p_shorijoryunyuten_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_p_shorijoryunyuten_3, 
                style: style_p_shorijoryunyuten_3,
                popuplayertitle: 'p_shorijoryunyuten',
                interactive: true,
                title: '<img src="styles/legend/p_shorijoryunyuten_3.png" /> p_shorijoryunyuten'
            });
var format_m_gaishu_4 = new ol.format.GeoJSON();
var features_m_gaishu_4 = format_m_gaishu_4.readFeatures(json_m_gaishu_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_m_gaishu_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_m_gaishu_4.addFeatures(features_m_gaishu_4);
var lyr_m_gaishu_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_m_gaishu_4, 
                style: style_m_gaishu_4,
                popuplayertitle: 'm_gaishu',
                interactive: true,
                title: '<img src="styles/legend/m_gaishu_4.png" /> m_gaishu'
            });
var format_m_suiiki_5 = new ol.format.GeoJSON();
var features_m_suiiki_5 = format_m_suiiki_5.readFeatures(json_m_suiiki_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_m_suiiki_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_m_suiiki_5.addFeatures(features_m_suiiki_5);
var lyr_m_suiiki_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_m_suiiki_5, 
                style: style_m_suiiki_5,
                popuplayertitle: 'm_suiiki',
                interactive: true,
                title: '<img src="styles/legend/m_suiiki_5.png" /> m_suiiki'
            });
var format_m_suigaisen_6 = new ol.format.GeoJSON();
var features_m_suigaisen_6 = format_m_suigaisen_6.readFeatures(json_m_suigaisen_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_m_suigaisen_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_m_suigaisen_6.addFeatures(features_m_suigaisen_6);
var lyr_m_suigaisen_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_m_suigaisen_6, 
                style: style_m_suigaisen_6,
                popuplayertitle: 'm_suigaisen',
                interactive: true,
                title: '<img src="styles/legend/m_suigaisen_6.png" /> m_suigaisen'
            });
var format_m_kaigansen_7 = new ol.format.GeoJSON();
var features_m_kaigansen_7 = format_m_kaigansen_7.readFeatures(json_m_kaigansen_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_m_kaigansen_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_m_kaigansen_7.addFeatures(features_m_kaigansen_7);
var lyr_m_kaigansen_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_m_kaigansen_7, 
                style: style_m_kaigansen_7,
                popuplayertitle: 'm_kaigansen',
                interactive: true,
                title: '<img src="styles/legend/m_kaigansen_7.png" /> m_kaigansen'
            });
var format_m_kidochushinsen_8 = new ol.format.GeoJSON();
var features_m_kidochushinsen_8 = format_m_kidochushinsen_8.readFeatures(json_m_kidochushinsen_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_m_kidochushinsen_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_m_kidochushinsen_8.addFeatures(features_m_kidochushinsen_8);
var lyr_m_kidochushinsen_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_m_kidochushinsen_8, 
                style: style_m_kidochushinsen_8,
                popuplayertitle: 'm_kidochushinsen',
                interactive: true,
                title: '<img src="styles/legend/m_kidochushinsen_8.png" /> m_kidochushinsen'
            });
var format_m_dorokoseisen_9 = new ol.format.GeoJSON();
var features_m_dorokoseisen_9 = format_m_dorokoseisen_9.readFeatures(json_m_dorokoseisen_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_m_dorokoseisen_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_m_dorokoseisen_9.addFeatures(features_m_dorokoseisen_9);
var lyr_m_dorokoseisen_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_m_dorokoseisen_9, 
                style: style_m_dorokoseisen_9,
                popuplayertitle: 'm_dorokoseisen',
                interactive: true,
                title: '<img src="styles/legend/m_dorokoseisen_9.png" /> m_dorokoseisen'
            });
var format_m_dorosen_10 = new ol.format.GeoJSON();
var features_m_dorosen_10 = format_m_dorosen_10.readFeatures(json_m_dorosen_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_m_dorosen_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_m_dorosen_10.addFeatures(features_m_dorosen_10);
var lyr_m_dorosen_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_m_dorosen_10, 
                style: style_m_dorosen_10,
                popuplayertitle: 'm_dorosen',
                interactive: true,
                title: '<img src="styles/legend/m_dorosen_10.png" /> m_dorosen'
            });

lyr_p_kankyo_0.setVisible(true);lyr_p_jinko_1.setVisible(true);lyr_p_toritsukekan_2.setVisible(true);lyr_p_shorijoryunyuten_3.setVisible(true);lyr_m_gaishu_4.setVisible(true);lyr_m_suiiki_5.setVisible(true);lyr_m_suigaisen_6.setVisible(true);lyr_m_kaigansen_7.setVisible(true);lyr_m_kidochushinsen_8.setVisible(true);lyr_m_dorokoseisen_9.setVisible(true);lyr_m_dorosen_10.setVisible(true);
var layersList = [lyr_p_kankyo_0,lyr_p_jinko_1,lyr_p_toritsukekan_2,lyr_p_shorijoryunyuten_3,lyr_m_gaishu_4,lyr_m_suiiki_5,lyr_m_suigaisen_6,lyr_m_kaigansen_7,lyr_m_kidochushinsen_8,lyr_m_dorokoseisen_9,lyr_m_dorosen_10];
lyr_p_kankyo_0.set('fieldAliases', {'fid': 'fid', 'ラベル用': 'ラベル用', '事業区分': '事業区分', '系統処理区': '系統処理区', '処理区': '処理区', '処理分区': '処理分区', '系統名称': '系統名称', '路線番号': '路線番号', '路線枝番': '路線枝番', '路線孫番': '路線孫番', '管渠番号': '管渠番号', '管渠枝番': '管渠枝番', '管渠孫番': '管渠孫番', '管渠孫々番': '管渠孫々番', '予備番号': '予備番号', '雨汚種別': '雨汚種別', '上流人孔規': '上流人孔規', '上流_0': '上流_0', '上流人孔番': '上流人孔番', '上流管底高': '上流管底高', '上流土被り': '上流土被り', '下流人孔規': '下流人孔規', '下流_0': '下流_0', '下流人孔番': '下流人孔番', '下流管底高': '下流管底高', '下流土被り': '下流土被り', '管渠材質': '管渠材質', '略称': '略称', '管径': '管径', '区間距離': '区間距離', '区間距離補': '区間距離補', '区間距離単': '区間距離単', '管渠延長': '管渠延長', '勾配': '勾配', '管形状': '管形状', '流下方式': '流下方式', '副管径': '副管径', '副管落差': '副管落差', '副管材質': '副管材質', '工法': '工法', '年号': '年号', '工事年': '工事年', '工事名': '工事名', '工事件名': '工事件名', '工事期間（': '工事期間（', '工事_0': '工事_0', '供用年月日': '供用年月日', '施工区分': '施工区分', '施工年月日': '施工年月日', '竣工年月日': '竣工年月日', '施工業者名': '施工業者名', '所在地': '所在地', '代表者': '代表者', '電話番号': '電話番号', '告示番号': '告示番号', '地域名称': '地域名称', '備考': '備考', '対図番号': '対図番号', '調整年度': '調整年度', '事業区分コ': '事業区分コ', '系統_0': '系統_0', '処理区コー': '処理区コー', '処理分区コ': '処理分区コ', '系統名称コ': '系統名称コ', '整備時事業': '整備時事業', '整備_0': '整備_0', '整備時系統': '整備時系統', '整備_1': '整備_1', 'システム管': 'システム管', '上流システ': '上流システ', '下流システ': '下流システ', '接続システ': '接続システ', '接続施設フ': '接続施設フ', '調査年度': '調査年度', '調査方法': '調査方法', '実施状況': '実施状況', 'R7追加調査': 'R7追加調査', '新路線番号': '新路線番号', '新系統名称': '新系統名称', '選択': '選択', '点検頻度': '点検頻度', 'Block': 'Block', 'hms_管口テレビカメラ点検調査費(円/箇所)': 'hms_管口テレビカメラ点検調査費(円/箇所)', 'hms_マンホール目視調査費(円/箇所)': 'hms_マンホール目視調査費(円/箇所)', 'hms_テレビカメラ調査費(円/m)': 'hms_テレビカメラ調査費(円/m)', 'hms_点検調査費(円/m)': 'hms_点検調査費(円/m)', 'hms_設計委託費(円/m)': 'hms_設計委託費(円/m)', });
lyr_p_jinko_1.set('fieldAliases', {'fid': 'fid', 'ラベル用': 'ラベル用', '事業区分': '事業区分', '系統処理区': '系統処理区', '処理区': '処理区', '処理分区': '処理分区', '系統名称': '系統名称', '路線番号': '路線番号', '路線枝番': '路線枝番', '路線孫番': '路線孫番', '人孔番号': '人孔番号', '人孔枝番': '人孔枝番', '人孔孫番': '人孔孫番', '人孔孫々番': '人孔孫々番', '予備番号': '予備番号', '雨汚種別': '雨汚種別', '人孔名称': '人孔名称', '蓋タイプ': '蓋タイプ', '荷重区分': '荷重区分', '人孔径': '人孔径', '地盤高': '地盤高', '人孔深': '人孔深', '水準点': '水準点', '人孔設置箇': '人孔設置箇', '副管有無': '副管有無', '圧送機能': '圧送機能', 'ポンプ有無': 'ポンプ有無', '耐震対策': '耐震対策', '設置年月日': '設置年月日', '年号': '年号', '工事年': '工事年', '工事名': '工事名', '工事件名': '工事件名', '施工区分': '施工区分', '施工年月日': '施工年月日', '竣工年月日': '竣工年月日', '供用年月日': '供用年月日', '施工業者名': '施工業者名', '所在地': '所在地', '代表者': '代表者', '電話番号': '電話番号', '備考': '備考', '対図番号': '対図番号', '調整年度': '調整年度', 'ポンプ場名': 'ポンプ場名', '設置場所': '設置場所', 'ポンプ台数': 'ポンプ台数', 'ポンプ形式': 'ポンプ形式', 'ポンプ口径': 'ポンプ口径', 'ポンプ出力': 'ポンプ出力', 'メーカー': 'メーカー', '始動水位': '始動水位', '停止水位': '停止水位', '警報水位': '警報水位', '揚程': '揚程', 'ポンプ施工': 'ポンプ施工', 'ポンプ工期': 'ポンプ工期', 'ポンプ告示': 'ポンプ告示', 'ポンプ供用': 'ポンプ供用', 'ポンプ工事': 'ポンプ工事', 'ポン_0': 'ポン_0', '耐震施工年': '耐震施工年', '耐震工事名': '耐震工事名', '耐震施工業': '耐震施工業', '耐震工法コ': '耐震工法コ', '耐震工法': '耐震工法', '事業区分コ': '事業区分コ', '系統_0': '系統_0', '処理区コー': '処理区コー', '処理分区コ': '処理分区コ', '系統名称コ': '系統名称コ', '整備時事業': '整備時事業', '整備_0': '整備_0', '整備時系統': '整備時系統', '整備_1': '整備_1', 'システム人': 'システム人', '接続システ': '接続システ', '調査年度': '調査年度', '調査方法': '調査方法', '実施状況': '実施状況', 'R7追加調査': 'R7追加調査', });
lyr_p_toritsukekan_2.set('fieldAliases', {'fid': 'fid', '備考': '備考', '事業区分': '事業区分', '系統処理区': '系統処理区', '処理区': '処理区', '事業区分コ': '事業区分コ', '系統_0': '系統_0', '処理区コー': '処理区コー', '整備時事業': '整備時事業', '整備_0': '整備_0', '整備時系統': '整備時系統', '整備_1': '整備_1', '廃止等': '廃止等', 'key': 'key', });
lyr_p_shorijoryunyuten_3.set('fieldAliases', {'fid': 'fid', '番号': '番号', '処理施設名': '処理施設名', '地区名': '地区名', '処理施設所': '処理施設所', '事業区分': '事業区分', '系統処理区': '系統処理区', '処理区': '処理区', '計画人口': '計画人口', '計画戸数': '計画戸数', '計画汚水量': '計画汚水量', '計画_0': '計画_0', '計画区域': '計画区域', '供用年月日': '供用年月日', '処理形式': '処理形式', 'その他': 'その他', '事業区分コ': '事業区分コ', '系統_0': '系統_0', '処理区コー': '処理区コー', });
lyr_m_gaishu_4.set('fieldAliases', {'id': 'id', 'fid': 'fid', '登録日': '登録日', '削除日': '削除日', '整備完了日': '整備完了日', 'orgGILvl': 'orgGILvl', 'orgMDId': 'orgMDId', '表示区分': '表示区分', '種別': '種別', '名称': '名称', });
lyr_m_suiiki_5.set('fieldAliases', {'id': 'id', 'fid': 'fid', '登録日': '登録日', '削除日': '削除日', '整備完了日': '整備完了日', 'orgGILvl': 'orgGILvl', 'orgMDId': 'orgMDId', '表示区分': '表示区分', '種別': '種別', '名称': '名称', });
lyr_m_suigaisen_6.set('fieldAliases', {'id': 'id', 'fid': 'fid', '登録日': '登録日', '削除日': '削除日', '整備完了日': '整備完了日', 'orgGILvl': 'orgGILvl', 'orgMDId': 'orgMDId', '表示区分': '表示区分', '種別': '種別', '名称': '名称', });
lyr_m_kaigansen_7.set('fieldAliases', {'id': 'id', 'fid': 'fid', '登録日': '登録日', '削除日': '削除日', '整備完了日': '整備完了日', 'orgGILvl': 'orgGILvl', 'orgMDId': 'orgMDId', '表示区分': '表示区分', '種別': '種別', '名称': '名称', });
lyr_m_kidochushinsen_8.set('fieldAliases', {'id': 'id', 'fid': 'fid', '登録日': '登録日', '削除日': '削除日', '整備完了日': '整備完了日', 'orgGILvl': 'orgGILvl', 'orgMDId': 'orgMDId', '表示区分': '表示区分', '種別': '種別', '名称': '名称', });
lyr_m_dorokoseisen_9.set('fieldAliases', {'id': 'id', 'fid': 'fid', '登録日': '登録日', '削除日': '削除日', '整備完了日': '整備完了日', 'orgGILvl': 'orgGILvl', 'orgMDId': 'orgMDId', '表示区分': '表示区分', '種別': '種別', '管理主体': '管理主体', '名称': '名称', });
lyr_m_dorosen_10.set('fieldAliases', {'id': 'id', 'fid': 'fid', '登録日': '登録日', '削除日': '削除日', '整備完了日': '整備完了日', 'orgGILvl': 'orgGILvl', 'orgMDId': 'orgMDId', '表示区分': '表示区分', '種別': '種別', '名称': '名称', '管理主体': '管理主体', });
lyr_p_kankyo_0.set('fieldImages', {'fid': 'TextEdit', 'ラベル用': 'TextEdit', '事業区分': 'TextEdit', '系統処理区': 'TextEdit', '処理区': 'TextEdit', '処理分区': 'TextEdit', '系統名称': 'TextEdit', '路線番号': 'TextEdit', '路線枝番': 'TextEdit', '路線孫番': 'TextEdit', '管渠番号': 'TextEdit', '管渠枝番': 'TextEdit', '管渠孫番': 'TextEdit', '管渠孫々番': 'TextEdit', '予備番号': 'TextEdit', '雨汚種別': 'TextEdit', '上流人孔規': 'TextEdit', '上流_0': 'TextEdit', '上流人孔番': 'TextEdit', '上流管底高': 'TextEdit', '上流土被り': 'TextEdit', '下流人孔規': 'TextEdit', '下流_0': 'TextEdit', '下流人孔番': 'TextEdit', '下流管底高': 'TextEdit', '下流土被り': 'TextEdit', '管渠材質': 'TextEdit', '略称': 'TextEdit', '管径': 'TextEdit', '区間距離': 'TextEdit', '区間距離補': 'TextEdit', '区間距離単': 'TextEdit', '管渠延長': 'TextEdit', '勾配': 'TextEdit', '管形状': 'TextEdit', '流下方式': 'TextEdit', '副管径': 'TextEdit', '副管落差': 'TextEdit', '副管材質': 'TextEdit', '工法': 'TextEdit', '年号': 'TextEdit', '工事年': 'TextEdit', '工事名': 'TextEdit', '工事件名': 'TextEdit', '工事期間（': 'TextEdit', '工事_0': 'TextEdit', '供用年月日': 'TextEdit', '施工区分': 'TextEdit', '施工年月日': 'TextEdit', '竣工年月日': 'TextEdit', '施工業者名': 'TextEdit', '所在地': 'TextEdit', '代表者': 'TextEdit', '電話番号': 'TextEdit', '告示番号': 'TextEdit', '地域名称': 'TextEdit', '備考': 'TextEdit', '対図番号': 'TextEdit', '調整年度': 'TextEdit', '事業区分コ': 'TextEdit', '系統_0': 'TextEdit', '処理区コー': 'TextEdit', '処理分区コ': 'TextEdit', '系統名称コ': 'TextEdit', '整備時事業': 'TextEdit', '整備_0': 'TextEdit', '整備時系統': 'TextEdit', '整備_1': 'TextEdit', 'システム管': 'TextEdit', '上流システ': 'TextEdit', '下流システ': 'TextEdit', '接続システ': 'TextEdit', '接続施設フ': 'TextEdit', '調査年度': 'TextEdit', '調査方法': 'TextEdit', '実施状況': 'TextEdit', 'R7追加調査': 'TextEdit', '新路線番号': 'TextEdit', '新系統名称': 'TextEdit', '選択': 'TextEdit', '点検頻度': 'TextEdit', 'Block': 'TextEdit', 'hms_管口テレビカメラ点検調査費(円/箇所)': 'Range', 'hms_マンホール目視調査費(円/箇所)': 'TextEdit', 'hms_テレビカメラ調査費(円/m)': 'TextEdit', 'hms_点検調査費(円/m)': 'TextEdit', 'hms_設計委託費(円/m)': 'TextEdit', });
lyr_p_jinko_1.set('fieldImages', {'fid': 'TextEdit', 'ラベル用': 'TextEdit', '事業区分': 'TextEdit', '系統処理区': 'TextEdit', '処理区': 'TextEdit', '処理分区': 'TextEdit', '系統名称': 'TextEdit', '路線番号': 'TextEdit', '路線枝番': 'TextEdit', '路線孫番': 'TextEdit', '人孔番号': 'TextEdit', '人孔枝番': 'TextEdit', '人孔孫番': 'TextEdit', '人孔孫々番': 'TextEdit', '予備番号': 'TextEdit', '雨汚種別': 'TextEdit', '人孔名称': 'TextEdit', '蓋タイプ': 'TextEdit', '荷重区分': 'TextEdit', '人孔径': 'TextEdit', '地盤高': 'TextEdit', '人孔深': 'TextEdit', '水準点': 'TextEdit', '人孔設置箇': 'TextEdit', '副管有無': 'TextEdit', '圧送機能': 'TextEdit', 'ポンプ有無': 'TextEdit', '耐震対策': 'TextEdit', '設置年月日': 'TextEdit', '年号': 'TextEdit', '工事年': 'TextEdit', '工事名': 'TextEdit', '工事件名': 'TextEdit', '施工区分': 'TextEdit', '施工年月日': 'TextEdit', '竣工年月日': 'TextEdit', '供用年月日': 'TextEdit', '施工業者名': 'TextEdit', '所在地': 'TextEdit', '代表者': 'TextEdit', '電話番号': 'TextEdit', '備考': 'TextEdit', '対図番号': 'TextEdit', '調整年度': 'TextEdit', 'ポンプ場名': 'TextEdit', '設置場所': 'TextEdit', 'ポンプ台数': 'TextEdit', 'ポンプ形式': 'TextEdit', 'ポンプ口径': 'TextEdit', 'ポンプ出力': 'TextEdit', 'メーカー': 'TextEdit', '始動水位': 'TextEdit', '停止水位': 'TextEdit', '警報水位': 'TextEdit', '揚程': 'TextEdit', 'ポンプ施工': 'TextEdit', 'ポンプ工期': 'TextEdit', 'ポンプ告示': 'TextEdit', 'ポンプ供用': 'TextEdit', 'ポンプ工事': 'TextEdit', 'ポン_0': 'TextEdit', '耐震施工年': 'TextEdit', '耐震工事名': 'TextEdit', '耐震施工業': 'TextEdit', '耐震工法コ': 'TextEdit', '耐震工法': 'TextEdit', '事業区分コ': 'TextEdit', '系統_0': 'TextEdit', '処理区コー': 'TextEdit', '処理分区コ': 'TextEdit', '系統名称コ': 'TextEdit', '整備時事業': 'TextEdit', '整備_0': 'TextEdit', '整備時系統': 'TextEdit', '整備_1': 'TextEdit', 'システム人': 'TextEdit', '接続システ': 'TextEdit', '調査年度': 'TextEdit', '調査方法': 'TextEdit', '実施状況': 'TextEdit', 'R7追加調査': 'TextEdit', });
lyr_p_toritsukekan_2.set('fieldImages', {'fid': '', '備考': '', '事業区分': '', '系統処理区': '', '処理区': '', '事業区分コ': '', '系統_0': '', '処理区コー': '', '整備時事業': '', '整備_0': '', '整備時系統': '', '整備_1': '', '廃止等': '', 'key': '', });
lyr_p_shorijoryunyuten_3.set('fieldImages', {'fid': '', '番号': '', '処理施設名': '', '地区名': '', '処理施設所': '', '事業区分': '', '系統処理区': '', '処理区': '', '計画人口': '', '計画戸数': '', '計画汚水量': '', '計画_0': '', '計画区域': '', '供用年月日': '', '処理形式': '', 'その他': '', '事業区分コ': '', '系統_0': '', '処理区コー': '', });
lyr_m_gaishu_4.set('fieldImages', {'id': 'TextEdit', 'fid': 'TextEdit', '登録日': 'Range', '削除日': 'Range', '整備完了日': 'TextEdit', 'orgGILvl': 'TextEdit', 'orgMDId': 'TextEdit', '表示区分': 'TextEdit', '種別': 'TextEdit', '名称': 'TextEdit', });
lyr_m_suiiki_5.set('fieldImages', {'id': 'TextEdit', 'fid': 'TextEdit', '登録日': 'Range', '削除日': 'Range', '整備完了日': 'TextEdit', 'orgGILvl': 'TextEdit', 'orgMDId': 'TextEdit', '表示区分': 'TextEdit', '種別': 'TextEdit', '名称': 'TextEdit', });
lyr_m_suigaisen_6.set('fieldImages', {'id': '', 'fid': '', '登録日': '', '削除日': '', '整備完了日': '', 'orgGILvl': '', 'orgMDId': '', '表示区分': '', '種別': '', '名称': '', });
lyr_m_kaigansen_7.set('fieldImages', {'id': '', 'fid': '', '登録日': '', '削除日': '', '整備完了日': '', 'orgGILvl': '', 'orgMDId': '', '表示区分': '', '種別': '', '名称': '', });
lyr_m_kidochushinsen_8.set('fieldImages', {'id': '', 'fid': '', '登録日': '', '削除日': '', '整備完了日': '', 'orgGILvl': '', 'orgMDId': '', '表示区分': '', '種別': '', '名称': '', });
lyr_m_dorokoseisen_9.set('fieldImages', {'id': '', 'fid': '', '登録日': '', '削除日': '', '整備完了日': '', 'orgGILvl': '', 'orgMDId': '', '表示区分': '', '種別': '', '管理主体': '', '名称': '', });
lyr_m_dorosen_10.set('fieldImages', {'id': '', 'fid': '', '登録日': '', '削除日': '', '整備完了日': '', 'orgGILvl': '', 'orgMDId': '', '表示区分': '', '種別': '', '名称': '', '管理主体': '', });
lyr_p_kankyo_0.set('fieldLabels', {'fid': 'no label', 'ラベル用': 'no label', '事業区分': 'no label', '系統処理区': 'no label', '処理区': 'no label', '処理分区': 'no label', '系統名称': 'no label', '路線番号': 'no label', '路線枝番': 'no label', '路線孫番': 'no label', '管渠番号': 'no label', '管渠枝番': 'no label', '管渠孫番': 'no label', '管渠孫々番': 'no label', '予備番号': 'no label', '雨汚種別': 'no label', '上流人孔規': 'no label', '上流_0': 'no label', '上流人孔番': 'no label', '上流管底高': 'no label', '上流土被り': 'no label', '下流人孔規': 'no label', '下流_0': 'no label', '下流人孔番': 'no label', '下流管底高': 'no label', '下流土被り': 'no label', '管渠材質': 'no label', '略称': 'no label', '管径': 'no label', '区間距離': 'no label', '区間距離補': 'no label', '区間距離単': 'no label', '管渠延長': 'no label', '勾配': 'no label', '管形状': 'no label', '流下方式': 'no label', '副管径': 'no label', '副管落差': 'no label', '副管材質': 'no label', '工法': 'no label', '年号': 'no label', '工事年': 'no label', '工事名': 'no label', '工事件名': 'no label', '工事期間（': 'no label', '工事_0': 'no label', '供用年月日': 'no label', '施工区分': 'no label', '施工年月日': 'no label', '竣工年月日': 'no label', '施工業者名': 'no label', '所在地': 'no label', '代表者': 'no label', '電話番号': 'no label', '告示番号': 'no label', '地域名称': 'no label', '備考': 'no label', '対図番号': 'no label', '調整年度': 'no label', '事業区分コ': 'no label', '系統_0': 'no label', '処理区コー': 'no label', '処理分区コ': 'no label', '系統名称コ': 'no label', '整備時事業': 'no label', '整備_0': 'no label', '整備時系統': 'no label', '整備_1': 'no label', 'システム管': 'no label', '上流システ': 'no label', '下流システ': 'no label', '接続システ': 'no label', '接続施設フ': 'no label', '調査年度': 'no label', '調査方法': 'no label', '実施状況': 'no label', 'R7追加調査': 'no label', '新路線番号': 'no label', '新系統名称': 'no label', '選択': 'no label', '点検頻度': 'inline label - always visible', 'Block': 'inline label - always visible', 'hms_管口テレビカメラ点検調査費(円/箇所)': 'inline label - always visible', 'hms_マンホール目視調査費(円/箇所)': 'inline label - always visible', 'hms_テレビカメラ調査費(円/m)': 'inline label - always visible', 'hms_点検調査費(円/m)': 'inline label - always visible', 'hms_設計委託費(円/m)': 'inline label - always visible', });
lyr_p_jinko_1.set('fieldLabels', {'fid': 'no label', 'ラベル用': 'no label', '事業区分': 'no label', '系統処理区': 'no label', '処理区': 'no label', '処理分区': 'no label', '系統名称': 'no label', '路線番号': 'no label', '路線枝番': 'no label', '路線孫番': 'no label', '人孔番号': 'no label', '人孔枝番': 'no label', '人孔孫番': 'no label', '人孔孫々番': 'no label', '予備番号': 'no label', '雨汚種別': 'no label', '人孔名称': 'no label', '蓋タイプ': 'no label', '荷重区分': 'no label', '人孔径': 'no label', '地盤高': 'no label', '人孔深': 'no label', '水準点': 'no label', '人孔設置箇': 'no label', '副管有無': 'no label', '圧送機能': 'no label', 'ポンプ有無': 'no label', '耐震対策': 'no label', '設置年月日': 'no label', '年号': 'no label', '工事年': 'no label', '工事名': 'no label', '工事件名': 'no label', '施工区分': 'no label', '施工年月日': 'no label', '竣工年月日': 'no label', '供用年月日': 'no label', '施工業者名': 'no label', '所在地': 'no label', '代表者': 'no label', '電話番号': 'no label', '備考': 'no label', '対図番号': 'no label', '調整年度': 'no label', 'ポンプ場名': 'no label', '設置場所': 'no label', 'ポンプ台数': 'no label', 'ポンプ形式': 'no label', 'ポンプ口径': 'no label', 'ポンプ出力': 'no label', 'メーカー': 'no label', '始動水位': 'no label', '停止水位': 'no label', '警報水位': 'no label', '揚程': 'no label', 'ポンプ施工': 'no label', 'ポンプ工期': 'no label', 'ポンプ告示': 'no label', 'ポンプ供用': 'no label', 'ポンプ工事': 'no label', 'ポン_0': 'no label', '耐震施工年': 'no label', '耐震工事名': 'no label', '耐震施工業': 'no label', '耐震工法コ': 'no label', '耐震工法': 'no label', '事業区分コ': 'no label', '系統_0': 'no label', '処理区コー': 'no label', '処理分区コ': 'no label', '系統名称コ': 'no label', '整備時事業': 'no label', '整備_0': 'no label', '整備時系統': 'no label', '整備_1': 'no label', 'システム人': 'no label', '接続システ': 'no label', '調査年度': 'no label', '調査方法': 'no label', '実施状況': 'no label', 'R7追加調査': 'no label', });
lyr_p_toritsukekan_2.set('fieldLabels', {'fid': 'no label', '備考': 'no label', '事業区分': 'no label', '系統処理区': 'no label', '処理区': 'no label', '事業区分コ': 'no label', '系統_0': 'no label', '処理区コー': 'no label', '整備時事業': 'no label', '整備_0': 'no label', '整備時系統': 'no label', '整備_1': 'no label', '廃止等': 'no label', 'key': 'no label', });
lyr_p_shorijoryunyuten_3.set('fieldLabels', {'fid': 'no label', '番号': 'no label', '処理施設名': 'no label', '地区名': 'no label', '処理施設所': 'no label', '事業区分': 'no label', '系統処理区': 'no label', '処理区': 'no label', '計画人口': 'no label', '計画戸数': 'no label', '計画汚水量': 'no label', '計画_0': 'no label', '計画区域': 'no label', '供用年月日': 'no label', '処理形式': 'no label', 'その他': 'no label', '事業区分コ': 'no label', '系統_0': 'no label', '処理区コー': 'no label', });
lyr_m_gaishu_4.set('fieldLabels', {'id': 'no label', 'fid': 'no label', '登録日': 'no label', '削除日': 'no label', '整備完了日': 'no label', 'orgGILvl': 'no label', 'orgMDId': 'no label', '表示区分': 'no label', '種別': 'no label', '名称': 'no label', });
lyr_m_suiiki_5.set('fieldLabels', {'id': 'no label', 'fid': 'no label', '登録日': 'no label', '削除日': 'no label', '整備完了日': 'no label', 'orgGILvl': 'no label', 'orgMDId': 'no label', '表示区分': 'no label', '種別': 'no label', '名称': 'no label', });
lyr_m_suigaisen_6.set('fieldLabels', {'id': 'no label', 'fid': 'no label', '登録日': 'no label', '削除日': 'no label', '整備完了日': 'no label', 'orgGILvl': 'no label', 'orgMDId': 'no label', '表示区分': 'no label', '種別': 'no label', '名称': 'no label', });
lyr_m_kaigansen_7.set('fieldLabels', {'id': 'no label', 'fid': 'no label', '登録日': 'no label', '削除日': 'no label', '整備完了日': 'no label', 'orgGILvl': 'no label', 'orgMDId': 'no label', '表示区分': 'no label', '種別': 'no label', '名称': 'no label', });
lyr_m_kidochushinsen_8.set('fieldLabels', {'id': 'no label', 'fid': 'no label', '登録日': 'no label', '削除日': 'no label', '整備完了日': 'no label', 'orgGILvl': 'no label', 'orgMDId': 'no label', '表示区分': 'no label', '種別': 'no label', '名称': 'no label', });
lyr_m_dorokoseisen_9.set('fieldLabels', {'id': 'no label', 'fid': 'no label', '登録日': 'no label', '削除日': 'no label', '整備完了日': 'no label', 'orgGILvl': 'no label', 'orgMDId': 'no label', '表示区分': 'no label', '種別': 'no label', '管理主体': 'no label', '名称': 'no label', });
lyr_m_dorosen_10.set('fieldLabels', {'id': 'no label', 'fid': 'no label', '登録日': 'no label', '削除日': 'no label', '整備完了日': 'no label', 'orgGILvl': 'no label', 'orgMDId': 'no label', '表示区分': 'no label', '種別': 'no label', '名称': 'no label', '管理主体': 'no label', });
lyr_m_dorosen_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});