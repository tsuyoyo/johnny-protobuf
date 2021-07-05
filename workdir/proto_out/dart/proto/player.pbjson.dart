///
//  Generated code. Do not modify.
//  source: proto/player.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields,deprecated_member_use_from_same_package

import 'dart:core' as $core;
import 'dart:convert' as $convert;
import 'dart:typed_data' as $typed_data;
@$core.Deprecated('Use playerDescriptor instead')
const Player$json = const {
  '1': 'Player',
  '2': const [
    const {'1': 'id', '3': 1, '4': 1, '5': 9, '10': 'id'},
    const {'1': 'name', '3': 2, '4': 1, '5': 9, '10': 'name'},
    const {'1': 'icon', '3': 3, '4': 1, '5': 9, '10': 'icon'},
  ],
};

/// Descriptor for `Player`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List playerDescriptor = $convert.base64Decode('CgZQbGF5ZXISDgoCaWQYASABKAlSAmlkEhIKBG5hbWUYAiABKAlSBG5hbWUSEgoEaWNvbhgDIAEoCVIEaWNvbg==');
@$core.Deprecated('Use playerDetailDescriptor instead')
const PlayerDetail$json = const {
  '1': 'PlayerDetail',
  '2': const [
    const {'1': 'id', '3': 1, '4': 1, '5': 9, '10': 'id'},
    const {'1': 'name', '3': 2, '4': 1, '5': 9, '10': 'name'},
    const {'1': 'icon', '3': 3, '4': 1, '5': 9, '10': 'icon'},
    const {'1': 'introduction', '3': 4, '4': 1, '5': 9, '10': 'introduction'},
    const {'1': 'activeAreas', '3': 5, '4': 3, '5': 11, '6': '.pj.sakuchin.percussion.proto.City', '10': 'activeAreas'},
    const {'1': 'instruments', '3': 6, '4': 3, '5': 11, '6': '.pj.sakuchin.percussion.proto.Instrument', '10': 'instruments'},
    const {'1': 'followers', '3': 7, '4': 3, '5': 11, '6': '.pj.sakuchin.percussion.proto.Player', '10': 'followers'},
    const {'1': 'followees', '3': 8, '4': 3, '5': 11, '6': '.pj.sakuchin.percussion.proto.Player', '10': 'followees'},
  ],
};

/// Descriptor for `PlayerDetail`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List playerDetailDescriptor = $convert.base64Decode('CgxQbGF5ZXJEZXRhaWwSDgoCaWQYASABKAlSAmlkEhIKBG5hbWUYAiABKAlSBG5hbWUSEgoEaWNvbhgDIAEoCVIEaWNvbhIiCgxpbnRyb2R1Y3Rpb24YBCABKAlSDGludHJvZHVjdGlvbhJECgthY3RpdmVBcmVhcxgFIAMoCzIiLnBqLnNha3VjaGluLnBlcmN1c3Npb24ucHJvdG8uQ2l0eVILYWN0aXZlQXJlYXMSSgoLaW5zdHJ1bWVudHMYBiADKAsyKC5wai5zYWt1Y2hpbi5wZXJjdXNzaW9uLnByb3RvLkluc3RydW1lbnRSC2luc3RydW1lbnRzEkIKCWZvbGxvd2VycxgHIAMoCzIkLnBqLnNha3VjaGluLnBlcmN1c3Npb24ucHJvdG8uUGxheWVyUglmb2xsb3dlcnMSQgoJZm9sbG93ZWVzGAggAygLMiQucGouc2FrdWNoaW4ucGVyY3Vzc2lvbi5wcm90by5QbGF5ZXJSCWZvbGxvd2Vlcw==');
