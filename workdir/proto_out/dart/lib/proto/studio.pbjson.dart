///
//  Generated code. Do not modify.
//  source: proto/studio.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields,deprecated_member_use_from_same_package

import 'dart:core' as $core;
import 'dart:convert' as $convert;
import 'dart:typed_data' as $typed_data;
@$core.Deprecated('Use studioDescriptor instead')
const Studio$json = const {
  '1': 'Studio',
  '2': const [
    const {'1': 'id', '3': 1, '4': 1, '5': 5, '10': 'id'},
    const {'1': 'name', '3': 2, '4': 1, '5': 9, '10': 'name'},
    const {'1': 'url', '3': 3, '4': 1, '5': 9, '10': 'url'},
    const {'1': 'city', '3': 4, '4': 1, '5': 11, '6': '.pj.sakuchin.percussion.proto.City', '10': 'city'},
    const {'1': 'authorPlayerId', '3': 5, '4': 1, '5': 9, '10': 'authorPlayerId'},
  ],
};

/// Descriptor for `Studio`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List studioDescriptor = $convert.base64Decode('CgZTdHVkaW8SDgoCaWQYASABKAVSAmlkEhIKBG5hbWUYAiABKAlSBG5hbWUSEAoDdXJsGAMgASgJUgN1cmwSNgoEY2l0eRgEIAEoCzIiLnBqLnNha3VjaGluLnBlcmN1c3Npb24ucHJvdG8uQ2l0eVIEY2l0eRImCg5hdXRob3JQbGF5ZXJJZBgFIAEoCVIOYXV0aG9yUGxheWVySWQ=');
@$core.Deprecated('Use getStudioResponseDescriptor instead')
const GetStudioResponse$json = const {
  '1': 'GetStudioResponse',
  '2': const [
    const {'1': 'studios', '3': 1, '4': 3, '5': 11, '6': '.pj.sakuchin.percussion.proto.Studio', '10': 'studios'},
  ],
};

/// Descriptor for `GetStudioResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List getStudioResponseDescriptor = $convert.base64Decode('ChFHZXRTdHVkaW9SZXNwb25zZRI+CgdzdHVkaW9zGAEgAygLMiQucGouc2FrdWNoaW4ucGVyY3Vzc2lvbi5wcm90by5TdHVkaW9SB3N0dWRpb3M=');
@$core.Deprecated('Use postStudioRequestDescriptor instead')
const PostStudioRequest$json = const {
  '1': 'PostStudioRequest',
  '2': const [
    const {'1': 'name', '3': 1, '4': 1, '5': 9, '10': 'name'},
    const {'1': 'url', '3': 2, '4': 1, '5': 9, '10': 'url'},
    const {'1': 'cityId', '3': 3, '4': 1, '5': 9, '10': 'cityId'},
    const {'1': 'authorPlayerId', '3': 4, '4': 1, '5': 9, '10': 'authorPlayerId'},
  ],
};

/// Descriptor for `PostStudioRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List postStudioRequestDescriptor = $convert.base64Decode('ChFQb3N0U3R1ZGlvUmVxdWVzdBISCgRuYW1lGAEgASgJUgRuYW1lEhAKA3VybBgCIAEoCVIDdXJsEhYKBmNpdHlJZBgDIAEoCVIGY2l0eUlkEiYKDmF1dGhvclBsYXllcklkGAQgASgJUg5hdXRob3JQbGF5ZXJJZA==');
@$core.Deprecated('Use putStudioRequestDescriptor instead')
const PutStudioRequest$json = const {
  '1': 'PutStudioRequest',
  '2': const [
    const {'1': 'studio', '3': 1, '4': 1, '5': 11, '6': '.pj.sakuchin.percussion.proto.Studio', '10': 'studio'},
  ],
};

/// Descriptor for `PutStudioRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List putStudioRequestDescriptor = $convert.base64Decode('ChBQdXRTdHVkaW9SZXF1ZXN0EjwKBnN0dWRpbxgBIAEoCzIkLnBqLnNha3VjaGluLnBlcmN1c3Npb24ucHJvdG8uU3R1ZGlvUgZzdHVkaW8=');
@$core.Deprecated('Use getStudioHistoryEditResponseDescriptor instead')
const GetStudioHistoryEditResponse$json = const {
  '1': 'GetStudioHistoryEditResponse',
  '2': const [
    const {'1': 'history', '3': 1, '4': 3, '5': 11, '6': '.pj.sakuchin.percussion.proto.EditHistory', '10': 'history'},
  ],
};

/// Descriptor for `GetStudioHistoryEditResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List getStudioHistoryEditResponseDescriptor = $convert.base64Decode('ChxHZXRTdHVkaW9IaXN0b3J5RWRpdFJlc3BvbnNlEkMKB2hpc3RvcnkYASADKAsyKS5wai5zYWt1Y2hpbi5wZXJjdXNzaW9uLnByb3RvLkVkaXRIaXN0b3J5UgdoaXN0b3J5');
