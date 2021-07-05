///
//  Generated code. Do not modify.
//  source: proto/area.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields,deprecated_member_use_from_same_package

import 'dart:core' as $core;
import 'dart:convert' as $convert;
import 'dart:typed_data' as $typed_data;
@$core.Deprecated('Use prefectureDescriptor instead')
const Prefecture$json = const {
  '1': 'Prefecture',
  '2': const [
    const {'1': 'UNKNOWN', '2': 0},
    const {'1': 'HOKKAIDO', '2': 1},
    const {'1': 'AOMORI', '2': 2},
    const {'1': 'IWATE', '2': 3},
    const {'1': 'MIYAGI', '2': 4},
    const {'1': 'AKITA', '2': 5},
    const {'1': 'YAMAGATA', '2': 6},
    const {'1': 'FUKUSHIMA', '2': 7},
    const {'1': 'IBARAKI', '2': 8},
    const {'1': 'TOCHIGI', '2': 9},
    const {'1': 'GUNNMA', '2': 10},
    const {'1': 'SAITAMA', '2': 11},
    const {'1': 'CHIBA', '2': 12},
    const {'1': 'TOKYO', '2': 13},
    const {'1': 'KANAGAWA', '2': 14},
    const {'1': 'NIIGATA', '2': 15},
    const {'1': 'TOYAMA', '2': 16},
    const {'1': 'ISHIKAWA', '2': 17},
    const {'1': 'FUKUI', '2': 18},
    const {'1': 'YAMANASHI', '2': 19},
    const {'1': 'NAGANO', '2': 20},
    const {'1': 'GIFU', '2': 21},
    const {'1': 'SHIZUOKA', '2': 22},
    const {'1': 'AICHI', '2': 23},
    const {'1': 'MIE', '2': 24},
    const {'1': 'SHIGA', '2': 25},
    const {'1': 'KYOTO', '2': 26},
    const {'1': 'OSAKA', '2': 27},
    const {'1': 'HYOGO', '2': 28},
    const {'1': 'NARA', '2': 29},
    const {'1': 'WAKAYAMA', '2': 30},
    const {'1': 'TOTTORI', '2': 31},
    const {'1': 'SHIMANE', '2': 32},
    const {'1': 'OKAYAMA', '2': 33},
    const {'1': 'HIROSHIMA', '2': 34},
    const {'1': 'YAMAGUCHI', '2': 35},
    const {'1': 'TOKUSHIMA', '2': 36},
    const {'1': 'KAGAWA', '2': 37},
    const {'1': 'EHIME', '2': 38},
    const {'1': 'KOCHI', '2': 39},
    const {'1': 'FUKUOKA', '2': 40},
    const {'1': 'SAGA', '2': 41},
    const {'1': 'NAGASAKI', '2': 42},
    const {'1': 'KUMAMOTO', '2': 43},
    const {'1': 'OITA', '2': 44},
    const {'1': 'MIYAZAKI', '2': 45},
    const {'1': 'KAGOSHIMA', '2': 46},
    const {'1': 'OKINAWA', '2': 47},
  ],
};

/// Descriptor for `Prefecture`. Decode as a `google.protobuf.EnumDescriptorProto`.
final $typed_data.Uint8List prefectureDescriptor = $convert.base64Decode('CgpQcmVmZWN0dXJlEgsKB1VOS05PV04QABIMCghIT0tLQUlETxABEgoKBkFPTU9SSRACEgkKBUlXQVRFEAMSCgoGTUlZQUdJEAQSCQoFQUtJVEEQBRIMCghZQU1BR0FUQRAGEg0KCUZVS1VTSElNQRAHEgsKB0lCQVJBS0kQCBILCgdUT0NISUdJEAkSCgoGR1VOTk1BEAoSCwoHU0FJVEFNQRALEgkKBUNISUJBEAwSCQoFVE9LWU8QDRIMCghLQU5BR0FXQRAOEgsKB05JSUdBVEEQDxIKCgZUT1lBTUEQEBIMCghJU0hJS0FXQRAREgkKBUZVS1VJEBISDQoJWUFNQU5BU0hJEBMSCgoGTkFHQU5PEBQSCAoER0lGVRAVEgwKCFNISVpVT0tBEBYSCQoFQUlDSEkQFxIHCgNNSUUQGBIJCgVTSElHQRAZEgkKBUtZT1RPEBoSCQoFT1NBS0EQGxIJCgVIWU9HTxAcEggKBE5BUkEQHRIMCghXQUtBWUFNQRAeEgsKB1RPVFRPUkkQHxILCgdTSElNQU5FECASCwoHT0tBWUFNQRAhEg0KCUhJUk9TSElNQRAiEg0KCVlBTUFHVUNISRAjEg0KCVRPS1VTSElNQRAkEgoKBktBR0FXQRAlEgkKBUVISU1FECYSCQoFS09DSEkQJxILCgdGVUtVT0tBECgSCAoEU0FHQRApEgwKCE5BR0FTQUtJECoSDAoIS1VNQU1PVE8QKxIICgRPSVRBECwSDAoITUlZQVpBS0kQLRINCglLQUdPU0hJTUEQLhILCgdPS0lOQVdBEC8=');
@$core.Deprecated('Use cityDescriptor instead')
const City$json = const {
  '1': 'City',
  '2': const [
    const {'1': 'id', '3': 1, '4': 1, '5': 9, '10': 'id'},
    const {'1': 'name', '3': 2, '4': 1, '5': 9, '10': 'name'},
    const {'1': 'prefecture', '3': 3, '4': 1, '5': 14, '6': '.pj.sakuchin.percussion.proto.Prefecture', '10': 'prefecture'},
  ],
};

/// Descriptor for `City`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List cityDescriptor = $convert.base64Decode('CgRDaXR5Eg4KAmlkGAEgASgJUgJpZBISCgRuYW1lGAIgASgJUgRuYW1lEkgKCnByZWZlY3R1cmUYAyABKA4yKC5wai5zYWt1Y2hpbi5wZXJjdXNzaW9uLnByb3RvLlByZWZlY3R1cmVSCnByZWZlY3R1cmU=');
